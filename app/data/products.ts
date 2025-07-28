export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  weight: string;
  sku: string;
  category: string;
  images: {
    front: string;
    back?: string;
  };
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
  benefits: string[];
  ingredients?: string;
  usage?: string;
  nutritionHighlights?: string[];
}

// Real HH Laxmi Products Data
export const products: Product[] = [
  // FARALI ITEMS
  {
    id: "rajgira-atta-500g",
    name: "H.H. Laxmi Rajgira Atta",
    description: "Pure amaranth flour made from finest quality rajgira, perfect for fasting and nutritious rotis",
    price: 89,
    originalPrice: 120,
    weight: "500 g",
    sku: "HHL-RA-500G",
    category: "farali",
    images: {
      front: "/images/products/rajgira-front.jpg",
      back: "/images/products/rajgira-back.jpg"
    },
    rating: 4.5,
    reviews: 235,
    inStock: true,
    badge: "BESTSELLER",
    benefits: [
      "Rich in protein and fiber",
      "Gluten-free and nutritious", 
      "Perfect for upvas/fasting",
      "Easy to digest"
    ],
    ingredients: "100% Pure Rajgira (Amaranth)",
    usage: "Mix with water to make dough. Roll into rotis and cook on tawa.",
    nutritionHighlights: ["High Protein", "Rich in Iron", "Gluten Free"]
  },
  {
    id: "sabudana-premium-500g",
    name: "H.H. Laxmi Sabudana",
    description: "Large pearl tapioca of finest quality, ideal for upvas khichdi and other fasting recipes",
    price: 75,
    weight: "500 g",
    sku: "HHL-SA-500G", 
    category: "farali",
    images: {
      front: "/images/products/sabudana-front.jpg",
      back: "/images/products/sabudana-back.jpg"
    },
    rating: 4.4,
    reviews: 198,
    inStock: true,
    badge: "POPULAR",
    benefits: [
      "Easy to digest",
      "Quick energy source",
      "Naturally gluten-free",
      "Perfect for fasting"
    ],
    ingredients: "100% Pure Tapioca Pearls",
    usage: "Soak for 4-5 hours, then use for khichdi, vada, or kheer.",
    nutritionHighlights: ["Quick Energy", "Easy Digest", "Gluten Free"]
  },
  {
    id: "moraiyo-500g",
    name: "H.H. Laxmi Moraiyo",
    description: "Premium barnyard millet for healthy and filling meals during fasting",
    price: 95,
    originalPrice: 130,
    weight: "500 g", 
    sku: "HHL-MO-500G",
    category: "farali",
    images: {
      front: "/images/products/moraiyo-front.jpg",
      back: "/images/products/moraiyo-back.jpg"
    },
    rating: 4.3,
    reviews: 156,
    inStock: true,
    badge: "BESTSELLER",
    benefits: [
      "High in fiber and minerals",
      "Low glycemic index",
      "Rich in antioxidants",
      "Perfect for fasting"
    ],
    ingredients: "100% Organic Barnyard Millet",
    usage: "Cook like rice or grind into flour for various preparations.",
    nutritionHighlights: ["High Fiber", "Low GI", "Mineral Rich"]
  },
  {
    id: "singhara-atta-500g",
    name: "H.H. Laxmi Singhara Atta",
    description: "Water chestnut flour, perfect for fasting and special occasion cooking",
    price: 140,
    originalPrice: 180,
    weight: "500 g", 
    sku: "HHL-SH-500G",
    category: "farali",
    images: {
      front: "/images/products/singhare-front.jpg",
      back: "/images/products/singhare-back.jpg"
    },
    rating: 4.1,
    reviews: 67,
    inStock: true,
    benefits: [
      "Light and easily digestible",
      "Rich in potassium",
      "Natural cooling properties", 
      "Perfect for fasting"
    ],
    ingredients: "100% Pure Water Chestnut",
    usage: "Use for making puris, halwa, or mix with other farali flours.",
    nutritionHighlights: ["Light & Digestible", "Potassium Rich", "Cooling"]
  },
  {
    id: "rajgira-kakro-500g",
    name: "H.H. Laxmi Rajgira Kakro Atta",
    description: "Premium quality amaranth puffs, perfect for farali snacking and fasting recipes",
    price: 65,
    originalPrice: 85,
    weight: "500 g",
    sku: "HHL-RK-500G",
    category: "farali",
    images: {
      front: "/images/products/rajgira-kakro-front.jpg",
      back: "/images/products/rajgira-kakro-back.jpg"
    },
    rating: 4.3,
    reviews: 78,
    inStock: true,
    badge: "BESTSELLER",
    benefits: [
      "Ready to eat snack",
      "High in protein",
      "Gluten-free and healthy",
      "Perfect for fasting"
    ],
    ingredients: "100% Puffed Amaranth (Rajgira)",
    usage: "Eat directly as snack or use in making ladoos, chikki, and other farali preparations.",
    nutritionHighlights: ["Ready to Eat", "High Protein", "Gluten Free"]
  },
  
  // MILLETS
  {
    id: "kodari-500g",
    name: "H.H. Laxmi Kodari", 
    description: "Finger millet packed with calcium and nutrients for strength and health",
    price: 85,
    originalPrice: 110,
    weight: "500 g",
    sku: "HHL-KO-500G",
    category: "millets",
    images: {
      front: "/images/products/kodari-front.jpg",
      back: "/images/products/kodari-back.jpg"
    },
    rating: 4.6,
    reviews: 142,
    inStock: true,
    badge: "NEW",
    benefits: [
      "High in calcium and iron",
      "Rich in amino acids", 
      "Supports bone health",
      "Good for growing children"
    ],
    ingredients: "100% Pure Finger Millet (Ragi)",
    usage: "Make porridge, rotis, or add to smoothies for nutrition boost.",
    nutritionHighlights: ["High Calcium", "Rich in Iron", "Bone Health"]
  },

  // SPICES & HERBS
  {
    id: "methi-flour-500g",
    name: "H.H. Laxmi Methi Flour",
    description: "Pure fenugreek flour with natural health benefits and distinctive flavor",
    price: 120,
    originalPrice: 150,
    weight: "500 g",
    sku: "HHL-MF-500G",
    category: "spices-herbs",
    images: {
      front: "/images/products/methi-flour-front.jpg", 
      back: "/images/products/methi-flour-back.jpg"
    },
    rating: 4.2,
    reviews: 89,
    inStock: true,
    badge: "NEW",
    benefits: [
      "Rich in iron and vitamins",
      "Helps control blood sugar",
      "Natural digestive aid",
      "Boosts immunity"
    ],
    ingredients: "100% Pure Fenugreek Seeds (Ground)",
    usage: "Mix with other flours or use for making methi paratha.",
    nutritionHighlights: ["Iron Rich", "Blood Sugar Control", "Digestive Aid"]
  },
  {
    id: "gum-powder-500g",
    name: "H.H. Laxmi Gum Powder",
    description: "Premium quality gum powder for traditional recipes and health benefits",
    price: 180,
    originalPrice: 220,
    weight: "500 g",
    sku: "HHL-GP-500G",
    category: "spices-herbs",
    images: {
      front: "/images/products/gum-powder-front.jpg",
      back: "/images/products/gum-powder-back.jpg"
    },
    rating: 4.0,
    reviews: 45,
    inStock: true,
    badge: "PREMIUM",
    benefits: [
      "Rich in nutrients",
      "Supports joint health",
      "Natural binding agent",
      "Traditional healing properties"
    ],
    ingredients: "100% Pure Gum Powder",
    usage: "Add to sweets, ladoos, or use in traditional recipes as directed.",
    nutritionHighlights: ["Joint Health", "Natural Nutrients", "Traditional"]
  }
];

// Product categories - Updated to 3 categories
export const categories = [
  {
    id: "farali",
    name: "Farali Items", 
    description: "Traditional fasting food items",
    icon: "🌾"
  },
  {
    id: "millets",
    name: "Millets",
    description: "Nutritious ancient grains", 
    icon: "🌱"
  },
  {
    id: "spices-herbs", 
    name: "Spices & Herbs",
    description: "Natural spices and herbs",
    icon: "🌿"
  }
];

// Helper functions
export const getProductsByCategory = (categoryId: string) => {
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.badge).slice(0, 4);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
