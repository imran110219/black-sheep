import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EditorialNotice } from "@/components/shared/Notices";
import type { Locale } from "@/domain/common";
import { CaseCard } from "@/features/cases/CaseCard";
import { PersonCard } from "@/features/people/PersonCard";
import { formatDate } from "@/lib/dates";
import { categoryLabels, verificationLabels } from "@/lib/status";
import { createKaloKhataRepository } from "@/repositories/repository-factory";

export default async function NewsPage({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const repo = createKaloKhataRepository();
  const news = await repo.getNewsBySlug(slug);
  if (!news) notFound();
  const context = await repo.getNewsContext(news.id);
  if (!context) notFound();
  return (
    <div className="grid gap-8">
      <Breadcrumbs locale={locale} items={[{ label: news.title }]} />
      <header>
        <h1 className="text-3xl font-semibold">{news.title}</h1>
        <p className="mt-2 text-muted-foreground">
          {news.publisher} · {formatDate(news.publishedAt, locale)}
        </p>
      </header>
      <EditorialNotice tone="amber">
        {locale === "bn"
          ? "মিডিয়া কাভারেজ নিজে থেকে বিচারিক সিদ্ধান্ত নয়।"
          : "Media coverage is not itself a judicial finding."}
      </EditorialNotice>
      <dl className="grid gap-4 rounded-md border p-5 md:grid-cols-3">
        <Field label="Type" value={news.newsType} />
        <Field label="Agency" value={news.agency} />
        <Field label="Verification" value={verificationLabels[news.verificationStatus][locale]} />
      </dl>
      <p>{news.summary}</p>
      <div className="flex flex-wrap gap-2">
        {news.categories.map((category) => (
          <span key={category} className="rounded-md border px-2 py-1 text-sm">
            {categoryLabels[category][locale]}
          </span>
        ))}
      </div>
      <a
        href={news.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:underline"
      >
        {locale === "bn" ? "মূল লিংক" : "Original URL"}
      </a>
      <Section title={locale === "bn" ? "সম্পর্কিত ব্যক্তি" : "Related people"}>
        {context.people.map((person) => (
          <PersonCard key={person.id} person={person} locale={locale} />
        ))}
      </Section>
      <Section title={locale === "bn" ? "সম্পর্কিত মামলা" : "Related cases"}>
        {context.cases.map((record) => (
          <CaseCard key={record.id} record={record} locale={locale} />
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
