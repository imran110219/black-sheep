"use client";

import { Check, Copy, Printer } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ShareButton({ label }: { label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      type="button"
      className="bg-secondary text-secondary-foreground"
      onClick={async () => {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      }}
      aria-label={label}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      <span>{label}</span>
    </Button>
  );
}

export function PrintButton({ label }: { label: string }) {
  return (
    <Button
      type="button"
      className="bg-secondary text-secondary-foreground"
      onClick={() => window.print()}
      aria-label={label}
    >
      <Printer className="h-4 w-4" />
      <span>{label}</span>
    </Button>
  );
}
