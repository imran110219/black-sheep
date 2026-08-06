export function ErrorState({ title }: { title: string }) {
  return (
    <div className="rounded-md border border-destructive/40 bg-destructive/10 p-6 text-sm">
      {title}
    </div>
  );
}
