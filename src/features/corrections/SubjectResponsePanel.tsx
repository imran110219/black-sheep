import type { Locale } from "@/domain/common";
import type { SubjectResponse } from "@/domain/correction";
import { formatDate } from "@/lib/dates";
import { verificationLabels } from "@/lib/status";

export function SubjectResponsePanel({
  response,
  locale
}: {
  response: SubjectResponse;
  locale: Locale;
}) {
  return (
    <article className="rounded-md border bg-muted/30 p-4">
      <p className="text-sm">{locale === "bn" ? response.responseBn : response.responseEn}</p>
      <p className="mt-2 text-xs text-muted-foreground">
        {formatDate(response.publishedAt, locale)} ·{" "}
        {verificationLabels[response.verificationStatus][locale]}
      </p>
    </article>
  );
}
