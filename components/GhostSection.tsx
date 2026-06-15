import Image from "next/image";

// Ghosted band — decorative image texture behind content, washed toward the scheme
// background by the .ghost-scrim. Dark by default (always-dark pins the zone in both themes).
export default function GhostSection({
  src,
  className,
  dark = true,
  ariaLabel,
  children
}: {
  src: string;
  className?: string;
  dark?: boolean;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`${dark ? "always-dark " : ""}ghosted${className ? ` ${className}` : ""}`} aria-label={ariaLabel}>
      <div className="ghost-media" aria-hidden="true">
        <Image src={src} alt="" fill sizes="100vw" className="ghost-img" />
        <div className="ghost-scrim" />
      </div>
      <div className="ghost-fore">{children}</div>
    </section>
  );
}
