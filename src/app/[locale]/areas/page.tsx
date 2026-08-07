import type { Locale } from "@/domain/common";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Link } from "@/i18n/navigation";
import { createBlackSheepRepository } from "@/repositories/repository-factory";

export default async function AreasPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const metadata = await createBlackSheepRepository().getFilterMetadata();
  return (
    <div className="grid gap-8">
      <Breadcrumbs locale={locale} items={[{ label: locale === "bn" ? "এলাকা" : "Places" }]} />
      <header>
        <h1 className="text-3xl font-semibold">{locale === "bn" ? "এলাকা" : "Places"}</h1>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          {locale === "bn"
            ? "জেলা, আসন, শহর ও স্থানীয় এলাকার সঙ্গে ব্যক্তি, প্রতিষ্ঠান ও ঘটনার সম্পর্ক দেখুন।"
            : "Browse districts, constituencies, cities, and local areas tied to people, institutions, and incidents."}
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {metadata.areas.map((area) => (
          <Link
            key={area.id}
            href={`/areas/${area.slug}`}
            locale={locale}
            className="rounded-md border bg-background p-5 hover:bg-muted"
          >
            <p className="text-sm text-muted-foreground">{area.slug}</p>
            <h2 className="mt-2 text-xl font-semibold">
              {locale === "bn" ? area.nameBn : area.nameEn}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
