export interface Design {
  id: number;
  image: string;
  label: string;
}

export interface CakeItem {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  designs: Design[];
}

export interface MiniTreat {
  id: string;
  name: string;
  emoji: string;
  price: string;
  priceNote: string;
  description: string;
  image: string;
  designs: Design[];
}

export const INSTAGRAM_HANDLE = "bake_spot2026";
export const INSTAGRAM_DM_URL = `https://ig.me/m/bake_spot2026`;
export const INSTAGRAM_PROFILE_URL = `https://www.instagram.com/bake_spot2026/`;

export const buildOrderMessage = (cakeName: string, designRef: number) =>
  `Hi Bake Spot! 🎂\n\nI'd like to order:\n🍰 Cake: ${cakeName}\n🖼️ Design Ref: #${designRef}\n\nPlease let me know the details. Thank you!`;

const IMG = {
  VANILLA:       "https://images.unsplash.com/photo-1654546518361-eef83e447521?w=600&q=80",
  CHOCOLATE:     "https://images.unsplash.com/photo-1741244133035-660d79b51bfd?w=600&q=80",
  VANILLA_BDAY:  "https://images.unsplash.com/photo-1672081880854-ea09c1e9ac44?w=600&q=80",
  LEMON_BLUE:    "https://images.unsplash.com/photo-1652284916670-2adf1ec4c8dc?w=600&q=80",
  FRUIT:         "https://images.unsplash.com/photo-1683989417038-2444068720da?w=600&q=80",
  BUTTERSCOTCH:  "https://images.unsplash.com/photo-1541779972238-2c60cd11ffc5?w=600&q=80",
  STRAWBERRY:    "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?w=600&q=80",
  GULAB_JAMUN:   "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?w=600&q=80",
  PINEAPPLE:     "https://images.unsplash.com/photo-1628505048571-327399c9324c?w=600&q=80",
  BLACK_FOREST:  "https://images.unsplash.com/photo-1620490448382-d2f51a08596f?w=600&q=80",
  WEDDING:       "https://images.unsplash.com/photo-1653936644618-b13b3357ce78?w=600&q=80",
  CHOC_TRUFFLE:  "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?w=600&q=80",
  ROSE:          "https://images.unsplash.com/photo-1584818676680-44804433340c?w=600&q=80",
  DRIP_CHOC:     "https://images.unsplash.com/photo-1621303837383-77d809baf08b?w=600&q=80",
  MANGO:         "https://images.unsplash.com/photo-1700113120070-b79d456b462c?w=600&q=80",
  FUNFETTI:      "https://images.unsplash.com/photo-1613589348399-ff31b9a5866b?w=600&q=80",
  CUPCAKES:      "https://images.unsplash.com/photo-1634804991702-e8d073dc6ce4?w=600&q=80",
  BROWNIES:      "https://images.unsplash.com/photo-1706763306932-e6ecaf527136?w=600&q=80",
  CHOC_BROWNIE:  "https://images.unsplash.com/photo-1718011794471-8777e6b5b05c?w=600&q=80",
  BENTO:         "https://images.unsplash.com/photo-1576662712586-9f81ba6530da?w=600&q=80",
};

