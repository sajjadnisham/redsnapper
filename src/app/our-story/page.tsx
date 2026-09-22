import type { Metadata } from "next";
import { family, site } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { BrandLogo } from "@/components/Brand";
import { Button, Container, Eyebrow, ScaleStrip } from "@/components/ui";
import { RooftopCTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Red Snapper & Coffee Beans joins the sea and the café: a beachfront restaurant, coffee bar and rooftop in Hulhumalé, Maldives, since 2020.",
  alternates: { canonical: "/our-story/" },
};

const chapters = [
  {
    eyebrow: "The catch",
    title: "The sea on the plate.",
    body: "The red snapper is one of the Maldives' signature reef fish, and it gives us our name. It stands for the ocean across the road, for seafood cooked with care and for the island setting we are lucky to call home.",
    photo: "story-the-catch" as const,
  },
  {
    eyebrow: "The cup",
    title: "Coffee as a daily ritual.",
    body: "Coffee Beans stands for café culture — the morning espresso, the laptop by the window, the slow afternoon latte with a friend. It is the everyday side of the house, and half of our name.",
    photo: "story-the-cup" as const,
  },
  {
    eyebrow: "The view",
    title: "Beside Hulhumalé Beach.",
    body: "We sit on Kaani Magu, facing the beach. Downstairs there is a cool indoor room and a shaded terrace full of greenery. Upstairs, on the fourth floor, the rooftop opens at 5 PM with the ocean, the sunset and planes arriving at Velana.",
    photo: "story-the-view" as const,
  },
];

export default function StoryPage() {
  return (
    <>
      <PageHero
        photo="story-the-view"
        eyebrow={`Our story · since ${site.established}`}
        title="Two ideas. One table."
        lede="A restaurant named after a fish and a coffee bean — because that is exactly what we are."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4" data-reveal>
              <BrandLogo size={200} className="mx-auto lg:mx-0" />
            </div>
            <div className="lg:col-span-7 lg:col-start-6" data-reveal>
              <p className="font-display text-[1.6rem] leading-snug font-medium text-ink sm:text-[2rem]">
                Red Snapper &amp; Coffee Beans opened in Hulhumalé in {site.established} with a simple idea: put the catch and the cup on the same table.
              </p>
              <div className="mt-8 space-y-5 text-lg text-ink-muted">
                <p>
                  We are a café in the morning and a restaurant by evening, open from breakfast through dinner every day. The menu is international with local influences — Maldivian
                  breakfasts, sushi, nasi goreng and tom yum, Italian pasta and pizza, grills and seafood — alongside a full coffee bar and a juice bar.
                </p>
                <p>It is a place for families and neighbours, for travellers between flights, for remote workers who need Wi-Fi and a flat white, and for couples on the rooftop at sunset.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ScaleStrip tone="cream" />

      {chapters.map((c, i) => (
        <section key={c.eyebrow} className={`py-20 md:py-28 ${i % 2 ? "bg-paper" : ""}`}>
          <Container>
            <div className={`grid items-center gap-10 md:grid-cols-12 md:gap-16 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="md:col-span-7" data-reveal="image">
                <Photo id={c.photo} className="aspect-[4/3] rounded-[var(--radius-lg)]" />
              </div>
              <div className="md:col-span-5" data-reveal>
                <Eyebrow>
                  {String(i + 1).padStart(2, "0")} · {c.eyebrow}
                </Eyebrow>
                <h2 className="type-title mt-5">{c.title}</h2>
                <p className="type-lede mt-5 text-ink-muted">{c.body}</p>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="on-dark bg-coffee py-24 text-surface md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="type-label text-sunset">Brand essence</p>
            <p className="mt-8 font-display text-[2rem] leading-tight font-medium sm:text-[2.75rem]">
              {site.essence.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
            <p className="mt-10 text-surface/75">{site.hashtag}</p>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5" data-reveal>
              <Eyebrow>People</Eyebrow>
              <h2 className="type-title mt-5">Moments are made by people.</h2>
              <p className="type-lede mt-5 text-ink-muted">
                The kitchen, the baristas and the floor team are the reason regulars come back. Say hello — they&rsquo;ll remember how you take your coffee.
              </p>
              <div className="mt-8">
                <Button href="/experience/" variant="primary">
                  Plan your visit
                </Button>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7" data-reveal="image">
              <Photo id="story-team" className="aspect-[4/3] rounded-[var(--radius-lg)]" />
            </div>
          </div>

          <div className="mt-24 border-t border-ink/15 pt-12">
            <h2 className="type-section">The family</h2>
            <p className="mt-2 text-ink-muted">Two sister venues in Hulhumalé share the same kitchen spirit.</p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {family.map((f) => (
                <li key={f.name} className="rounded-[var(--radius-lg)] bg-paper p-6 ring-1 ring-ink/10" data-reveal>
                  <p className="type-label text-snapper">Red Snapper &amp; Coffee Beans</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{f.name}</h3>
                  <p className="mt-2 text-ink-muted">{f.description}</p>
                  <p className="mt-4 text-sm">
                    {f.address} ·{" "}
                    <a href={`tel:${f.phone.tel}`} className="text-lagoon underline-offset-4 hover:underline">
                      {f.phone.display}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <RooftopCTA />
    </>
  );
}
