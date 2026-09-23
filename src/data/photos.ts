/**
 * PHOTOGRAPHY SLOTS
 *
 * Every image on the site is a named slot. To add a real photograph, save it in
 * /public/images using the slot's `file` name (any of .jpg .jpeg .png .webp .avif),
 * then run `npm run build`. The build detects it and replaces the art-directed
 * placeholder automatically — no code changes needed.
 *
 * Brand photography rules (Brand Book §11): daylight, true colour, no heavy
 * filters, sea or sky visible where possible, food top-down or at 45° on plain
 * plates, relaxed candid people, no alcohol, no cluttered tables.
 */

export type Tone = "sunset" | "lagoon" | "espresso" | "sand" | "palm" | "snapper" | "night";
export type Motif = "horizon" | "plate" | "cup" | "leaf" | "plane" | "table" | "people" | "glass" | "fish";

export type PhotoSlot = {
  file: string;
  alt: string;
  tone: Tone;
  motif: Motif;
  brief: string;
};

const slots = {
  // Hero & story
  "hero-rooftop-sunset": { tone: "sunset", motif: "horizon", alt: "The terrace: blue beams, a tropical leaf mural and the Red Snapper & Coffee Beans sign", brief: "Rooftop at golden hour, sea and sky visible, calm space for headline in the lower third" },
  "intro-terrace-greenery": { tone: "palm", motif: "table", alt: "The café indoors: copper lamps, palms and daylight", brief: "Ground-floor terrace with greenery and colourful décor, morning light" },
  "intro-coffee-by-the-sea": { tone: "lagoon", motif: "cup", alt: "A latte with leaf art", brief: "Cappuccino close-up, sea softly out of focus" },
  "story-the-catch": { tone: "snapper", motif: "fish", alt: "Grilled red snapper steak with mashed potato, broccoli and roast vegetables", brief: "Red snapper steak, 45°, plain plate, natural light" },
  "story-the-cup": { tone: "espresso", motif: "cup", alt: "A latte with leaf art, from above", brief: "Espresso pour at the bar, close" },
  "story-the-view": { tone: "lagoon", motif: "horizon", alt: "The sea from the rooftop terrace", brief: "The beach across the road, lagoon colours" },
  "story-team": { tone: "sand", motif: "people", alt: "Our team at the pass, smiling", brief: "Staff candid at the pass or coffee bar" },

  // Food categories
  "cat-breakfast": { tone: "sand", motif: "plate", alt: "Full English breakfast with eggs, sausages, mushrooms and baked beans", brief: "Breakfast spread, top-down" },
  "cat-coffee": { tone: "espresso", motif: "cup", alt: "A latte with leaf art, from above", brief: "Latte art close-up" },
  "cat-salads": { tone: "palm", motif: "leaf", alt: "Salad with quinoa, watermelon, feta, croutons and Parmesan", brief: "Watermelon feta salad, top-down" },
  "cat-sushi": { tone: "night", motif: "plate", alt: "A board of California, tempura prawn and salmon rolls", brief: "Sushi board, 45°" },
  "cat-seafood": { tone: "snapper", motif: "fish", alt: "Red snapper, salmon steak and a seafood pan on the table", brief: "Seafood platter, top-down" },
  "cat-grills": { tone: "espresso", motif: "plate", alt: "Chicken in mushroom sauce with creamy mash and vegetables", brief: "Grill plate, 45°" },
  "cat-pasta": { tone: "sand", motif: "plate", alt: "Baked pasta with garlic bread, from above", brief: "Pasta bowl, top-down" },
  "cat-pizza": { tone: "snapper", motif: "plate", alt: "Tuna pizza with chilli, basil and fresh coconut", brief: "Whole pizza, top-down" },
  "cat-burgers": { tone: "sand", motif: "plate", alt: "A burger with fried egg and fries on a wooden board", brief: "Burger with fries, 45°" },
  "cat-desserts": { tone: "espresso", motif: "plate", alt: "Chocolate lava cake with vanilla ice cream and strawberry", brief: "Lava cake cut open" },
  "cat-juices": { tone: "sunset", motif: "glass", alt: "Fresh watermelon juice on the terrace", brief: "Juices on the terrace, sea behind" },
  "cat-mocktails": { tone: "lagoon", motif: "glass", alt: "Passion fruit cooler with mint and ice", brief: "Mocktail, sunset light" },
  "cat-smoothies": { tone: "sunset", motif: "glass", alt: "A chilled fruit drink with a watermelon slice", brief: "Smoothies & shakes, side-on" },

  // Signatures
  "sig-red-snapper": { tone: "snapper", motif: "fish", alt: "Grilled red snapper steak with mashed potato, broccoli and roast vegetables", brief: "Hero dish — plated red snapper, 45°" },
  "sig-tuna-steak": { tone: "espresso", motif: "plate", alt: "Seared tuna steak, pink in the middle, over creamy mashed potatoes", brief: "Tuna steak sliced, pink centre visible" },
  "sig-salmon-steak": { tone: "sunset", motif: "plate", alt: "Pan-seared salmon with mango salsa, cream sauce, mash and vegetables", brief: "Salmon steak, crisp skin" },
  "sig-seafood-platter": { tone: "lagoon", motif: "plate", alt: "Seafood pan with prawns, mussels, clams, squid and garlic bread", brief: "Seafood platter, top-down, shared table" },

  // Coffee
  "coffee-cappuccino": { tone: "espresso", motif: "cup", alt: "A latte with leaf art, from above", brief: "Cappuccino foam macro" },
  "coffee-cold-brew": { tone: "night", motif: "glass", alt: "Cold brew over ice", brief: "Cold brew over ice, condensation" },
  "coffee-matcha": { tone: "palm", motif: "glass", alt: "Iced matcha latte", brief: "Matcha latte layered" },

  // Breakfast
  "breakfast-maldivian": { tone: "sand", motif: "plate", alt: "Maldivian breakfast of mashuni, roshi and kulhimas", brief: "Maldivian breakfast, top-down" },
  "breakfast-eggs-benedict": { tone: "sand", motif: "plate", alt: "Salmon egg benedict with hollandaise and crispy chicken bacon", brief: "Eggs benedict, 45°" },
  "breakfast-terrace-morning": { tone: "lagoon", motif: "table", alt: "The breakfast counter by the garden windows", brief: "Terrace breakfast table, morning, sea visible" },

  // Rooftop
  "rooftop-golden-hour": { tone: "sunset", motif: "horizon", alt: "Rooftop tables under rattan lamps, looking out over the sea", brief: "Rooftop wide, golden hour" },
  "rooftop-plane-approach": { tone: "sunset", motif: "plane", alt: "A plane on approach to Velana International Airport, seen from the rooftop", brief: "Plane on approach over the sea at dusk" },
  "rooftop-evening": { tone: "night", motif: "table", alt: "Evening lights among the plants", brief: "Rooftop after dark, warm lights" },

  // Moments
  "moment-morning": { tone: "sand", motif: "cup", alt: "The breakfast spread: pastries, fruit, bakes and hot dishes", brief: "Morning table" },
  "moment-day": { tone: "palm", motif: "leaf", alt: "A chicken rice bowl with soft-boiled eggs at lunch", brief: "Lunch, daylight, greenery" },
  "moment-sunset": { tone: "sunset", motif: "horizon", alt: "The sun over the sea from the rooftop", brief: "Sunset from the rooftop" },
  "moment-evening": { tone: "night", motif: "people", alt: "The garden terrace lit up after dark", brief: "Evening, people sharing" },

  // Location
  "location-exterior": { tone: "lagoon", motif: "horizon", alt: "The terrace on Kaani Magu: blue beams and the leaf mural", brief: "Exterior from the beach side" },

  // Gallery extras
  "gallery-interior-colour": { tone: "snapper", motif: "table", alt: "Blue banquette under a rattan lamp, the Red Snapper & Coffee Beans sign and a leaf mural", brief: "Interior, colourful décor" },
  "gallery-interior-ac": { tone: "sand", motif: "table", alt: "Indoor tables under copper pendant lamps", brief: "Indoor tables" },
  "gallery-beach-morning": { tone: "lagoon", motif: "horizon", alt: "Hulhumalé Beach in the morning", brief: "Beach, morning light" },
  "gallery-greenery": { tone: "palm", motif: "leaf", alt: "A living wall of plants beside the terrace tables", brief: "Greenery detail" },
  "gallery-guests-family": { tone: "sand", motif: "people", alt: "A family at lunch", brief: "Family table, candid" },
  "gallery-staff-bar": { tone: "espresso", motif: "people", alt: "Barista at work", brief: "Barista, candid" },
  "gallery-moment-birthday": { tone: "snapper", motif: "people", alt: "A celebration at the table", brief: "Celebration, candid" },
  "gallery-lunch-plates": { tone: "sand", motif: "plate", alt: "Lunch for two: chicken in mushroom sauce and a plate in tomato sauce", brief: "Lunch table" },
  "gallery-sushi-detail": { tone: "night", motif: "plate", alt: "Tempura prawn and salmon rolls", brief: "Sushi macro" },
} satisfies Record<string, Omit<PhotoSlot, "file">>;

export type PhotoId = keyof typeof slots;

export const photos: Record<PhotoId, PhotoSlot> = Object.fromEntries(
  Object.entries(slots).map(([id, s]) => [id, { ...s, file: id } as PhotoSlot]),
) as Record<PhotoId, PhotoSlot>;
