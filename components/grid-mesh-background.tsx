"use client"

import type React from "react"

interface GridMeshBackgroundProps {
  children: React.ReactNode
  className?: string
}

export default function GridMeshBackground({ children, className = "" }: GridMeshBackgroundProps) {
  return (
    <div className={`relative bg-slate-950 overflow-hidden ${className}`}>
      {/* Base Grid Pattern */}
      <div className="absolute inset-0">
        {/* SVG Grid and Mesh Patterns */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Grid Pattern */}
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="1" />
            </pattern>

            {/* Dot Mesh Pattern */}
            <pattern id="dotMesh" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="rgba(148, 163, 184, 0.15)" />
            </pattern>

            {/* Larger Grid for Depth */}
            <pattern id="largeGrid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="rgba(148, 163, 184, 0.05)" strokeWidth="1" />
            </pattern>

            {/* Radial Gradient for Depth */}
            <radialGradient id="meshGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.1)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.05)" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
            </radialGradient>

            {/* Subtle Purple Accent Gradient */}
            <radialGradient id="accentGradient" cx="30%" cy="20%" r="50%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.08)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </radialGradient>
          </defs>

          {/* Apply Patterns */}
          <rect width="100%" height="100%" fill="url(#largeGrid)" />
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#dotMesh)" />
          <rect width="100%" height="100%" fill="url(#meshGradient)" />
          <rect width="100%" height="100%" fill="url(#accentGradient)" />
        </svg>

        {/* Additional CSS-based mesh effects */}
        <div className="absolute inset-0">
          {/* Subtle gradient overlays for depth */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-blue-500/8 via-blue-500/4 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-radial from-purple-400/12 via-purple-400/6 to-transparent rounded-full blur-3xl"></div>

          {/* Mesh intersection highlights */}
          <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-purple-400/30 rounded-full blur-sm"></div>
          <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-blue-400/25 rounded-full blur-sm"></div>
          <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-300/20 rounded-full blur-sm"></div>
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-blue-300/25 rounded-full blur-sm"></div>
        </div>

        {/* Animated mesh lines */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse"></div>
          <div
            className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/18 to-transparent animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          <div
            className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-400/15 to-transparent animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-300/18 to-transparent animate-pulse"
            style={{ animationDelay: "2.5s" }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
