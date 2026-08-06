import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/domain/common";

export async function SiteFooter({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale });
  const links = [
    ["/editorial-policy", locale === "bn" ? "সম্পাদকীয় নীতি" : "Editorial policy"],
    ["/source-policy", locale === "bn" ? "উৎস নীতি" : "Source policy"],
    ["/right-of-reply", locale === "bn" ? "জবাবের অধিকার" : "Right of reply"],
    ["/privacy", locale === "bn" ? "গোপনীয়তা" : "Privacy"],
    ["/legal", locale === "bn" ? "আইনি" : "Legal"]
  ] as const;
  return (
    <footer className="mt-16 border-t bg-muted/35">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-semibold">Black Sheep</p>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{t("brand.descriptor")}</p>
          <p className="mt-2 text-xs text-muted-foreground">editorial@blacksheep.example</p>
        </div>
        <nav className="flex flex-wrap gap-3 text-sm" aria-label="Footer navigation">
          {links.map(([href, label]) => (
            <Link key={href} href={href} locale={locale} className="hover:text-accent">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
