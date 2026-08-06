import type { Locale } from "@/domain/common";
import type { SourceRecord } from "@/domain/source";
import { Link } from "@/i18n/navigation";
import { formatDate } from "@/lib/dates";
import { verificationLabels } from "@/lib/status";

export function SourceVerificationBadge({
  status,
  locale
}: {
  status: SourceRecord["verificationStatus"];
  locale: Locale;
}) {
  return (
    <span className="rounded-md border px-2 py-1 text-xs">
      {verificationLabels[status][locale]}
    </span>
  );
}

export function SourceCard({ source, locale }: { source: SourceRecord; locale: Locale }) {
  return (
    <article className="rounded-md border p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-medium">{source.title}</h3>
        <SourceVerificationBadge status={source.verificationStatus} locale={locale} />
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        {source.publisher} · {formatDate(source.publicationDate, locale)}
      </p>
      <p className="mt-2 text-sm">{source.excerpt}</p>
      <Link
        href={`/sources/${source.slug}`}
        locale={locale}
        className="mt-3 inline-flex text-sm font-medium text-accent hover:underline"
      >
        {locale === "bn" ? "উৎস দেখুন" : "View source"}
      </Link>
    </article>
  );
}
