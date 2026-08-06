import type { Locale } from "@/domain/common";
import type { RevisionRecord } from "@/domain/revision";
import { formatDate } from "@/lib/dates";

export function RevisionHistory({
  revisions,
  locale
}: {
  revisions: RevisionRecord[];
  locale: Locale;
}) {
  return (
    <ol className="space-y-3">
      {revisions.map((revision) => (
        <li key={revision.id} className="rounded-md border p-3 text-sm">
          <strong>v{revision.version}</strong> · {formatDate(revision.changedAt, locale)}
          <p className="text-muted-foreground">
            {locale === "bn" ? revision.changeSummaryBn : revision.changeSummaryEn}
          </p>
        </li>
      ))}
    </ol>
  );
}
