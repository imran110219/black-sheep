import type { Locale } from "@/domain/common";
import type { CorrectionRecord } from "@/domain/correction";
import { formatDate } from "@/lib/dates";

export function CorrectionCard({
  correction,
  locale
}: {
  correction: CorrectionRecord;
  locale: Locale;
}) {
  return (
    <article className="rounded-md border p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-medium">{locale === "bn" ? correction.titleBn : correction.titleEn}</h3>
        <span className="rounded-md border px-2 py-1 text-xs">
          {correction.status.replaceAll("_", " ")}
        </span>
      </div>
      <p className="mt-2 text-sm">
        {locale === "bn" ? correction.correctionBn : correction.correctionEn}
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        {formatDate(correction.correctedAt, locale)}
      </p>
    </article>
  );
}
