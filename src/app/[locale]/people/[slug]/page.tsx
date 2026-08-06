import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PresumptionOfInnocenceNotice } from "@/components/shared/Notices";
import { PrintButton, ShareButton } from "@/components/shared/SharePrint";
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
    description: locale === "bn" ? person.historicalIdentityBn : person.historicalIdentityEn,
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
        <Anchor href="#story" label={locale === "bn" ? "Story View" : "Story View"} />
        <Anchor href="#evidence" label={locale === "bn" ? "Evidence View" : "Evidence View"} />
        <Anchor href="#network" label={locale === "bn" ? "নেটওয়ার্ক" : "Network"} />
        <Anchor href="#timeline" label={locale === "bn" ? "সময়রেখা" : "Timeline"} />
      </nav>

      <section id="story" className="grid gap-8 scroll-mt-32">
        <Section title={locale === "bn" ? "কেন Black Sheep-এ" : "Why this person is listed"}>
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

        <Section title={locale === "bn" ? "ঐতিহাসিক সারাংশ" : "Historical overview"}>
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

        <GridSection title={locale === "bn" ? "গুরুত্বপূর্ণ দাবি ও থিম" : "Key claims and themes"}>
          {context.claims.map((claim) => (
            <ClaimCard key={claim.id} claim={claim} locale={locale} />
          ))}
        </GridSection>

        <GridSection title={locale === "bn" ? "গুরুত্বপূর্ণ ঘটনা" : "Key incidents"}>
          {context.incidents.map((incident) => (
            <IncidentCard key={incident.id} incident={incident} locale={locale} />
          ))}
        </GridSection>
      </section>

      <section id="network" className="grid gap-8 scroll-mt-32">
        <GridSection title={locale === "bn" ? "প্রভাবের footprint" : "Influence footprint"}>
          {context.institutionAssociations.map((association) => {
            const organization = context.organizations.find(
              (record) => record.id === association.institutionId
            );
            return (
              <InfoCard
                key={association.id}
                title={
                  organization
                    ? locale === "bn"
                      ? organization.nameBn
                      : organization.nameEn
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

        <GridSection title={locale === "bn" ? "মানুষের নেটওয়ার্ক" : "People network"}>
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

      <Section id="timeline" title={locale === "bn" ? "সমন্বিত সময়রেখা" : "Combined timeline"}>
        <CaseTimeline
          events={context.cases
            .flatMap((record) => record.timelineEvents)
            .sort((a, b) => a.date.localeCompare(b.date))}
          locale={locale}
        />
      </Section>

      <section id="evidence" className="grid gap-8 scroll-mt-32">
        {firstStatus ? <CaseStatusExplanation status={firstStatus} locale={locale} /> : null}
        <GridSection title={locale === "bn" ? "মামলা ও আইনি রেকর্ড" : "Cases and legal records"}>
          {context.cases.map((record) => (
            <CaseCard
              key={record.id}
              record={record}
              locale={locale}
              link={record.personLinks.find((link) => link.personId === person.id)}
              sourceCount={record.sourceIds.length}
            />
          ))}
        </GridSection>
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
      </section>
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

function IncidentCard({ incident, locale }: { incident: IncidentRecord; locale: Locale }) {
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
      {incident.impactRecords[0] ? (
        <p className="mt-3 border-t pt-3 text-sm text-muted-foreground">
          {locale === "bn"
            ? incident.impactRecords[0].summaryBn
            : incident.impactRecords[0].summaryEn}
        </p>
      ) : null}
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

function GridSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </section>
  );
}
