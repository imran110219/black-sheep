import type { Locale } from "@/domain/common";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Link } from "@/i18n/navigation";
import { createBlackSheepRepository } from "@/repositories/repository-factory";

export default async function InstitutionsPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const institutions = await createBlackSheepRepository().getInstitutions();
  return (
    <div className="grid gap-8">
      <Breadcrumbs
        locale={locale}
        items={[{ label: locale === "bn" ? "প্রতিষ্ঠান" : "Institutions" }]}
      />
      <header>
        <h1 className="text-3xl font-semibold">
          {locale === "bn" ? "প্রতিষ্ঠান" : "Institutions"}
        </h1>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {institutions.map((institution) => (
          <Link
            key={institution.id}
            href={`/institutions/${institution.slug}`}
            locale={locale}
            className="rounded-md border bg-background p-5 hover:bg-muted"
          >
            <p className="text-sm text-muted-foreground">{institution.type.replaceAll("_", " ")}</p>
            <h2 className="mt-2 text-xl font-semibold">
              {locale === "bn" ? institution.nameBn : institution.nameEn}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {locale === "bn" ? institution.summaryBn : institution.summaryEn}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
