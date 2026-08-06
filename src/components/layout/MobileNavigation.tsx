"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/domain/common";

export function MobileNavigation({
  locale,
  items,
  openLabel,
  closeLabel
}: {
  locale: Locale;
  items: { href: string; label: string }[];
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <Button
        type="button"
        className="h-9 w-9 bg-secondary p-0 text-secondary-foreground"
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>
      {open ? (
        <div className="absolute left-4 right-4 top-16 z-50 rounded-md border bg-background p-3 shadow-soft">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                locale={locale}
                className="rounded-md px-3 py-2 text-sm hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
