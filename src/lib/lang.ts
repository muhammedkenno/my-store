// src/lib/lang.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Lang = "en" | "ar";

export const translations = {
  en: {
    // Navbar
    products: "Products",
    about: "About",
    cart: "Cart",
    // Home
    badge: "New Collection 2025",
    hero1: "Shop the",
    hero2: "Future",
    hero3: "of Tech",
    subtitle: "Curated products, delivered fast.",
    noProducts: "No products yet — add some in Strapi!",
    // Product Card
    addToCart: "Add to Cart",
    // Product Page
    inStock: "in stock",
    outOfStock: "Out of Stock",
    usd: "USD",
    viewCart: "View Cart →",
    back: "← Back",
    // Cart
    yourCart: "Your Cart 🛒",
    emptyCart: "Your cart is empty",
    emptyCartSub: "Go add some products!",
    browse: "Browse Products",
    subtotal: "Subtotal",
    shipping: "Shipping",
    free: "Free",
    total: "Total",
    checkout: "Order via WhatsApp",
    clearCart: "Clear cart",
  },
  ar: {
    // Navbar
    products: "المنتجات",
    about: "عننا",
    cart: "السلة",
    // Home
    badge: "مجموعة جديدة 2025",
    hero1: "تسوق",
    hero2: "المستقبل",
    hero3: "من التقنية",
    subtitle: "منتجات مختارة بعناية، توصيل سريع.",
    noProducts: "لا توجد منتجات بعد!",
    // Product Card
    addToCart: "أضف للسلة",
    // Product Page
    inStock: "متوفر في المخزن",
    outOfStock: "نفذ المخزون",
    usd: "دولار",
    viewCart: "عرض السلة ←",
    back: "→ رجوع",
    // Cart
    yourCart: "سلتك 🛒",
    emptyCart: "سلتك فارغة",
    emptyCartSub: "تصفح المنتجات وأضف ما يعجبك!",
    browse: "تصفح المنتجات",
    subtotal: "المجموع الجزئي",
    shipping: "الشحن",
    free: "مجاني",
    total: "المجموع",
    checkout: "اطلب عبر واتساب",
    clearCart: "إفراغ السلة",
  },
} as const;

type LangStore = {
  lang: Lang;
  t: (typeof translations)[Lang];
  setLang: (lang: Lang) => void;
};

export const useLangStore = create<LangStore>()(
  persist(
    (set) => ({
      lang: "en",
      t: translations.en,

      setLang: (lang) =>
        set({
          lang,
          t: translations[lang],
        }),
    }),
    { name: "knoteck-lang" },
  ),
);
