import type { Locale } from "@/domain/common";
import type { PersonProfile } from "@/domain/person";
import type { RelationshipRecord } from "@/domain/relationship";
import { verificationLabels } from "@/lib/status";

export function RelationshipCard({
  relationship,
  people,
  locale
}: {
  relationship: RelationshipRecord;
  people: PersonProfile[];
  locale: Locale;
}) {
  const from = people.find((person) => person.id === relationship.fromPersonId);
  const to = people.find((person) => person.id === relationship.toPersonId);
  const alleged = relationship.relationshipType === "ALLEGED_ASSOCIATE";
  return (
    <article className="rounded-md border p-4">
      <h3 className="font-medium">
        {from ? (locale === "bn" ? from.nameBn : from.nameEn) : relationship.fromPersonId} →{" "}
        {to ? (locale === "bn" ? to.nameBn : to.nameEn) : relationship.toPersonId}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {alleged
          ? locale === "bn"
            ? "অভিযোগিত সম্পর্ক"
            : "Alleged relationship"
          : relationship.relationshipType.replaceAll("_", " ")}
      </p>
      <p className="mt-2 text-sm">
        {locale === "bn" ? relationship.summaryBn : relationship.summaryEn}
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        {verificationLabels[relationship.verificationStatus][locale]}
      </p>
    </article>
  );
}
