"use client"

import { useEffect, useRef, useState } from "react"

const companies = [
  "TechCorp",
  "InnovateLab",
  "DataFlow",
  "CloudSync",
  "WebMaster",
  "DevTools",
  "CodeBase",
  "AppForge",
  "NetSphere",
  "DigitalEdge",
  "ByteWorks",
  "SystemPro",
  "LogicFlow",
  "CyberTech",
  "InfoStream",
]

export default function CompanyLogos() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden">
      {/* Enhanced blur and fade overlay edges */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Top blur fade */}
        <div
          className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-950 via-gray-950/90 to-transparent backdrop-blur-sm"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 100%)",
          }}
        />

        {/* Bottom blur fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-950 via-gray-950/90 to-transparent backdrop-blur-sm"
          style={{
            maskImage: "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
          }}
        />

        {/* Left blur fade */}
        <div
          className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-gray-950 via-gray-950/90 to-transparent backdrop-blur-md"
          style={{
            maskImage: "linear-gradient(to right, black 0%, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, black 0%, black 40%, transparent 100%)",
          }}
        />

        {/* Right blur fade */}
        <div
          className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-gray-950 via-gray-950/90 to-transparent backdrop-blur-md"
          style={{
            maskImage: "linear-gradient(to left, black 0%, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 0%, black 40%, transparent 100%)",
          }}
        />

        {/* Additional blur layers for smoother transition */}
        <div
          className="absolute top-0 left-0 right-0 h-16 backdrop-blur-lg opacity-60"
          style={{
            background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.8) 0%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          }}
        />

        <div
          className="absolute bottom-0 left-0 right-0 h-16 backdrop-blur-lg opacity-60"
          style={{
            background: "linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, transparent 100%)",
            maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          }}
        />

        <div
          className="absolute top-0 bottom-0 left-0 w-24 backdrop-blur-xl opacity-70"
          style={{
            background: "linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, transparent 100%)",
            maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)",
          }}
        />

        <div
          className="absolute top-0 bottom-0 right-0 w-24 backdrop-blur-xl opacity-70"
          style={{
            background: "linear-gradient(to left, rgba(15, 23, 42, 0.9) 0%, transparent 100%)",
            maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
          }}
        />

        {/* Corner blur effects for seamless blending */}
        <div
          className="absolute top-0 left-0 w-32 h-32 backdrop-blur-2xl opacity-80"
          style={{
            background: "radial-gradient(circle at top left, rgba(15, 23, 42, 0.95) 0%, transparent 70%)",
            maskImage: "radial-gradient(circle at top left, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at top left, black 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute top-0 right-0 w-32 h-32 backdrop-blur-2xl opacity-80"
          style={{
            background: "radial-gradient(circle at top right, rgba(15, 23, 42, 0.95) 0%, transparent 70%)",
            maskImage: "radial-gradient(circle at top right, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at top right, black 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute bottom-0 left-0 w-32 h-32 backdrop-blur-2xl opacity-80"
          style={{
            background: "radial-gradient(circle at bottom left, rgba(15, 23, 42, 0.95) 0%, transparent 70%)",
            maskImage: "radial-gradient(circle at bottom left, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at bottom left, black 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute bottom-0 right-0 w-32 h-32 backdrop-blur-2xl opacity-80"
          style={{
            background: "radial-gradient(circle at bottom right, rgba(15, 23, 42, 0.95) 0%, transparent 70%)",
            maskImage: "radial-gradient(circle at bottom right, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at bottom right, black 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={`text-2xl font-semibold text-gray-300 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Trusted by leading companies
          </h2>
        </div>

        {/* Scrolling logos container with edge blur */}
        <div className="relative overflow-hidden">
          {/* First row - left to right with blur transition */}
          <div className="flex animate-scroll-right mb-8" style={{ filter: "blur(0px)" }}>
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`row1-${index}`}
                className={`flex-shrink-0 mx-8 transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 100}ms`,
                  filter: `blur(${(Math.abs((index % companies.length) - companies.length / 2) / (companies.length / 2)) * 2}px)`,
                }}
              >
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg px-6 py-4 hover:bg-gray-700/40 transition-all duration-300 hover:scale-105 hover:border-purple-500/30 hover:backdrop-blur-md">
                  <span className="text-gray-300 font-medium text-lg whitespace-nowrap">{company}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - right to left with blur transition */}
          <div className="flex animate-scroll-left" style={{ filter: "blur(0px)" }}>
            {[...companies.slice().reverse(), ...companies.slice().reverse()].map((company, index) => (
              <div
                key={`row2-${index}`}
                className={`flex-shrink-0 mx-8 transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{
                  animationDelay: `${(index + companies.length) * 100}ms`,
                  transitionDelay: `${(index + companies.length) * 100}ms`,
                  filter: `blur(${(Math.abs((index % companies.length) - companies.length / 2) / (companies.length / 2)) * 2}px)`,
                }}
              >
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg px-6 py-4 hover:bg-gray-700/40 transition-all duration-300 hover:scale-105 hover:border-blue-500/30 hover:backdrop-blur-md">
                  <span className="text-gray-300 font-medium text-lg whitespace-nowrap">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">500+ Companies</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm">99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Enterprise Ready</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
