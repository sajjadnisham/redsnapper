import Link from "next/link";
import { Check, Mail, MapPin, Phone, Plane, Sunset } from "lucide-react";
import { breakfastFeature, coffeeList, moments, signatures, socialTiles, type Signature } from "@/data/content";
import { findItem, formatPrice } from "@/data/menu";
import { addressLines, contact, facilities, links, rooftop, site, social } from "@/data/site";
import { Photo } from "./Photo";
import { Button, Container, Eyebrow, ScaleStrip } from "./ui";
import { HoursTable, OpenStatus } from "./Hours";
import { InstagramIcon, FacebookIcon, WhatsAppIcon, Ornament } from "./icons";

const signaturePrice = (s: Signature) => formatPrice(s.menuItem ? (findItem(s.menuItem)?.price ?? null) : null);

/* ---------------- Signatures: "From the sea to the table." ---------------- */
export function Signatures() {
  const [hero, ...rest] = signatures;
  return (
    <section className="py-24 md:py-36" aria-labelledby="sig-title">
      <Container>
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7" data-reveal>
            <Eyebrow>Signatures</Eyebrow>
            <h2 id="sig-title" className="type-title mt-5">
              From the sea to the table.
            </h2>
          </div>
          <p className="type-lede text-ink-muted md:col-span-5" data-reveal>
            Red snapper is the reef fish we&rsquo;re named after. Here it is cooked simply and served generously, alongside tuna, salmon and a platter for the table.
          </p>
        </div>

        {/* Hero signature */}
        <article className="mt-14 grid gap-8 md:mt-20 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7" data-reveal="image">
            <Photo id={hero.photo} className="aspect-[4/3] rounded-[var(--radius-lg)] md:aspect-[5/4]" />
          </div>
          <div className="flex flex-col justify-center md:col-span-5" data-reveal>
            {hero.label && (
              <span className="type-label inline-flex w-fit rounded-full bg-snapper-soft px-3 py-1.5 text-snapper-deep">{hero.label}</span>
            )}
            <h3 className="type-title mt-5">{hero.name}</h3>
            <p className="mt-3 text-lg font-semibold tabular-nums text-snapper">{signaturePrice(hero)}</p>
            <p className="type-lede mt-4 text-ink-muted">{hero.description}</p>
            <div className="mt-8">
              <Button href="/menu/#mains" variant="outline">
                See the mains
              </Button>
            </div>
          </div>
        </article>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {rest.map((s, i) => (
            <article key={s.name} data-reveal style={{ ["--reveal-delay" as string]: `${i * 120}ms` }} className={i === 1 ? "lg:mt-16" : ""}>
              <Photo id={s.photo} className="aspect-[4/5] rounded-[var(--radius-lg)]" />
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="type-section">{s.name}</h3>
                <span className="shrink-0 font-semibold tabular-nums">{signaturePrice(s)}</span>
              </div>
              <p className="mt-2 text-ink-muted">{s.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Coffee: dark brown, its own identity ---------------- */
export function CoffeeSection() {
  return (
    <section className="on-dark relative overflow-hidden bg-coffee text-surface" aria-labelledby="coffee-title">
      <ScaleStrip tone="sand" className="h-10" />
      <Container className="py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <p className="type-label flex items-center gap-3 text-sunset">
              <span aria-hidden className="inline-block h-px w-8 bg-current" />
              The cup
            </p>
            <h2 id="coffee-title" className="type-title mt-5">
              Slow down for coffee.
            </h2>
            <p className="type-lede mt-6 max-w-md text-surface/80">
              From a morning espresso to a slow afternoon coffee, the cup is part of the Red Snapper experience.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 border-t border-surface/15">
              {coffeeList.map((c) => (
                <li key={c} className="border-b border-surface/15 py-3 font-display text-lg">
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/menu/#coffee" variant="light">
                The coffee menu
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-7">
            <div data-reveal="image" className="col-span-2">
              <Photo id="coffee-cappuccino" className="aspect-[16/10] rounded-[var(--radius-lg)]" />
            </div>
            <div data-reveal="image">
              <Photo id="coffee-cold-brew" className="aspect-[3/4] rounded-[var(--radius-lg)]" />
            </div>
            <div data-reveal="image" style={{ ["--reveal-delay" as string]: "150ms" }} className="mt-10">
              <Photo id="coffee-matcha" className="aspect-[3/4] rounded-[var(--radius-lg)]" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Breakfast ---------------- */
export function BreakfastSection() {
  const items = breakfastFeature.map((n) => findItem(n)).filter((i): i is NonNullable<typeof i> => Boolean(i));
  return (
    <section className="bg-paper py-24 md:py-32" aria-labelledby="breakfast-title">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div data-reveal>
                <Eyebrow>Breakfast · from 7:30 AM</Eyebrow>
                <h2 id="breakfast-title" className="type-title mt-5">
                  Start the day by the sea.
                </h2>
                <p className="type-lede mt-5 text-ink-muted">
                  Mashuni and roshi or a full English, the beach across the road and the first coffee of the day.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-5 gap-4" data-reveal="image">
                <Photo id="breakfast-eggs-benedict" className="col-span-3 aspect-[4/5] rounded-[var(--radius-lg)]" />
                <Photo id="cat-breakfast" className="col-span-2 mt-12 aspect-[3/5] rounded-[var(--radius-lg)]" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {items.map((item) => (
                <li key={item.name} className="py-6" data-reveal>
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-xl font-medium sm:text-[1.4rem]">{item.name}</h3>
                    <span className="leader" aria-hidden />
                    <span className="shrink-0 font-semibold tabular-nums">{formatPrice(item.price)}</span>
                  </div>
                  {item.description && <p className="mt-2 max-w-lg text-[0.95rem] text-ink-muted">{item.description}</p>}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button href="/menu/#breakfast" variant="primary">
                Full breakfast menu
              </Button>
              <p className="text-sm text-ink-muted">Prices subject to 10% service charge and 8% GST.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Rooftop immersive ---------------- */
export function RooftopImmersive() {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-night text-night-ink" aria-labelledby="rooftop-title">
      <Photo id="rooftop-golden-hour" className="absolute! inset-0 -z-10 h-full w-full" captionAt="tr" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-night/90 via-night/60 to-night/10" />
      <Container className="flex min-h-[88svh] flex-col justify-center py-28">
        <div className="max-w-xl" data-reveal>
          <p className="type-label inline-flex items-center gap-2 rounded-full bg-sunset px-3.5 py-2 text-ink">
            <Sunset aria-hidden className="size-4" strokeWidth={1.75} />
            Rooftop · open from {rooftop.opensLabel}
          </p>
          <h2 id="rooftop-title" className="type-hero mt-7">
            Above the beach.
          </h2>
          <p className="type-lede mt-6 text-night-ink/85">
            Head upstairs as the day fades. Our rooftop opens from 5 PM, bringing together food, fresh drinks, ocean views and the changing colours of the evening sky.
          </p>
          <p className="mt-6 flex items-start gap-3 text-night-ink/80">
            <Plane aria-hidden className="mt-1 size-5 shrink-0 text-sunset" strokeWidth={1.75} />
            Watch the planes glide in over the sea towards Velana International Airport — a view you only get from up here.
          </p>
          <div className="mt-10">
            <Button href="/rooftop/" variant="light">
              Discover the rooftop
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Moments (Experience) ---------------- */
export function Moments({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${detailed ? "lg:gap-10" : "lg:grid-cols-4"}`}>
      {moments.map((m, i) => (
        <article
          key={m.title}
          data-reveal
          style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
          className={`group flex flex-col ${detailed && i % 2 === 1 ? "sm:mt-20" : ""}`}
        >
          <div className="relative overflow-hidden rounded-[var(--radius-lg)]">
            <Photo
              id={m.photo}
              className={detailed ? "aspect-[4/3]" : "aspect-[3/4]"}
              imgClassName="transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <span className="type-label absolute top-4 left-4 rounded-full bg-surface/90 px-3 py-1.5 text-ink">{m.time}</span>
          </div>
          <h3 className={`mt-6 ${detailed ? "type-title" : "type-section"}`}>{m.title}</h3>
          <p className={`mt-2 ${detailed ? "type-lede text-ink" : "text-ink-muted"}`}>{m.line}</p>
          {detailed && (
            <>
              <p className="mt-3 text-ink-muted">{m.detail}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {m.menuIds.map((x) => (
                  <li key={x.id}>
                    <Link
                      href={`/menu/#${x.id}`}
                      className="type-label inline-flex rounded-full border border-ink/20 px-3.5 py-2 transition-colors hover:border-snapper hover:bg-snapper hover:text-white"
                    >
                      {x.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </article>
      ))}
    </div>
  );
}

/* ---------------- Rooftop CTA: "Meet us above the beach." ---------------- */
export function RooftopCTA() {
  return (
    <section className="on-dark relative overflow-hidden bg-snapper text-white" aria-labelledby="cta-title">
      <div aria-hidden className="pattern-snapper absolute inset-y-0 right-0 hidden w-1/3 md:block" />
      <Container className="relative py-20 md:py-28">
        <div className="max-w-2xl" data-reveal>
          <Ornament className="h-4 w-auto text-snapper-soft" />
          <h2 id="cta-title" className="type-title mt-6">
            Meet us above the beach.
          </h2>
          <p className="type-lede mt-5 text-white/90">Good food. Fresh drinks. Ocean air. A different view of Hulhumalé.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/rooftop/" variant="light">
              Explore rooftop
            </Button>
            <Button href={links.directions} variant="outline-light" icon="external">
              Get directions
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Social ---------------- */
export function SocialGrid() {
  const typeTone = { snapper: "bg-snapper text-white", coffee: "bg-coffee text-surface", lagoon: "bg-lagoon text-white" };
  return (
    <section className="py-24 md:py-32" aria-labelledby="social-title">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div data-reveal>
            <Eyebrow>{social.instagram.handle}</Eyebrow>
            <h2 id="social-title" className="type-title mt-5">
              Follow the experience.
            </h2>
            <p className="mt-4 text-ink-muted">
              Share yours with <span className="font-semibold text-ink">{site.hashtag}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3" data-reveal>
            <Button href={social.instagram.href} variant="primary" icon="external">
              Follow the experience
            </Button>
            <Button href={social.facebook.href} variant="outline" icon="external">
              Facebook
            </Button>
          </div>
        </div>
        <ul className="no-scrollbar -mx-5 mt-12 flex snap-x gap-3 overflow-x-auto px-5 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0">
          {socialTiles.map((t, i) => (
            <li key={i} className="w-[70%] shrink-0 snap-start sm:w-auto" data-reveal style={{ ["--reveal-delay" as string]: `${(i % 3) * 90}ms` }}>
              <a
                href={social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-[var(--radius-md)]"
                aria-label={t.kind === "photo" ? `Instagram: ${t.caption}` : `Instagram: ${t.text}`}
              >
                {t.kind === "photo" ? (
                  <>
                    <Photo id={t.photo} className="h-full w-full" caption={false} imgClassName="transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 to-transparent p-4 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                      {t.caption}
                    </span>
                  </>
                ) : (
                  <span className={`flex h-full w-full flex-col justify-between p-6 ${typeTone[t.tone]}`}>
                    <InstagramIcon className="size-5 opacity-80" />
                    <span className="font-display text-2xl leading-tight font-semibold sm:text-[1.7rem] lg:text-3xl">{t.text}</span>
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------------- Location summary (home) ---------------- */
export function VisitSection() {
  return (
    <section className="bg-sand/45 py-24 md:py-32" aria-labelledby="visit-title">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <Eyebrow>Visit</Eyebrow>
            <h2 id="visit-title" className="type-title mt-5">
              Across the road from the beach.
            </h2>
            <address className="mt-8 space-y-4 not-italic">
              <p className="flex gap-3 text-lg">
                <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-lagoon" strokeWidth={1.75} />
                <span>
                  {addressLines[0]}
                  <br />
                  {addressLines[1]}
                </span>
              </p>
              {contact.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-3 text-lg hover:text-snapper">
                  <Phone aria-hidden className="size-5 shrink-0 text-lagoon" strokeWidth={1.75} />
                  {p.display}
                </a>
              ))}
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 break-all hover:text-snapper">
                <Mail aria-hidden className="size-5 shrink-0 text-lagoon" strokeWidth={1.75} />
                {contact.email}
              </a>
            </address>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={links.directions} variant="primary" icon="external">
                Get directions
              </Button>
              <Button href="/location/" variant="outline">
                Location & hours
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7" data-reveal>
            <div className="rounded-[var(--radius-lg)] bg-paper p-6 ring-1 ring-ink/5 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="type-section">Opening hours</h3>
                <OpenStatus />
              </div>
              <div className="mt-4">
                <HoursTable />
              </div>
              <p className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
                <Sunset aria-hidden className="size-4 text-sunset" strokeWidth={1.75} />
                Rooftop opens daily from {rooftop.opensLabel}.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FacilitiesList({ dark = false }: { dark?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {facilities.map((f) => (
        <li
          key={f}
          className={`type-label inline-flex items-center gap-2 rounded-full px-4 py-2.5 ${dark ? "bg-surface/10 text-surface" : "bg-paper text-ink ring-1 ring-ink/10"}`}
        >
          <Check aria-hidden className={`size-3.5 ${dark ? "text-sunset" : "text-palm"}`} strokeWidth={2.5} />
          {f}
        </li>
      ))}
    </ul>
  );
}

export function ContactQuick() {
  const card = "flex items-center gap-4 rounded-[var(--radius-lg)] bg-paper p-5 ring-1 ring-ink/10 transition hover:-translate-y-0.5 hover:ring-ink/25";
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <a href={`tel:${contact.phones[0].tel}`} className={card}>
        <Phone aria-hidden className="size-6 text-snapper" strokeWidth={1.75} />
        <span>
          <span className="type-label block text-ink-muted">Call to book</span>
          <span className="text-lg font-semibold">{contact.phones[0].display}</span>
        </span>
      </a>
      <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className={card}>
        <WhatsAppIcon className="size-6 text-palm" />
        <span>
          <span className="type-label block text-ink-muted">WhatsApp</span>
          <span className="text-lg font-semibold">{contact.whatsapp.display}</span>
        </span>
      </a>
      <a href={social.instagram.href} target="_blank" rel="noopener noreferrer" className={card}>
        <InstagramIcon className="size-6 text-snapper" />
        <span>
          <span className="type-label block text-ink-muted">Instagram DM</span>
          <span className="text-lg font-semibold">{social.instagram.handle}</span>
        </span>
      </a>
      <a href={social.facebook.href} target="_blank" rel="noopener noreferrer" className={card}>
        <FacebookIcon className="size-6 text-lagoon" />
        <span>
          <span className="type-label block text-ink-muted">Facebook</span>
          <span className="text-lg font-semibold">RedSnapperMV</span>
        </span>
      </a>
    </div>
  );
}

