"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../navbar"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-gray-950">
      <body className={`${inter.className} bg-gray-950 min-h-screen`}>
        {/* Mesh Background */}
        <div className="fixed inset-0 z-0 bg-slate-950">
          {/* Static Grid Pattern */}
          <div className="absolute inset-0">
            <svg className="w-full h-full opacity-100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-main" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(147, 51, 234, 0.8)" strokeWidth="2" />
                  <circle cx="0" cy="0" r="3" fill="rgba(147, 51, 234, 1)" />
                  <circle cx="60" cy="0" r="3" fill="rgba(147, 51, 234, 1)" />
                  <circle cx="0" cy="60" r="3" fill="rgba(147, 51, 234, 1)" />
                  <circle cx="60" cy="60" r="3" fill="rgba(147, 51, 234, 1)" />
                </pattern>
                <pattern id="grid-secondary" width="120" height="120" patternUnits="userSpaceOnUse">
                  <path d="M 120 0 L 0 0 0 120" fill="none" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1.5" />
                  <circle cx="60" cy="60" r="2" fill="rgba(59, 130, 246, 0.8)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-secondary)" />
              <rect width="100%" height="100%" fill="url(#grid-main)" />
            </svg>
          </div>

          {/* Animated Moving Elements */}
          <div className="absolute inset-0">
            {/* Horizontal Moving Lines */}
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`h-line-${i}`}
                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-80"
                style={{
                  top: `${(i + 1) * 10}%`,
                  animation: `moveRight ${4 + (i % 3)}s linear infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}

            {/* Vertical Moving Lines */}
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`v-line-${i}`}
                className="absolute h-full w-1 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-80"
                style={{
                  left: `${(i + 1) * 10}%`,
                  animation: `moveDown ${5 + (i % 2)}s linear infinite`,
                  animationDelay: `${i * 0.7}s`,
                }}
              />
            ))}

            {/* Pulsing Intersection Points */}
            {Array.from({ length: 25 }).map((_, i) => (
              <div
                key={`dot-${i}`}
                className="absolute w-4 h-4 bg-purple-400 rounded-full opacity-90"
                style={{
                  left: `${(i % 5) * 20}%`,
                  top: `${Math.floor(i / 5) * 25}%`,
                  animation: `pulse ${2 + (i % 3)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>

          {/* Floating Gradient Orbs */}
          <div className="absolute inset-0">
            <div
              className="absolute w-96 h-96 bg-gradient-radial from-purple-500/30 via-purple-500/15 to-transparent rounded-full blur-3xl"
              style={{
                top: "20%",
                left: "15%",
                animation: "floatOrb1 20s ease-in-out infinite",
              }}
            />
            <div
              className="absolute w-80 h-80 bg-gradient-radial from-blue-500/25 via-blue-500/12 to-transparent rounded-full blur-2xl"
              style={{
                top: "60%",
                right: "20%",
                animation: "floatOrb2 25s ease-in-out infinite",
              }}
            />
            <div
              className="absolute w-72 h-72 bg-gradient-radial from-purple-400/20 via-purple-400/10 to-transparent rounded-full blur-3xl"
              style={{
                top: "40%",
                left: "50%",
                animation: "floatOrb3 15s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10">
          <Navbar />
          <div className="pt-16 min-h-screen">{children}</div>
        </div>

        {/* Inline Styles for Animations */}
        <style jsx global>{`
          @keyframes moveRight {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }

          @keyframes moveDown {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
          }

          @keyframes floatOrb1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -20px) scale(1.1); }
            66% { transform: translate(-20px, 30px) scale(0.9); }
          }

          @keyframes floatOrb2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-25px, 15px) scale(1.05); }
            66% { transform: translate(20px, -25px) scale(0.95); }
          }

          @keyframes floatOrb3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(15px, 25px) scale(1.08); }
            66% { transform: translate(-30px, -15px) scale(0.92); }
          }
        `}</style>
      </body>
    </html>
  )
}
