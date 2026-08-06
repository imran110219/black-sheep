"use client";

import { ErrorState } from "@/components/shared/ErrorState";

export default function ErrorPage({ error }: { error: Error }) {
  return <ErrorState title={error.message || "Something went wrong"} />;
}
