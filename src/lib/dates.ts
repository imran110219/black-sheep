import { format, parseISO } from "date-fns";
import { bn, enUS } from "date-fns/locale";
import type { Locale } from "@/domain/common";

export function formatDate(value: string | undefined, locale: Locale = "bn") {
  if (!value) return locale === "bn" ? "উল্লেখ নেই" : "Not stated";
  return format(parseISO(value), "d MMM yyyy", { locale: locale === "bn" ? bn : enUS });
}

export function getYear(value: string | undefined) {
  if (!value) return undefined;
  return parseISO(value).getFullYear().toString();
}
