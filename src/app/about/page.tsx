// src/app/about/page.tsx
"use client"

import { useLangStore } from "@/lib/lang"

const content = {
  en: {
    badge: "Who we are",
    title: "About KNOteck",
    subtitle: "We're a tech-focused store bringing you the latest and greatest devices at competitive prices.",
    storyTitle: "Our Story",
    story: "KNOteck was founded with a simple mission: make premium tech accessible to everyone. We carefully curate every product we sell, ensuring quality and value for our customers.",
    valuesTitle: "Our Values",
    values: [
      { icon: "⚡", title: "Speed", desc: "Fast delivery, always." },
      { icon: "✅", title: "Quality", desc: "Only the best products." },
      { icon: "💬", title: "Support", desc: "We're here via WhatsApp." },
      { icon: "💰", title: "Value", desc: "Competitive prices." },
    ],
    teamTitle: "Meet the Founders",
    teamMembers: [
      {
        initials: "MK",
        name: "Muhammed Kenno",
        role: "Founder & Developer",
        bio: "Computer Engineering student building the future of e-commerce.",
      },
      {
        initials: "SK",
        name: "Suphi Kenno",
        role: "Founder & Trader",
        bio: "Supporting the business with expertise in sourcing and customer relations.",
      },
    ],
  },
  ar: {
    badge: "من نحن",
    title: "عن KNOteck",
    subtitle: "متجر تقني متخصص يجلب لك أحدث الأجهزة و الاكسسورات بأسعار تنافسية.",
    storyTitle: "قصتنا",
    story: "أُسست KNOteck بمهمة بسيطة: جعل التقنية المتميزة في متناول الجميع. نختار كل منتج بعناية لضمان الجودة والقيمة لعملائنا.",
    valuesTitle: "قيمنا",
    values: [
      { icon: "⚡", title: "السرعة", desc: "توصيل سريع دائماً." },
      { icon: "✅", title: "الجودة", desc: "أفضل المنتجات فقط." },
      { icon: "💬", title: "الدعم", desc: "نحن هنا عبر واتساب." },
      { icon: "💰", title: "القيمة", desc: "أسعار تنافسية." },
    ],
    teamTitle: "تعرف على المؤسسين",
    teamMembers: [
      {
        initials: "MK",
        name: "محمد كنو",
        role: "المؤسس والمطور",
        bio: "مهندس حاسوب يبني مستقبل التجارة الإلكترونية.",
      },
      {
        initials: "SK",
        name: "صبحي كنو",
        role: "المؤسس والتاجر",
        bio: "يدعم العمل بخبرة في التوريد والعلاقات مع العملاء.",
      },
    ],
  },
}

export default function AboutPage() {
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
      <p className="text-[rgba(232,232,240,0.5)] text-sm leading-relaxed mb-12">{c.subtitle}</p>

      {/* Story */}
      <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 mb-6">
        <h2 className="font-display text-lg font-medium mb-3 text-[#c9a84c]">{c.storyTitle}</h2>
        <p className="text-[rgba(232,232,240,0.6)] text-sm leading-relaxed">{c.story}</p>
      </div>

      {/* Values */}
      <h2 className="font-display text-lg font-medium mb-4">{c.valuesTitle}</h2>
      <div className="grid grid-cols-2 gap-3 mb-12">
        {c.values.map((v) => (
          <div
            key={v.title}
            className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-5 hover:border-[rgba(201,168,76,0.3)] transition-colors"
          >
            <span className="text-2xl mb-3 block">{v.icon}</span>
            <p className="font-display text-sm font-medium mb-1">{v.title}</p>
            <p className="text-[rgba(232,232,240,0.45)] text-xs">{v.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display text-lg font-medium mb-4">{c.teamTitle}</h2>
      <div className="grid gap-3 mb-12 sm:grid-cols-2">
        {c.teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 flex items-center gap-5"
          >
            <div className="w-16 h-16 rounded-full bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] flex items-center justify-center font-display text-xl font-bold text-[#c9a84c] flex-shrink-0">
              {member.initials}
            </div>
            <div>
              <p className="font-display font-medium">{member.name}</p>
              <p className="text-[#c9a84c] text-xs mb-2">{member.role}</p>
              <p className="text-[rgba(232,232,240,0.5)] text-xs leading-relaxed">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

    </main>
  )
}