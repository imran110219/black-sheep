import { LoadingSkeleton } from "@/components/shared/LoadingSkeleton";

export default function Loading() {
  return (
    <div className="grid gap-4">
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
    </div>
  );
}
