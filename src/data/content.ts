/** Editorial content shared across pages: food categories, signatures, moments, gallery, social grid. */
import type { PhotoId } from "./photos";

export type FoodCategory = { title: string; blurb: string; photo: PhotoId; menuId: string };

export const foodCategories: FoodCategory[] = [
  { title: "Breakfast", blurb: "Full English, Maldivian mashuni, pancakes. From 7:30 AM.", photo: "cat-breakfast", menuId: "breakfast" },
  { title: "Coffee", blurb: "Espresso, pour over, cold brew and our Amber signatures.", photo: "cat-coffee", menuId: "coffee" },
  { title: "Fresh Salads", blurb: "Watermelon feta, quinoa, a proper Caesar.", photo: "cat-salads", menuId: "fresh-salads" },
  { title: "Sushi", blurb: "California, tempura prawn, smoked salmon rolls.", photo: "cat-sushi", menuId: "sushi" },
  { title: "Seafood", blurb: "Red snapper, salmon steak and the Sicilian seafood platter.", photo: "cat-seafood", menuId: "mains" },
  { title: "Grills", blurb: "Lamb chops, beef tenderloin, herb chicken.", photo: "cat-grills", menuId: "mains" },
  { title: "Pasta", blurb: "Carbonara, bolognese, arrabbiata.", photo: "cat-pasta", menuId: "pasta" },
  { title: "Pizza", blurb: "Margherita to Maldivian style.", photo: "cat-pizza", menuId: "pizza" },
  { title: "Burgers & Sandwiches", blurb: "Club, quesadilla, beef, chicken and vegan burgers.", photo: "cat-burgers", menuId: "sandwiches" },
  { title: "Desserts", blurb: "Lava cake, cold cheesecakes, brownies with ice cream.", photo: "cat-desserts", menuId: "dessert" },
  { title: "Juices", blurb: "Mango, passion fruit, kurumbaa — pressed fresh.", photo: "cat-juices", menuId: "fresh-juices" },
  { title: "Mocktails", blurb: "Fruit Ninja, Mangorange, Havana Pineapple.", photo: "cat-mocktails", menuId: "mocktails" },
  { title: "Smoothies & Shakes", blurb: "Peanut butter banana, berry blast, Oreo.", photo: "cat-smoothies", menuId: "smoothies-shakes" },
];

export type Signature = { name: string; label?: string; description: string; photo: PhotoId };

export const signatures: Signature[] = [
  {
    name: "Red Snapper Steak",
    label: "Chef's pick",
    description: "Grilled or pan-fried red snapper served with potatoes, broccoli and cream sauce.",
    photo: "sig-red-snapper",
  },
  { name: "Tuna Steak", description: "Sear-to-order tuna served with creamy mashed potatoes.", photo: "sig-tuna-steak" },
  {
    name: "Salmon Steak",
    description: "Pan-seared salmon served as one of the restaurant's signature seafood choices.",
    photo: "sig-salmon-steak",
  },
  { name: "Seafood Platter", description: "A generous selection of seafood served with accompanying sides.", photo: "sig-seafood-platter" },
];

export const coffeeList = [
  "Espresso",
  "Americano",
  "Cappuccino",
  "Latte",
  "Cold Brew",
  "Cold Brew Milk",
  "Matcha Latte",
  "Chocolate",
  "Taro Latte",
  "Tea",
];

export const breakfastFeature = [
  "Continental",
  "Maldivian",
  "Full English",
  "Salmon Egg Benedict",
  "Curry Cheese Omelette",
  "Choice of Egg",
  "Muesli Bowl",
  "Pancakes",
  "French Toast",
];

export type Moment = { title: string; time: string; line: string; detail: string; photo: PhotoId; menuIds: { id: string; label: string }[] };

