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
  "hero-rooftop-sunset": { tone: "sunset", motif: "horizon", alt: "The rooftop at golden hour, tables set above Hulhumalé Beach", brief: "Rooftop at golden hour, sea and sky visible, calm space for headline in the lower third" },
  "intro-terrace-greenery": { tone: "palm", motif: "table", alt: "Ground-floor terrace framed by greenery", brief: "Ground-floor terrace with greenery and colourful décor, morning light" },
  "intro-coffee-by-the-sea": { tone: "lagoon", motif: "cup", alt: "A cappuccino on a table with the sea soft in the background", brief: "Cappuccino close-up, sea softly out of focus" },
  "story-the-catch": { tone: "snapper", motif: "fish", alt: "Red snapper plated with potatoes and broccoli", brief: "Red snapper steak, 45°, plain plate, natural light" },
  "story-the-cup": { tone: "espresso", motif: "cup", alt: "Espresso being poured at the coffee bar", brief: "Espresso pour at the bar, close" },
  "story-the-view": { tone: "lagoon", motif: "horizon", alt: "Hulhumalé Beach across the road from the restaurant", brief: "The beach across the road, lagoon colours" },
  "story-team": { tone: "sand", motif: "people", alt: "Our team at the pass, smiling", brief: "Staff candid at the pass or coffee bar" },

  // Food categories
  "cat-breakfast": { tone: "sand", motif: "plate", alt: "Full English breakfast from above", brief: "Breakfast spread, top-down" },
  "cat-coffee": { tone: "espresso", motif: "cup", alt: "Latte art in a ceramic cup", brief: "Latte art close-up" },
  "cat-salads": { tone: "palm", motif: "leaf", alt: "Watermelon feta salad with mint", brief: "Watermelon feta salad, top-down" },
  "cat-sushi": { tone: "night", motif: "plate", alt: "A board of sushi rolls", brief: "Sushi board, 45°" },
  "cat-seafood": { tone: "snapper", motif: "fish", alt: "Seafood platter ready to share", brief: "Seafood platter, top-down" },
  "cat-grills": { tone: "espresso", motif: "plate", alt: "Grilled lamb chops with sides", brief: "Grill plate, 45°" },
  "cat-pasta": { tone: "sand", motif: "plate", alt: "Creamy chicken and mushroom pasta", brief: "Pasta bowl, top-down" },
  "cat-pizza": { tone: "snapper", motif: "plate", alt: "Maldivian-style pizza fresh from the oven", brief: "Whole pizza, top-down" },
  "cat-burgers": { tone: "sand", motif: "plate", alt: "Chicken burger with fries and salad", brief: "Burger with fries, 45°" },
  "cat-desserts": { tone: "espresso", motif: "plate", alt: "Chocolate lava cake with vanilla ice cream", brief: "Lava cake cut open" },
  "cat-juices": { tone: "sunset", motif: "glass", alt: "Fresh mango and watermelon juices", brief: "Juices on the terrace, sea behind" },
  "cat-mocktails": { tone: "lagoon", motif: "glass", alt: "A mint mocktail on the rooftop", brief: "Mocktail, sunset light" },
  "cat-smoothies": { tone: "sunset", motif: "glass", alt: "Berry and mango smoothies", brief: "Smoothies & shakes, side-on" },

  // Signatures
  "sig-red-snapper": { tone: "snapper", motif: "fish", alt: "Red snapper steak with potatoes, broccoli and cream sauce", brief: "Hero dish — plated red snapper, 45°" },
  "sig-tuna-steak": { tone: "espresso", motif: "plate", alt: "Seared tuna steak over creamy mashed potatoes", brief: "Tuna steak sliced, pink centre visible" },
  "sig-salmon-steak": { tone: "sunset", motif: "plate", alt: "Pan-seared salmon steak", brief: "Salmon steak, crisp skin" },
  "sig-seafood-platter": { tone: "lagoon", motif: "plate", alt: "A generous seafood platter", brief: "Seafood platter, top-down, shared table" },

  // Coffee
  "coffee-cappuccino": { tone: "espresso", motif: "cup", alt: "Cappuccino foam close-up", brief: "Cappuccino foam macro" },
  "coffee-cold-brew": { tone: "night", motif: "glass", alt: "Cold brew over ice", brief: "Cold brew over ice, condensation" },
  "coffee-matcha": { tone: "palm", motif: "glass", alt: "Iced matcha latte", brief: "Matcha latte layered" },

  // Breakfast
  "breakfast-maldivian": { tone: "sand", motif: "plate", alt: "Maldivian breakfast of mashuni, roshi and kulhimas", brief: "Maldivian breakfast, top-down" },
  "breakfast-terrace-morning": { tone: "lagoon", motif: "table", alt: "Breakfast on the terrace in morning light", brief: "Terrace breakfast table, morning, sea visible" },

  // Rooftop
  "rooftop-golden-hour": { tone: "sunset", motif: "horizon", alt: "Rooftop tables as the sun goes down", brief: "Rooftop wide, golden hour" },
  "rooftop-plane-approach": { tone: "sunset", motif: "plane", alt: "A plane on approach to Velana International Airport, seen from the rooftop", brief: "Plane on approach over the sea at dusk" },
  "rooftop-evening": { tone: "night", motif: "table", alt: "The rooftop lit in the evening", brief: "Rooftop after dark, warm lights" },

  // Moments
  "moment-morning": { tone: "sand", motif: "cup", alt: "Morning coffee and breakfast", brief: "Morning table" },
  "moment-day": { tone: "palm", motif: "leaf", alt: "Lunch on the terrace", brief: "Lunch, daylight, greenery" },
  "moment-sunset": { tone: "sunset", motif: "horizon", alt: "Sunset from the rooftop", brief: "Sunset from the rooftop" },
  "moment-evening": { tone: "night", motif: "people", alt: "Friends sharing dessert in the evening", brief: "Evening, people sharing" },

  // Location
  "location-exterior": { tone: "lagoon", motif: "horizon", alt: "The restaurant on Kaani Magu, facing the beach", brief: "Exterior from the beach side" },

  // Gallery extras
  "gallery-interior-colour": { tone: "snapper", motif: "table", alt: "Colourful interior seating", brief: "Interior, colourful décor" },
  "gallery-interior-ac": { tone: "sand", motif: "table", alt: "Indoor air-conditioned tables", brief: "Indoor tables" },
  "gallery-beach-morning": { tone: "lagoon", motif: "horizon", alt: "Hulhumalé Beach in the morning", brief: "Beach, morning light" },
  "gallery-greenery": { tone: "palm", motif: "leaf", alt: "Plants around the terrace", brief: "Greenery detail" },
  "gallery-guests-family": { tone: "sand", motif: "people", alt: "A family at lunch", brief: "Family table, candid" },
  "gallery-staff-bar": { tone: "espresso", motif: "people", alt: "Barista at work", brief: "Barista, candid" },
  "gallery-moment-birthday": { tone: "snapper", motif: "people", alt: "A celebration at the table", brief: "Celebration, candid" },
  "gallery-sushi-detail": { tone: "night", motif: "plate", alt: "Sushi detail", brief: "Sushi macro" },
} satisfies Record<string, Omit<PhotoSlot, "file">>;

export type PhotoId = keyof typeof slots;

export const photos: Record<PhotoId, PhotoSlot> = Object.fromEntries(
  Object.entries(slots).map(([id, s]) => [id, { ...s, file: id } as PhotoSlot]),
) as Record<PhotoId, PhotoSlot>;
