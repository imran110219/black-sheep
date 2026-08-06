import { SearchX } from "lucide-react";

export function EmptyState({ title }: { title: string }) {
  return (
    <div className="rounded-md border border-dashed p-10 text-center">
      <SearchX className="mx-auto mb-3 h-8 w-8 text-muted-foreground" aria-hidden="true" />
      <p className="text-sm text-muted-foreground">{title}</p>
    </div>
  );
}
