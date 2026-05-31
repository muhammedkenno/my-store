// src/app/contact/page.tsx
"use client"

import Link from "next/link"
import { useLangStore } from "@/lib/lang"

const WHATSAPP_NUMBER = "905555511800"

const content = {
  en: {
    badge: "Get in touch",
    title: "Contact Us",
    subtitle: "Have a question or want to place a custom order? We're here for you.",
    channels: [
      {
        icon: "💬",
        title: "WhatsApp",
        desc: "Fastest response — usually within minutes.",
        action: "Chat with us",
        href: `https://wa.me/${WHATSAPP_NUMBER}`,
      },
      {
        icon: "📧",
        title: "Email",
        desc: "For detailed inquiries.",
        action: "mhmmdkenno@gmail.com",
        href: "mailto:mhmmdkenno@gmail.com",
      },
      {
        icon: "📍",
        title: "Location",
        desc: "Kilis,  murtaza caddesi. Turkey 🇹🇷",
        action: null,
        href: null,
      },
      {
        icon: "🐙",
        title: "GitHub",
        desc: "Check out my code.",
        action: "github.com/muhammedkenno",
        href: "https://github.com/muhammedkenno",
      },
    ],
    ctaTitle: "Ready to order?",
    ctaDesc: "Browse our products and place your order directly via WhatsApp.",
    ctaBtn: "Shop Now →",
  },
  ar: {
    badge: "تواصل معنا",
    title: "اتصل بنا",
    subtitle: "لديك سؤال أو تريد طلباً مخصصاً؟ نحن هنا من أجلك.",
    channels: [
      {
        icon: "💬",
        title: "واتساب",
        desc: "أسرع رد — عادةً في دقائق.",
        action: "تحدث معنا",
        href: `https://wa.me/${WHATSAPP_NUMBER}`,
      },
      {
        icon: "📧",
        title: "البريد الإلكتروني",
        desc: "للاستفسارات التفصيلية.",
        action: "mhmmdkenno@gmail.com",
        href: "mailto:mhmmdkenno@gmail.com",
      },
      {
        icon: "📍",
        title: "الموقع",
        desc: "كيليس شارع المرتضى.، تركيا 🇹🇷",
        action: null,
        href: null,
      },
      {
        icon: "🐙",
        title: "GitHub",
        desc: "تصفح الكود الخاص بي.",
        action: "github.com/muhammedkenno",
        href: "https://github.com/muhammedkenno",
      },
    ],
    ctaTitle: "جاهز للطلب؟",
    ctaDesc: "تصفح منتجاتنا وضع طلبك مباشرة عبر واتساب.",
    ctaBtn: "تسوق الآن ←",
  },
}

export default function ContactPage() {
  const { lang } = useLangStore()
  const c = content[lang]

  return (
    <main className="min-h-screen p-7 max-w-3xl mx-auto">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.3)] text-[#c9a84c] text-xs px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></span>
        {c.badge}
      </div>

      <h1 className="font-display text-4xl font-bold tracking-tight mb-3">{c.title}</h1>
      <p className="text-[rgba(232,232,240,0.5)] text-sm leading-relaxed mb-10">{c.subtitle}</p>

      {/* Channels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
        {c.channels.map((ch) => (
          <div
            key={ch.title}
            className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-5 hover:border-[rgba(201,168,76,0.3)] transition-colors"
          >
            <span className="text-2xl mb-3 block">{ch.icon}</span>
            <p className="font-display text-sm font-medium mb-1">{ch.title}</p>
            <p className="text-[rgba(232,232,240,0.45)] text-xs mb-3">{ch.desc}</p>

            {ch.href ? (
              <a
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c] text-xs hover:underline transition-colors"
              >
                {ch.action} →
              </a>
            ) : (
              <span className="text-[rgba(232,232,240,0.35)] text-xs">{ch.desc}</span>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.2)] rounded-2xl p-7 text-center">
        <h2 className="font-display text-xl font-bold mb-2">{c.ctaTitle}</h2>
        <p className="text-[rgba(232,232,240,0.5)] text-sm mb-5">{c.ctaDesc}</p>

        <Link
          href="/"
          className="inline-block bg-brand hover:bg-brand-light text-[#09090c] px-8 py-2.5 rounded-full text-sm font-medium transition-colors"
        >
          {c.ctaBtn}
        </Link>
      </div>

    </main>

  )
}