"use client";

import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const target = locale === "bn" ? "en" : "bn";
  return (
    <Button
      type="button"
      className="h-9 bg-secondary px-3 text-secondary-foreground"
      onClick={() => router.replace(pathname, { locale: target })}
      aria-label="Switch language"
    >
      <Languages className="h-4 w-4" />
      <span>{target.toUpperCase()}</span>
    </Button>
  );
}
