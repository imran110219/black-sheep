import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PresumptionOfInnocenceNotice } from "@/components/shared/Notices";
import { PrintButton, ShareButton } from "@/components/shared/SharePrint";
import type { Locale } from "@/domain/common";
import { AssetCard } from "@/features/assets/AssetCard";
import { CaseCard } from "@/features/cases/CaseCard";
import { CaseStatusExplanation } from "@/features/cases/CaseStatusExplanation";
import { CaseTimeline } from "@/features/cases/CaseTimeline";
import { CorrectionCard } from "@/features/corrections/CorrectionCard";
import { RevisionHistory } from "@/features/corrections/RevisionHistory";
import { SubjectResponsePanel } from "@/features/corrections/SubjectResponsePanel";
import { NewsCard } from "@/features/news/NewsCard";
import { PersonIdentityHeader } from "@/features/people/PersonIdentityHeader";
import { RelationshipCard } from "@/features/relationships/RelationshipCard";
import { SourceCard } from "@/features/sources/SourceCard";
import { Link } from "@/i18n/navigation";
import { pageMetadata } from "@/lib/metadata";
import { createBlackSheepRepository } from "@/repositories/repository-factory";
import { getPersonContext } from "@/repositories/record-context";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const person = await createBlackSheepRepository().getPersonBySlug(slug);
  if (!person) return {};
  return pageMetadata({
    title: locale === "bn" ? person.nameBn : person.nameEn,
    description: locale === "bn" ? person.summaryBn : person.summaryEn,
    locale,
    path: `/people/${slug}`
  });
}

export default async function PersonPage({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const person = await createBlackSheepRepository().getPersonBySlug(slug);
  if (!person) notFound();
  const context = getPersonContext(person.id);
  if (!context) notFound();
  const firstStatus = context.cases[0]?.legalStatus;
  return (
    <div className="grid gap-8">
      <Breadcrumbs
        locale={locale}
        items={[
          { href: "/people", label: locale === "bn" ? "ব্যক্তি" : "People" },
          { label: locale === "bn" ? person.nameBn : person.nameEn }
        ]}
      />
      <PersonIdentityHeader person={person} locale={locale} />
      <div className="flex flex-wrap gap-2">
        <ShareButton label={locale === "bn" ? "লিংক কপি" : "Copy link"} />
        <PrintButton label={locale === "bn" ? "প্রিন্ট" : "Print"} />
        <Link
          href="/right-of-reply"
          locale={locale}
          className="inline-flex h-10 items-center rounded-md border px-4 text-sm hover:bg-muted"
        >
          {locale === "bn" ? "ভুল রিপোর্ট করুন" : "Report an error"}
        </Link>
      </div>
      <PresumptionOfInnocenceNotice
        text={
          locale === "bn"
            ? "কোনো মামলা বা প্রতিবেদনে তালিকাভুক্ত হওয়া নিজে থেকে অপরাধ প্রমাণ করে না।"
            : "Being listed in a case or report does not by itself establish guilt."
        }
      />
      {firstStatus ? <CaseStatusExplanation status={firstStatus} locale={locale} /> : null}
      <Section title={locale === "bn" ? "জীবনী ও সারাংশ" : "Biography and summary"}>
        <p className="text-muted-foreground">
          {locale === "bn" ? person.descriptionBn : person.descriptionEn}
        </p>
      </Section>
      <Section title={locale === "bn" ? "মামলা ও রেকর্ড" : "Cases and records"}>
        <div className="grid gap-4 md:grid-cols-2">
          {context.cases.map((record) => (
            <CaseCard
              key={record.id}
              record={record}
              locale={locale}
              link={record.personLinks.find((link) => link.personId === person.id)}
              sourceCount={record.sourceIds.length}
            />
          ))}
        </div>
      </Section>
      <Section title={locale === "bn" ? "সময়রেখা" : "Timeline"}>
        <CaseTimeline
          events={context.cases
            .flatMap((record) => record.timelineEvents)
            .sort((a, b) => a.date.localeCompare(b.date))}
          locale={locale}
        />
      </Section>
      <GridSection title={locale === "bn" ? "সংবাদ কাভারেজ" : "News coverage"}>
        {context.news.map((record) => (
          <NewsCard key={record.id} news={record} locale={locale} />
        ))}
      </GridSection>
      <GridSection title={locale === "bn" ? "উৎস" : "Structured sources"}>
        {context.sources.map((source) => (
          <SourceCard key={source.id} source={source} locale={locale} />
        ))}
      </GridSection>
      <GridSection title={locale === "bn" ? "সম্পদ রেকর্ড" : "Asset records"}>
        {context.assets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} locale={locale} />
        ))}
      </GridSection>
      <GridSection title={locale === "bn" ? "সম্পর্ক" : "Relationships"}>
        {context.relationships.map((relationship) => (
          <RelationshipCard
            key={relationship.id}
            relationship={relationship}
            people={context.people}
            locale={locale}
          />
        ))}
      </GridSection>
      <GridSection title={locale === "bn" ? "বিষয় ব্যক্তির জবাব" : "Subject responses"}>
        {context.responses.map((response) => (
          <SubjectResponsePanel key={response.id} response={response} locale={locale} />
        ))}
      </GridSection>
      <GridSection title={locale === "bn" ? "সংশোধন" : "Corrections"}>
        {context.corrections.map((correction) => (
          <CorrectionCard key={correction.id} correction={correction} locale={locale} />
        ))}
      </GridSection>
      <Section title={locale === "bn" ? "রিভিশন ইতিহাস" : "Revision history"}>
        <RevisionHistory revisions={context.revisions} locale={locale} />
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function GridSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </section>
  );
}
