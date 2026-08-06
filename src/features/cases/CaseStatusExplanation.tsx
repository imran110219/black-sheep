import type { LegalStatus } from "@/domain/case";
import type { Locale } from "@/domain/common";
import { EditorialNotice } from "@/components/shared/Notices";
import { statusExplanation, statusLabel } from "@/lib/status";

export function CaseStatusExplanation({ status, locale }: { status: LegalStatus; locale: Locale }) {
  return (
    <EditorialNotice>
      <strong>{statusLabel(status, locale)}:</strong> {statusExplanation(status, locale)}
    </EditorialNotice>
  );
}
