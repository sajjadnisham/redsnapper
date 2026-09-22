/**
 * Central business information for Red Snapper & Coffee Beans.
 *
 * Everything the restaurant team may need to update — phone numbers, hours,
 * address, social links — lives here. Components read from this file only.
 */

export const site = {
  name: "Red Snapper & Coffee Beans",
  shortName: "Red Snapper",
  established: 2020,
  url: "https://redsnappercoffeebeans.com",
  tagline: ["Creating exciting culinary experiences.", "In people, moments & spaces."],
  positioning: "The catch, the cup, the view.",
  essence: ["Two ideas, one table.", "The catch and the cup.", "The sea view and the slow coffee."],
  hashtag: "#RedSnapperMeetsCoffeeBeans",
  seo: {
    title: "Red Snapper & Coffee Beans | Restaurant & Café in Hulhumalé",
    description:
      "Red Snapper & Coffee Beans is a beachfront restaurant and café in Hulhumalé, Maldives, serving breakfast, seafood, sushi, grills, coffee, fresh juices and more.",
    keywords: [
      "Red Snapper Hulhumalé",
      "Coffee Beans Hulhumalé",
      "restaurant Hulhumalé",
      "cafe Hulhumalé",
      "seafood Hulhumalé",
      "rooftop restaurant Hulhumalé",
      "breakfast Hulhumalé",
      "coffee Hulhumalé",
      "restaurants near Hulhumalé Beach",
    ],
  },
} as const;

/**
 * ADDRESS
 * Google Maps & Tripadvisor list Lot 10710; Facebook and X list 10716.
 * Until management confirms, the public address omits the lot number.
 * When confirmed, set `lot` (e.g. "Lot 10710") and it will appear everywhere.
 */
export const address = {
  lot: null as string | null,
  street: "Kaani Magu",
  city: "Hulhumalé",
  country: "Maldives",
  countryCode: "MV",
  landmark: "Opposite Hulhumalé Beach",
  geo: { lat: 4.21126, lng: 73.54388 },
};

export const addressLines = [
  [address.lot, address.street].filter(Boolean).join(", "),
  `${address.city}, ${address.country}`,
];

export const addressOneLine = `${addressLines[0]}, ${addressLines[1]}`;

export const links = {
  directions: `https://www.google.com/maps/dir/?api=1&destination=${address.geo.lat},${address.geo.lng}`,
  mapSearch: `https://www.google.com/maps/search/?api=1&query=${address.geo.lat},${address.geo.lng}`,
  mapEmbed: `https://maps.google.com/maps?q=${address.geo.lat},${address.geo.lng}&z=17&output=embed`,
};

export const contact = {
  phones: [
    { label: "Reservations & WhatsApp", display: "+960 778-9498", tel: "+9607789498" },
    { label: "Restaurant", display: "+960 335-5898", tel: "+9603355898" },
  ],
  whatsapp: { display: "+960 778-9498", href: "https://wa.me/9607789498" },
  email: "hello@redsnappercoffeebeans.com",
  bookingLine: "Call 778 9498 or send us a message to book.",
};

export const social = {
  instagram: { handle: "@redsnappermv", href: "https://www.instagram.com/redsnappermv/" },
  facebook: { handle: "Red Snapper & Coffee Beans", href: "https://www.facebook.com/RedSnapperMV" },
};

/**
 * OPENING HOURS
 * Times are 24h "HH:MM" in Maldives time (UTC+5). A close of "24:00" means midnight.
 * `days` uses JavaScript day numbers: 0 = Sunday … 6 = Saturday.
 * Public listings differ slightly — update this block and the whole site follows.
 */
export type Session = { open: string; close: string };
export type HoursRow = { label: string; days: number[]; sessions: Session[]; note?: string };

export const hours: HoursRow[] = [
  { label: "Sunday – Wednesday", days: [0, 1, 2, 3], sessions: [{ open: "07:30", close: "23:30" }] },
  { label: "Thursday", days: [4], sessions: [{ open: "07:30", close: "24:00" }] },
  {
    label: "Friday",
    days: [5],
    sessions: [
      { open: "07:30", close: "11:00" },
      { open: "13:30", close: "24:00" },
    ],
    note: "Closed 11:00 AM – 1:30 PM for Friday prayers",
  },
  { label: "Saturday", days: [6], sessions: [{ open: "07:30", close: "24:00" }] },
];

export const timezoneOffsetHours = 5;

export const rooftop = {
  opensAt: "17:00",
  opensLabel: "5 PM",
  floor: "Fourth-floor rooftop",
};

export const servingTimes = {
  expressLunch: "11 AM – 3 PM",
  afternoonTea: "4 PM – 6 PM, every day",
};

export const facilities = [
  "Beachfront",
  "Rooftop",
  "Outdoor seating",
  "Wi-Fi",
  "Delivery",
  "Takeaway",
  "Reservations",
] as const;

/** Sister venues listed in the 2026 brand book. */
export const family = [
  {
    name: "Reserve",
    description: "A quiet rooftop café a short walk south, with small-batch bakes and coffee brews.",
    address: "10997 Kaani Magu, Hulhumalé",
    phone: { display: "+960 726-9498", tel: "+9607269498" },
  },
  {
    name: "Express",
    description: "Grab-and-go coffee, short eats, snacks and cold drinks.",
    address: "Nirolhu Magu, Hulhumalé",
    phone: { display: "+960 770-0966", tel: "+9607700966" },
  },
];

export const serviceChargeNote = "All prices are subject to 10% Service Charge and 8% GST.";

export const nav = [
  { href: "/our-story/", label: "Our Story" },
  { href: "/menu/", label: "Menu" },
  { href: "/experience/", label: "Experience" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/rooftop/", label: "Rooftop" },
  { href: "/location/", label: "Location" },
  { href: "/contact/", label: "Contact" },
];
