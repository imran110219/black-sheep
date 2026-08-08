import { notFound } from "next/navigation";
import type { Locale } from "@/domain/common";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PersonCard } from "@/features/people/PersonCard";
import { SourceCard } from "@/features/sources/SourceCard";
import { Link } from "@/i18n/navigation";
import { createKaloKhataRepository } from "@/repositories/repository-factory";

export default async function AreaPage({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const repo = createKaloKhataRepository();
  const area = await repo.getAreaBySlug(slug);
  if (!area) notFound();
  const context = await repo.getAreaContext(area.id);
  if (!context) notFound();
  return (
    <div className="grid gap-8">
      <Breadcrumbs
        locale={locale}
        items={[
          { href: "/areas", label: locale === "bn" ? "এলাকা" : "Places" },
          { label: locale === "bn" ? area.nameBn : area.nameEn }
        ]}
      />
      <header className="rounded-md border bg-primary p-8 text-primary-foreground">
        <p className="text-sm uppercase text-primary-foreground/60">
          {area.type.replaceAll("_", " ")}
        </p>
        <h1 className="mt-3 text-4xl font-semibold">
          {locale === "bn" ? area.nameBn : area.nameEn}
        </h1>
        <p className="mt-4 max-w-3xl text-primary-foreground/75">
          {locale === "bn" ? area.summaryBn : area.summaryEn}
        </p>
      </header>
      <Grid title={locale === "bn" ? "সম্পর্কিত ব্যক্তি" : "Related people"}>
        {context.people.map((person) => (
          <PersonCard key={person.id} person={person} locale={locale} />
        ))}
      </Grid>
      <Grid title={locale === "bn" ? "প্রধান ঘটনা" : "Major incidents"}>
        {context.incidents.map((incident) => (
          <RecordLink
            key={incident.id}
            href={`/incidents/${incident.slug}`}
            title={locale === "bn" ? incident.titleBn : incident.titleEn}
            copy={locale === "bn" ? incident.summaryBn : incident.summaryEn}
            locale={locale}
          />
        ))}
      </Grid>
      <Grid title={locale === "bn" ? "প্রতিষ্ঠান" : "Institutions"}>
        {context.institutions.map((institution) => (
          <RecordLink
            key={institution.id}
            href={`/institutions/${institution.slug}`}
            title={locale === "bn" ? institution.nameBn : institution.nameEn}
            copy={locale === "bn" ? institution.summaryBn : institution.summaryEn}
            locale={locale}
          />
        ))}
      </Grid>
      <Grid title={locale === "bn" ? "দাবি ও থিম" : "Claims and themes"}>
        {context.claims.map((claim) => (
          <RecordLink
            key={claim.id}
            href={`/people?query=${claim.slug}`}
            title={locale === "bn" ? claim.titleBn : claim.titleEn}
            copy={claim.status.replaceAll("_", " ")}
            locale={locale}
          />
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

function RecordLink({
  href,
  title,
  copy,
  locale
}: {
  href: string;
  title: string;
  copy?: string;
  locale: Locale;
}) {
  return (
    <Link
      href={href}
      locale={locale}
      className="rounded-md border bg-background p-5 hover:bg-muted"
    >
      <h3 className="font-semibold">{title}</h3>
      {copy ? <p className="mt-2 text-sm text-muted-foreground">{copy}</p> : null}
    </Link>
  );
}
