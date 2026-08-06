import type { CaseRecord, CaseSummary, PersonCaseLink } from "@/domain/case";
import type { Locale } from "@/domain/common";
import { Link } from "@/i18n/navigation";
import { formatDate } from "@/lib/dates";
import { categoryLabels, roleLabels } from "@/lib/status";
import { CaseStatusBadge } from "./CaseStatusBadge";

export function CaseCard({
  record,
  locale,
  link,
  sourceCount
}: {
  record: CaseRecord | CaseSummary;
  locale: Locale;
  link?: PersonCaseLink;
  sourceCount?: number;
}) {
  const title = locale === "bn" ? record.titleBn : record.titleEn;
  return (
    <article className="rounded-md border bg-background p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs text-muted-foreground">{record.caseNumber}</p>
          <h3 className="mt-1 text-lg font-semibold">{title}</h3>
        </div>
        <CaseStatusBadge status={record.legalStatus} locale={locale} />
      </div>
      <div className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
        <span>{categoryLabels[record.category][locale]}</span>
        <span>{record.authority}</span>
        <span>{formatDate(record.lastVerifiedAt, locale)}</span>
        {link ? <span>{roleLabels[link.role][locale]}</span> : null}
        {sourceCount !== undefined ? <span>{sourceCount} sources</span> : null}
      </div>
      {"outcomeBn" in record && (record.outcomeBn || record.outcomeEn) ? (
        <p className="mt-3 text-sm">{locale === "bn" ? record.outcomeBn : record.outcomeEn}</p>
      ) : null}
      <Link
        href={`/cases/${record.slug}`}
        locale={locale}
        className="mt-4 inline-flex text-sm font-medium text-accent hover:underline"
      >
        {locale === "bn" ? "মামলা দেখুন" : "View case"}
      </Link>
    </article>
  );
}
