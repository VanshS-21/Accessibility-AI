import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Symphony",
  description: "Where every voice is heard.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-gray-950">
      <body className={`${inter.variable} font-sans bg-gray-950 min-h-screen`}>
        <Navbar />
        <div className="pt-16 min-h-screen bg-gray-950">{children}</div>
      </body>
    </html>
  )
}
