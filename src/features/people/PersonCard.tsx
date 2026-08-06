import type { CaseRecord } from "@/domain/case";
import type { Locale } from "@/domain/common";
import type { PersonCard as PersonCardType } from "@/domain/person";
import { DemoDataNotice } from "@/components/shared/Notices";
import { Link } from "@/i18n/navigation";
import { formatDate } from "@/lib/dates";
import { aggregateStatuses } from "@/lib/search";
import { initials } from "@/lib/utils";
import { statusLabel } from "@/lib/status";

export function PersonCard({
  person,
  cases,
  locale
}: {
  person: PersonCardType;
  cases: CaseRecord[];
  locale: Locale;
}) {
  const name = locale === "bn" ? person.nameBn : person.nameEn;
  const statuses = aggregateStatuses(person, cases);
  return (
    <article className="flex h-full flex-col rounded-md border bg-background p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-muted font-semibold">
          {initials(person.nameEn)}
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold">{name}</h3>
            {person.isDemo ? <DemoDataNotice text={locale === "bn" ? "ডেমো" : "Demo"} /> : null}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {person.publicRoles[0] ?? person.occupation}
          </p>
        </div>
      </div>
      <p className="mt-4 line-clamp-3 text-sm text-muted-foreground">
        {locale === "bn" ? person.summaryBn : person.summaryEn}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {statuses.slice(0, 3).map(({ status, count }) => (
          <span key={status} className="rounded-md border px-2 py-1 text-xs">
            {count} {statusLabel(status as never, locale)}
          </span>
        ))}
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        <p>{person.organizations[0] ?? person.politicalAffiliation ?? person.occupation}</p>
        <p>
          {locale === "bn" ? "শেষ যাচাই" : "Last verified"}:{" "}
          {formatDate(person.lastVerifiedAt, locale)}
        </p>
      </div>
      <Link
        href={`/people/${person.slug}`}
        locale={locale}
        className="mt-auto pt-4 text-sm font-medium text-accent hover:underline"
      >
        {locale === "bn" ? "নথিভুক্ত প্রোফাইল দেখুন" : "View documented profile"}
      </Link>
    </article>
  );
}
