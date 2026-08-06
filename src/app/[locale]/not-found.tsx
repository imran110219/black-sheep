import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <section className="rounded-md border p-8">
      <h1 className="text-2xl font-semibold">Record not found</h1>
      <p className="mt-2 text-muted-foreground">
        The requested public record could not be located.
      </p>
      <Link href="/" className="mt-4 inline-flex text-accent hover:underline">
        Return home
      </Link>
    </section>
  );
}
