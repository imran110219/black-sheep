import type { CaseRecord } from "@/domain/case";
import type { Locale } from "@/domain/common";
import type { PersonCard as PersonCardType } from "@/domain/person";
import { DemoDataNotice } from "@/components/shared/Notices";
import { Link } from "@/i18n/navigation";
import { formatDate } from "@/lib/dates";
import { initials } from "@/lib/utils";

const domainLabels: Record<PersonCardType["influenceDomains"][number], { bn: string; en: string }> =
  {
    POLITICS: { bn: "রাজনীতি", en: "Politics" },
    BANKING: { bn: "ব্যাংকিং", en: "Banking" },
    LAND: { bn: "ভূমি", en: "Land" },
    BUSINESS: { bn: "ব্যবসা", en: "Business" },
    PUBLIC_CONTRACTS: { bn: "সরকারি চুক্তি", en: "Public contracts" },
    RELIGION: { bn: "ধর্মীয় প্রভাব", en: "Religion" },
    MEDIA: { bn: "মিডিয়া", en: "Media" },
    ELECTIONS: { bn: "নির্বাচন", en: "Elections" },
    HUMAN_RIGHTS: { bn: "মানবাধিকার", en: "Human rights" },
    PATRONAGE: { bn: "পৃষ্ঠপোষকতা", en: "Patronage" }
  };

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
  const relatedCases = cases.filter((record) => person.caseIds.includes(record.id));
  const sourceCount = relatedCases.reduce((count, record) => count + record.sourceIds.length, 0);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md border bg-background shadow-sm">
      <div className="grid aspect-[4/3] place-items-center bg-primary text-primary-foreground">
        <div className="grid h-20 w-20 place-items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-2xl font-semibold">
          {initials(person.nameEn)}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold">{name}</h3>
          {person.isDemo ? <DemoDataNotice text={locale === "bn" ? "ডেমো" : "Demo"} /> : null}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {person.publicRoles[0] ?? person.occupation} ·{" "}
          {locale === "bn" ? person.primaryAreaBn : person.primaryAreaEn} · {person.activePeriod}
        </p>
        <p className="mt-4 line-clamp-3 text-sm text-muted-foreground">
          {locale === "bn" ? person.historicalIdentityBn : person.historicalIdentityEn}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {person.influenceDomains.slice(0, 4).map((domain) => (
            <span key={domain} className="rounded-md border px-2 py-1 text-xs">
              {domainLabels[domain][locale]}
            </span>
          ))}
        </div>
        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-muted-foreground">{locale === "bn" ? "দাবি" : "Claims"}</dt>
            <dd className="font-medium">{person.narrative.featuredClaimIds.length}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">{locale === "bn" ? "মামলা" : "Cases"}</dt>
            <dd className="font-medium">{relatedCases.length}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">{locale === "bn" ? "উৎস" : "Sources"}</dt>
            <dd className="font-medium">{sourceCount}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">
              {locale === "bn" ? "সম্পর্ক" : "Relationships"}
            </dt>
            <dd className="font-medium">{person.relationshipIds.length}</dd>
          </div>
        </dl>
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
          {locale === "bn" ? "প্রোফাইল ও ইতিহাস দেখুন" : "Explore profile"}
        </Link>
      </div>
    </article>
  );
}
