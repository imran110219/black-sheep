import type { Locale } from "@/domain/common";
import type { Organization } from "@/domain/organization";
import { Link } from "@/i18n/navigation";

export function OrganizationCard({
  organization,
  locale
}: {
  organization: Organization;
  locale: Locale;
}) {
  return (
    <article className="rounded-md border p-4">
      <h3 className="font-medium">{locale === "bn" ? organization.nameBn : organization.nameEn}</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        {locale === "bn" ? organization.summaryBn : organization.summaryEn}
      </p>
      <Link
        href={`/organizations/${organization.slug}`}
        locale={locale}
        className="mt-3 inline-flex text-sm font-medium text-accent hover:underline"
      >
        {locale === "bn" ? "সংস্থা দেখুন" : "View organization"}
      </Link>
    </article>
  );
}
