import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { z } from "zod";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PresumptionOfInnocenceNotice } from "@/components/shared/Notices";
import { PrintButton, ShareButton } from "@/components/shared/SharePrint";
import type { CaseRecord } from "@/domain/case";
import type { ClaimRecord, IncidentRecord } from "@/domain/claim";
import type { Locale, VerificationStatus } from "@/domain/common";
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
import { createKaloKhataRepository } from "@/repositories/repository-factory";

const profileSearchParamsSchema = z.object({
  view: z.enum(["story", "evidence"]).catch("story")
});

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const person = await createKaloKhataRepository().getPersonBySlug(slug);
  if (!person) return {};
  return pageMetadata({
    title: locale === "bn" ? person.nameBn : person.nameEn,
    description: locale === "bn" ? person.historicalIdentityBn : person.historicalIdentityEn,
    locale,
    path: `/people/${slug}`
  });
}

export default async function PersonPage({
  params,
  searchParams
}: {
  params: Promise<{ locale: Locale; slug: string }>;
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const { locale, slug } = await params;
  const { view } = profileSearchParamsSchema.parse(await searchParams);
  const repo = createKaloKhataRepository();
  const person = await repo.getPersonBySlug(slug);
  if (!person) notFound();
  const [storyContext, evidenceContext, networkContext] = await Promise.all([
    repo.getPersonStoryContext(person.id),
    repo.getPersonEvidenceContext(person.id),
    repo.getPersonNetworkContext(person.id)
  ]);
  if (!storyContext || !evidenceContext || !networkContext) notFound();
  const context = { ...storyContext, ...evidenceContext, ...networkContext };
  const firstStatus = context.cases[0]?.legalStatus;
  const connectedPeople = context.relationships.length;
  const officialFindings = context.claims.filter((claim) =>
    ["OFFICIAL_FINDING", "JUDICIALLY_ESTABLISHED"].includes(claim.status)
  ).length;

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
            ? "কোনো অভিযোগকে আদালতের রায় হিসেবে এবং কোনো সম্পর্ককে অপরাধের প্রমাণ হিসেবে উপস্থাপন করা হয় না।"
            : "No allegation is presented as a court finding, and no relationship is presented as proof of wrongdoing."
        }
      />

      <nav className="sticky top-16 z-30 flex gap-2 overflow-x-auto border-y bg-background/95 py-3 backdrop-blur">
        <Anchor href="#overview" label={locale === "bn" ? "সারাংশ" : "Overview"} />
        <Anchor href="#history" label={locale === "bn" ? "ইতিহাস" : "History"} />
        <Anchor href="#themes" label={locale === "bn" ? "প্রধান বিষয়" : "Themes"} />
        <Anchor href="#events" label={locale === "bn" ? "ঘটনা" : "Events"} />
        <Anchor href="#influence" label={locale === "bn" ? "প্রভাব" : "Influence"} />
        <Anchor href="#network" label={locale === "bn" ? "নেটওয়ার্ক" : "Network"} />
        <Anchor href="#areas" label={locale === "bn" ? "এলাকা" : "Areas"} />
        <Anchor href="#timeline" label={locale === "bn" ? "সময়রেখা" : "Timeline"} />
        <Anchor href="#cases" label={locale === "bn" ? "মামলা" : "Cases"} />
        <Anchor href="#sources" label={locale === "bn" ? "উৎস" : "Sources"} />
      </nav>

      <div className="flex flex-wrap gap-2">
        <Link
          href={`/people/${person.slug}?view=story`}
          locale={locale}
          className={`rounded-md border px-4 py-2 text-sm ${view === "story" ? "bg-primary text-primary-foreground" : "bg-background"}`}
        >
          {locale === "bn" ? "গল্প ও ইতিহাস" : "Story and history"}
        </Link>
        <Link
          href={`/people/${person.slug}?view=evidence`}
          locale={locale}
          className={`rounded-md border px-4 py-2 text-sm ${view === "evidence" ? "bg-primary text-primary-foreground" : "bg-background"}`}
        >
          {locale === "bn" ? "নথি ও প্রমাণ" : "Records and evidence"}
        </Link>
      </div>

      {view === "evidence" ? (
        <EvidenceSections
          context={context}
          firstStatus={firstStatus}
          personId={person.id}
          locale={locale}
        />
      ) : null}

      <section id="overview" className="grid gap-8 scroll-mt-32">
        <Section title={locale === "bn" ? "কেন কালোখাতায়" : "Why this person is listed"}>
          <p className="max-w-4xl text-lg text-muted-foreground">
            {locale === "bn" ? person.narrative.whyListedBn : person.narrative.whyListedEn}
          </p>
        </Section>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Metric
            label={locale === "bn" ? "নথিভুক্ত থিম" : "Documented themes"}
            value={context.claims.length}
          />
          <Metric
            label={locale === "bn" ? "আইনি মামলা" : "Legal cases"}
            value={context.cases.length}
          />
          <Metric
            label={locale === "bn" ? "অফিশিয়াল ফাইন্ডিং" : "Official findings"}
            value={officialFindings}
          />
          <Metric
            label={locale === "bn" ? "যাচাইকৃত উৎস" : "Verified sources"}
            value={context.sources.length}
          />
          <Metric
            label={locale === "bn" ? "প্রতিষ্ঠান" : "Organizations"}
            value={context.organizations.length}
          />
          <Metric label={locale === "bn" ? "এলাকা" : "Areas"} value={context.areas.length} />
          <Metric
            label={locale === "bn" ? "সংযুক্ত ব্যক্তি" : "Connected people"}
            value={connectedPeople}
          />
          <Metric label={locale === "bn" ? "ঘটনা" : "Incidents"} value={context.incidents.length} />
        </div>

        <Section id="history" title={locale === "bn" ? "ঐতিহাসিক সারাংশ" : "Historical overview"}>
          <div className="grid gap-5 text-muted-foreground lg:grid-cols-2">
            <NarrativeBlock
              title={locale === "bn" ? "উত্থান ও ক্ষমতার ভিত্তি" : "Rise and power base"}
              body={[
                locale === "bn" ? person.narrative.riseToPowerBn : person.narrative.riseToPowerEn,
                locale === "bn" ? person.narrative.powerBaseBn : person.narrative.powerBaseEn
              ]}
            />
            <NarrativeBlock
              title={locale === "bn" ? "কর্মকাণ্ডের ধরন" : "Documented patterns"}
              body={[
                locale === "bn"
                  ? person.narrative.documentedPatternsBn
                  : person.narrative.documentedPatternsEn
              ]}
            />
            <NarrativeBlock
              title={locale === "bn" ? "জনগণ ও রাষ্ট্রের ওপর প্রভাব" : "Public impact"}
              body={[
                locale === "bn"
                  ? person.narrative.historicalImpactBn
                  : person.narrative.historicalImpactEn
              ]}
            />
            <NarrativeBlock
              title={locale === "bn" ? "ঐতিহাসিক উত্তরাধিকার" : "Historical legacy"}
              body={[
                locale === "bn"
                  ? person.narrative.historicalOverviewBn
                  : person.narrative.historicalOverviewEn,
                locale === "bn" ? person.narrative.legacyBn : person.narrative.legacyEn
              ]}
            />
          </div>
        </Section>

        <GridSection
          id="themes"
          title={
            locale === "bn"
              ? "প্রধান কর্মকাণ্ড, অভিযোগ ও বিতর্ক"
              : "Important claims, actions, and controversies"
          }
        >
          {context.claims.map((claim) => (
            <ClaimCard key={claim.id} claim={claim} locale={locale} />
          ))}
        </GridSection>

        <GridSection
          id="events"
          title={locale === "bn" ? "গুরুত্বপূর্ণ ঘটনা" : "Important incidents"}
        >
          {context.incidents.map((incident) => (
            <IncidentCard
              key={incident.id}
              incident={incident}
              impact={context.impactRecords.find((record) =>
                incident.impactRecordIds.includes(record.id)
              )}
              locale={locale}
            />
          ))}
        </GridSection>
      </section>

      <section id="network" className="grid gap-8 scroll-mt-32">
        <GridSection
          id="influence"
          title={locale === "bn" ? "প্রভাবের ক্ষেত্র" : "Influence footprint"}
        >
          {context.institutionAssociations.map((association) => {
            const institution = context.institutions.find(
              (record) => record.id === association.institutionId
            );
            return (
              <InfoCard
                key={association.id}
                title={
                  institution
                    ? locale === "bn"
                      ? institution.nameBn
                      : institution.nameEn
                    : association.relationshipType
                }
                eyebrow={association.relationshipType.replaceAll("_", " ")}
                body={locale === "bn" ? association.summaryBn : association.summaryEn}
                verificationStatus={association.verificationStatus}
              />
            );
          })}
          {context.geographicAssociations.map((association) => {
            const area = context.areas.find((record) => record.id === association.areaId);
            return (
              <InfoCard
                key={association.id}
                title={
                  area ? (locale === "bn" ? area.nameBn : area.nameEn) : association.relationType
                }
                eyebrow={association.relationType.replaceAll("_", " ")}
                body={locale === "bn" ? association.summaryBn : association.summaryEn}
                verificationStatus={association.verificationStatus}
              />
            );
          })}
        </GridSection>

        <GridSection
          title={
            locale === "bn" ? "ক্ষমতা ও সম্পর্কের নেটওয়ার্ক" : "Power and relationship network"
          }
        >
          {context.relationships.map((relationship) => (
            <RelationshipCard
              key={relationship.id}
              relationship={relationship}
              people={context.people}
              locale={locale}
            />
          ))}
        </GridSection>
      </section>

      <Section
        id="timeline"
        title={locale === "bn" ? "জীবন, ক্ষমতা ও ঘটনার সময়রেখা" : "Life, power and events timeline"}
      >
        <CaseTimeline
          events={context.cases
            .flatMap((record) => record.timelineEvents)
            .sort((a, b) => a.date.localeCompare(b.date))}
          locale={locale}
        />
      </Section>

      {view === "story" ? (
        <EvidenceSections
          context={context}
          firstStatus={firstStatus}
          personId={person.id}
          locale={locale}
        />
      ) : null}
    </div>
  );
}

