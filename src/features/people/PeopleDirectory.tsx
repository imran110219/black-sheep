"use client";

import { Filter, Search } from "lucide-react";
import type { Route } from "next";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import type { Locale } from "@/domain/common";
import type { PeopleSearchQuery, PersonCard as PersonCardType } from "@/domain/person";
import { EmptyState } from "@/components/shared/EmptyState";
import { categoryLabels, statusLabel } from "@/lib/status";
import type { FilterMetadata } from "@/repositories/black-sheep-repository";
import { PersonCard } from "./PersonCard";

export function PeopleDirectory({
  locale,
  result,
  metadata,
  query
}: {
  locale: Locale;
  result: { items: PersonCardType[]; page: number; total: number; totalPages: number };
  metadata: FilterMetadata;
  query: PeopleSearchQuery;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  function update(key: string, value: string) {
    const params = new URLSearchParams(window.location.search);
    if (value) params.set(key, value);
    else params.delete(key);
    if (key !== "page") params.set("page", "1");
    startTransition(() => router.replace(`${pathname}?${params.toString()}` as Route));
  }

  function clearAll() {
    startTransition(() => router.replace(pathname as Route));
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <details className="rounded-md border bg-background p-4 lg:hidden">
        <summary className="cursor-pointer font-medium">
          {locale === "bn" ? "ফিল্টার খুলুন" : "Open filters"}
        </summary>
        <div className="mt-4">
          <Filters
            locale={locale}
            metadata={metadata}
            query={query}
            update={update}
            clearAll={clearAll}
          />
        </div>
      </details>
      <aside className="hidden rounded-md border bg-background p-4 lg:sticky lg:top-24 lg:block lg:self-start">
        <div className="mb-4 flex items-center gap-2 font-medium">
          <Filter className="h-4 w-4" aria-hidden="true" />
          {locale === "bn" ? "ফিল্টার" : "Filters"}
        </div>
        <Filters
          locale={locale}
          metadata={metadata}
          query={query}
          update={update}
          clearAll={clearAll}
        />
      </aside>
      <section aria-live="polite" aria-busy={pending}>
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            {result.total} {locale === "bn" ? "ফল" : "results"}
          </p>
        </div>
        {result.items.length === 0 ? (
          <EmptyState
            title={
              locale === "bn"
                ? "মিল পাওয়া যায়নি। ফিল্টার পরিবর্তন করে দেখুন।"
                : "No matching records. Adjust filters and try again."
            }
          />
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {result.items.map((person) => (
              <PersonCard key={person.id} person={person} locale={locale} />
            ))}
          </div>
        )}
        {result.totalPages > 1 ? (
          <nav
            className="mt-6 flex justify-center gap-2"
            aria-label={locale === "bn" ? "পৃষ্ঠা নির্বাচন" : "Pagination"}
          >
            <Button
              type="button"
              disabled={result.page <= 1}
              onClick={() => update("page", String(result.page - 1))}
            >
              {locale === "bn" ? "আগের" : "Previous"}
            </Button>
            <span className="grid h-10 place-items-center px-3 text-sm">
              {result.page} / {result.totalPages}
            </span>
            <Button
              type="button"
              disabled={result.page >= result.totalPages}
              onClick={() => update("page", String(result.page + 1))}
            >
              {locale === "bn" ? "পরের" : "Next"}
            </Button>
          </nav>
        ) : null}
      </section>
    </div>
  );
}

function Filters({
  locale,
  metadata,
  query,
  update,
  clearAll
}: {
  locale: Locale;
  metadata: FilterMetadata;
  query: PeopleSearchQuery;
  update: (key: string, value: string) => void;
  clearAll: () => void;
}) {
  return (
    <div className="grid gap-4">
      <label className="grid gap-1 text-sm">
        <span>{locale === "bn" ? "অনুসন্ধান শব্দ" : "Search term"}</span>
        <div className="relative">
          <Search
            className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            className="pl-9"
            defaultValue={query.query ?? ""}
            onBlur={(event) => update("query", event.target.value)}
          />
        </div>
      </label>
      <FilterSelect
        label={locale === "bn" ? "এলাকা" : "Area"}
        value={query.area}
        onChange={(value) => update("area", value)}
      >
        {metadata.areas.map((area) => (
          <option key={area.id} value={area.id}>
            {locale === "bn" ? area.nameBn : area.nameEn}
          </option>
        ))}
      </FilterSelect>
      <FilterSelect
        label={locale === "bn" ? "প্রভাবের ক্ষেত্র" : "Influence domain"}
        value={query.influenceDomain}
        onChange={(value) => update("influenceDomain", value)}
      >
        {metadata.influenceDomains.map((value) => (
          <option key={value} value={value}>
            {value.replaceAll("_", " ")}
          </option>
        ))}
      </FilterSelect>
      <FilterSelect
        label={locale === "bn" ? "প্রতিষ্ঠানের ধরন" : "Institution type"}
        value={query.institutionType}
        onChange={(value) => update("institutionType", value)}
      >
        {metadata.institutionTypes.map((value) => (
          <option key={value} value={value}>
            {value.replaceAll("_", " ")}
          </option>
        ))}
      </FilterSelect>
      <FilterSelect
        label={locale === "bn" ? "দাবির ধরন" : "Claim type"}
        value={query.claimType}
        onChange={(value) => update("claimType", value)}
      >
        {metadata.claimTypes.map((value) => (
          <option key={value} value={value}>
            {value.replaceAll("_", " ")}
          </option>
        ))}
      </FilterSelect>
      <FilterSelect
        label={locale === "bn" ? "দাবির অবস্থা" : "Claim status"}
        value={query.claimStatus}
        onChange={(value) => update("claimStatus", value)}
      >
        {metadata.claimStatuses.map((value) => (
          <option key={value} value={value}>
            {value.replaceAll("_", " ")}
          </option>
        ))}
      </FilterSelect>
      <FilterSelect
        label={locale === "bn" ? "আইনি অবস্থা" : "Legal status"}
        value={query.legalStatus}
        onChange={(value) => update("legalStatus", value)}
      >
        {metadata.legalStatuses.map((status) => (
          <option key={status} value={status}>
            {statusLabel(status, locale)}
          </option>
        ))}
      </FilterSelect>
      <FilterSelect
        label={locale === "bn" ? "বিষয়" : "Category"}
        value={query.category}
        onChange={(value) => update("category", value)}
      >
        {metadata.categories.map((category) => (
          <option key={category} value={category}>
            {categoryLabels[category][locale]}
          </option>
        ))}
      </FilterSelect>
      <FilterSelect
        label={locale === "bn" ? "বছর" : "Year"}
        value={query.year}
        onChange={(value) => update("year", value)}
      >
        {metadata.years.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </FilterSelect>
      <FilterSelect
        label={locale === "bn" ? "সাজানো" : "Sort"}
        value={query.sort}
        onChange={(value) => update("sort", value)}
      >
        <option value="recently-verified">
          {locale === "bn" ? "সাম্প্রতিক যাচাই" : "Recently verified"}
        </option>
        <option value="recently-updated">
          {locale === "bn" ? "সাম্প্রতিক হালনাগাদ" : "Recently updated"}
        </option>
        <option value="alphabetical">{locale === "bn" ? "বর্ণানুক্রমিক" : "Alphabetical"}</option>
      </FilterSelect>
      <Button type="button" className="bg-secondary text-secondary-foreground" onClick={clearAll}>
        {locale === "bn" ? "সব মুছুন" : "Clear all"}
      </Button>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  children
}: {
  label: string;
  value?: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1 text-sm">
      <span>{label}</span>
      <Select value={value ?? ""} onChange={(event) => onChange(event.target.value)}>
        <option value="">All</option>
        {children}
      </Select>
    </label>
  );
}
