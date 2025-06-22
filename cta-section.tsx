"use client"

import { Button } from "@/components/ui/button"
import { motion, Variants } from "framer-motion"

export default function CTASection() {
  const handleAnalyze = () => {
    console.log("Starting free analysis...")
    // Add your analysis logic here
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="py-24 px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Main Headline */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          variants={itemVariants}
        >
          Ready to Build a{" "}
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Better Web
          </span>
          ?
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
          variants={itemVariants}
        >
          Get started for free. No credit card, no signup required.
        </motion.p>

        {/* CTA Button */}
        <motion.div className="flex justify-center mb-16" variants={itemVariants}>
          <Button
            onClick={handleAnalyze}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 border-0"
          >
            Analyze Your Site for Free
          </Button>
        </motion.div>

        {/* Additional Trust Signals */}
        <motion.div className="space-y-4" variants={itemVariants}>
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
        </motion.div>
      </motion.div>
    </section>
  )
}
