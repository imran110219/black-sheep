import {
  Archive,
  Building2,
  Landmark,
  MapPinned,
  Network,
  Search,
  ShieldAlert
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DemoDataNotice,
  EditorialNotice,
  PresumptionOfInnocenceNotice
} from "@/components/shared/Notices";
import { PersonCard } from "@/features/people/PersonCard";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/domain/common";
import { pageMetadata } from "@/lib/metadata";
import { createBlackSheepRepository } from "@/repositories/repository-factory";
import { getPublicMockIndex } from "@/repositories/record-context";

const influenceLinks = [
  {
    icon: Landmark,
    bn: "রাজনীতি ও রাষ্ট্রক্ষমতা",
    en: "Politics and state power",
    query: "POLITICS"
  },
  { icon: Building2, bn: "ব্যাংক ও আর্থিক খাত", en: "Banking and finance", query: "BANKING" },
  { icon: MapPinned, bn: "ভূমি ও সম্পত্তি", en: "Land and property", query: "LAND" },
  {
    icon: Archive,
    bn: "ব্যবসা ও সরকারি চুক্তি",
    en: "Business and public contracts",
    query: "PUBLIC_CONTRACTS"
  },
  {
    icon: ShieldAlert,
    bn: "সহিংসতা ও মানবাধিকার",
    en: "Violence and human rights",
    query: "HUMAN_RIGHTS"
  },
  {
    icon: Network,
    bn: "পরিবার ও ক্ষমতার নেটওয়ার্ক",
    en: "Family and power networks",
    query: "PATRONAGE"
  }
];

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Black Sheep",
    description:
      locale === "bn"
        ? "ক্ষমতা, কর্মকাণ্ড, সম্পর্ক ও বিতর্কের অনুসন্ধানযোগ্য ইতিহাস"
        : "A searchable history of power, conduct, relationships, and controversy",
    locale,
    path: ""
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const repo = createBlackSheepRepository();
  const [profiles, recentCases] = await Promise.all([
    repo.getRecentProfiles(3),
    repo.getRecentCases(3)
  ]);
  const index = getPublicMockIndex();
  const featuredAreas = index.areas.filter((area) => area.type === "DISTRICT").slice(0, 6);
  const featuredClaims = index.claims.slice(0, 3);

  return (
    <div className="grid gap-14">
      <section className="grid min-h-[68vh] content-center gap-8 border-y bg-primary px-4 py-12 text-primary-foreground md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-8">
          <div className="max-w-4xl">
            <DemoDataNotice text={t("common.demoData")} />
            <p className="mt-5 text-sm uppercase tracking-widest text-primary-foreground/60">
              {locale === "bn"
                ? "ক্ষমতা, কর্মকাণ্ড, সম্পর্ক ও বিতর্কের অনুসন্ধানযোগ্য ইতিহাস"
                : "Searchable history of power, conduct, relationships, and controversy"}
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-normal md:text-7xl">
              {locale === "bn"
                ? "ক্ষমতার আড়ালের মানুষ ও তাদের ইতিহাস"
                : "People behind power, and the history around them"}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-primary-foreground/75">
              {locale === "bn"
                ? "Black Sheep-এ জনজীবনে প্রভাবশালী ও বিতর্কিত ব্যক্তিদের রাজনৈতিক ভূমিকা, কর্মকাণ্ড, অভিযোগ, মামলা, সম্পদ, প্রতিষ্ঠান, এলাকা, সম্পর্ক ও ঐতিহাসিক প্রভাব এক জায়গায় তুলে ধরা হয়।"
                : "Black Sheep brings together public-interest profiles of influential and controversial figures: their roles, actions, allegations, cases, assets, institutions, places, relationships, and historical impact."}
            </p>
          </div>
          <form action={`/${locale}/people`} className="flex max-w-3xl gap-2">
            <label className="sr-only" htmlFor="home-search">
              {t("actions.search")}
            </label>
            <Input
              id="home-search"
              name="query"
              placeholder={
                locale === "bn"
                  ? "নাম, এলাকা, ব্যাংক, প্রতিষ্ঠান, ঘটনা বা রাজনৈতিক সময়কাল খুঁজুন"
                  : "Search name, area, bank, institution, incident, or political era"
              }
              className="h-12 bg-background text-foreground"
            />
            <Button type="submit" className="h-12 bg-accent text-accent-foreground">
              <Search className="h-4 w-4" />
              {t("actions.search")}
            </Button>
          </form>
          <PresumptionOfInnocenceNotice
            text={
              locale === "bn"
                ? "কোনো অভিযোগকে আদালতের রায় হিসেবে এবং কোনো সম্পর্ককে অপরাধের প্রমাণ হিসেবে উপস্থাপন করা হয় না।"
                : "No allegation is presented as a court finding, and no relationship is presented as proof of wrongdoing."
            }
          />
        </div>
      </section>

      <section>
        <SectionHeading
          title={locale === "bn" ? "প্রধান প্রোফাইল" : "Featured profiles"}
          copy={
            locale === "bn"
              ? "প্রথমে পরিচয়, সময়কাল, এলাকা ও প্রভাবের ধরন; পরে নথি ও আইনি স্তর।"
              : "Identity, era, place, and influence first; records and legal detail remain available underneath."
          }
        />
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {profiles.map((person) => (
            <PersonCard key={person.id} person={person} cases={index.cases} locale={locale} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading
          title={locale === "bn" ? "প্রভাবের ধরন ধরে দেখুন" : "Explore by influence"}
          copy={
            locale === "bn"
              ? "রাজনীতি, ব্যাংক, ভূমি, ব্যবসা, ধর্মীয় প্রতিষ্ঠান ও নেটওয়ার্ক একসঙ্গে খুঁজুন।"
              : "Browse politics, banking, land, business, institutions, and networks as public-interest themes."
          }
        />
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {influenceLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.query}
                href={`/people?query=${item.query}`}
                locale={locale}
                className="flex items-center gap-3 rounded-md border bg-background p-4 hover:bg-muted"
              >
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <span className="font-medium">{locale === "bn" ? item.bn : item.en}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            title={locale === "bn" ? "এলাকা ধরে অনুসন্ধান" : "Explore by place"}
            copy={
              locale === "bn"
                ? "জেলা, রাজনৈতিক ভিত্তি, ব্যবসায়িক কেন্দ্র, ভূমি আগ্রহ ও ঘটনার স্থান।"
                : "Districts, political bases, business centers, land interests, and incident locations."
            }
          />
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {featuredAreas.map((area) => (
              <Link
                key={area.id}
                href={`/people?query=${locale === "bn" ? area.nameBn : area.nameEn}`}
                locale={locale}
                className="rounded-md border bg-background px-4 py-3 hover:bg-muted"
              >
                {locale === "bn" ? area.nameBn : area.nameEn}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading
            title={locale === "bn" ? "ঐতিহাসিক সময়কাল" : "Historical eras"}
            copy={
              locale === "bn"
                ? "সম্পাদকীয় নীতিমালা ছাড়া রাজনৈতিকভাবে ভারী লেবেল hardcode করা হয়নি।"
                : "Era labels stay neutral until backed by a clear editorial policy."
            }
          />
          <div className="mt-5 grid gap-2">
            {[
              "Pre-independence",
              "Post-1971",
              "Military rule",
              "Democratic transition",
              "Recent political eras"
            ].map((era) => (
              <div key={era} className="rounded-md border bg-background px-4 py-3">
                {locale === "bn" ? eraLabelBn(era) : era}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <SectionHeading
          title={locale === "bn" ? "ফিচার্ড ডসিয়ার" : "Featured dossiers"}
          copy={
            locale === "bn"
              ? "থিমভিত্তিক দীর্ঘপাঠের জন্য প্রাথমিক সংগ্রহ কাঠামো।"
              : "Starter collection structure for thematic long-form accountability dossiers."
          }
        />
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            ["bank-capture", "ব্যাংক প্রভাব নেটওয়ার্ক", "Bank influence networks"],
            ["land-and-power", "ভূমি ও রাজনৈতিক ক্ষমতা", "Land and political power"],
            ["public-procurement", "সরকারি ক্রয় বিতর্ক", "Public procurement controversies"]
          ].map(([slug, bn, en]) => (
            <Link
              key={slug}
              href={`/people?query=${slug}`}
              locale={locale}
              className="rounded-md border bg-background p-5 hover:bg-muted"
            >
              <p className="text-lg font-semibold">{locale === "bn" ? bn : en}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                {locale === "bn"
                  ? "ব্যক্তি, প্রতিষ্ঠান, এলাকা, ঘটনা, সময়রেখা ও উৎস একত্রে দেখার জন্য।"
                  : "For reading people, institutions, places, incidents, timelines, and sources together."}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading
          title={locale === "bn" ? "সাম্প্রতিক হালনাগাদ" : "Latest updates"}
          copy={
            locale === "bn"
              ? "শুধু মামলা নয়; দাবি, উৎস, সংশোধন ও প্রোফাইল সম্প্রসারণও দেখানো হয়।"
              : "Not only recent cases: claims, sources, corrections, and profile expansions are surfaced too."
          }
        />
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {featuredClaims.map((claim) => (
            <article key={claim.id} className="rounded-md border bg-background p-5">
              <p className="text-sm text-muted-foreground">{claim.status.replaceAll("_", " ")}</p>
              <h3 className="mt-2 font-semibold">
                {locale === "bn" ? claim.titleBn : claim.titleEn}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {locale === "bn" ? claim.summaryBn : claim.summaryEn}
              </p>
            </article>
          ))}
          {recentCases.slice(0, 1).map((record) => (
            <article key={record.id} className="rounded-md border bg-background p-5">
              <p className="text-sm text-muted-foreground">
                {locale === "bn" ? "মামলার অবস্থা পরিবর্তন" : "Case status update"}
              </p>
              <h3 className="mt-2 font-semibold">
                {locale === "bn" ? record.titleBn : record.titleEn}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{record.caseNumber}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <EditorialNotice>{t("home.methodologyPreview")}</EditorialNotice>
        <EditorialNotice tone="amber">{t("home.replyCallout")}</EditorialNotice>
      </section>
    </div>
  );
}

function SectionHeading({ title, copy }: { title: string; copy: string }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{copy}</p>
    </div>
  );
}

function eraLabelBn(era: string) {
  const labels: Record<string, string> = {
    "Pre-independence": "স্বাধীনতার পূর্বকাল",
    "Post-1971": "১৯৭১-পরবর্তী সময়",
    "Military rule": "সামরিক শাসনের সময়",
    "Democratic transition": "গণতান্ত্রিক রূপান্তর",
    "Recent political eras": "সাম্প্রতিক রাজনৈতিক সময়কাল"
  };
  return labels[era];
}
