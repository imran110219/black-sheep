import { Link } from "@/i18n/navigation";
import type { Locale } from "@/domain/common";

export function Breadcrumbs({
  locale,
  items
}: {
  locale: Locale;
  items: { href?: string; label: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap gap-2">
        <li>
          <Link href="/" locale={locale} className="hover:text-foreground">
            Black Sheep
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex gap-2">
            <span>/</span>
            {item.href ? (
              <Link href={item.href} locale={locale} className="hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
