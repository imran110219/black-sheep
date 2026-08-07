import type { Locale } from "@/domain/common";
import type { PersonProfile } from "@/domain/person";
import { DemoDataNotice } from "@/components/shared/Notices";
import { formatDate } from "@/lib/dates";
import { initials } from "@/lib/utils";

const domainLabels: Record<PersonProfile["influenceDomains"][number], { bn: string; en: string }> =
  {
    POLITICS: { bn: "রাজনীতি", en: "Politics" },
    BANKING: { bn: "ব্যাংকিং", en: "Banking" },
    LAND: { bn: "ভূমি", en: "Land" },
    BUSINESS: { bn: "ব্যবসা", en: "Business" },
    PUBLIC_CONTRACTS: { bn: "সরকারি চুক্তি", en: "Public contracts" },
    RELIGION: { bn: "ধর্মীয় প্রতিষ্ঠান", en: "Religion" },
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

export function PersonIdentityHeader({
  person,
  locale
}: {
  person: PersonProfile;
  locale: Locale;
}) {
  return (
    <section className="overflow-hidden rounded-md border bg-primary text-primary-foreground">
      <div className="grid gap-0 lg:grid-cols-[360px_1fr]">
        <div className="grid min-h-72 place-items-center bg-primary-foreground/10 p-8">
          <div className="grid h-40 w-40 place-items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-5xl font-semibold">
            {initials(person.nameEn)}
          </div>
        </div>
        <div className="grid gap-5 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            {person.isDemo ? (
              <DemoDataNotice text={locale === "bn" ? "ডেমো ডেটা" : "Demo data"} />
            ) : (
              <span className="inline-flex rounded-md border border-primary-foreground/25 bg-primary-foreground/10 px-2 py-1 text-xs font-medium">
                {locale === "bn" ? "প্রকাশ্য রেকর্ড" : "Public record"}
              </span>
            )}
            <span className="text-sm text-primary-foreground/70">
              {locale === "bn" ? "শেষ হালনাগাদ" : "Last updated"}{" "}
              {formatDate(person.updatedAt, locale)}
            </span>
          </div>
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-normal md:text-6xl">
              {locale === "bn" ? person.nameBn : person.nameEn}
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-primary-foreground/75">
              {locale === "bn" ? person.historicalIdentityBn : person.historicalIdentityEn}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {person.influenceDomains.map((domain) => (
              <span
                key={domain}
                className="rounded-md border border-primary-foreground/25 px-3 py-1 text-sm"
              >
                {domainLabels[domain][locale]}
              </span>
            ))}
          </div>
          <dl className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <HeaderFact
              label={locale === "bn" ? "পরিচয়" : "Public identity"}
              value={person.publicRoles[0] ?? person.occupation}
            />
            <HeaderFact label={locale === "bn" ? "সময়কাল" : "Era"} value={person.activePeriod} />
            <HeaderFact
              label={locale === "bn" ? "প্রধান এলাকা" : "Main area"}
              value={locale === "bn" ? person.primaryAreaBn : person.primaryAreaEn}
            />
            <HeaderFact
              label={locale === "bn" ? "প্রতিষ্ঠান" : "Organizations"}
              value={person.organizations.join(", ")}
            />
          </dl>
          <p className="text-sm text-primary-foreground/70">
            {locale === "bn" ? "উপনাম" : "Aliases"}: {person.aliases.join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
}

function HeaderFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-primary-foreground/60">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
