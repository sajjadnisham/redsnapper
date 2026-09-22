import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { address, addressLines, family, links } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Button, Container, Eyebrow } from "@/components/ui";
import { HoursTable, OpenStatus } from "@/components/Hours";
import { ContactQuick, FacilitiesList } from "@/components/sections";

export const metadata: Metadata = {
  title: "Location & Hours",
  description: "Find Red Snapper & Coffee Beans on Kaani Magu, Hulhumalé, opposite Hulhumalé Beach. Opening hours, directions, map and facilities.",
  alternates: { canonical: "/location/" },
};

export default function LocationPage() {
  return (
    <>
      <PageHero photo="location-exterior" eyebrow="Location" title="Across the road from the beach."
        lede={`${addressLines.join(", ")} — ${address.landmark.toLowerCase()}.`}>
        <Button href={links.directions} variant="primary" icon="external">Get directions</Button>
      </PageHero>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5" data-reveal>
              <Eyebrow>Find us</Eyebrow>
              <address className="mt-6 flex gap-3 text-xl not-italic">
                <MapPin aria-hidden className="mt-1 size-6 shrink-0 text-lagoon" strokeWidth={1.75} />
                <span>{addressLines[0]}<br />{addressLines[1]}</span>
              </address>
              <p className="mt-4 text-ink-muted">{address.landmark}. The rooftop is on the fourth floor.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={links.directions} variant="primary" icon="external">Get directions</Button>
                <Button href={links.mapSearch} variant="outline" icon="external">Open in Google Maps</Button>
              </div>
              <div className="mt-12">
                <h2 className="type-section mb-4">Facilities</h2>
                <FacilitiesList />
              </div>
            </div>
            <div className="lg:col-span-7" data-reveal>
              <div className="overflow-hidden rounded-[var(--radius-lg)] ring-1 ring-ink/10">
                <iframe title="Map showing Red Snapper & Coffee Beans in Hulhumalé" src={links.mapEmbed} loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" className="aspect-[4/3] h-auto w-full border-0" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="hours" className="bg-paper py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4" data-reveal>
              <Eyebrow>Opening hours</Eyebrow>
              <h2 className="type-title mt-5">Every day, breakfast to late.</h2>
              <div className="mt-6"><OpenStatus /></div>
              <p className="mt-6 text-ink-muted">On Fridays we close for prayers between 11:00 AM and 1:30 PM. The rooftop opens daily from 5 PM.</p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6" data-reveal><HoursTable /></div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <h2 className="type-title mb-10">Book or ask a question.</h2>
          <ContactQuick />
          <div className="mt-20 border-t border-ink/15 pt-10">
            <h2 className="type-section">Also in Hulhumalé</h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2">
              {family.map((f) => (
                <li key={f.name}>
                  <p className="font-display text-xl font-semibold">Red Snapper &amp; Coffee Beans {f.name}</p>
                  <p className="mt-1 text-ink-muted">{f.address} · <a href={`tel:${f.phone.tel}`} className="text-lagoon hover:underline">{f.phone.display}</a></p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
