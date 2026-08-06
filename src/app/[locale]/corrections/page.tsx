import type { Locale } from "@/domain/common";
import { CorrectionCard } from "@/features/corrections/CorrectionCard";
import { createBlackSheepRepository } from "@/repositories/repository-factory";

export default async function CorrectionsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const corrections = await createBlackSheepRepository().getCorrections();
  return (
    <div className="grid gap-6">
      <header>
        <h1 className="text-3xl font-semibold">
          {locale === "bn" ? "সংশোধন লগ" : "Public correction log"}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {locale === "bn"
            ? "সংশোধনের তারিখ, অবস্থা ও পরিবর্তনের সারাংশ।"
            : "Correction date, status, affected record, and summary of changes."}
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {corrections.map((correction) => (
          <CorrectionCard key={correction.id} correction={correction} locale={locale} />
        ))}
      </div>
    </div>
  );
}
