import type { Locale } from "@/domain/common";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Link } from "@/i18n/navigation";
import { createBlackSheepRepository } from "@/repositories/repository-factory";

export default async function IncidentsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const incidents = await createBlackSheepRepository().getFeaturedIncidents(24);
  return (
    <div className="grid gap-8">
      <Breadcrumbs locale={locale} items={[{ label: locale === "bn" ? "ঘটনা" : "Incidents" }]} />
      <header>
        <h1 className="text-3xl font-semibold">{locale === "bn" ? "ঘটনা" : "Incidents"}</h1>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          {locale === "bn"
            ? "মামলা থেকে আলাদা ঐতিহাসিক ঘটনা, ভূমিকা, প্রভাব ও উৎস।"
            : "Historical incidents separated from legal cases, with roles, impact, and sources."}
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {incidents.map((incident) => (
          <Link
            key={incident.id}
            href={`/incidents/${incident.slug}`}
            locale={locale}
            className="rounded-md border bg-background p-5 hover:bg-muted"
          >
            <p className="text-sm text-muted-foreground">
              {incident.incidentType.replaceAll("_", " ")} ·{" "}
              {incident.occurredAt?.slice(0, 4) ?? incident.periodStart?.slice(0, 4)}
            </p>
            <h2 className="mt-2 text-xl font-semibold">
              {locale === "bn" ? incident.titleBn : incident.titleEn}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {locale === "bn" ? incident.summaryBn : incident.summaryEn}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
