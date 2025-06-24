"use client"

import type React from "react"

interface SectionBackgroundProps {
  direction: "edge-in" | "center-out"
  className?: string
  children: React.ReactNode
}

export default function SectionBackground({ direction, className = "", children }: SectionBackgroundProps) {
  const isEdgeIn = direction === "edge-in"

  return (
    <div className={`relative bg-slate-950 overflow-hidden ${className}`}>
      {/* Background Pattern and Light Beams */}
      <div className="absolute inset-0">
        {/* SVG Pattern Definition */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Dot Pattern for Halftone Effect */}
            <pattern id={`dotPattern-${direction}`} x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.8" fill="rgba(147, 51, 234, 0.3)" />
            </pattern>

            {/* Enhanced Gradients for Edge-In Direction */}
            {isEdgeIn && (
              <>
                {/* Left Side Gradients */}
                <radialGradient id={`leftBeam-${direction}`} cx="0%" cy="50%" r="100%">
                  <stop offset="0%" stopColor="rgba(147, 51, 234, 0.4)" />
                  <stop offset="50%" stopColor="rgba(147, 51, 234, 0.2)" />
                  <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
                </radialGradient>

                {/* Right Side Gradients - Fixed */}
                <radialGradient id={`rightBeam-${direction}`} cx="100%" cy="50%" r="100%">
                  <stop offset="0%" stopColor="rgba(147, 51, 234, 0.4)" />
                  <stop offset="50%" stopColor="rgba(147, 51, 234, 0.2)" />
                  <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
                </radialGradient>

                <radialGradient id={`rightBeamSecondary-${direction}`} cx="100%" cy="30%" r="80%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                  <stop offset="60%" stopColor="rgba(59, 130, 246, 0.1)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                </radialGradient>

                {/* Subtle Center Convergence */}
                <radialGradient id={`centerGlow-${direction}`} cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="rgba(147, 51, 234, 0.1)" />
                  <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
                </radialGradient>
              </>
            )}

            {/* Gradients for Center-Out Direction */}
            {!isEdgeIn && (
              <>
                <radialGradient id={`centerBeam-${direction}`} cx="50%" cy="50%" r="80%">
                  <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
                  <stop offset="30%" stopColor="rgba(147, 51, 234, 0.2)" />
                  <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
                </radialGradient>

                <linearGradient id={`leftExtend-${direction}`} x1="50%" y1="50%" x2="0%" y2="50%">
                  <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
                  <stop offset="70%" stopColor="rgba(147, 51, 234, 0.1)" />
                  <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
                </linearGradient>

                <linearGradient id={`rightExtend-${direction}`} x1="50%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
                  <stop offset="70%" stopColor="rgba(147, 51, 234, 0.1)" />
                  <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
                </linearGradient>
              </>
            )}
          </defs>

          {/* Edge-In Light Beams - Restored to Previous Intensity */}
          {isEdgeIn && (
            <>
              {/* Left Light Beam */}
              <polygon points="0,200 400,350 400,450 0,600" fill={`url(#leftBeam-${direction})`} opacity="0.6" />
              <polygon points="0,200 400,350 400,450 0,600" fill={`url(#dotPattern-${direction})`} opacity="0.4" />

              {/* Right Light Beam - Fixed coordinates */}
              <polygon
                points="100%,200 calc(100% - 400px),350 calc(100% - 400px),450 100%,600"
                fill={`url(#rightBeam-${direction})`}
                opacity="0.6"
              />
              <polygon
                points="100%,200 calc(100% - 400px),350 calc(100% - 400px),450 100%,600"
                fill={`url(#dotPattern-${direction})`}
                opacity="0.4"
              />

              {/* Additional Right Side Beam for Visibility */}
              <polygon
                points="100%,100 calc(100% - 350px),250 calc(100% - 350px),400 100%,500"
                fill={`url(#rightBeamSecondary-${direction})`}
                opacity="0.5"
              />

              {/* Subtle Center Convergence Glow */}
              <ellipse cx="50%" cy="50%" rx="300" ry="200" fill={`url(#centerGlow-${direction})`} />
            </>
          )}

          {/* Center-Out Light Beams */}
          {!isEdgeIn && (
            <>
              {/* Center Origin */}
              <ellipse cx="50%" cy="50%" rx="200" ry="150" fill={`url(#centerBeam-${direction})`} opacity="0.8" />
              <ellipse cx="50%" cy="50%" rx="200" ry="150" fill={`url(#dotPattern-${direction})`} opacity="0.5" />

              {/* Left Extension */}
              <polygon points="50%,300 0,250 0,550 50%,500" fill={`url(#leftExtend-${direction})`} opacity="0.6" />
              <polygon points="50%,300 0,250 0,550 50%,500" fill={`url(#dotPattern-${direction})`} opacity="0.3" />

              {/* Right Extension */}
              <polygon
                points="50%,300 100%,250 100%,550 50%,500"
                fill={`url(#rightExtend-${direction})`}
                opacity="0.6"
              />
              <polygon
                points="50%,300 100%,250 100%,550 50%,500"
                fill={`url(#dotPattern-${direction})`}
                opacity="0.3"
              />
            </>
          )}
        </svg>

        {/* CSS-based Right Side Gradient Overlay for Backup */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial from-purple-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-8 w-80 h-80 bg-gradient-radial from-blue-500/15 via-blue-500/5 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-4 w-72 h-72 bg-gradient-radial from-purple-400/18 via-purple-400/8 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Enhanced Diagonal Light Streaks */}
        <div className="absolute top-20 left-10 w-96 h-0.5 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent rotate-12 blur-sm"></div>
        <div className="absolute top-32 right-16 w-80 h-0.5 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent -rotate-12 blur-sm"></div>
        <div className="absolute top-40 right-24 w-72 h-0.5 bg-gradient-to-r from-transparent via-blue-400/25 to-transparent rotate-8 blur-sm"></div>

        <div className="absolute bottom-40 left-20 w-72 h-0.5 bg-gradient-to-r from-transparent via-purple-400/25 to-transparent rotate-6 blur-sm"></div>
        <div className="absolute bottom-32 right-12 w-64 h-0.5 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent -rotate-6 blur-sm"></div>
        <div className="absolute bottom-48 right-32 w-80 h-0.5 bg-gradient-to-r from-transparent via-blue-400/25 to-transparent rotate-10 blur-sm"></div>

        {/* Right-Side Vertical Accent Lights */}
        <div className="absolute top-1/4 right-8 w-1 h-32 bg-gradient-to-b from-transparent via-purple-400/25 to-transparent blur-sm"></div>
        <div className="absolute top-1/2 right-16 w-1 h-24 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent blur-sm"></div>
        <div className="absolute bottom-1/4 right-12 w-1 h-28 bg-gradient-to-b from-transparent via-purple-400/22 to-transparent blur-sm"></div>

        {/* Additional Right-Side Gradient Beams */}
        <div className="absolute top-1/3 right-0 w-80 h-1 bg-gradient-to-l from-purple-500/20 via-purple-500/10 to-transparent rotate-45 blur-sm"></div>
        <div className="absolute bottom-1/3 right-0 w-72 h-1 bg-gradient-to-l from-blue-500/15 via-blue-500/8 to-transparent -rotate-45 blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
