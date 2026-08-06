import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
