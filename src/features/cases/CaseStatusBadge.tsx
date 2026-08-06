import type { LegalStatus } from "@/domain/case";
import type { Locale } from "@/domain/common";
import { statusLabel } from "@/lib/status";

export function CaseStatusBadge({ status, locale }: { status: LegalStatus; locale: Locale }) {
  return (
    <span className="inline-flex rounded-md border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
      {statusLabel(status, locale)}
    </span>
  );
}
