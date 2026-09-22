import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { contact, links, serviceChargeNote } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { MenuBrowser } from "@/components/MenuBrowser";
import { Button, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The full Red Snapper & Coffee Beans menu with prices in MVR: breakfast, salads, sushi, seafood, grills, pasta, pizza, desserts, coffee, fresh juices, mocktails, smoothies and shakes.",
  alternates: { canonical: "/menu/" },
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        photo="sig-red-snapper"
        eyebrow="Menu · breakfast to late"
        title="The menu."
        lede="Breakfast, sushi, seafood and grills, a full coffee bar and a juice bar. Prices in MVR."
      >
        <Button href="#breakfast" variant="primary" icon="none">
          Food
        </Button>
        <Button href="#coffee" variant="outline-light" icon="none">
          Coffee &amp; drinks
        </Button>
      </PageHero>

      <MenuBrowser />

      <section className="border-t border-ink/10 bg-paper py-16">
        <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl font-medium">Allergies or a spice preference?</p>
            <p className="mt-2 max-w-xl text-ink-muted">
              Tell your server — the kitchen can adjust spice levels on most dishes. {serviceChargeNote} Menu and prices may change; our team will confirm when you order.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${contact.phones[0].tel}`}
              className="type-label inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 text-surface hover:bg-coffee"
            >
              <Phone aria-hidden className="size-4" strokeWidth={1.75} />
              Order &amp; delivery
            </a>
            <Button href={links.directions} variant="outline" icon="external">
              Get directions
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
