import "swiper/css"

import "../public/style/globals.css"

import type { Metadata } from "next"
import { Roboto } from "next/font/google"

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] })

export const metadata: Metadata = {
  title: "Frontend Responsive - Nongnapat J.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
