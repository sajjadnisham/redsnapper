import type { Metadata } from "next";
import { social } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Gallery } from "@/components/Gallery";
import { Container } from "@/components/ui";
import { SocialGrid } from "@/components/sections";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Food, coffee, the rooftop, the beach and the people of Red Snapper & Coffee Beans, Hulhumalé.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        photo="gallery-interior-colour"
        eyebrow={`Gallery · ${social.instagram.handle}`}
        title="Colour, greenery and the sea."
        lede="Plates, cups, corners and sunsets. Tap any image to look closer."
      />
      <section className="py-20 md:py-28">
        <Container>
          <Gallery />
        </Container>
      </section>
      <SocialGrid />
    </>
  );
}
