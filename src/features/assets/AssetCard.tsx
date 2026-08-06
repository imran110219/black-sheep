import type { AssetRecord } from "@/domain/asset";
import type { Locale } from "@/domain/common";
import { formatDate } from "@/lib/dates";
import { verificationLabels } from "@/lib/status";

export function AssetCard({ asset, locale }: { asset: AssetRecord; locale: Locale }) {
  return (
    <article className="rounded-md border p-4">
      <h3 className="font-medium">{asset.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {asset.assetType.replaceAll("_", " ")} · {asset.city}, {asset.country}
      </p>
      <p className="mt-2 text-sm">{asset.description}</p>
      <p className="mt-2 text-sm">
        {locale === "bn" ? "রিপোর্টেড/নথিভুক্ত মূল্য" : "Reported/documented value"}:{" "}
        {asset.value
          ? `${asset.value.toLocaleString()} ${asset.currency}`
          : locale === "bn"
            ? "উল্লেখ নেই"
            : "Not stated"}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">
        {verificationLabels[asset.verificationStatus][locale]} ·{" "}
        {formatDate(asset.updatedAt, locale)}
      </p>
    </article>
  );
}
