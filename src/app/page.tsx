import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { links, site } from "@/data/site";
import { Photo } from "@/components/Photo";
import { Button, Container, Eyebrow } from "@/components/ui";
import { FoodScroller } from "@/components/FoodScroller";
import { OpenStatus } from "@/components/Hours";
import { Gallery } from "@/components/Gallery";
import {
  BreakfastSection,
  CoffeeSection,
  Moments,
  RooftopCTA,
  RooftopImmersive,
  Signatures,
  SocialGrid,
  VisitSection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: { absolute: site.seo.title },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* 1 — HERO */}
      <section className="on-dark relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-white">
        <Photo id="hero-rooftop-sunset" priority className="absolute! inset-0 -z-10 h-full w-full" imgClassName="hero-zoom object-[0%_50%] md:object-center" captionAt="tr" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/35 md:via-ink/30" />
        <Container className="pt-40 pb-24 md:pb-28">
          <div className="hero-in max-w-4xl">
            <p className="type-label flex items-center gap-3 text-sand">
              <span aria-hidden className="inline-block h-px w-8 bg-current" />
              Hulhumalé · Maldives
            </p>
            <h1 className="type-hero mt-6">
              Red Snapper
              <span className="block font-medium text-sunset italic">&amp; Coffee Beans</span>
            </h1>
            <p className="type-lede mt-7 max-w-xl text-white/90">
              {site.tagline[0]}
              <br />
              {site.tagline[1]}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/menu/" variant="primary">
                Explore menu
              </Button>
              <Button href={links.directions} variant="outline-light" icon="external">
                Get directions
              </Button>
            </div>
            <div className="mt-8">
              <OpenStatus dark />
            </div>
          </div>
        </Container>
        <a
          href="#intro"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/75 hover:text-white md:flex"
          aria-label="Scroll to introduction"
        >
          <span className="type-label text-[0.7rem]">Scroll</span>
          <span className="relative h-12 w-px overflow-hidden bg-white/25">
            <span className="scroll-cue absolute inset-0 bg-white" />
          </span>
        </a>
      </section>

      {/* 2 — INTRODUCTION */}
      <section id="intro" className="scroll-mt-0 py-24 md:py-36" aria-labelledby="intro-title">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5 lg:pt-10" data-reveal>
              <Eyebrow>Since {site.established}</Eyebrow>
              <h2 id="intro-title" className="type-hero mt-6 text-ink">
                The catch, the cup, <span className="text-snapper italic">the view.</span>
              </h2>
              <p className="type-lede mt-8 max-w-md text-ink-muted">
                From the first coffee of the morning to dinner by the sea, Red Snapper &amp; Coffee Beans brings together generous food, good coffee and the easy rhythm of
                Hulhumalé.
              </p>
              <div className="mt-10">
                <Link href="/our-story/" className="group type-label inline-flex items-center gap-2 border-b border-ink/30 pb-1 hover:border-snapper hover:text-snapper">
                  Our story
                  <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                </Link>
              </div>
            </div>
            <div className="relative lg:col-span-6 lg:col-start-7">
              <div data-reveal="image">
                <Photo id="intro-terrace-greenery" className="aspect-[4/5] rounded-[var(--radius-lg)]" />
              </div>
              <div
                data-reveal="image"
                style={{ ["--reveal-delay" as string]: "200ms" }}
                className="absolute -bottom-10 -left-6 w-[46%] rounded-[var(--radius-lg)] ring-8 ring-surface sm:-left-12 lg:-left-24"
              >
                <Photo id="intro-coffee-by-the-sea" className="aspect-square rounded-[var(--radius-lg)]" caption={false} />
              </div>
            </div>
          </div>

          <dl className="mt-32 grid gap-10 border-t border-ink/15 pt-12 sm:grid-cols-3">
            {[
              { k: "The catch", v: "Red snapper, tuna and salmon steaks, sushi and seafood platters — the ocean on the plate." },
              { k: "The cup", v: "Espresso, pour over, cold brew and slow coffee, from 7:30 in the morning until late." },
              { k: "The view", v: "Hulhumalé Beach across the road, and a rooftop that opens at 5 PM for the sunset." },
            ].map((x, i) => (
              <div key={x.k} data-reveal style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}>
                <dt className="type-section">{x.k}</dt>
                <dd className="mt-3 text-ink-muted">{x.v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* 3 — FOOD EXPERIENCE */}
      <section className="bg-paper py-24 md:py-32" aria-labelledby="moment-title">
        <Container>
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7" data-reveal>
              <Eyebrow>The menu</Eyebrow>
              <h2 id="moment-title" className="type-title mt-5">
                Something for every moment.
              </h2>
            </div>
            <p className="text-ink-muted md:col-span-5" data-reveal>
              We&rsquo;re open from breakfast until late, every day. International food with local twists, a full coffee bar and a juice bar that never really stops.
            </p>
          </div>
          <div className="mt-12">
            <FoodScroller />
          </div>
        </Container>
      </section>

      {/* 4 — SIGNATURES */}
      <Signatures />

      {/* 5 — COFFEE */}
      <CoffeeSection />

      {/* 6 — BREAKFAST */}
      <BreakfastSection />

      {/* 7 — ROOFTOP */}
      <RooftopImmersive />

      {/* 8 — EXPERIENCE */}
      <section className="py-24 md:py-32" aria-labelledby="exp-title">
        <Container>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div data-reveal>
              <Eyebrow>Experience</Eyebrow>
              <h2 id="exp-title" className="type-title mt-5">
                One place, four moods.
              </h2>
            </div>
            <Button href="/experience/" variant="outline">
              The full day
            </Button>
          </div>
          <Moments />
        </Container>
      </section>

      {/* 9 — GALLERY PREVIEW */}
      <section className="bg-paper py-24 md:py-32" aria-labelledby="gal-title">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div data-reveal>
              <Eyebrow>Gallery</Eyebrow>
              <h2 id="gal-title" className="type-title mt-5">
                Colour, greenery and the sea.
              </h2>
            </div>
            <Button href="/gallery/" variant="outline">
              View the gallery
            </Button>
          </div>
          <Gallery limit={8} />
        </Container>
      </section>

      {/* 10 — VISIT */}
      <VisitSection />

      {/* 11 — SOCIAL */}
      <SocialGrid />

      {/* 12 — ROOFTOP CTA */}
      <RooftopCTA />
    </>
  );
}
