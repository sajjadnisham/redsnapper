import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { addressLines, contact, links, nav, site, social } from "@/data/site";
import { BrandLogo } from "./Brand";
import { Button } from "./ui";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="on-dark relative bg-coffee text-surface">
      <div aria-hidden className="pattern-sand h-16 w-full border-b border-sand/10" />
      <div className="mx-auto max-w-[1320px] px-5 pt-16 pb-28 sm:px-8 md:pb-12 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="type-title max-w-md text-surface">{site.positioning}</p>
            <div className="mt-8">
              <Button href={links.directions} variant="light" icon="external">
                Get directions
              </Button>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h2 className="type-label text-sand/80">Visit</h2>
              <address className="mt-4 space-y-3 not-italic text-[0.95rem] leading-relaxed">
                <p className="font-display text-lg">{site.name}</p>
                <a href={links.directions} target="_blank" rel="noopener noreferrer" className="flex gap-2.5 hover:text-sunset">
                  <MapPin aria-hidden className="mt-1 size-4 shrink-0" strokeWidth={1.75} />
                  <span>
                    {addressLines[0]}
                    <br />
                    {addressLines[1]}
                  </span>
                </a>
              </address>
            </div>

            <div>
              <h2 className="type-label text-sand/80">Contact</h2>
              <ul className="mt-4 space-y-3 text-[0.95rem]">
                {contact.phones.map((p) => (
                  <li key={p.tel}>
                    <a href={`tel:${p.tel}`} className="flex items-center gap-2.5 hover:text-sunset">
                      <Phone aria-hidden className="size-4 shrink-0" strokeWidth={1.75} />
                      {p.display}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-2.5 break-all hover:text-sunset">
                    <Mail aria-hidden className="size-4 shrink-0" strokeWidth={1.75} />
                    {contact.email}
                  </a>
                </li>
                <li className="flex gap-2 pt-1">
                  {[
                    { href: social.instagram.href, label: `Instagram ${social.instagram.handle}`, Icon: InstagramIcon },
                    { href: social.facebook.href, label: "Facebook", Icon: FacebookIcon },
                    { href: contact.whatsapp.href, label: "WhatsApp", Icon: WhatsAppIcon },
                  ].map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex size-10 items-center justify-center rounded-full ring-1 ring-surface/30 transition-colors hover:bg-surface hover:text-coffee"
                    >
                      <Icon className="size-[18px]" />
                    </a>
                  ))}
                </li>
              </ul>
            </div>

            <nav aria-label="Footer">
              <h2 className="type-label text-sand/80">Explore</h2>
              <ul className="mt-4 space-y-2 text-[0.95rem]">
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="hover:text-sunset">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-8 border-t border-surface/15 pt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            <BrandLogo size={120} className="shrink-0" />
            <p className="font-display text-xl leading-snug text-surface/90 italic sm:text-2xl">
              {site.tagline[0]}
              <br />
              {site.tagline[1]}
            </p>
          </div>
          <div className="text-sm text-surface/70 md:text-right">
            <p>{site.hashtag}</p>
            <p className="mt-1">
              © {new Date().getFullYear()} {site.name} · Hulhumalé, Maldives · Since {site.established}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
