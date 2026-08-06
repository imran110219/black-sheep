import { getTranslations } from "next-intl/server";
import { BrandMark } from "@/components/shared/BrandMark";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/domain/common";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileNavigation } from "./MobileNavigation";
import { ThemeSwitcher } from "./ThemeSwitcher";

export async function SiteHeader({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });
  const items = [
    { href: "/", label: t("nav.home") },
    { href: "/people", label: t("nav.people") },
    { href: "/corrections", label: t("nav.corrections") },
    { href: "/methodology", label: t("nav.methodology") },
    { href: "/about", label: t("nav.about") }
  ];
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          locale={locale}
          className="flex items-center gap-3"
          aria-label="Black Sheep home"
        >
          <BrandMark className="h-9 w-9 text-foreground" />
          <span>
            <span className="block font-semibold leading-tight">Black Sheep</span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              {t("brand.descriptor")}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              locale={locale}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <ThemeSwitcher />
          <MobileNavigation
            locale={locale}
            items={items}
            openLabel={t("nav.openMenu")}
            closeLabel={t("nav.closeMenu")}
          />
        </div>
      </div>
    </header>
  );
}
