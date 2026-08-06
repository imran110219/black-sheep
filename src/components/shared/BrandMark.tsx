export function BrandMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <rect width="48" height="48" rx="8" fill="currentColor" opacity="0.12" />
      <path d="M13 30c0-8.2 4.8-14 11-14s11 5.8 11 14v3H13v-3Z" fill="currentColor" />
      <circle cx="18" cy="17" r="5" fill="currentColor" opacity="0.72" />
      <circle cx="30" cy="17" r="5" fill="currentColor" opacity="0.72" />
      <path d="M18 31h12v5H18z" fill="hsl(var(--background))" opacity="0.88" />
    </svg>
  );
}
