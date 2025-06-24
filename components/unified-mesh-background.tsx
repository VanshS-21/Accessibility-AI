"use client"

import type React from "react"

interface UnifiedMeshBackgroundProps {
  children: React.ReactNode
}

export default function UnifiedMeshBackground({ children }: UnifiedMeshBackgroundProps) {
  return (
    <div className="relative min-h-screen bg-slate-950">
      {/* Mesh Background Layer */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static Grid Base */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="1" />
                <circle cx="0" cy="0" r="1.5" fill="rgba(147, 51, 234, 0.6)" />
                <circle cx="60" cy="0" r="1.5" fill="rgba(147, 51, 234, 0.6)" />
                <circle cx="0" cy="60" r="1.5" fill="rgba(147, 51, 234, 0.6)" />
                <circle cx="60" cy="60" r="1.5" fill="rgba(147, 51, 234, 0.6)" />
              </pattern>
              <pattern id="grid2" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.8" />
                <circle cx="50" cy="50" r="1" fill="rgba(59, 130, 246, 0.5)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid2)" />
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated Moving Lines */}
        <div className="absolute inset-0">
          {/* Horizontal Lines */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
              style={{
                top: `${(i + 1) * 6.67}%`,
                animation: `moveHorizontal ${4 + (i % 3)}s linear infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}

          {/* Vertical Lines */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-blue-400/40 to-transparent"
              style={{
                left: `${(i + 1) * 6.67}%`,
                animation: `moveVertical ${5 + (i % 2)}s linear infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        {/* Pulsing Intersection Points */}
        <div className="absolute inset-0">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={`dot-${i}`}
              className="absolute w-2 h-2 bg-purple-400/60 rounded-full"
              style={{
                left: `${(i % 8) * 12.5}%`,
                top: `${Math.floor(i / 8) * 20}%`,
                animation: `pulse ${2 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Flowing Wave Effects */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
            style={{ animation: "flowRight 8s ease-in-out infinite" }}
          />
          <div
            className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
            style={{ animation: "flowLeft 10s ease-in-out infinite" }}
          />
          <div
            className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
            style={{ animation: "flowRight 12s ease-in-out infinite" }}
          />

          <div
            className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
            style={{ animation: "flowDown 9s ease-in-out infinite" }}
          />
          <div
            className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-500/40 to-transparent"
            style={{ animation: "flowUp 11s ease-in-out infinite" }}
          />
          <div
            className="absolute top-0 left-3/4 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent"
            style={{ animation: "flowDown 13s ease-in-out infinite" }}
          />
        </div>

        {/* Floating Gradient Orbs */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-radial from-purple-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl"
            style={{ animation: "float1 15s ease-in-out infinite" }}
          />
          <div
            className="absolute top-2/3 right-1/4 w-64 h-64 bg-gradient-radial from-blue-500/15 via-blue-500/8 to-transparent rounded-full blur-2xl"
            style={{ animation: "float2 18s ease-in-out infinite" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-radial from-purple-400/12 via-purple-400/6 to-transparent rounded-full blur-3xl"
            style={{ animation: "float3 12s ease-in-out infinite" }}
          />
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">{children}</div>

      <style jsx>{`
        @keyframes moveHorizontal {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes moveVertical {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }

        @keyframes flowRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes flowLeft {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        @keyframes flowDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes flowUp {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -15px) scale(1.1); }
          66% { transform: translate(-15px, 20px) scale(0.9); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-20px, 10px) scale(1.05); }
          66% { transform: translate(15px, -20px) scale(0.95); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(10px, 20px) scale(1.08); }
          66% { transform: translate(-25px, -10px) scale(0.92); }
        }
      `}</style>
    </div>
  )
}
