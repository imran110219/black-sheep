import type { Locale } from "@/domain/common";

const content = {
  methodology: {
    bn: [
      "পদ্ধতি",
      "অন্তর্ভুক্তির মানদণ্ড, উৎসের স্তর, যাচাই প্রক্রিয়া, অভিযোগ-চার্জ-দণ্ডের পার্থক্য, রেকর্ড হালনাগাদ, দ্বন্দ্ব ব্যবস্থাপনা ও আর্কাইভিং এখানে ব্যাখ্যা করা হয়েছে।"
    ],
    en: [
      "Methodology",
      "Inclusion criteria, source hierarchy, verification process, the difference between allegation, charge, and conviction, record updates, conflict handling, and archiving are explained here."
    ]
  },
  "editorial-policy": {
    bn: [
      "সম্পাদকীয় নীতি",
      "নির্ভুলতা, নিরপেক্ষ ভাষা, নির্দোষতার অনুমান, জনস্বার্থ মানদণ্ড, সংবেদনশীল তথ্য, সংশোধন ও স্বাধীনতা এই নীতির মূল বিষয়।"
    ],
    en: [
      "Editorial policy",
      "Accuracy, neutral wording, presumption of innocence, public-interest standard, sensitive information, corrections, and independence guide this archive."
    ]
  },
  "source-policy": {
    bn: [
      "উৎস নীতি",
      "প্রাথমিক উৎস, আদালত নথি, সরকারি রেকর্ড, অডিট রিপোর্ট, অনুসন্ধানী প্রতিবেদন, সংবাদ, আর্কাইভড লিংক এবং বিতর্কিত বা প্রত্যাহারকৃত উৎস আলাদাভাবে চিহ্নিত করা হয়।"
    ],
    en: [
      "Source policy",
      "Primary sources, court documents, government records, audit reports, investigative reporting, news reporting, archived links, and disputed or retracted sources are separately labelled."
    ]
  },
  "right-of-reply": {
    bn: [
      "জবাবের অধিকার",
      "বিষয় ব্যক্তি প্রকাশিত সম্পাদকীয় প্রক্রিয়ার মাধ্যমে সহায়ক নথিসহ জবাব পাঠাতে পারেন। জবাব যাচাই শেষে সংশ্লিষ্ট রেকর্ডে প্রদর্শিত হয়।"
    ],
    en: [
      "Right of reply",
      "A subject may submit a response with supporting records through the published editorial process. Reviewed responses are displayed with the related record."
    ]
  },
  privacy: {
    bn: [
      "গোপনীয়তা",
      "অপ্রয়োজনীয় ব্যক্তিগত শনাক্তকারী, ব্যক্তিগত ঠিকানা, ফোন, ইমেইল বা আর্থিক বিবরণ প্রকাশ করা হয় না। বর্তমানে অ্যানালিটিক্স সংগ্রহ করা হয় না।"
    ],
    en: [
      "Privacy",
      "Unnecessary personal identifiers, private addresses, phone numbers, emails, and private financial details are not published. Analytics are not currently collected."
    ]
  },
  legal: {
    bn: [
      "আইনি",
      "এটি তথ্যভিত্তিক জনস্বার্থ আর্কাইভ; দোষ ঘোষণা নয়। উৎসভিত্তিক অ্যাট্রিবিউশন, অধিক্ষেত্র সতর্কতা, সংশোধন অনুরোধ ও বাহ্যিক লিংক ডিসক্লেইমার প্রযোজ্য।"
    ],
    en: [
      "Legal",
      "This is an informational public-interest archive, not a declaration of guilt. Source attribution, jurisdiction warnings, correction requests, and external-link disclaimers apply."
    ]
  },
  about: {
    bn: [
      "সম্পর্কে",
      "Black Sheep ক্ষমতা, নথি, মামলা ও জবাবদিহির তথ্যকে নিরপেক্ষভাবে সাজায়। এটি রেটিং, ভোটিং, জনমত আদালত বা অপরাধী তালিকা নয়। ভবিষ্যৎ রোডম্যাপে পাবলিক API, সম্পাদকীয় সিস্টেম ও উন্নত অনুসন্ধান আছে।"
    ],
    en: [
      "About",
      "Black Sheep organizes power, documents, cases, and accountability information neutrally. It is not a rating system, voting site, public trial, or criminal list. The roadmap includes a public API, editorial system, and stronger search."
    ]
  }
} as const;

export async function PolicyPage({
  params,
  kind
}: {
  params: Promise<{ locale: Locale }>;
  kind: keyof typeof content;
}) {
  const { locale } = await params;
  const selected = content[kind];
  const [title, body] = selected[locale];
  return (
    <article className="prose prose-slate max-w-3xl dark:prose-invert">
      <h1>{title}</h1>
      <p>{body}</p>
      <h2>{locale === "bn" ? "মূল নীতি" : "Core standards"}</h2>
      <ul>
        <li>
          {locale === "bn"
            ? "অভিযোগ, তদন্ত, চার্জ, দণ্ড, খালাস ও খারিজ পৃথকভাবে দেখানো হয়।"
            : "Allegation, investigation, charge, conviction, acquittal, and dismissal are displayed separately."}
        </li>
        <li>
          {locale === "bn"
            ? "কোনো পূর্ণ কপিরাইটেড সংবাদ আর্টিকেল পুনরুৎপাদন করা হয় না।"
            : "Full copyrighted news articles are not reproduced."}
        </li>
        <li>
          {locale === "bn"
            ? "ব্যক্তিগত শনাক্তকারী জনস্বার্থ ছাড়া প্রকাশ করা হয় না।"
            : "Private identifiers are not published without a public-interest basis."}
        </li>
      </ul>
    </article>
  );
}
