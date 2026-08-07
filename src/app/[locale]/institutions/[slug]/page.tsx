import { notFound } from "next/navigation";
import type { Locale } from "@/domain/common";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CaseCard } from "@/features/cases/CaseCard";
import { PersonCard } from "@/features/people/PersonCard";
import { SourceCard } from "@/features/sources/SourceCard";
import { Link } from "@/i18n/navigation";
import { createBlackSheepRepository } from "@/repositories/repository-factory";

export default async function InstitutionPage({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const repo = createBlackSheepRepository();
  const institution = await repo.getInstitutionBySlug(slug);
  if (!institution) notFound();
  const context = await repo.getInstitutionContext(institution.id);
  if (!context) notFound();
  return (
    <div className="grid gap-8">
      <Breadcrumbs
        locale={locale}
        items={[
          { href: "/institutions", label: locale === "bn" ? "প্রতিষ্ঠান" : "Institutions" },
          { label: locale === "bn" ? institution.nameBn : institution.nameEn }
        ]}
      />
      <header className="rounded-md border bg-primary p-8 text-primary-foreground">
        <p className="text-sm uppercase text-primary-foreground/60">
          {institution.type.replaceAll("_", " ")}
        </p>
        <h1 className="mt-3 text-4xl font-semibold">
          {locale === "bn" ? institution.nameBn : institution.nameEn}
        </h1>
        <p className="mt-4 max-w-3xl text-primary-foreground/75">
          {locale === "bn" ? institution.summaryBn : institution.summaryEn}
        </p>
      </header>
      <Grid title={locale === "bn" ? "সম্পর্কিত ব্যক্তি" : "Related people"}>
        {context.people.map((person) => (
          <PersonCard key={person.id} person={person} locale={locale} />
        ))}
      </Grid>
      <Grid title={locale === "bn" ? "সম্পর্কের ধরন" : "Relationship types"}>
        {context.associations.map((association) => (
          <article key={association.id} className="rounded-md border bg-background p-5">
            <p className="font-medium">{association.relationshipType.replaceAll("_", " ")}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {locale === "bn" ? association.summaryBn : association.summaryEn}
            </p>
          </article>
        ))}
      </Grid>
      <Grid title={locale === "bn" ? "দাবি" : "Claims"}>
        {context.claims.map((claim) => (
          <article key={claim.id} className="rounded-md border bg-background p-5">
            <h3 className="font-semibold">{locale === "bn" ? claim.titleBn : claim.titleEn}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {claim.status.replaceAll("_", " ")}
            </p>
          </article>
        ))}
      </Grid>
      <Grid title={locale === "bn" ? "ঘটনা" : "Incidents"}>
        {context.incidents.map((incident) => (
          <Link
            key={incident.id}
            href={`/incidents/${incident.slug}`}
            locale={locale}
            className="rounded-md border bg-background p-5 hover:bg-muted"
          >
            {locale === "bn" ? incident.titleBn : incident.titleEn}
          </Link>
        ))}
      </Grid>
      <Grid title={locale === "bn" ? "মামলা" : "Cases"}>
        {context.cases.map((record) => (
          <CaseCard key={record.id} record={record} locale={locale} />
        ))}
      </Grid>
      <Grid title={locale === "bn" ? "উৎস" : "Sources"}>
        {context.sources.map((source) => (
          <SourceCard key={source.id} source={source} locale={locale} />
        ))}
      </Grid>
    </div>
  );
}

function Grid({ title, children }: { title: string; children: React.ReactNode }) {
  if (Array.isArray(children) && children.length === 0) return null;
  return (
    <section className="grid gap-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </section>
  );
}
