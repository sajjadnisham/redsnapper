"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { foodCategories } from "@/data/content";
import { Photo } from "./Photo";

/** Horizontal, swipeable editorial cards — one per food & drink category. */
export function FoodScroller() {
  const ref = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("li");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 320) + 24) * 2, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="mb-6 hidden justify-end gap-2 md:flex">
        {[
          { dir: -1 as const, label: "Previous categories", Icon: ArrowLeft },
          { dir: 1 as const, label: "Next categories", Icon: ArrowRight },
        ].map(({ dir, label, Icon }) => (
          <button
            key={label}
            type="button"
            onClick={() => scroll(dir)}
            aria-label={label}
            className="inline-flex size-12 items-center justify-center rounded-full border border-ink/20 transition-colors hover:border-ink hover:bg-ink hover:text-surface"
          >
            <Icon className="size-5" strokeWidth={1.75} />
          </button>
        ))}
      </div>
      <ul
        ref={ref}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-4 sm:-mx-8 sm:scroll-px-8 sm:px-8 md:gap-6 lg:-mx-12 lg:scroll-px-12 lg:px-12"
        aria-label="Food and drink categories"
      >
        {foodCategories.map((c, i) => (
          <li key={c.title} className="w-[78%] shrink-0 snap-start sm:w-[44%] lg:w-[29%] xl:w-[23%]">
            <Link href={`/menu/#${c.menuId}`} className="group block">
              <div className="overflow-hidden rounded-[var(--radius-lg)]">
                <Photo id={c.photo} className="aspect-[4/5]" imgClassName="transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
              </div>
              <div className="mt-5 flex items-baseline gap-3">
                <span className="type-label text-ink-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="type-section">{c.title}</h3>
              </div>
              <p className="mt-2 text-[0.95rem] text-ink-muted">{c.blurb}</p>
              <span className="type-label mt-4 inline-flex items-center gap-1.5 text-snapper">
                Explore menu
                <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
