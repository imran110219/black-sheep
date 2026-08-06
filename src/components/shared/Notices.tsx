import { AlertTriangle, FileCheck2, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function EditorialNotice({
  children,
  tone = "neutral"
}: {
  children: React.ReactNode;
  tone?: "neutral" | "amber" | "critical";
}) {
  const Icon = tone === "critical" ? AlertTriangle : tone === "amber" ? Info : FileCheck2;
  return (
    <div
      className={cn(
        "flex gap-3 rounded-md border p-4 text-sm",
        tone === "amber" && "border-amber-500/40 bg-amber-500/10",
        tone === "critical" && "border-destructive/40 bg-destructive/10",
        tone === "neutral" && "bg-muted/60"
      )}
    >
      <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <div>{children}</div>
    </div>
  );
}

export function PresumptionOfInnocenceNotice({ text }: { text: string }) {
  return <EditorialNotice tone="amber">{text}</EditorialNotice>;
}

export function DemoDataNotice({ text = "Demo data" }: { text?: string }) {
  return (
    <span className="inline-flex rounded-md border border-amber-500/40 bg-amber-500/10 px-2 py-1 text-xs font-medium">
      {text}
    </span>
  );
}
