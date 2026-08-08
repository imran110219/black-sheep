export function BrandMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <rect width="48" height="48" rx="8" fill="currentColor" opacity="0.12" />
      <path
        d="M11 13.5c4.5-1.2 8.8-.5 13 2.1v20.9c-4.2-2.6-8.5-3.3-13-2.1V13.5Z"
        fill="currentColor"
      />
      <path
        d="M37 13.5c-4.5-1.2-8.8-.5-13 2.1v20.9c4.2-2.6 8.5-3.3 13-2.1V13.5Z"
        fill="currentColor"
        opacity="0.72"
      />
      <path d="M24 15.6v20.9" stroke="hsl(var(--background))" strokeWidth="2" />
      <path
        d="M14.8 19.2c2.6-.4 5.1.1 7.2 1.2M14.8 24c2.6-.4 5.1.1 7.2 1.2M33.2 19.2c-2.6-.4-5.1.1-7.2 1.2M33.2 24c-2.6-.4-5.1.1-7.2 1.2"
        stroke="hsl(var(--background))"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}
