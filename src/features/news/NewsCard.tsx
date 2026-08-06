import type { Locale } from "@/domain/common";
import type { NewsRecord } from "@/domain/news";
import { Link } from "@/i18n/navigation";
import { formatDate } from "@/lib/dates";
import { verificationLabels } from "@/lib/status";

export function NewsCard({ news, locale }: { news: NewsRecord; locale: Locale }) {
  return (
    <article className="rounded-md border p-4">
      <h3 className="font-medium">{news.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {news.publisher} · {formatDate(news.publishedAt, locale)}
      </p>
      <p className="mt-2 text-sm">{news.summary}</p>
      <p className="mt-2 text-xs text-muted-foreground">
        {verificationLabels[news.verificationStatus][locale]}
      </p>
      <Link
        href={`/news/${news.slug}`}
        locale={locale}
        className="mt-3 inline-flex text-sm font-medium text-accent hover:underline"
      >
        {locale === "bn" ? "সংবাদ রেকর্ড দেখুন" : "View news record"}
      </Link>
    </article>
  );
}
