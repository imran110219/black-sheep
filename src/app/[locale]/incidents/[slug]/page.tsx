import { notFound } from "next/navigation";
import type { Locale } from "@/domain/common";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CaseCard } from "@/features/cases/CaseCard";
import { NewsCard } from "@/features/news/NewsCard";
import { SourceCard } from "@/features/sources/SourceCard";
import { Link } from "@/i18n/navigation";
import { createBlackSheepRepository } from "@/repositories/repository-factory";

export default async function IncidentPage({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const repo = createBlackSheepRepository();
  const incident = await repo.getIncidentBySlug(slug);
  if (!incident) notFound();
  const context = await repo.getIncidentContext(incident.id);
  if (!context) notFound();
  return (
    <div className="grid gap-8">
      <Breadcrumbs
        locale={locale}
        items={[
          { href: "/incidents", label: locale === "bn" ? "ঘটনা" : "Incidents" },
          { label: locale === "bn" ? incident.titleBn : incident.titleEn }
        ]}
      />
      <header className="rounded-md border bg-primary p-8 text-primary-foreground">
        <p className="text-sm uppercase text-primary-foreground/60">
          {incident.incidentType.replaceAll("_", " ")}
        </p>
        <h1 className="mt-3 text-4xl font-semibold">
          {locale === "bn" ? incident.titleBn : incident.titleEn}
        </h1>
        <p className="mt-4 max-w-3xl text-primary-foreground/75">
          {locale === "bn" ? incident.summaryBn : incident.summaryEn}
        </p>
      </header>
      <section className="grid gap-3">
        <h2 className="text-2xl font-semibold">
          {locale === "bn" ? "কি ঘটেছিল" : "What happened"}
        </h2>
        <p className="text-muted-foreground">
          {locale === "bn" ? incident.descriptionBn : incident.descriptionEn}
        </p>
      </section>
      <Grid
        title={locale === "bn" ? "সংশ্লিষ্ট ব্যক্তি ও ভূমিকা" : "People involved and exact roles"}
      >
        {incident.personLinks.map((link) => {
          const person = context.people.find((item) => item.id === link.personId);
          return (
            <article key={link.personId} className="rounded-md border bg-background p-5">
              <Link
                href={`/people/${person?.slug ?? ""}`}
                locale={locale}
                className="font-semibold text-accent hover:underline"
              >
                {person ? (locale === "bn" ? person.nameBn : person.nameEn) : link.personId}
              </Link>
              <p className="mt-2 text-sm">{link.role.replaceAll("_", " ")}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {locale === "bn" ? link.noteBn : link.noteEn}
              </p>
            </article>
          );
        })}
      </Grid>
      <Grid title={locale === "bn" ? "প্রভাব" : "Impact"}>
        {context.impactRecords.map((impact) => (
          <article key={impact.id} className="rounded-md border bg-background p-5">
            <p className="font-medium">{impact.impactType.replaceAll("_", " ")}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {locale === "bn" ? impact.summaryBn : impact.summaryEn}
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
      <Grid title={locale === "bn" ? "মামলা" : "Related cases"}>
        {context.cases.map((record) => (
          <CaseCard key={record.id} record={record} locale={locale} />
        ))}
      </Grid>
      <Grid title={locale === "bn" ? "সংবাদ" : "News"}>
        {context.news.map((news) => (
          <NewsCard key={news.id} news={news} locale={locale} />
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
