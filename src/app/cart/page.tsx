// src/app/cart/page.tsx
"use client"

import Link from "next/link"
import { useCartStore } from "@/lib/store"
import { useLangStore } from "@/lib/lang"

const WHATSAPP_NUMBER = "905555511800"

export default function CartPage() {
  const { items, removeItem, increaseQuantity, decreaseQuantity, totalPrice, clearCart } =
    useCartStore()
  const { t } = useLangStore()

  function handleCheckout() {
    const itemLines = items
      .map((item) => `• ${item.name} x${item.quantity} — $${(item.price * item.quantity).toFixed(2)}`)
      .join("\n")

    const message =
      ` *♛ طلب جديد من كنو للاتصالات ♛*\n\n\n` +
      `${itemLines}\n\n\n` +
      `──────────────\n\n` +
      `\n*المجموع:\n ₺${totalPrice().toFixed(2)}*\n\n\n` +
      `تاكيد الطلبية ⛟`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    window.open(url, "_blank")
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <span className="text-6xl">🛒</span>
        <h1 className="font-display text-2xl font-bold">{t.emptyCart}</h1>
        <p className="text-[rgba(232,232,240,0.45)] text-sm">{t.emptyCartSub}</p>
        <Link
          href="/"
          className="mt-2 bg-[#c9a84c] text-[#09090c] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#e8c96d] transition-colors"
        >
          {t.browse}
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen p-7 max-w-3xl mx-auto">

      <h1 className="font-display text-3xl font-bold tracking-tight mb-8">
        {t.yourCart}
      </h1>

      <div className="flex flex-col gap-3 mb-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-4 flex items-center gap-4"
          >
            {/* صورة المنتج */}
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#1a1500] flex-shrink-0">
              {item.image ? (
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-2xl">📦</div>
              )}
            </div>

            {/* الاسم والسعر */}
            <div className="flex-1">
              <h2 className="font-display text-sm font-medium text-[#e8e8f0]">
                {item.name}
              </h2>
              <p className="text-[#c9a84c] text-sm mt-0.5">${item.price}</p>
            </div>

            {/* التحكم بالكمية */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="w-7 h-7 rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[rgba(232,232,240,0.6)] hover:border-[rgba(201,168,76,0.4)] transition-colors"
              >
                −
              </button>

              <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>

              <button
                onClick={() => increaseQuantity(item.id)}
                className="w-7 h-7 rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[rgba(232,232,240,0.6)] hover:border-[rgba(201,168,76,0.4)] transition-colors"
              >
                +
              </button>
            </div>

            {/* السعر الكلي */}
            <p className="text-sm font-medium text-[#c9a84c] w-16 text-right">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            {/* حذف */}
            <button
              onClick={() => removeItem(item.id)}
              className="text-[rgba(232,232,240,0.3)] hover:text-red-400 transition-colors text-lg ml-2"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* الملخص */}
      <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-5">

        <div className="flex justify-between items-center mb-4">
          <span className="text-[rgba(232,232,240,0.5)] text-sm">{t.subtotal}</span>
          <span className="text-sm">${totalPrice().toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center mb-6 pb-4 border-b border-[rgba(255,255,255,0.08)]">
          <span className="text-[rgba(232,232,240,0.5)] text-sm">{t.shipping}</span>
          <span className="text-sm text-green-400">{t.free}</span>
        </div>

        <div className="flex justify-between items-center mb-6">
          <span className="font-display font-medium">{t.total}</span>
          <span className="font-display text-xl font-bold text-[#c9a84c]">
            ${totalPrice().toFixed(2)}
          </span>
        </div>

        <button
          onClick={handleCheckout}
          className="w-full bg-[#25D366] hover:bg-[#1fb855] text-white py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
          </svg>
          {t.checkout}
        </button>

        <button
          onClick={clearCart}
          className="w-full mt-3 text-[rgba(232,232,240,0.3)] hover:text-red-400 text-sm transition-colors"
        >
          {t.clearCart}
        </button>
      </div>
    </main>
  )
}