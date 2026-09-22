import type { Metadata } from "next";
import { servingTimes } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Button, Container, Eyebrow } from "@/components/ui";
import { Moments, RooftopCTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "Experience",
  description: "Breakfast by the sea, lunch under the greenery, sunset on the rooftop and dinner until late at Red Snapper & Coffee Beans, Hulhumalé.",
  alternates: { canonical: "/experience/" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        photo="moment-sunset"
        eyebrow="Experience"
        title="From first coffee to last dessert."
        lede="One address, four moods. Come for breakfast, stay for the sunset."
      />

      <section className="py-24 md:py-32">
        <Container>
          <Moments detailed />
        </Container>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { k: "Express lunch", t: servingTimes.expressLunch, d: "Biryani, beef stew or spicy chicken curry, with a complimentary iced lemon tea.", href: "/menu/#express-lunch" },
              { k: "Afternoon tea", t: servingTimes.afternoonTea, d: "Two sets of small bites and brownie, each with tea or coffee.", href: "/menu/#afternoon-tea" },
              { k: "Rooftop", t: "From 5 PM", d: "Fresh drinks and dinner four floors up, with the ocean and the evening sky.", href: "/rooftop/" },
            ].map((x) => (
              <div key={x.k} className="border-t border-ink/15 pt-6" data-reveal>
                <Eyebrow>{x.t}</Eyebrow>
                <h2 className="type-section mt-4">{x.k}</h2>
                <p className="mt-3 text-ink-muted">{x.d}</p>
                <div className="mt-6">
                  <Button href={x.href} variant="outline">
                    See more
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <RooftopCTA />
    </>
  );
}
