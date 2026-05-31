// src/components/Navbar.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useCartStore } from "@/lib/store"
import { useLangStore } from "@/lib/lang"

export default function Navbar() {
  const pathname = usePathname()
  const totalItems = useCartStore((state) => state.totalItems())
  const { lang, t, setLang } = useLangStore()
  const [activeSection, setActiveSection] = useState<string>(pathname === "/about" ? "about" : pathname === "/contact" ? "contact" : "products")
  const routeSection = pathname === "/about" ? "about" : pathname === "/contact" ? "contact" : "products"
  const currentActiveSection = pathname === "/" ? activeSection : routeSection

  const toggleLang = () => {
    const next = lang === "en" ? "ar" : "en"
    setLang(next)
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = next
  }

  useEffect(() => {
    if (pathname !== "/") {
      return
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-scrollspy]"))
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1))

        if (visible.length > 0) {
          const section = (visible[0].target as HTMLElement).dataset.section
          if (section) setActiveSection(section)
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.1 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])

  return (
    <nav className="flex justify-between items-center px-7 py-4 border-b border-[rgba(255,255,255,0.08)] bg-[#09090c]/95 sticky top-0 z-50 backdrop-blur-sm">

      <Link href="/" className="font-display text-lg font-bold tracking-tight">
        KNO<span className="text-[#c9a84c]">teck</span>
      </Link>

      <div className="flex items-center gap-5">
        <Link
          href="/#products"
          className={`text-sm transition-colors ${currentActiveSection === "products" ? "text-[#c9a84c]" : "text-[rgba(232,232,240,0.5)] hover:text-[#e8e8f0]"}`}
        >
          {t.products}
        </Link>
        <Link
          href="/about"
          className={`text-sm transition-colors ${currentActiveSection === "about" ? "text-[#c9a84c]" : "text-[rgba(232,232,240,0.5)] hover:text-[#e8e8f0]"}`}
        >
          {t.about}
        </Link>

        <Link
          href="/contact"
          className={`text-sm transition-colors ${currentActiveSection === "contact" ? "text-[#c9a84c]" : "text-[rgba(232,232,240,0.5)] hover:text-[#e8e8f0]"}`}
        >
          {lang === "en" ? "Contact" : "تواصل"}
        </Link>

        <button
          onClick={toggleLang}
          className="flex items-center gap-1.5 border border-[rgba(255,255,255,0.12)] hover:border-[rgba(201,168,76,0.4)] text-[rgba(232,232,240,0.5)] hover:text-[#c9a84c] px-3 py-1.5 rounded-full text-xs transition-all"
        >
          🌐
          <span>{lang === "en" ? "العربية" : "English"}</span>
        </button>

        <Link
          href="/cart"
          className="flex items-center gap-2 bg-[#c9a84c] text-[#09090c] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#e8c96d] transition-colors"
        >
          🛒 {t.cart}
          {totalItems > 0 && (
            <span className="bg-[#09090c] text-[#c9a84c] text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}