export const cakeCollection: CakeItem[] = [
  {
    id: "classic-vanilla",
    name: "Classic Vanilla Pastry",
    price: "₹400",
    image: IMG.VANILLA,
    description: "Soft & fluffy vanilla layers with fresh whipped cream",
    designs: [
      { id: 1, image: IMG.VANILLA,      label: "Classic Cream" },
      { id: 2, image: IMG.STRAWBERRY,   label: "Berry Swirl" },
      { id: 3, image: IMG.FRUIT,        label: "Fruit Garden" },
    ],
  },
  {
    id: "rich-chocolate",
    name: "Rich Chocolate Pastry",
    price: "₹400",
    image: IMG.CHOCOLATE,
    description: "Indulgent dark chocolate layers with ganache frosting",
    designs: [
      { id: 1, image: IMG.CHOCOLATE,    label: "Dark Velvet" },
      { id: 2, image: IMG.CHOC_TRUFFLE, label: "Truffle Heaven" },
      { id: 3, image: IMG.DRIP_CHOC,    label: "Ganache Drip" },
    ],
  },
  {
    id: "rasmalai",
    name: "Creamy Rasmalai Pastry",
    price: "₹400",
    image: IMG.VANILLA_BDAY,
    description: "Delicate rasmalai-flavoured cream with cardamom & saffron",
    designs: [
      { id: 1, image: IMG.VANILLA_BDAY, label: "Saffron Cream" },
      { id: 2, image: IMG.ROSE,         label: "Rose Petal" },
      { id: 3, image: IMG.STRAWBERRY,   label: "Creamy Swirl" },
    ],
  },
  {
    id: "blueberry",
    name: "Blueberry Delight Pastry",
    price: "₹400",
    image: IMG.LEMON_BLUE,
    description: "Fresh blueberry compote with vanilla cream layers",
    designs: [
      { id: 1, image: IMG.LEMON_BLUE,   label: "Berry Burst" },
      { id: 2, image: IMG.FUNFETTI,     label: "Blueberry Pop" },
      { id: 3, image: IMG.VANILLA,      label: "Classic Blueberry" },
    ],
  },
  {
    id: "rasgulla",
    name: "Soft Rasgulla Pastry",
    price: "₹400",
    image: IMG.FRUIT,
    description: "Soft rasgulla-inspired cream with light syrupy sponge",
    designs: [
      { id: 1, image: IMG.FRUIT,        label: "Light & Fresh" },
      { id: 2, image: IMG.STRAWBERRY,   label: "Cream Garden" },
      { id: 3, image: IMG.ROSE,         label: "Floral Soft" },
    ],
  },
  {
    id: "butterscotch",
    name: "Butterscotch Bliss",
    price: "₹400",
    image: IMG.BUTTERSCOTCH,
    description: "Rich caramel butterscotch layers with toffee cream filling",
    designs: [
      { id: 1, image: IMG.BUTTERSCOTCH, label: "Caramel Bliss" },
      { id: 2, image: IMG.MANGO,        label: "Golden Swirl" },
      { id: 3, image: IMG.LEMON_BLUE,   label: "Citrus Toffee" },
    ],
  },
  {
    id: "strawberry",
    name: "Fresh Strawberry Pastry",
    price: "₹400",
    image: IMG.STRAWBERRY,
    description: "Fresh strawberries layered with vanilla & whipped cream",
    designs: [
      { id: 1, image: IMG.STRAWBERRY,   label: "Berry Fresh" },
      { id: 2, image: IMG.ROSE,         label: "Strawberry Rose" },
      { id: 3, image: IMG.FRUIT,        label: "Summer Delight" },
    ],
  },
  {
    id: "gulab-jamun",
    name: "Traditional Gulab Jamun Pastry",
    price: "₹400",
    image: IMG.GULAB_JAMUN,
    description: "Classic gulab jamun pieces nestled in rose-water cream cake",
    designs: [
      { id: 1, image: IMG.GULAB_JAMUN,  label: "GJ Classic" },
      { id: 2, image: IMG.BUTTERSCOTCH, label: "Rose Syrup" },
      { id: 3, image: IMG.VANILLA_BDAY, label: "Desi Delight" },
    ],
  },
  {
    id: "pineapple",
    name: "Tropical Pineapple Pastry",
    price: "₹400",
    image: IMG.PINEAPPLE,
    description: "Juicy pineapple chunks with light vanilla cream layers",
    designs: [
      { id: 1, image: IMG.PINEAPPLE,    label: "Tropical Fresh" },
      { id: 2, image: IMG.MANGO,        label: "Island Swirl" },
      { id: 3, image: IMG.FRUIT,        label: "Pineapple Garden" },
    ],
  },
  {
    id: "dark-forest",
    name: "Dark Forest Cake",
    price: "₹400",
    image: IMG.BLACK_FOREST,
    description: "Rich dark chocolate sponge with cherries & dark cream",
    designs: [
      { id: 1, image: IMG.BLACK_FOREST, label: "Dark Classic" },
      { id: 2, image: IMG.DRIP_CHOC,    label: "Ganache Forest" },
      { id: 3, image: IMG.CHOC_TRUFFLE, label: "Truffle Forest" },
    ],
  },
  {
    id: "snow-white-forest",
    name: "Snow White Forest Cake",
    price: "₹400",
    image: IMG.WEDDING,
    description: "Elegant white cream sponge with vanilla & white chocolate",
    designs: [
      { id: 1, image: IMG.WEDDING,      label: "Snow Elegance" },
      { id: 2, image: IMG.VANILLA,      label: "White Velvet" },
      { id: 3, image: IMG.ROSE,         label: "Floral White" },
    ],
  },
  {
    id: "dutch-truffle",
    name: "Dutch Truffle Special",
    price: "₹400",
    image: IMG.CHOC_TRUFFLE,
    description: "Premium Dutch cocoa truffle with silky smooth ganache layers",
    designs: [
      { id: 1, image: IMG.CHOC_TRUFFLE, label: "Classic Truffle" },
      { id: 2, image: IMG.DRIP_CHOC,    label: "Ganache Special" },
      { id: 3, image: IMG.CHOCOLATE,    label: "Dark Dutch" },
    ],
  },
];

export const miniTreats: MiniTreat[] = [
  {
    id: "bento-cakes",
    name: "Bento Cakes",
    emoji: "🎁",
    price: "₹300",
    priceNote: "per piece",
    description: "Korean-style mini box cakes · Perfect to gift",
    image: IMG.BENTO,
    designs: [
      { id: 1, image: IMG.BENTO,      label: "Pastel Dream" },
      { id: 2, image: IMG.VANILLA,    label: "Cream Blush" },
      { id: 3, image: IMG.MANGO,      label: "Tropical Bento" },
    ],
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    emoji: "🧁",
    price: "₹30",
    priceNote: "per piece",
    description: "Fluffy decorated cupcakes · Min. order 6 pcs",
    image: IMG.CUPCAKES,
    designs: [
      { id: 1, image: IMG.CUPCAKES,   label: "Rosy Pink" },
      { id: 2, image: IMG.FUNFETTI,   label: "Funfetti" },
      { id: 3, image: IMG.ROSE,       label: "Floral Touch" },
    ],
  },
  {
    id: "brownies",
    name: "Brownies",
    emoji: "🍫",
    price: "₹80",
    priceNote: "per piece",
    description: "Fudgy homemade brownies · Min. order 4 pcs",
    image: IMG.BROWNIES,
    designs: [
      { id: 1, image: IMG.BROWNIES,     label: "Classic Fudge" },
      { id: 2, image: IMG.CHOC_BROWNIE, label: "Triple Choc" },
      { id: 3, image: IMG.DRIP_CHOC,    label: "Nutty Drizzle" },
    ],
  },
];
