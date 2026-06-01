// src/components/Footer.tsx
"use client"

import { useLangStore } from "@/lib/lang"

const WHATSAPP_NUMBER = "905555511800"
const FACEBOOK_URL = "https://facebook.com/alazazi12"
const TIKTOK_URL = "https://tiktok.com/@_kno_"

const content = {
  en: {
    tagline: "Premium tech, delivered fast.",
    links: "Quick Links",
    products: "Products",
    about: "About",
    contact: "Contact",
    followUs: "Follow Us",
    rights: "All rights reserved.",
    madeBy: "Built by",
  },
  ar: {
    tagline: "تقنية متميزة، توصيل سريع.",
    links: "روابط سريعة",
    products: "المنتجات",
    about: "عننا",
    contact: "تواصل",
    followUs: "تابعنا",
    rights: "جميع الحقوق محفوظة.",
    madeBy: "بُني بواسطة",
  },
}

// ← أيقونات SVG للسوشيال ميديا
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
)

export default function Footer() {
  const { lang } = useLangStore()
  const c = content[lang]
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[#09090c] mt-16">

      {/* الجزء العلوي */}
      <div className="max-w-5xl mx-auto px-7 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* العمود 1 — اللوغو والوصف */}
        <div>
          <p className="font-display text-xl font-bold mb-3">
            KNO<span className="text-[#c9a84c]">teck</span>
          </p>
          <p className="text-[rgba(232,232,240,0.4)] text-sm leading-relaxed">
            {c.tagline}
          </p>
        </div>

        {/* العمود 2 — روابط سريعة */}
        <div>
          <p className="font-display text-sm font-medium mb-4 text-[#c9a84c] uppercase tracking-wider">
            {c.links}
          </p>
          <div className="flex flex-col gap-2.5">
            {[
              { label: c.products, href: "/" },
              { label: c.about, href: "/about" },
              { label: c.contact, href: "/contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[rgba(232,232,240,0.45)] hover:text-[#c9a84c] text-sm transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-medium mb-4 text-[#c9a84c] uppercase tracking-wider">
            {c.followUs}
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[rgba(232,232,240,0.45)] hover:text-[#25D366] transition-colors group"
            >
              <span className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.08)] group-hover:border-[#25D366]/30 flex items-center justify-center transition-colors">
                <WhatsAppIcon />
              </span>
              <span className="text-sm">WhatsApp</span>
            </a>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[rgba(232,232,240,0.45)] hover:text-[#1877F2] transition-colors group"
            >
              <span className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.08)] group-hover:border-[#1877F2]/30 flex items-center justify-center transition-colors">
                <FacebookIcon />
              </span>
              <span className="text-sm">Facebook</span>
            </a>

            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[rgba(232,232,240,0.45)] hover:text-white transition-colors group"
            >
              <span className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.08)] group-hover:border-white/30 flex items-center justify-center transition-colors">
                <TikTokIcon />
              </span>
              <span className="text-sm">TikTok</span>
            </a>
          </div>
        </div>
      </div>

      {/* الجزء السفلي — حقوق النشر */}
      <div className="border-t border-[rgba(255,255,255,0.05)] px-7 py-5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[rgba(232,232,240,0.25)] text-xs">
            © {year} KNOteck. {c.rights}
          </p>

          <p className="text-[rgba(232,232,240,0.25)] text-xs">
            {c.madeBy}{" "}
            <a
              href="https://instagram.com/kno.v"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(201,168,76,0.6)] hover:text-[#c9a84c] transition-colors"
            >
              Muhammed Kenno
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}