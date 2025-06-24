"use client"

import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-gray-950 mt-20 overflow-hidden">
      {/* Seamless Background Integration */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern - Matching Main Page */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.06) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px, 40px 40px, 80px 80px, 80px 80px",
          }}
        />

        {/* Gradient Transition from Main Content */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-950 via-gray-950/95 to-gray-950/90"></div>

        {/* Floating Gradient Orbs - Matching Main Page */}
        <div className="absolute inset-0">
          <div
            className="absolute w-96 h-96 bg-gradient-radial from-purple-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl"
            style={{
              top: "10%",
              left: "5%",
              animation: "footerFloat1 30s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-80 h-80 bg-gradient-radial from-blue-500/6 via-blue-500/3 to-transparent rounded-full blur-2xl"
            style={{
              top: "40%",
              right: "10%",
              animation: "footerFloat2 35s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-72 h-72 bg-gradient-radial from-purple-400/5 via-purple-400/2 to-transparent rounded-full blur-3xl"
            style={{
              bottom: "20%",
              left: "40%",
              animation: "footerFloat3 25s ease-in-out infinite",
            }}
          />
        </div>

        {/* Subtle Moving Lines - Matching Main Page */}
        <div className="absolute inset-0 opacity-40">
          {/* Horizontal Lines */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={`footer-h-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400/15 to-transparent"
              style={{
                top: `${(i + 1) * 25}%`,
                animation: `footerSlideRight ${20 + i * 5}s linear infinite`,
                animationDelay: `${i * 3}s`,
              }}
            />
          ))}

          {/* Vertical Lines */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={`footer-v-${i}`}
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-400/12 to-transparent"
              style={{
                left: `${(i + 1) * 25}%`,
                animation: `footerSlideDown ${25 + i * 3}s linear infinite`,
                animationDelay: `${i * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Intersection Points */}
        <div className="absolute inset-0 opacity-50">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`footer-dot-${i}`}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
              style={{
                left: `${(i % 4) * 25 + 12.5}%`,
                top: `${Math.floor(i / 4) * 33 + 16.5}%`,
                animation: `footerPulse ${6 + (i % 3) * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
                filter: "drop-shadow(0 0 2px rgba(147, 51, 234, 0.3))",
              }}
            />
          ))}
        </div>

        {/* Subtle Diagonal Mesh Lines */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`footer-diag1-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400/10 to-transparent"
              style={{
                top: `${i * 25}%`,
                transform: "rotate(15deg)",
                transformOrigin: "left center",
                animation: `footerFlowDiagonal1 ${12 + i * 3}s ease-in-out infinite`,
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}

          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`footer-diag2-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400/8 to-transparent"
              style={{
                top: `${i * 25}%`,
                transform: "rotate(-15deg)",
                transformOrigin: "right center",
                animation: `footerFlowDiagonal2 ${15 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 1.5}s`,
              }}
            />
          ))}
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-950 via-gray-950/98 to-transparent"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
                <span className="text-xl font-semibold text-white">Symphony</span>
              </div>
              <div className="space-y-3 text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
                <p>© {currentYear} Symphony Inc.</p>
                <p>All rights reserved.</p>
                <p className="text-gray-500 font-medium">Making the web accessible for everyone.</p>
              </div>
            </div>

            {/* Navigate */}
            <div className="text-center">
              <h3 className="text-white font-semibold text-lg mb-6">Navigate</h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="text-gray-400 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 transform hover:text-purple-300"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-gray-400 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 transform hover:text-purple-300"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <Link
                    href="/analyze"
                    className="text-gray-400 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 transform hover:text-purple-300"
                  >
                    Analyze
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="text-gray-400 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 transform hover:text-purple-300"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="text-gray-400 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 transform hover:text-purple-300"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="text-center">
              <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
              <div className="space-y-4">
                <a
                  href="https://www.w3.org/WAI/WCAG21/Understanding/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 text-gray-400 hover:text-white transition-all duration-200 group hover:translate-x-1 transform hover:text-purple-300"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span className="text-sm">WCAG Guidelines</span>
                </a>

                <a
                  href="https://www.w3.org/WAI/ARIA/apg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 text-gray-400 hover:text-white transition-all duration-200 group hover:translate-x-1 transform hover:text-purple-300"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-sm">ARIA Practices</span>
                </a>

                <a
                  href="https://www.w3.org/WAI/test-evaluate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 text-gray-400 hover:text-white transition-all duration-200 group hover:translate-x-1 transform hover:text-purple-300"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                  <span className="text-sm">Testing Guide</span>
                </a>

                <a
                  href="https://github.com/symphony"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 text-gray-400 hover:text-white transition-all duration-200 group hover:translate-x-1 transform hover:text-purple-300"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">GitHub</span>
                </a>

                <a
                  href="mailto:support@symphony.com"
                  className="flex items-center justify-center space-x-3 text-gray-400 hover:text-white transition-all duration-200 group hover:translate-x-1 transform hover:text-purple-300"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">Contact Support</span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider with Gradient */}
          <div className="mt-12 mb-8">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 via-blue-500/20 to-transparent"></div>
          </div>

          {/* Bottom Section - Enhanced */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500 mb-4">
              <span className="flex items-center space-x-2 hover:text-purple-300 transition-colors duration-200">
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                </svg>
                <span>Built with accessibility in mind</span>
              </span>
              <span className="hidden sm:block text-gray-600">•</span>
              <span className="flex items-center space-x-2 hover:text-blue-300 transition-colors duration-200">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>Open source</span>
              </span>
              <span className="hidden sm:block text-gray-600">•</span>
              <span className="flex items-center space-x-2 hover:text-green-300 transition-colors duration-200">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  <a
                    href="https://www.w3.org/WAI/WCAG21/Understanding/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-200 underline"
                  >
                    WCAG 2.1 Compliant
                  </a>
                </span>
              </span>
            </div>
            <p className="text-gray-600 text-xs">
              Analysis based on{" "}
              <a
                href="https://www.w3.org/WAI/WCAG21/Understanding/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Web Content Accessibility Guidelines (WCAG) 2.1
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer-specific Animations */}
      <style jsx>{`
        @keyframes footerSlideRight {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes footerSlideDown {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        
        @keyframes footerFlowDiagonal1 {
          0%, 100% { transform: rotate(15deg) translateX(-10px); opacity: 0.2; }
          50% { transform: rotate(15deg) translateX(10px); opacity: 0.6; }
        }
        
        @keyframes footerFlowDiagonal2 {
          0%, 100% { transform: rotate(-15deg) translateX(10px); opacity: 0.15; }
          50% { transform: rotate(-15deg) translateX(-10px); opacity: 0.4; }
        }
        
        @keyframes footerPulse {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        
        @keyframes footerFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -15px) scale(1.05); }
          66% { transform: translate(-15px, 20px) scale(0.95); }
        }
        
        @keyframes footerFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-18px, 12px) scale(1.03); }
          66% { transform: translate(15px, -18px) scale(0.97); }
        }
        
        @keyframes footerFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(12px, 18px) scale(1.04); }
          66% { transform: translate(-20px, -12px) scale(0.96); }
        }
      `}</style>
    </footer>
  )
}
