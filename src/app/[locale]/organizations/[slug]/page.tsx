import { notFound } from "next/navigation";
import type { Locale } from "@/domain/common";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CaseCard } from "@/features/cases/CaseCard";
import { PersonCard } from "@/features/people/PersonCard";
import { createBlackSheepRepository } from "@/repositories/repository-factory";

export default async function OrganizationPage({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const repo = createBlackSheepRepository();
  const organization = await repo.getOrganizationBySlug(slug);
  if (!organization) notFound();
  const context = await repo.getOrganizationContext(organization.id);
  if (!context) notFound();
  return (
    <div className="grid gap-8">
      <Breadcrumbs
        locale={locale}
        items={[{ label: locale === "bn" ? organization.nameBn : organization.nameEn }]}
      />
      <header>
        <h1 className="text-3xl font-semibold">
          {locale === "bn" ? organization.nameBn : organization.nameEn}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {locale === "bn" ? organization.summaryBn : organization.summaryEn}
        </p>
        <a
          className="mt-3 inline-flex text-accent hover:underline"
          href={organization.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          {organization.website}
        </a>
      </header>
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
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </section>
  );
}
