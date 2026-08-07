import { notFound } from "next/navigation";
import type { Locale } from "@/domain/common";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PersonCard } from "@/features/people/PersonCard";
import { SourceCard } from "@/features/sources/SourceCard";
import { Link } from "@/i18n/navigation";
import { createBlackSheepRepository } from "@/repositories/repository-factory";

export default async function DossierPage({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const repo = createBlackSheepRepository();
  const dossier = await repo.getDossierBySlug(slug);
  if (!dossier) notFound();
  const context = await repo.getDossierContext(dossier.id);
  if (!context) notFound();
  return (
    <div className="grid gap-8">
      <Breadcrumbs
        locale={locale}
        items={[
          { href: "/dossiers", label: locale === "bn" ? "ডসিয়ার" : "Dossiers" },
          { label: locale === "bn" ? dossier.titleBn : dossier.titleEn }
        ]}
      />
      <header className="rounded-md border bg-primary p-8 text-primary-foreground">
        <p className="text-sm uppercase text-primary-foreground/60">
          {locale === "bn" ? "থিমভিত্তিক সংগ্রহ" : "Thematic collection"}
        </p>
        <h1 className="mt-3 text-4xl font-semibold">
          {locale === "bn" ? dossier.titleBn : dossier.titleEn}
        </h1>
        <p className="mt-4 max-w-3xl text-primary-foreground/75">
          {locale === "bn" ? dossier.summaryBn : dossier.summaryEn}
        </p>
      </header>
      <Grid title={locale === "bn" ? "প্রধান ব্যক্তি" : "Key people"}>
        {context.people.map((person) => (
          <PersonCard key={person.id} person={person} locale={locale} />
        ))}
      </Grid>
      <Grid title={locale === "bn" ? "দাবি" : "Important claims"}>
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
      <Grid title={locale === "bn" ? "প্রতিষ্ঠান" : "Institutions"}>
        {context.institutions.map((institution) => (
          <Link
            key={institution.id}
            href={`/institutions/${institution.slug}`}
            locale={locale}
            className="rounded-md border bg-background p-5 hover:bg-muted"
          >
            {locale === "bn" ? institution.nameBn : institution.nameEn}
          </Link>
        ))}
      </Grid>
      <Grid title={locale === "bn" ? "এলাকা" : "Geographic areas"}>
        {context.areas.map((area) => (
          <Link
            key={area.id}
            href={`/areas/${area.slug}`}
            locale={locale}
            className="rounded-md border bg-background p-5 hover:bg-muted"
          >
            {locale === "bn" ? area.nameBn : area.nameEn}
          </Link>
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
