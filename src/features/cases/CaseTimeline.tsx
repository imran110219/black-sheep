import type { TimelineEvent } from "@/domain/case";
import type { Locale } from "@/domain/common";
import { formatDate } from "@/lib/dates";

export function CaseTimeline({ events, locale }: { events: TimelineEvent[]; locale: Locale }) {
  return (
    <ol className="space-y-4">
      {events.map((event) => (
        <li key={event.id} className="border-l-2 pl-4">
          <time className="text-xs text-muted-foreground">{formatDate(event.date, locale)}</time>
          <h4 className="font-medium">{locale === "bn" ? event.titleBn : event.titleEn}</h4>
          <p className="text-sm text-muted-foreground">
            {locale === "bn" ? event.descriptionBn : event.descriptionEn}
          </p>
        </li>
      ))}
    </ol>
  );
}