function Anchor({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="shrink-0 rounded-md border px-3 py-2 text-sm hover:bg-muted">
      {label}
    </a>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md border bg-background p-5">
      <p className="text-3xl font-semibold">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function NarrativeBlock({ title, body }: { title: string; body: Array<string | undefined> }) {
  return (
    <article className="border-l-2 border-accent pl-4">
      <h3 className="font-semibold text-foreground">{title}</h3>
      <div className="mt-2 grid gap-2">
        {body.filter(Boolean).map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </article>
  );
}

function ClaimCard({ claim, locale }: { claim: ClaimRecord; locale: Locale }) {
  return (
    <article className="rounded-md border bg-background p-5">
      <p className="text-sm text-muted-foreground">
        {claim.type.replaceAll("_", " ")} · {claim.status.replaceAll("_", " ")}
      </p>
      <h3 className="mt-2 font-semibold">{locale === "bn" ? claim.titleBn : claim.titleEn}</h3>
      <p className="mt-3 text-sm text-muted-foreground">
        {locale === "bn" ? claim.summaryBn : claim.summaryEn}
      </p>
      <p className="mt-3 text-xs text-muted-foreground">
        {claim.verificationStatus.replaceAll("_", " ")}
      </p>
    </article>
  );
}

function IncidentCard({
  incident,
  impact,
  locale
}: {
  incident: IncidentRecord;
  impact?: { summaryBn: string; summaryEn: string };
  locale: Locale;
}) {
  return (
    <article className="rounded-md border bg-background p-5">
      <p className="text-sm text-muted-foreground">
        {incident.incidentType.replaceAll("_", " ")} ·{" "}
        {incident.occurredAt ?? `${incident.periodStart ?? ""} ${incident.periodEnd ?? ""}`.trim()}
      </p>
      <h3 className="mt-2 font-semibold">
        {locale === "bn" ? incident.titleBn : incident.titleEn}
      </h3>
      <p className="mt-3 text-sm text-muted-foreground">
        {locale === "bn" ? incident.summaryBn : incident.summaryEn}
      </p>
      {impact ? (
        <p className="mt-3 border-t pt-3 text-sm text-muted-foreground">
          {locale === "bn" ? impact.summaryBn : impact.summaryEn}
        </p>
      ) : null}
      <Link
        href={`/incidents/${incident.slug}`}
        locale={locale}
        className="mt-4 inline-flex text-sm font-medium text-accent hover:underline"
      >
        {locale === "bn" ? "ঘটনা দেখুন" : "Explore incident"}
      </Link>
    </article>
  );
}

function InfoCard({
  title,
  eyebrow,
  body,
  verificationStatus
}: {
  title: string;
  eyebrow: string;
  body: string;
  verificationStatus: VerificationStatus;
}) {
  return (
    <article className="rounded-md border bg-background p-5">
      <p className="text-sm text-muted-foreground">{eyebrow}</p>
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{body}</p>
      <p className="mt-3 text-xs text-muted-foreground">
        {verificationStatus.replaceAll("_", " ")}
      </p>
    </article>
  );
}

function Section({
  id,
  title,
  children
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="grid gap-4 scroll-mt-32">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function GridSection({
  id,
  title,
  children
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  if (Array.isArray(children) && children.length === 0) return null;
  return (
    <section id={id} className="grid gap-4 scroll-mt-32">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </section>
  );
}

function EvidenceSections({
  context,
  firstStatus,
  personId,
  locale
}: {
  context: {
    cases: CaseRecord[];
    news: Array<React.ComponentProps<typeof NewsCard>["news"]>;
    sources: Array<React.ComponentProps<typeof SourceCard>["source"]>;
    assets: Array<React.ComponentProps<typeof AssetCard>["asset"]>;
    responses: Array<React.ComponentProps<typeof SubjectResponsePanel>["response"]>;
    corrections: Array<React.ComponentProps<typeof CorrectionCard>["correction"]>;
    revisions: React.ComponentProps<typeof RevisionHistory>["revisions"];
  };
  firstStatus?: React.ComponentProps<typeof CaseStatusExplanation>["status"];
  personId: string;
  locale: Locale;
}) {
  return (
    <section id="evidence" className="grid gap-8 scroll-mt-32">
      {firstStatus ? <CaseStatusExplanation status={firstStatus} locale={locale} /> : null}
      <GridSection
        id="cases"
        title={locale === "bn" ? "মামলা ও আইনি রেকর্ড" : "Cases and legal records"}
      >
        {context.cases.map((record) => (
          <CaseCard
            key={record.id}
            record={record}
            locale={locale}
            link={record.personLinks.find((link) => link.personId === personId)}
            sourceCount={record.sourceIds.length}
          />
        ))}
      </GridSection>
      <GridSection title={locale === "bn" ? "সংবাদ কাভারেজ" : "News coverage"}>
        {context.news.map((record) => (
          <NewsCard key={record.id} news={record} locale={locale} />
        ))}
      </GridSection>
      <GridSection id="sources" title={locale === "bn" ? "উৎস" : "Structured sources"}>
        {context.sources.map((source) => (
          <SourceCard key={source.id} source={source} locale={locale} />
        ))}
      </GridSection>
      <GridSection title={locale === "bn" ? "সম্পদ রেকর্ড" : "Asset records"}>
        {context.assets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} locale={locale} />
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
      {context.revisions.length > 0 ? (
        <Section title={locale === "bn" ? "রিভিশন ইতিহাস" : "Revision history"}>
          <RevisionHistory revisions={context.revisions} locale={locale} />
        </Section>
      ) : null}
    </section>
  );
}
