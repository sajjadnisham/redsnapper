import type { Metadata } from "next";
import { Plane, Sunset, Waves, Wind } from "lucide-react";
import { contact, links, rooftop } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Button, Container } from "@/components/ui";
import { FoodScroller } from "@/components/FoodScroller";

export const metadata: Metadata = {
  title: "Rooftop",
  description: "The Red Snapper rooftop in Hulhumalé opens daily from 5 PM: ocean views, sunset, fresh drinks, dinner and planes on approach to Velana International Airport.",
  alternates: { canonical: "/rooftop/" },
};

export default function RooftopPage() {
  return (
    <>
      <PageHero photo="rooftop-golden-hour" eyebrow={`Rooftop · open from ${rooftop.opensLabel}`} title="Above the beach." tall
        lede="Head upstairs as the day fades. Our rooftop opens from 5 PM, bringing together food, fresh drinks, ocean views and the changing colours of the evening sky.">
        <Button href={`tel:${contact.phones[0].tel}`} variant="primary" icon="none">Call to book a table</Button>
        <Button href={links.directions} variant="outline-light" icon="external">Get directions</Button>
      </PageHero>

      <section className="on-dark bg-night py-24 text-night-ink md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5" data-reveal>
              <p className="type-label text-night-snapper">{rooftop.floor}</p>
              <h2 className="type-title mt-5">A different view of Hulhumalé.</h2>
              <p className="type-lede mt-5 text-night-ink/80">
                Four floors above Kaani Magu, the beach spreads out below and the lagoon turns gold, then pink, then deep blue.
              </p>
            </div>
            <ul className="grid gap-8 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              {[
                { Icon: Sunset, k: "Golden hour", d: "Open from 5 PM, in time for the sunset." },
                { Icon: Waves, k: "Ocean views", d: "Hulhumalé Beach and the open sea in front of you." },
                { Icon: Plane, k: "Planes on approach", d: "Aircraft glide in over the water towards Velana International Airport." },
                { Icon: Wind, k: "Ocean air", d: "Cooler evenings, fresh juices and mocktails." },
              ].map(({ Icon, k, d }) => (
                <li key={k} className="border-t border-night-ink/15 pt-5" data-reveal>
                  <Icon aria-hidden className="size-6 text-sunset" strokeWidth={1.75} />
                  <h3 className="type-section mt-4">{k}</h3>
                  <p className="mt-2 text-night-ink/75">{d}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-20 grid gap-4 sm:grid-cols-2">
            <div data-reveal="image"><Photo id="moment-sunset" className="aspect-[4/3] rounded-[var(--radius-lg)]" /></div>
            <div data-reveal="image"><Photo id="rooftop-evening" className="aspect-[4/3] rounded-[var(--radius-lg)]" /></div>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <h2 className="type-title mb-10" data-reveal>What to order up there.</h2>
          <FoodScroller />
        </Container>
      </section>
    </>
  );
}
