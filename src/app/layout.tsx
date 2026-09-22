import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { RevealObserver } from "@/components/Reveal";
import { address, contact, site, social } from "@/data/site";
import { openingHoursSpec } from "@/lib/hours";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.seo.title, template: `%s | ${site.name}` },
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
    locale: "en_GB",
    images: [{ url: "/brand/og-image.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: "summary_large_image", title: site.seo.title, description: site.seo.description, images: ["/brand/og-image.jpg"] },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#5A3825",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${site.url}/#restaurant`,
  name: site.name,
  slogan: site.tagline.join(" "),
  description: site.seo.description,
  url: site.url,
  logo: `${site.url}/brand/logo.jpg`,
  image: `${site.url}/brand/og-image.jpg`,
  telephone: contact.phones.map((p) => p.tel),
  email: contact.email,
  foundingDate: String(site.established),
  priceRange: "$$",
  currenciesAccepted: "MVR",
  servesCuisine: ["International", "Seafood", "Café", "Sushi", "Italian", "Asian", "Maldivian", "Breakfast"],
  acceptsReservations: true,
  hasMenu: `${site.url}/menu/`,
  address: {
    "@type": "PostalAddress",
    streetAddress: [address.lot, address.street].filter(Boolean).join(", "),
    addressLocality: address.city,
    addressCountry: address.countryCode,
  },
  geo: { "@type": "GeoCoordinates", latitude: address.geo.lat, longitude: address.geo.lng },
  openingHoursSpecification: openingHoursSpec(),
  sameAs: [social.instagram.href, social.facebook.href],
  amenityFeature: ["Beachfront", "Rooftop", "Outdoor seating", "Free Wi-Fi", "Delivery", "Takeaway"].map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Opt in to reveal animations only when JS runs, so content never stays hidden. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-ink px-5 py-3 text-surface focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
        <RevealObserver />
      </body>
    </html>
  );
}
