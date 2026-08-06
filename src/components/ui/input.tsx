import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm transition placeholder:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
