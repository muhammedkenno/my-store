// src/app/products/[slug]/page.tsx
import Link from "next/link"
import { strapiGet } from "@/lib/api"
import AddToCartButton from "@/components/AddtoCartButton"

type Product = {
  id: number
  name: string
  price: number
  slug: string
  description: string
  stock: number
  image?: { url: string }
}

async function getProduct(slug: string): Promise<Product | null> {
  const data = await strapiGet(
    `/api/products?filters[slug][$eq]=${slug}&populate=*`
  )
  if (!data.data || data.data.length === 0) return null
  return data.data[0]
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <span className="text-5xl">😅</span>
        <h1 className="font-display text-2xl font-bold">Product not found</h1>
        <Link href="/" className="text-[#c9a84c] hover:underline text-sm">
          ← Back to Store / العودة للمتجر
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen p-7 max-w-4xl mx-auto">

      <Link href="/" className="text-[rgba(232,232,240,0.4)] hover:text-[#e8e8f0] text-sm transition-colors">
        ← Back / رجوع
      </Link>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1500] to-[#2d2200] aspect-square flex items-center justify-center">
          {product.image ? (
            <img
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${product.image.url}`}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-8xl">📦</span>
          )}
        </div>

        <div className="flex flex-col justify-center">

          <div className="inline-flex items-center gap-2 w-fit mb-4">
            <span className={`w-2 h-2 rounded-full ${product.stock > 0 ? "bg-green-400" : "bg-red-400"}`}></span>
            <span className="text-xs text-[rgba(232,232,240,0.45)]">
              {product.stock > 0 ? `${product.stock} in stock / في المخزن` : "Out of stock / نفذت الكمية"}
            </span>
          </div>

          <h1 className="font-display text-3xl font-bold tracking-tight mb-3">
            {product.name}
          </h1>

          <p className="text-[rgba(232,232,240,0.55)] text-sm leading-relaxed mb-6">
            {product.description}
          </p>

          {/* السعر */}
          <div className="flex items-baseline gap-2 mb-8">
            <span className="font-display text-4xl font-bold text-[#c9a84c]">
              ${product.price}
            </span>
            <span className="text-[rgba(232,232,240,0.35)] text-sm">TL</span>
          </div>

          <AddToCartButton product={product} />

        </div>
      </div>
    </main>
  )
}