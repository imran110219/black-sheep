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
    SECURITY: { bn: "নিরাপত্তা", en: "Security" },
    ELECTIONS: { bn: "নির্বাচন", en: "Elections" },
    VIOLENCE: { bn: "সহিংসতা", en: "Violence" },
    HUMAN_RIGHTS: { bn: "মানবাধিকার", en: "Human rights" },
    FAMILY_NETWORK: { bn: "পরিবার নেটওয়ার্ক", en: "Family network" },
    PATRONAGE: { bn: "পৃষ্ঠপোষকতা", en: "Patronage" },
    GOVERNMENT: { bn: "সরকার", en: "Government" },
    OTHER: { bn: "অন্যান্য", en: "Other" }
  };

export function PersonCard({ person, locale }: { person: PersonCardType; locale: Locale }) {
  const name = locale === "bn" ? person.nameBn : person.nameEn;
  const counts = person.counts ?? {
    claims: person.claimIds.length,
    incidents: person.incidentIds.length,
    cases: person.caseIds.length,
    verifiedSources: 0,
    relationships: person.relationshipIds.length,
    institutions: person.institutionAssociationIds.length,
    areas: person.geographicAssociationIds.length
  };

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md border bg-background shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="grid aspect-[4/3] place-items-center bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent))_0,hsl(var(--primary))_42%,hsl(var(--foreground))_100%)] text-primary-foreground">
        <div className="grid h-24 w-24 place-items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-3xl font-semibold shadow-lg">
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
          {person.influenceDomains.slice(0, 5).map((domain) => (
            <span key={domain} className="rounded-md border bg-muted/50 px-2 py-1 text-xs">
              {domainLabels[domain][locale]}
            </span>
          ))}
        </div>
        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-muted-foreground">{locale === "bn" ? "দাবি" : "Claims"}</dt>
            <dd className="font-medium">{counts.claims}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">{locale === "bn" ? "ঘটনা" : "Incidents"}</dt>
            <dd className="font-medium">{counts.incidents}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">{locale === "bn" ? "মামলা" : "Cases"}</dt>
            <dd className="font-medium">{counts.cases}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">{locale === "bn" ? "উৎস" : "Sources"}</dt>
            <dd className="font-medium">{counts.verifiedSources}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">
              {locale === "bn" ? "সম্পর্ক" : "Relationships"}
            </dt>
            <dd className="font-medium">{counts.relationships}</dd>
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
