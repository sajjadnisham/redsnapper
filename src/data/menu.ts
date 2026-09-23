/**
 * THE MENU — single source of truth.
 *
 * Source: the printed menu photographs supplied by the restaurant (see
 * docs/menu-source/) plus the price list supplied with the website brief.
 *
 * Rules
 *  - Prices are MVR, before 10% service charge and 8% GST.
 *  - Never guess a price. If a price is unknown or conflicting, set
 *    `price: null` and explain in `verify`. The site then shows
 *    "Market price" instead of a number.
 *  - `verify` is an internal note for the team; it is never shown to guests.
 */

export type Tag = "chefs-pick" | "vegan" | "vegetarian";

export type MenuItem = {
  name: string;
  description?: string;
  price: number | null;
  tags?: Tag[];
  verify?: string;
};

export type MenuGroup = { title?: string; note?: string; items: MenuItem[] };

export type MenuCategory = {
  id: string;
  title: string;
  kind: "food" | "drinks";
  intro?: string;
  availability?: string;
  groups: MenuGroup[];
};

export const menu: MenuCategory[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    kind: "food",
    intro: "Served every morning from 7:30 AM.",
    groups: [
      {
        items: [
          { name: "Continental", price: 95, description: "Bread with jam & butter, sausage, eggs and baked beans. Tea or coffee." },
          { name: "Maldivian", price: 110, description: "Local favourite mashuni & kulhimas with roshi and seasonal fruits. Tea or coffee." },
          {
            name: "Full English",
            price: 125,
            description:
              "White or brown bread, eggs of your choice, baked beans, sausages, chicken bacon, mushroom, hash brown, seasonal fruit platter and orange juice. Tea or coffee.",
          },
          { name: "Salmon Egg Benedict", price: 145, description: "Poached eggs on a muffin with hollandaise, crispy chicken bacon, spring onion and salmon." },
          { name: "Curry Cheese Omelette", price: 90, description: "Fluffy, cheesy and made Indian-style with onion, tomato, chilli and coriander." },
          { name: "Choice of Egg", price: 60, description: "Eggs your way, served with sausages." },
          { name: "Muesli Bowl", price: 110, description: "With curd, banana, apple and strawberries." },
          { name: "Pancakes", price: 90, description: "Topped with chocolate or maple syrup." },
          { name: "French Toast", price: 85, description: "Topped with chocolate or maple syrup." },
        ],
      },
    ],
  },
  {
    id: "fresh-salads",
    title: "Fresh Salads",
    kind: "food",
    groups: [
      {
        items: [
          {
            name: "Green Salad",
            price: 90,
            description: "Iceberg lettuce, green apple, cucumber, green bell pepper and green olives with spring onion and vinegar dressing.",
          },
          {
            name: "Healthy Chicken Caesar",
            price: 130,
            description: "Lettuce, grilled chicken, croutons, sun-dried tomatoes and chicken bacon crisps in Caesar dressing, finished with Parmesan.",
          },
          {
            name: "Tuna Salad",
            price: 100,
            description: "A French composed salad of tuna, onion, cucumber, tomato, bell pepper and lettuce with vinaigrette and olives.",
          },
          { name: "Watermelon Feta Salad", price: 85, description: "Juicy watermelon, feta and fresh mint, tossed with passion fruit sauce." },
          {
            name: "Quinoa Salad",
            price: 120,
            description: "Quinoa with chicken, chickpeas, kidney beans, sweet corn, bell pepper, tomato, onion and lettuce.",
          },
        ],
      },
    ],
  },
  {
    id: "express-lunch",
    title: "Express Lunch",
    kind: "food",
    availability: "11 AM – 3 PM",
    intro: "Served with a complimentary iced lemon tea.",
    groups: [
      {
        items: [
          { name: "Chicken Biryani", price: 110 },
          { name: "Mediterranean Beef Stew", price: 85 },
          { name: "Asian Spicy Chicken Curry", price: 99 },
        ],
      },
    ],
  },
  {
    id: "soup",
    title: "Soup",
    kind: "food",
    groups: [
      {
        items: [
          { name: "Seafood Tom Yum", price: 90 },
          { name: "Cream of Tomato", price: 85 },
          { name: "Sweet Corn Egg Drop", price: 75, description: "Served with garlic bread and chicken." },
        ],
      },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    kind: "food",
    groups: [
      {
        items: [
          { name: "Margherita", price: 115 },
          { name: "Chicken & Mushroom", price: 150 },
          { name: "Italian Beef", price: 160 },
          { name: "Vegetable Pizza", price: 145 },
          { name: "Maldivian Style", price: 160 },
          { name: "Hawaiian BBQ Chicken", price: 170 },
          { name: "Pepperoni", price: 165 },
        ],
      },
    ],
  },
  {
    id: "sushi",
    title: "Sushi",
    kind: "food",
    groups: [
      {
        items: [
          { name: "California Roll", price: 145 },
          { name: "Chicken Teriyaki", price: 135, description: "Finished with mango sauce." },
          { name: "Tempura Prawn", price: 155 },
          { name: "Smoked Salmon Roll", price: 165 },
        ],
      },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    kind: "food",
    intro: "Ask for your spice level — the kitchen will cook to it.",
    groups: [
      {
        title: "From the sea",
        items: [
          {
            name: "Grilled Red Snapper",
            price: 135,
            tags: ["chefs-pick"],
            description: "Our namesake. Served with potatoes, broccoli and cream sauce.",
          },
          { name: "Salmon Steak", price: 250, tags: ["chefs-pick"], description: "Pan-seared salmon." },
          { name: "Sicilian Seafood Platter", price: 240, description: "A generous selection of seafood with accompanying sides." },
          { name: "Crumb Fish & Chips", price: 105 },
        ],
      },
      {
        title: "Grills & plates",
        items: [
          { name: "Grilled Lamb Chop", price: 249 },
          { name: "Sicilian Beef Tenderloins", price: 200 },
          { name: "Szechuan Beef", price: 119 },
          { name: "Herb Sicilian Chicken", price: 130 },
          { name: "Chicken Cordon Bleu", price: 130 },
          { name: "Panko Crumb Chicken", price: 100 },
        ],
      },
      {
        title: "Rice & noodles",
        items: [
          { name: "Nasi Goreng", price: 130, description: "The ultimate comfort food." },
          { name: "Mie Goreng", price: 125 },
          { name: "Mongolian Rice", price: 135 },
          { name: "Chicken Fried Rice", price: 95, description: "Made to your spice level." },
        ],
      },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches & Lites",
    kind: "food",
    groups: [
      {
        title: "Lites",
        note: "Served with French fries and garden salad unless noted.",
        items: [
          { name: "Sandwiches", price: 80, description: "Tuna, chicken, egg, vegetable or cheese." },
          { name: "Club Sandwich", price: 120, description: "Chicken, cheese, egg, lettuce, tomato, onion and mayo on toasted bread." },
          { name: "Tandoori Chicken Wrap", price: 85, description: "Tandoori-marinated chicken in a tortilla with tandoori sauce." },
          { name: "Chicken & Cheese Wrap", price: 100, description: "Tortilla filled with chicken, bell pepper and mozzarella." },
          { name: "Spicy Tuna Wrap", price: 110 },
          {
            name: "Chicken Burger",
            price: 125,
            description: "Flame-grilled chicken, red onion, tomato, fried egg, cheddar, caramelised onion, gherkins and chicken bacon.",
          },
          {
            name: "Beef Burger",
            price: 145,
            description: "Grilled beef, red onion, cheddar, tomato, fried egg, caramelised onion, gherkins and beef bacon.",
          },
          {
            name: "Vegan Burger",
            price: 98,
            tags: ["vegan"],
            description: "Lentil and kidney bean patty with tahini, tomato, caramelised onion and plantain crisps.",
          },
          { name: "Fish & Chips", price: 100, description: "Battered fish with French fries and tartar sauce." },
          { name: "Fried Chicken Basket", price: 120, description: "With French fries and garlic mayo." },
          { name: "Crumb Fried Chicken", price: 100, description: "With mashed potato, buttered vegetables and tartar sauce." },
          {
            name: "Chicken Quesadilla",
            price: 120,
            description: "Grilled flour tortilla with melted cheese, onion, green chilli, coriander and bell pepper. With fries and tomato sauce.",
          },
        ],
      },
      {
        title: "Sandwiches",
        items: [
          { name: "Grilled Veg & Cheese Sandwich", price: 85, tags: ["vegetarian"] },
          { name: "Australian Grilled Beef Sandwich", price: 149 },
          { name: "Hot Dog", price: 80 },
          { name: "The Triple Decker", price: 120 },
        ],
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    kind: "food",
    groups: [
      {
        items: [
          { name: "Creamy Chicken & Mushroom", price: 100 },
          { name: "Arrabbiata", price: 80, description: "With chicken or tuna." },
          { name: "Chicken Carbonara", price: 120 },
          { name: "Beef Bolognese", price: 110 },
        ],
      },
    ],
  },
  {
    id: "afternoon-tea",
    title: "Afternoon Tea",
    kind: "food",
    availability: "4 PM – 6 PM, every day",
    intro: "Choose a set. Each comes with tea or coffee.",
    groups: [
      {
        items: [
          {
            name: "Afternoon Tea · Menu 1",
            price: 85,
            description: "Vegetable spring roll, salmon & cheese sandwich, prawn roll, snapper fingers and brownie.",
          },
          {
            name: "Afternoon Tea · Menu 2",
            price: 85,
            description: "Chicken winglet, chicken nugget, cheese & chicken bacon sandwich, vegetable spring roll and brownie.",
          },
        ],
      },
    ],
  },
  {
    id: "dessert",
    title: "Dessert",
    kind: "food",
    groups: [
      {
        items: [
          { name: "Fresh Fruit Platter", price: 100 },
          { name: "Fruit Salad with Ice Cream", price: 95, description: "Seasonal tropical fruits with ice cream." },
          { name: "Choice of Ice Cream", price: 35, description: "Strawberry, vanilla or chocolate." },
          { name: "Brownie", price: 75, description: "With vanilla ice cream." },
          { name: "Chocolate Lava Cake", price: 75, description: "With vanilla ice cream." },
          { name: "Baked Cheesecake", price: 75, description: "With vanilla ice cream." },
          { name: "Blueberry Cold Cheesecake", price: 75, description: "With vanilla ice cream." },
          { name: "Strawberry Cold Cheesecake", price: 75, description: "With vanilla ice cream." },
          { name: "Banana Cake", price: 25 },
          { name: "Chocolate Chip Cookies", price: 50 },
          { name: "Chocolate Muffin", price: 30 },
        ],
      },
    ],
  },
  {
    id: "coffee",
    title: "Coffee",
    kind: "drinks",
    intro: "Half the name. Made to be taken slowly.",
    groups: [
      {
        title: "Coffee bar",
        items: [
          { name: "Pour Over", price: 85 },
          { name: "Espresso", price: 50, verify: "Also listed as Espresso Single 30 / Double 35 under Hot — confirm current price." },
          { name: "Americano", price: 50, verify: "Also listed at 40 under Hot and Iced — confirm current price." },
          { name: "Cold Brew", price: 75 },
          { name: "Cold Brew Milk", price: 95 },
          { name: "Milk Coffee", price: 65, verify: "Also listed at 45 under Hot — confirm current price." },
        ],
      },
      {
        title: "Amber signature",
        items: [
          { name: "Amber Milk", price: 75 },
          { name: "Bounty Latte", price: 85 },
          { name: "Butterscotch Latte", price: 99 },
          { name: "Tiramisu Latte", price: 99 },
        ],
      },
      {
        title: "Hot",
        items: [
          { name: "Milk Coffee", price: 45 },
          { name: "Black Coffee", price: 45 },
          { name: "Cappuccino", price: 50 },
          { name: "Latte", price: 60 },
          { name: "Espresso Single", price: 30 },
          { name: "Espresso Double", price: 35 },
          { name: "Americano", price: 40 },
          { name: "Hot Chocolate", price: 45 },
          { name: "Hot Milo", price: 45 },
          { name: "Premium Tea", price: 25 },
          { name: "Green Tea", price: 20 },
          { name: "English Breakfast Tea", price: 20 },
          { name: "Earl Grey Tea", price: 20 },
        ],
      },
      {
        title: "Iced",
        items: [
          { name: "Iced Latte", price: 50 },
          { name: "Iced Cappuccino", price: 50 },
          { name: "Blended Coffee", price: 75 },
          { name: "Iced Mocha", price: 70 },
          { name: "Affogato", price: 50 },
          { name: "Iced Americano", price: 40 },
          { name: "Iced Milo", price: 55 },
          { name: "Iced Chocolate", price: 55 },
          { name: "Lemon Tea", price: 45 },
          { name: "Japanese Green Tea", price: 35 },
          { name: "Lemon & Orange Tea", price: 50 },
        ],
      },
    ],
  },
  {
    id: "non-coffee",
    title: "Non-Coffee",
    kind: "drinks",
    groups: [
      {
        items: [
          { name: "Matcha Latte", price: 85 },
          { name: "Liquid Red Velvet", price: 85 },
          { name: "Chocolate", price: 85 },
          { name: "Taro Latte", price: 85 },
          { name: "Berry Fizz", price: 85 },
          { name: "Teas", price: 55 },
        ],
      },
    ],
  },
  {
    id: "vitamin-boosters",
    title: "Vitamin Boosters",
    kind: "drinks",
    intro: "A daily dose of wellness in a glass.",
    groups: [
      {
        items: [
          { name: "Island Spring", price: 70 },
          { name: "Rainforest", price: null, verify: "PRICE TO CONFIRM — MVR 80 on one menu version, MVR 85 on another." },
          { name: "Ocean Breeze", price: 85 },
          { name: "ABC Miracle", price: 85 },
          { name: "Rejuvenator", price: 70 },
        ],
      },
    ],
  },
  {
    id: "mocktails",
    title: "Mocktails",
    kind: "drinks",
    groups: [
      {
        items: [
          { name: "Banan Mia", price: 75 },
          { name: "Fruit Ninja", price: 80 },
          { name: "Havana Pineapple", price: 85 },
          { name: "Mangorange", price: 85 },
          { name: "Bitter Passion", price: 85 },
          { name: "Les Mint", price: 50 },
          { name: "Mojito", price: 85 },
        ],
      },
    ],
  },
  {
    id: "smoothies-shakes",
    title: "Smoothies & Shakes",
    kind: "drinks",
    groups: [
      {
        items: [
          { name: "Peanut Butter Banana", price: 75 },
          { name: "Berry Blast", price: 70 },
          { name: "Mango Smoothie", price: 70 },
          { name: "Mango Shake", price: 75 },
          { name: "Oreo Cookies & Cream", price: 85 },
          { name: "Chocolate Shake", price: 85 },
          { name: "Chocolate Indulgence", price: 85 },
          { name: "Vanilla Shake", price: 80 },
          { name: "Strawberry Shake", price: 80 },
          { name: "Strawberry Sunrise", price: 75 },
          { name: "Banana Shake", price: 75 },
        ],
      },
    ],
  },
  {
    id: "fresh-juices",
    title: "Fresh Juices",
    kind: "drinks",
    groups: [
      {
        items: [
          { name: "Orange", price: 70 },
          { name: "Apple", price: 75 },
          { name: "Lime", price: 45 },
          { name: "Papaya", price: 75 },
          { name: "Watermelon", price: 75 },
          { name: "Pineapple", price: 80 },
          { name: "Passion Fruit", price: 75 },
          { name: "Mango", price: 80 },
          { name: "Carrot", price: 80 },
          { name: "Kurumbaa", price: 85, description: "Fresh young coconut." },
        ],
      },
    ],
  },
  {
    id: "soft-drinks-water",
    title: "Soft Drinks & Water",
    kind: "drinks",
    groups: [
      {
        items: [
          { name: "Choice of Soft Drinks", price: 30 },
          { name: "Mineral Water 500 ml", price: 15 },
          { name: "Mineral Water 1.5 L", price: 20 },
          { name: "Perrier Water 330 ml", price: 65 },
        ],
      },
    ],
  },
];

export const findItem = (name: string) =>
  menu.flatMap((c) => c.groups.flatMap((g) => g.items)).find((i) => i.name === name);

export const formatPrice = (price: number | null) => (price == null ? "Market price" : `MVR ${price}`);
