import { asset } from "@/lib/asset";

/**
 * Brand marks.
 *
 * <BrandLogo> — the official circular logo (public/brand/logo.jpg), never redrawn,
 * recoloured or stretched. Brand Book: minimum 120px on screen, clear space ≥ the
 * height of the "R". Below 120px use <Wordmark>, the name set in Fraunces 600.
 */
export function BrandLogo({ size = 160, className = "", priority = false }: { size?: number; className?: string; priority?: boolean }) {
  const px = Math.max(120, size);
  return (
    // Circular crop only trims the square file's white corners; the mark itself is untouched.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(px <= 480 ? "/brand/logo-480.webp" : "/brand/logo.jpg")}
      alt="Red Snapper & Coffee Beans — Hulhumalé, Maldives, est. 2020"
      width={px}
      height={px}
      loading={priority ? "eager" : "lazy"}
      className={`rounded-full ${className}`}
      style={{ width: px, height: px }}
    />
  );
}

export function Wordmark({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={`flex flex-col font-display leading-none ${light ? "text-white" : "text-ink"} ${className}`}>
      <span className="text-[1.3rem] font-semibold tracking-[-0.01em] sm:text-[1.45rem]">
        Red Snapper <span className={`font-medium italic ${light ? "text-sunset" : "text-snapper"}`}>&amp;</span>
      </span>
      <span className="mt-1 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.34em] opacity-80">Coffee Beans</span>
    </span>
  );
}
