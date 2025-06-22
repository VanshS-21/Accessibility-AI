"use client"

import type React from "react"

interface SectionBackgroundProps {
  direction: "edge-in" | "center-out" | "aurora" | "mesh"
  className?: string
  children: React.ReactNode
}

export default function SectionBackground({ direction, className = "", children }: SectionBackgroundProps) {
  const isMesh = direction === "mesh"

  return (
    <div className={`relative bg-slate-950 overflow-hidden ${className}`}>
      {/* Background Pattern and Light Beams */}
      <div className="absolute inset-0">
        {/* SVG Pattern Definition */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {isMesh && (
              <>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                </pattern>
                <filter id="mesh-blur">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
                </filter>
                <radialGradient id="mesh-1" cx="50%" cy="50%" r="70%">
                  <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
                  <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
                </radialGradient>
                <radialGradient id="mesh-2" cx="50%" cy="50%" r="70%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                </radialGradient>
                <radialGradient id="mesh-3" cx="50%" cy="50%" r="70%">
                  <stop offset="0%" stopColor="rgba(147, 51, 234, 0.2)" />
                  <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
                </radialGradient>
              </>
            )}
          </defs>

          {isMesh && (
            <>
              {/* Static "Nebula" Glows */}
              <g filter="url(#mesh-blur)">
                <circle cx="10%" cy="90%" r="300" fill="rgba(147, 51, 234, 0.1)" />
                <circle cx="80%" cy="20%" r="350" fill="rgba(59, 130, 246, 0.1)" />
              </g>

              {/* Animated Mesh */}
              <g filter="url(#mesh-blur)">
                <ellipse cx="20%" cy="30%" rx="500" ry="300" fill="url(#mesh-1)">
                  <animate attributeName="cx" values="20%; 80%; 20%" dur="20s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="30%; 70%; 30%" dur="20s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="80%" cy="70%" rx="500" ry="300" fill="url(#mesh-2)">
                  <animate attributeName="cx" values="80%; 20%; 80%" dur="20s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="70%; 30%; 70%" dur="20s" repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="50%" cy="50%" rx="400" ry="400" fill="url(#mesh-3)">
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    dur="30s"
                    repeatCount="indefinite"
                  />
                </ellipse>
              </g>

              {/* Grid Overlay */}
              <rect width="100%" height="100%" fill="url(#grid)" />
            </>
          )}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