export const moments: Moment[] = [
  {
    title: "Morning",
    time: "From 7:30 AM",
    line: "Breakfast, coffee and fresh starts.",
    detail: "The first espresso, a Maldivian breakfast of mashuni and roshi, pancakes for the kids. The beach is quiet and the terrace is cool.",
    photo: "moment-morning",
    menuIds: [
      { id: "breakfast", label: "Breakfast" },
      { id: "coffee", label: "Coffee" },
    ],
  },
  {
    title: "Day",
    time: "Lunch & afternoon",
    line: "Lunch, salads, sushi, grills and fresh drinks.",
    detail: "Express lunch sets from 11 AM, sushi to share, a salad and a juice under the greenery. Afternoon tea sets run from 4 PM.",
    photo: "moment-day",
    menuIds: [
      { id: "express-lunch", label: "Express Lunch" },
      { id: "sushi", label: "Sushi" },
      { id: "afternoon-tea", label: "Afternoon Tea" },
    ],
  },
  {
    title: "Sunset",
    time: "Rooftop from 5 PM",
    line: "Rooftop dining and ocean views.",
    detail: "Head upstairs as the light turns gold. Mocktails, fresh juices and planes gliding in over the sea towards Velana.",
    photo: "moment-sunset",
    menuIds: [
      { id: "mocktails", label: "Mocktails" },
      { id: "fresh-juices", label: "Fresh Juices" },
    ],
  },
  {
    title: "Evening",
    time: "Until late",
    line: "Dinner, coffee, desserts and time together.",
    detail: "Red snapper from the grill, a pizza for the table, lava cake and one more coffee. No rush.",
    photo: "moment-evening",
    menuIds: [
      { id: "mains", label: "Mains" },
      { id: "dessert", label: "Dessert" },
    ],
  },
];

export const galleryCategories = ["Food", "Coffee", "Rooftop", "Interiors", "Beach", "People", "Moments"] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = { photo: PhotoId; category: GalleryCategory; size: "tall" | "wide" | "square" | "large" };

export const gallery: GalleryItem[] = [
  { photo: "rooftop-golden-hour", category: "Rooftop", size: "large" },
  { photo: "sig-salmon-steak", category: "Food", size: "tall" },
  { photo: "breakfast-eggs-benedict", category: "Food", size: "tall" },
  { photo: "moment-day", category: "Food", size: "tall" },
  { photo: "cat-breakfast", category: "Food", size: "square" },
  { photo: "gallery-lunch-plates", category: "Food", size: "wide" },
  { photo: "gallery-interior-ac", category: "Interiors", size: "large" },
  { photo: "moment-evening", category: "Moments", size: "tall" },
  { photo: "cat-pasta", category: "Food", size: "tall" },
  { photo: "sig-red-snapper", category: "Food", size: "large" },
  { photo: "coffee-cappuccino", category: "Coffee", size: "square" },
  { photo: "gallery-interior-colour", category: "Interiors", size: "wide" },
  { photo: "cat-sushi", category: "Food", size: "square" },
  { photo: "gallery-beach-morning", category: "Beach", size: "tall" },
  { photo: "gallery-staff-bar", category: "People", size: "square" },
  { photo: "breakfast-maldivian", category: "Food", size: "wide" },
  { photo: "rooftop-plane-approach", category: "Rooftop", size: "large" },
  { photo: "coffee-cold-brew", category: "Coffee", size: "tall" },
  { photo: "gallery-greenery", category: "Interiors", size: "square" },
  { photo: "gallery-guests-family", category: "People", size: "wide" },
  { photo: "sig-seafood-platter", category: "Food", size: "square" },
  { photo: "moment-sunset", category: "Moments", size: "tall" },
  { photo: "coffee-matcha", category: "Coffee", size: "square" },
  { photo: "story-the-view", category: "Beach", size: "wide" },
  { photo: "gallery-moment-birthday", category: "Moments", size: "square" },
  { photo: "rooftop-evening", category: "Rooftop", size: "wide" },
  { photo: "gallery-sushi-detail", category: "Food", size: "tall" },
  { photo: "story-team", category: "People", size: "square" },
  { photo: "moment-morning", category: "Moments", size: "square" },
];

/** Instagram-style grid: alternates food / venue / people / type / rooftop / coffee. */
export type SocialTile =
  | { kind: "photo"; photo: PhotoId; caption: string }
  | { kind: "type"; text: string; tone: "snapper" | "coffee" | "lagoon" };

export const socialTiles: SocialTile[] = [
  { kind: "photo", photo: "sig-salmon-steak", caption: "Pan-seared salmon, mango salsa, cream sauce." },
  { kind: "photo", photo: "rooftop-golden-hour", caption: "Plants, tables and the open sea." },
  { kind: "type", text: "The catch, the cup, the view.", tone: "snapper" },
  { kind: "photo", photo: "gallery-interior-ac", caption: "Copper lamps, palms and a table by the window." },
  { kind: "photo", photo: "rooftop-plane-approach", caption: "Rooftop from 5 PM. Planes on approach, free of charge." },
  { kind: "photo", photo: "breakfast-eggs-benedict", caption: "Salmon egg benedict. Start the day by the sea." },
  { kind: "type", text: "Nasi goreng. The ultimate comfort food.", tone: "coffee" },
  { kind: "photo", photo: "moment-day", caption: "Lunch, sorted." },
  { kind: "type", text: "Evening tea with a view.", tone: "lagoon" },
];
