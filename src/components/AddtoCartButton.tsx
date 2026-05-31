// src/components/AddToCartButton.tsx
"use client"

import { useCartStore } from "@/lib/store"
import type { CartItem } from "@/lib/store"
import Link from "next/link"
import { useLangStore } from "@/lib/lang"

type Product = {
  id: number
  name: string
  price: number
  slug: string
  image?: { url: string }
  stock: number
}

export default function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem)
  const { t } = useLangStore()

  function handleAdd() {
    const item: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      slug: product.slug,
      image: product.image
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.image.url}`
        : "",
      quantity: 1,
    }
    addItem(item)
  }

  if (product.stock === 0) {
    return (
      <button
        disabled
        className="w-full py-3 rounded-full bg-[rgba(255,255,255,0.05)] text-[rgba(232,232,240,0.3)] cursor-not-allowed text-sm"
      >
        {t.outOfStock}
      </button>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={handleAdd}
        className="w-full bg-[#c9a84c] hover:bg-[#e8c96d] text-[#09090c] py-3 rounded-full font-medium transition-colors"
      >
        {t.addToCart}
      </button>

      <Link
        href="/cart"
        className="w-full border border-[rgba(201,168,76,0.3)] hover:border-[rgba(201,168,76,0.6)] text-[#c9a84c] py-3 rounded-full text-sm text-center transition-colors"
      >
        {t.viewCart}
      </Link>
    </div>
  )
}