"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Clock, Leaf, Search, X } from "lucide-react";
import { formatPrice, menu, type MenuCategory, type MenuItem } from "@/data/menu";
import { serviceChargeNote } from "@/data/site";

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export function MenuBrowser() {
  const [active, setActive] = useState(menu[0].id);
  const [query, setQuery] = useState("");
  const tabsRef = useRef<HTMLElement>(null);
  const clickLock = useRef(false);

  const filtered = useMemo(() => {
    const q = norm(query.trim());
    if (!q) return menu;
    return menu
      .map((c) => ({
        ...c,
        groups: c.groups
          .map((g) => ({ ...g, items: g.items.filter((i) => norm(`${i.name} ${i.description ?? ""} ${c.title}`).includes(q)) }))
          .filter((g) => g.items.length),
      }))
      .filter((c) => c.groups.length);
  }, [query]);

  // Scrollspy: highlight the category currently in view.
  useEffect(() => {
    const sections = filtered.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        if (clickLock.current) return;
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-160px 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [filtered]);

  // Keep the active tab visible in the horizontal tab bar.
  useEffect(() => {
    const tab = tabsRef.current?.querySelector<HTMLElement>(`[data-tab="${active}"]`);
    const bar = tabsRef.current;
    if (tab && bar) bar.scrollTo({ left: tab.offsetLeft - bar.clientWidth / 2 + tab.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  // Honour deep links such as /menu/#coffee on first load.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id && menu.some((c) => c.id === id)) {
      setActive(id);
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    }
  }, []);

  const go = (id: string) => {
    setActive(id);
    clickLock.current = true;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    window.setTimeout(() => (clickLock.current = false), 900);
  };

  return (
    <div>
      {/* Sticky category bar */}
      <div className="sticky top-[64px] z-20 border-y border-ink/10 bg-surface/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] items-center gap-4 px-5 sm:px-8 lg:px-12">
          <nav ref={tabsRef} className="no-scrollbar -mx-1 flex flex-1 items-center gap-1 overflow-x-auto py-3" aria-label="Menu categories">
            {filtered.map((c, i) => {
              const firstDrink = c.kind === "drinks" && filtered[i - 1]?.kind === "food";
              return (
                <span key={c.id} className="flex shrink-0 items-center">
                  {firstDrink && <span aria-hidden className="mx-2 h-5 w-px bg-ink/20" />}
                  <button
                    type="button"
                    data-tab={c.id}
                    aria-current={active === c.id ? "true" : undefined}
                    onClick={() => go(c.id)}
                    className={`rounded-full px-4 py-2.5 text-[0.78rem] font-semibold tracking-[0.1em] whitespace-nowrap uppercase transition-colors ${
                      active === c.id ? "bg-ink text-surface" : "text-ink-muted hover:bg-ink/5 hover:text-ink"
                    }`}
                  >
                    {c.title}
                  </button>
                </span>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
          <label className="relative block w-full md:max-w-sm">
            <span className="sr-only">Search the menu</span>
            <Search aria-hidden className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-ink-muted" strokeWidth={2} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find a dish or drink"
              className="h-12 w-full rounded-full border border-ink/15 bg-paper pr-11 pl-11 text-base outline-none placeholder:text-ink-muted/80 focus:border-lagoon focus:ring-2 focus:ring-lagoon/25"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="absolute top-1/2 right-2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full hover:bg-ink/5">
                <X className="size-4" />
              </button>
            )}
          </label>
          <p className="text-sm text-ink-muted">{serviceChargeNote}</p>
        </div>

        {filtered.length === 0 && (
          <p className="py-24 text-center text-lg text-ink-muted" role="status">
            Nothing matches &ldquo;{query}&rdquo;. Try &ldquo;snapper&rdquo;, &ldquo;latte&rdquo; or &ldquo;mango&rdquo;.
          </p>
        )}
      </div>

      <div className="pb-24">
        {filtered.map((c) => (
          <Category key={c.id} category={c} />
        ))}
      </div>
    </div>
  );
}

function Category({ category: c }: { category: MenuCategory }) {
  const dark = c.id === "coffee";
  return (
    <section
      id={c.id}
      aria-labelledby={`${c.id}-title`}
      className={`scroll-mt-[36px] ${dark ? "on-dark my-10 bg-coffee py-16 text-surface md:py-20" : "py-12 md:py-16"}`}
    >
      {dark && <div aria-hidden className="pattern-sand -mt-16 mb-12 h-8 md:-mt-20" />}
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className={`grid gap-6 border-t pt-8 md:grid-cols-12 ${dark ? "border-surface/20" : "border-ink/15"}`}>
          <header className="md:col-span-4">
            <h2 id={`${c.id}-title`} className="type-title">
              {c.title}
            </h2>
            {c.availability && (
              <p className={`type-label mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 ${dark ? "bg-surface/10" : "bg-lagoon-soft text-lagoon"}`}>
                <Clock aria-hidden className="size-3.5" strokeWidth={2} />
                {c.availability}
              </p>
            )}
            {c.intro && <p className={`mt-4 max-w-xs ${dark ? "text-surface/75" : "text-ink-muted"}`}>{c.intro}</p>}
          </header>
          <div className="space-y-12 md:col-span-8">
            {c.groups.map((g, gi) => (
              <div key={g.title ?? gi}>
                {g.title && (
                  <h3 className={`type-label mb-2 ${dark ? "text-sunset" : "text-snapper"}`}>
                    {g.title}
                    {g.note && <span className={`ml-2 font-normal tracking-normal normal-case ${dark ? "text-surface/70" : "text-ink-muted"}`}>— {g.note}</span>}
                  </h3>
                )}
                <ul className="grid gap-x-12 lg:grid-cols-2">
                  {g.items.map((item) => (
                    <Item key={item.name} item={item} dark={dark} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ item, dark }: { item: MenuItem; dark: boolean }) {
  return (
    <li className={`border-b py-5 ${dark ? "border-surface/12" : "border-ink/10"}`}>
      <div className="flex items-baseline gap-3">
        <h4 className="font-display text-[1.2rem] leading-snug font-medium">{item.name}</h4>
        <span className="leader" aria-hidden style={dark ? { borderColor: "rgba(246,239,228,.3)" } : undefined} />
        <span className={`shrink-0 font-semibold tabular-nums ${item.price == null ? "text-sm italic opacity-80" : ""}`}>{formatPrice(item.price)}</span>
      </div>
      {item.tags?.length ? (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {item.tags.map((t) =>
            t === "chefs-pick" ? (
              <span key={t} className="type-label rounded-full bg-snapper-soft px-2.5 py-1 text-[0.7rem] text-snapper-deep">
                Chef&rsquo;s pick
              </span>
            ) : (
              <span key={t} className={`type-label inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.7rem] ${dark ? "bg-surface/10" : "bg-[#E3ECDD] text-palm"}`}>
                <Leaf aria-hidden className="size-3" strokeWidth={2} />
                {t === "vegan" ? "Vegan" : "Vegetarian"}
              </span>
            ),
          )}
        </div>
      ) : null}
      {item.description && <p className={`mt-2 text-[0.9rem] leading-relaxed ${dark ? "text-surface/75" : "text-ink-muted"}`}>{item.description}</p>}
    </li>
  );
}
