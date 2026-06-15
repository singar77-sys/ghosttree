// G2 Canopy Eye — the ghost sigil. Vesica Piscis eye + trunk. Depth layer; inherits currentColor.
export default function Sigil({
  size = 28,
  className,
  title
}: {
  size?: number;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path d="M10 40 Q40 16 70 40 Q40 64 10 40 Z" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="40" cy="40" r="6.5" stroke="currentColor" strokeWidth="2.4" />
      <line x1="40" y1="46.5" x2="40" y2="72" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
}
