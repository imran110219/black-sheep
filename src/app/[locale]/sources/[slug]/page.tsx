import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import type { Locale } from "@/domain/common";
import { CaseCard } from "@/features/cases/CaseCard";
import { PersonCard } from "@/features/people/PersonCard";
import { formatDate } from "@/lib/dates";
import { verificationLabels } from "@/lib/status";
import { createBlackSheepRepository } from "@/repositories/repository-factory";
import { getPublicMockIndex, getSourceContext } from "@/repositories/record-context";

export default async function SourcePage({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const source = await createBlackSheepRepository().getSourceBySlug(slug);
  if (!source) notFound();
  const context = getSourceContext(source.id);
  if (!context) notFound();
  return (
    <div className="grid gap-8">
      <Breadcrumbs locale={locale} items={[{ label: source.title }]} />
      <header>
        <span className="rounded-md border px-2 py-1 text-xs">
          {source.isPrimarySource
            ? locale === "bn"
              ? "প্রাথমিক উৎস"
              : "Primary source"
            : locale === "bn"
              ? "দ্বিতীয়িক উৎস"
              : "Secondary source"}
        </span>
        <h1 className="mt-3 text-3xl font-semibold">{source.title}</h1>
        <p className="mt-2 text-muted-foreground">{source.publisher}</p>
      </header>
      <dl className="grid gap-4 rounded-md border p-5 md:grid-cols-3">
        <Field label="Type" value={source.type} />
        <Field label="Document" value={source.documentNumber ?? "Not stated"} />
        <Field label="Jurisdiction" value={source.jurisdiction ?? "Not stated"} />
        <Field label="Published" value={formatDate(source.publicationDate, locale)} />
        <Field label="Accessed" value={formatDate(source.accessedAt, locale)} />
        <Field label="Verification" value={verificationLabels[source.verificationStatus][locale]} />
      </dl>
      <section>
        <h2 className="text-2xl font-semibold">
          {locale === "bn" ? "সংক্ষিপ্ত উদ্ধৃতি" : "Short excerpt"}
        </h2>
        <p className="mt-3 text-muted-foreground">{source.excerpt}</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">
          {locale === "bn" ? "সমর্থিত দাবি" : "Supported claims"}
        </h2>
        <ul className="mt-3 list-disc pl-5 text-muted-foreground">
          {source.supportedClaims.map((claim) => (
            <li key={claim}>{claim}</li>
          ))}
        </ul>
      </section>
      <div className="flex gap-3">
        <a
          href={source.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          {locale === "bn" ? "মূল লিংক" : "Original link"}
        </a>
        {source.archivedUrl ? (
          <a
            href={source.archivedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            {locale === "bn" ? "আর্কাইভ লিংক" : "Archived link"}
          </a>
        ) : null}
      </div>
      <Section title={locale === "bn" ? "সম্পর্কিত মামলা" : "Related cases"}>
        {context.cases.map((record) => (
          <CaseCard key={record.id} record={record} locale={locale} />
        ))}
      </Section>
      <Section title={locale === "bn" ? "সম্পর্কিত ব্যক্তি" : "Related people"}>
        {context.people.map((person) => (
          <PersonCard
            key={person.id}
            person={person}
            cases={getPublicMockIndex().cases}
            locale={locale}
          />
        ))}
      </Section>
    </div>
  );
}
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </section>
  );
}
