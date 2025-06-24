import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Symphony",
  description: "Make your website accessible to everyone",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-gray-950">
      <body className={`${inter.className} bg-gray-950 min-h-screen`}>
        <Navbar />
        <div className="pt-16 min-h-screen">{children}</div>
      </body>
    </html>
  )
}
