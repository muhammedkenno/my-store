"use client"

import Link from "next/link"
import { useCartStore } from "@/lib/store"
import type { CartItem } from "@/lib/store"

type Product = {
  id: number
  name: string
  price: number
  slug: string
  description: string
  image?: { url: string }
}

type Props = {
  product: Product
}



export default function ProductCard({ product }: Props) {
  const addItem = useCartStore((state) => state.addItem)

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault()

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

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden hover:border-[rgba(201,168,76,0.35)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">

        <div className="h-44 md:h-56 lg:h-64 flex items-center justify-center bg-gradient-to-br from-[#1a1500] to-[#2d2200] relative">
          {product.image ? (
            <img
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${product.image.url}`}
              alt={product.name}
              className="h-full w-full object-contain object-center"
            />
          ) : (
            <span className="text-5xl">📦</span>
          )}
        </div>

        <div className="p-4">
          <h2 className="font-display text-sm font-medium mb-3 text-[#e8e8f0]">
            {product.name}
          </h2>

          <div className="flex justify-between items-center">
            <span className="text-base font-medium text-[#c9a84c]">
              ₺{product.price}
            </span>

            <button
              onClick={handleAddToCart}
              className="w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center text-[#09090c] text-lg font-bold hover:bg-[#e8c96d] active:scale-90 transition-all"
            >
              +
            </button>
          </div>
        </div>

      </div>
    </Link>
  )
}