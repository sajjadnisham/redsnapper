import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { contact, links } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { Button, Container, Eyebrow } from "@/components/ui";
import { ContactQuick, VisitSection } from "@/components/sections";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description: "Call, WhatsApp or email Red Snapper & Coffee Beans in Hulhumalé to book a table, order delivery or ask about events.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero photo="gallery-staff-bar" eyebrow="Contact" title="Say hello."
        lede={`Tables, delivery, takeaway or a birthday on the rooftop. ${contact.bookingLine}`}>
        <Button href={`tel:${contact.phones[0].tel}`} variant="primary" icon="none">Call {contact.phones[0].display}</Button>
        <Button href={links.directions} variant="outline-light" icon="external">Get directions</Button>
      </PageHero>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6" data-reveal>
              <Eyebrow>Fastest way to reach us</Eyebrow>
              <h2 className="type-title mt-5 mb-8">Call, message or DM.</h2>
              <ContactQuick />
              <a href={`mailto:${contact.email}`} className="mt-6 flex items-center gap-3 text-lg break-all hover:text-snapper">
                <Mail aria-hidden className="size-5 shrink-0 text-lagoon" strokeWidth={1.75} />
                {contact.email}
              </a>
              <p className="mt-2 text-sm text-ink-muted">Also: {contact.phones[1].display} ({contact.phones[1].label.toLowerCase()})</p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8" data-reveal>
              <div className="rounded-[var(--radius-lg)] bg-paper p-6 ring-1 ring-ink/10 sm:p-8">
                <h2 className="type-section">Send an email</h2>
                <p className="mt-2 text-sm text-ink-muted">Opens your email app with the details filled in.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <VisitSection />
    </>
  );
}
