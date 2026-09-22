import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type Variant = "primary" | "outline" | "ghost" | "light" | "outline-light" | "lagoon";

const variants: Record<Variant, string> = {
  primary: "bg-snapper text-white hover:bg-snapper-deep",
  lagoon: "bg-lagoon text-white hover:bg-[#175957]",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-surface",
  ghost: "text-ink hover:text-snapper px-0!",
  light: "bg-surface text-ink hover:bg-white",
  "outline-light": "border border-white/55 text-white hover:bg-white hover:text-ink",
};

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 type-label tracking-[0.12em] transition-all duration-300 ease-out active:scale-[0.98]";

type ButtonProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
  icon?: "arrow" | "external" | "none";
} & Omit<ComponentProps<"a">, "href">;

/** Link styled as a button. External links open in a new tab. */
export function Button({ href, variant = "primary", children, className = "", external, icon = "arrow", ...rest }: ButtonProps) {
  const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
  const cls = `${base} ${variants[variant]} ${className}`;
  const Icon = icon === "external" ? ArrowUpRight : ArrowRight;
  const inner = (
    <>
      <span>{children}</span>
      {icon !== "none" && (
        <Icon aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.75} />
      )}
    </>
  );
  if (isExternal) {
    const newTab = /^https?:/.test(href);
    return (
      <a href={href} className={cls} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {inner}
    </Link>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`type-label flex items-center gap-3 text-snapper ${className}`}>
      <span aria-hidden className="inline-block h-px w-8 bg-current" />
      {children}
    </p>
  );
}

export function Container({ children, className = "", as: Tag = "div" }: { children: ReactNode; className?: string; as?: "div" | "section" | "header" }) {
  return <Tag className={`mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</Tag>;
}

/** Thin decorative strip of the scale-arc pattern. */
export function ScaleStrip({ className = "", tone = "cream" }: { className?: string; tone?: "cream" | "sand" | "snapper" | "snapper-line" }) {
  const cls = { cream: "pattern-cream", sand: "pattern-sand", snapper: "pattern-snapper", "snapper-line": "pattern-snapper-line" }[tone];
  return <div aria-hidden className={`h-8 w-full ${cls} ${className}`} />;
}

export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const external = /^https?:/.test(href);
  const cls = `group inline-flex items-center gap-1.5 type-label text-lagoon underline-offset-4 hover:underline ${className}`;
  const inner = (
    <>
      {children}
      <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
