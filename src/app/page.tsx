// src/app/page.tsx
"use client"

import { strapiGet } from "@/lib/api"
import ProductCard from "@/components/ProductCard"
import { useLangStore } from "@/lib/lang"
import { useEffect, useState } from "react"

type Product = {
  id: number
  name: string
  price: number
  slug: string
  description: string
  image?: { url: string }
}

export default function HomePage() {
  const { t } = useLangStore()
  const [products, setProducts] = useState<Product[]>([])

  // ← لأن الصفحة أصبحت Client، نجيب البيانات بـ useEffect
  useEffect(() => {
    strapiGet("/api/products?populate=*").then((data) => {
      setProducts(data.data ?? [])
    })
  }, [])

  return (
    <main className="min-h-screen p-7">

      <section id="hero" data-scrollspy="hero" className="mb-8">
        <div className="inline-flex items-center gap-2 bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.3)] text-[#c9a84c] text-xs px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></span>
          {t.badge}
        </div>

        <h1 className="font-display text-4xl font-bold tracking-tight leading-none mb-2">
          {t.hero1}{" "}
          <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(201,168,76,0.5)" }}>
            {t.hero2}
          </span>
          <br />{t.hero3}
        </h1>

        <p className="text-[rgba(232,232,240,0.45)] text-sm mt-2">{t.subtitle}</p>
      </section>

      <section id="products" data-scrollspy="products" className="scroll-mt-28">
        {products.length === 0 ? (
          <p className="text-[rgba(232,232,240,0.35)] text-sm">{t.noProducts}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}