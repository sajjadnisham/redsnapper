import type { ReactNode } from "react";
import type { PhotoId } from "@/data/photos";
import { Photo } from "./Photo";

/** Full-bleed photographic header for inner pages. */
export function PageHero({
  photo,
  eyebrow,
  title,
  lede,
  children,
  tall = false,
}: {
  photo: PhotoId;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  tall?: boolean;
}) {
  return (
    <section className={`on-dark relative isolate flex items-end overflow-hidden bg-ink text-white ${tall ? "min-h-[92svh]" : "min-h-[72svh] md:min-h-[78vh]"}`}>
      <Photo id={photo} priority className="absolute! inset-0 -z-10 h-full w-full" imgClassName="hero-zoom" captionAt="tr" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/25" />
      <div className="hero-in mx-auto w-full max-w-[1320px] px-5 pt-36 pb-14 sm:px-8 md:pb-20 lg:px-12">
        <p className="type-label flex items-center gap-3 text-sand">
          <span aria-hidden className="inline-block h-px w-8 bg-current" />
          {eyebrow}
        </p>
        <h1 className="type-hero mt-5 max-w-4xl">{title}</h1>
        {lede && <p className="type-lede mt-6 max-w-2xl text-white/85">{lede}</p>}
        {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
