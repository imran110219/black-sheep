import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EditorialNotice } from "@/components/shared/Notices";
import type { Locale } from "@/domain/common";
import { CaseCard } from "@/features/cases/CaseCard";
import { CaseStatusBadge } from "@/features/cases/CaseStatusBadge";
import { CaseStatusExplanation } from "@/features/cases/CaseStatusExplanation";
import { CaseTimeline } from "@/features/cases/CaseTimeline";
import { CorrectionCard } from "@/features/corrections/CorrectionCard";
import { SubjectResponsePanel } from "@/features/corrections/SubjectResponsePanel";
import { NewsCard } from "@/features/news/NewsCard";
import { SourceCard } from "@/features/sources/SourceCard";
import { Link } from "@/i18n/navigation";
import { formatDate } from "@/lib/dates";
import { pageMetadata } from "@/lib/metadata";
import { categoryLabels, roleLabels } from "@/lib/status";
import { createBlackSheepRepository } from "@/repositories/repository-factory";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const record = await createBlackSheepRepository().getCaseBySlug(slug);
  return record
    ? pageMetadata({
        title: locale === "bn" ? record.titleBn : record.titleEn,
        description: locale === "bn" ? record.summaryBn : record.summaryEn,
        locale,
        path: `/cases/${slug}`
      })
    : {};
}

export default async function CasePage({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const repo = createBlackSheepRepository();
  const record = await repo.getCaseBySlug(slug);
  if (!record) notFound();
  const context = await repo.getCaseContext(record.id);
  if (!context) notFound();
  return (
    <div className="grid gap-8">
      <Breadcrumbs
        locale={locale}
        items={[{ label: locale === "bn" ? record.titleBn : record.titleEn }]}
      />
      <header>
        <div className="flex flex-wrap items-center gap-3">
          <CaseStatusBadge status={record.legalStatus} locale={locale} />
          <span className="text-sm text-muted-foreground">{record.caseNumber}</span>
        </div>
        <h1 className="mt-3 text-3xl font-semibold">
          {locale === "bn" ? record.titleBn : record.titleEn}
        </h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          {locale === "bn" ? record.summaryBn : record.summaryEn}
        </p>
      </header>
      <CaseStatusExplanation status={record.legalStatus} locale={locale} />
      <EditorialNotice tone="amber">
        {locale === "bn"
          ? "বিষয়শ্রেণি রেকর্ডের বিষয়বস্তু বোঝায়; এটি নিজে থেকে দায় বা দোষ প্রমাণ করে না।"
          : "A category describes the subject matter of a record; it does not independently establish liability or guilt."}
      </EditorialNotice>
      <dl className="grid gap-4 rounded-md border p-5 md:grid-cols-3">
        <Field
          label={locale === "bn" ? "বিষয়" : "Category"}
          value={categoryLabels[record.category][locale]}
        />
        <Field
          label={locale === "bn" ? "অধিক্ষেত্র" : "Jurisdiction"}
          value={record.jurisdiction}
        />
        <Field label={locale === "bn" ? "কর্তৃপক্ষ" : "Authority"} value={record.authority} />
        <Field label={locale === "bn" ? "আদালত" : "Court"} value={record.courtName} />
        <Field
          label={locale === "bn" ? "দাখিল" : "Filed"}
          value={formatDate(record.filedAt, locale)}
        />
        <Field
          label={locale === "bn" ? "শেষ যাচাই" : "Last verified"}
          value={formatDate(record.lastVerifiedAt, locale)}
        />
      </dl>
      <Section title={locale === "bn" ? "বিস্তারিত বর্ণনা" : "Detailed description"}>
        <p className="text-muted-foreground">
          {locale === "bn" ? record.descriptionBn : record.descriptionEn}
        </p>
      </Section>
      <Section
        title={
          locale === "bn"
            ? "সংশ্লিষ্ট ব্যক্তি ও নির্দিষ্ট ভূমিকা"
            : "People involved and exact roles"
        }
      >
        <div className="grid gap-3">
          {record.personLinks.map((link) => {
            const person = context.people.find((item) => item.id === link.personId);
            return (
              <div key={`${link.personId}-${link.role}`} className="rounded-md border p-4 text-sm">
                <Link
                  href={`/people/${person?.slug ?? ""}`}
                  locale={locale}
                  className="font-medium text-accent hover:underline"
                >
                  {person ? (locale === "bn" ? person.nameBn : person.nameEn) : link.personId}
                </Link>
                <p>
                  {roleLabels[link.role][locale]} · {link.legalPosition}
                </p>
                <p className="text-muted-foreground">
                  {locale === "bn" ? link.noteBn : link.noteEn}
                </p>
              </div>
            );
          })}
        </div>
      </Section>
      <Section title={locale === "bn" ? "সময়রেখা" : "Timeline"}>
        <CaseTimeline events={record.timelineEvents} locale={locale} />
      </Section>
      <Section title={locale === "bn" ? "প্রমাণের সারাংশ" : "Evidence summary"}>
        <p className="text-muted-foreground">
          {locale === "bn" ? record.evidenceSummaryBn : record.evidenceSummaryEn}
        </p>
      </Section>
      {record.outcomeBn || record.outcomeEn || record.verdict || record.sentence ? (
        <Section title={locale === "bn" ? "ফলাফল" : "Outcome"}>
          <p>{locale === "bn" ? record.outcomeBn : record.outcomeEn}</p>
          <p className="text-sm text-muted-foreground">
            {record.verdict} {record.sentence}
          </p>
        </Section>
      ) : null}
      <Grid title={locale === "bn" ? "প্রাথমিক উৎস" : "Primary sources"}>
        {context.sources
          .filter((source) => source.isPrimarySource)
          .map((source) => (
            <SourceCard key={source.id} source={source} locale={locale} />
          ))}
      </Grid>
      <Grid title={locale === "bn" ? "দ্বিতীয়িক/সংবাদ উৎস" : "Secondary/news sources"}>
        {context.news.map((news) => (
          <NewsCard key={news.id} news={news} locale={locale} />
        ))}
      </Grid>
      <Grid title={locale === "bn" ? "বিষয় ব্যক্তির জবাব" : "Subject responses"}>
        {context.responses.map((response) => (
          <SubjectResponsePanel key={response.id} response={response} locale={locale} />
        ))}
      </Grid>
      <Grid title={locale === "bn" ? "সংশোধন" : "Corrections"}>
        {context.corrections.map((correction) => (
          <CorrectionCard key={correction.id} correction={correction} locale={locale} />
        ))}
      </Grid>
      <Grid title={locale === "bn" ? "সম্পর্কিত মামলা" : "Related cases"}>
        {context.relatedCases.map((related) => (
          <CaseCard key={related.id} record={related} locale={locale} />
        ))}
      </Grid>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}
function Grid({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </section>
  );
}
