// Ghost Tree logo lockup. The two finished variants swap by theme via CSS
// (keyed on html[data-theme]): dark-ink logo on light, white logo on dark.
export default function BrandLogo({
  size = 36,
  className,
  title
}: {
  size?: number;
  className?: string;
  title?: string;
}) {
  return (
    <span
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={`brand-logo${className ? ` ${className}` : ""}`}
      style={{ height: size }}
    />
  );
}
