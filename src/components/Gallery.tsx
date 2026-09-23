"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery, galleryCategories, type GalleryCategory } from "@/data/content";
import { photos } from "@/data/photos";
import { Photo } from "./Photo";
import { hasPhoto } from "@/lib/photos";

const shown = gallery.filter((g) => hasPhoto(g.photo));
const categories = galleryCategories.filter((c) => shown.some((g) => g.category === c));

const spans = {
  large: "col-span-2 row-span-2",
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

/** Editorial asymmetric gallery with category filter and an accessible lightbox. */
export function Gallery({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<GalleryCategory | "All">("All");
  const [index, setIndex] = useState<number | null>(null);
  const items = (filter === "All" ? shown : shown.filter((g) => g.category === filter)).slice(0, limit);

  return (
    <div>
      {!limit && (
        <div className="no-scrollbar -mx-5 mb-10 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter gallery">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={`type-label shrink-0 rounded-full px-4 py-2.5 transition-colors ${
                filter === c ? "bg-ink text-surface" : "ring-1 ring-ink/15 hover:bg-ink/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <ul className="grid auto-rows-[42vw] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[28vw] sm:gap-4 md:grid-cols-3 md:auto-rows-[22vw] lg:grid-cols-4 lg:auto-rows-[17vw] xl:auto-rows-[220px]">
        {items.map((g, i) => (
          <li key={g.photo} className={`${spans[g.size]} min-h-0`} data-reveal style={{ ["--reveal-delay" as string]: `${(i % 4) * 70}ms` }}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block h-full w-full overflow-hidden rounded-[var(--radius-md)] text-left"
              aria-label={`Open photo: ${photos[g.photo].alt}`}
            >
              <Photo id={g.photo} className="h-full w-full" caption={false} imgClassName="transition-transform duration-[1.1s] ease-out group-hover:scale-105" />
              <span className="type-label absolute top-3 left-3 rounded-full bg-surface/90 px-2.5 py-1 text-[0.7rem] text-ink opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {g.category}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {index !== null && <Lightbox items={items} index={index} setIndex={setIndex} />}
    </div>
  );
}

function Lightbox({ items, index, setIndex }: { items: typeof gallery; index: number; setIndex: (i: number | null) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const opener = useRef<Element | null>(null);
  const touchX = useRef<number | null>(null);
  const n = items.length;
  const prev = useCallback(() => setIndex((index - 1 + n) % n), [index, n, setIndex]);
  const next = useCallback(() => setIndex((index + 1) % n), [index, n, setIndex]);

  useEffect(() => {
    opener.current = document.activeElement;
    closeRef.current?.focus();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      (opener.current as HTMLElement | null)?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Tab") {
        const f = document.querySelectorAll<HTMLElement>("#lightbox button");
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, setIndex]);

  const item = items[index];
  const slot = photos[item.photo];
  const btn = "inline-flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-ink";

  return (
    <div
      id="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="on-dark fixed inset-0 z-[70] flex flex-col bg-night/95 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && setIndex(null)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between p-4 text-white/80 sm:p-6">
        <p className="type-label tabular-nums" aria-live="polite">
          {index + 1} / {n} · {item.category}
        </p>
        <button ref={closeRef} type="button" onClick={() => setIndex(null)} aria-label="Close" className={btn}>
          <X className="size-5" />
        </button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20" onClick={(e) => e.target === e.currentTarget && setIndex(null)}>
        <figure key={item.photo} className="flex h-full max-h-[78vh] w-full max-w-5xl flex-col motion-safe:animate-[fade-up_.45s_both]">
          <Photo id={item.photo} className="min-h-0 w-full flex-1 rounded-[var(--radius-md)] bg-night!" imgClassName="object-contain!" />
          <figcaption className="mt-4 text-center text-sm text-white/80">{slot.alt}</figcaption>
        </figure>
        <button type="button" onClick={prev} aria-label="Previous photo" className={`${btn} absolute top-1/2 left-4 hidden -translate-y-1/2 sm:inline-flex`}>
          <ChevronLeft className="size-6" />
        </button>
        <button type="button" onClick={next} aria-label="Next photo" className={`${btn} absolute top-1/2 right-4 hidden -translate-y-1/2 sm:inline-flex`}>
          <ChevronRight className="size-6" />
        </button>
      </div>
      <div className="flex justify-center gap-3 p-4 pb-8 sm:hidden">
        <button type="button" onClick={prev} aria-label="Previous photo" className={btn}>
          <ChevronLeft className="size-6" />
        </button>
        <button type="button" onClick={next} aria-label="Next photo" className={btn}>
          <ChevronRight className="size-6" />
        </button>
      </div>
    </div>
  );
}
