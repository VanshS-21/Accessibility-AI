"use client"

import { Button } from "@/components/ui/button"

export default function CTASection() {
  const handleAnalyze = () => {
    console.log("Starting free analysis...")
    // Add your analysis logic here
  }

  return (
    <section className="px-4 py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Build a{" "}
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Better Web
          </span>
          ?
        </h2>

        {/* Supporting Text */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          Get started for free. No credit card, no signup required.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <Button
            onClick={handleAnalyze}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 border-0"
          >
            Analyze Your Site for Free
          </Button>
        </div>

        {/* Additional Trust Signals */}
        <div className="space-y-4">
          <div className="flex justify-center items-center space-x-8 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Instant Results</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>WCAG 2.1 Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No Registration</span>
            </div>
          </div>

          <p className="text-gray-500 text-sm">Join 10,000+ developers making the web more accessible</p>
        </div>
      </div>
    </section>
  )
}
