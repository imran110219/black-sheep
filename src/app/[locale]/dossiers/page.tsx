import type { Locale } from "@/domain/common";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Link } from "@/i18n/navigation";
import { createBlackSheepRepository } from "@/repositories/repository-factory";

export default async function DossiersPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dossiers = await createBlackSheepRepository().getFeaturedDossiers(24);
  return (
    <div className="grid gap-8">
      <Breadcrumbs locale={locale} items={[{ label: locale === "bn" ? "ডসিয়ার" : "Dossiers" }]} />
      <header>
        <h1 className="text-3xl font-semibold">{locale === "bn" ? "ডসিয়ার" : "Dossiers"}</h1>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {dossiers.map((dossier) => (
          <Link
            key={dossier.id}
            href={`/dossiers/${dossier.slug}`}
            locale={locale}
            className="rounded-md border bg-background p-5 hover:bg-muted"
          >
            <h2 className="text-xl font-semibold">
              {locale === "bn" ? dossier.titleBn : dossier.titleEn}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {locale === "bn" ? dossier.summaryBn : dossier.summaryEn}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
