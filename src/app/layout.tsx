// src/app/layout.tsx
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KNOteck | كنو للاتصالات",
  description: "متجر إلكتروني لبيع أحدث الأجهزة التقنية بأسعار تنافسية وتجربة تسوق سريعة وسهلة.",
  keywords: ["KNOteck", "متجر إلكتروني", "تقنية", "إلكترونيات", "تسوق"],
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  openGraph: {
    title: "KNOteck | كنو للاتصالات",
    description: "متجر إلكتروني لبيع أحدث الأجهزة التقنية بأسعار تنافسية وتجربة تسوق سريعة وسهلة.",
    type: "website",
    siteName: "KNOteck",
    locale: "ar-SA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KNOteck - متجر إلكتروني للتقنية",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-gray-950 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
