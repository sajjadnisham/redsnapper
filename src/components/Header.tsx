"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu as MenuIcon, X, MapPin, Phone } from "lucide-react";
import { contact, links, nav, social, addressLines, site } from "@/data/site";
import { Wordmark } from "./Brand";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>("a,button");
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
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled && !open;
  const isActive = (href: string) => pathname === href || pathname === href.replace(/\/$/, "");

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color,padding] duration-500 ${
          solid ? "bg-surface/95 py-3 text-ink shadow-[0_1px_0_rgba(46,29,22,0.08)] backdrop-blur-md" : "py-5 text-white"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <Link href="/" aria-label={`${site.name} — home`} className="relative z-10 shrink-0">
            <Wordmark light={!solid} />
          </Link>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-7">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`relative py-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 aria-[current=page]:after:scale-x-100 ${
                      solid ? "hover:text-snapper" : "hover:text-white/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative z-10 flex items-center gap-3">
            <a
              href={links.directions}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden min-h-11 items-center gap-2 rounded-full px-5 type-label transition-colors sm:inline-flex ${
                solid ? "bg-snapper text-white hover:bg-snapper-deep" : "bg-white/12 text-white ring-1 ring-white/50 backdrop-blur-sm hover:bg-white hover:text-ink"
              }`}
            >
              <MapPin aria-hidden className="size-4" strokeWidth={1.75} />
              Get directions
            </a>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`inline-flex size-11 items-center justify-center rounded-full transition-colors xl:hidden ${
                open ? "text-surface" : solid ? "text-ink hover:bg-ink/5" : "text-white hover:bg-white/10"
              }`}
            >
              {open ? <X className="size-6" strokeWidth={1.75} /> : <MenuIcon className="size-6" strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
        className="on-dark fixed inset-0 z-40 overflow-y-auto bg-coffee text-surface xl:hidden"
      >
        <div aria-hidden className="pattern-sand absolute inset-x-0 bottom-0 h-40 opacity-80" />
        <div className="relative mx-auto flex min-h-full max-w-xl flex-col px-6 pt-28 pb-44">
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              <li>
                <Link href="/" className="block py-2 font-display text-4xl font-medium hover:text-sunset">
                  Home
                </Link>
              </li>
              {nav.map((item, i) => (
                <li key={item.href} style={{ animationDelay: `${i * 40}ms` }} className="motion-safe:animate-[fade-up_.6s_both]">
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="block py-2 font-display text-4xl font-medium transition-colors hover:text-sunset aria-[current=page]:text-sunset"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-10 grid gap-3 text-[0.95rem]">
            <a href={links.directions} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-sunset">
              <MapPin aria-hidden className="size-5 shrink-0" strokeWidth={1.75} />
              {addressLines.join(", ")}
            </a>
            <a href={`tel:${contact.phones[0].tel}`} className="flex items-center gap-3 hover:text-sunset">
              <Phone aria-hidden className="size-5 shrink-0" strokeWidth={1.75} />
              {contact.phones[0].display}
            </a>
            <div className="mt-2 flex gap-2">
              <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-surface/40 hover:bg-surface hover:text-coffee">
                <WhatsAppIcon />
              </a>
              <a href={social.instagram.href} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-surface/40 hover:bg-surface hover:text-coffee">
                <InstagramIcon />
              </a>
              <a href={social.facebook.href} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-surface/40 hover:bg-surface hover:text-coffee">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
