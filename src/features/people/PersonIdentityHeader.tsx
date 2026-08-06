import type { Locale } from "@/domain/common";
import type { PersonProfile } from "@/domain/person";
import { DemoDataNotice } from "@/components/shared/Notices";
import { formatDate } from "@/lib/dates";
import { initials } from "@/lib/utils";

export function PersonIdentityHeader({
  person,
  locale
}: {
  person: PersonProfile;
  locale: Locale;
}) {
  return (
    <section className="grid gap-6 md:grid-cols-[auto_1fr]">
      <div className="grid h-24 w-24 place-items-center rounded-md bg-muted text-2xl font-semibold">
        {initials(person.nameEn)}
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-normal">
            {locale === "bn" ? person.nameBn : person.nameEn}
          </h1>
          <DemoDataNotice text={locale === "bn" ? "ডেমো ডেটা" : "Demo data"} />
        </div>
        <p className="mt-2 text-muted-foreground">{person.aliases.join(", ")}</p>
        <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="text-muted-foreground">Occupation</dt>
            <dd>{person.occupation}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Organization</dt>
            <dd>{person.organizations.join(", ")}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Location</dt>
            <dd>
              {person.city}, {person.country}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Last verified</dt>
            <dd>{formatDate(person.lastVerifiedAt, locale)}</dd>
          </div>
          {person.politicalAffiliation ? (
            <div>
              <dt className="text-muted-foreground">Affiliation</dt>
              <dd>{person.politicalAffiliation}</dd>
            </div>
          ) : null}
        </dl>
      </div>
    </section>
  );
}
