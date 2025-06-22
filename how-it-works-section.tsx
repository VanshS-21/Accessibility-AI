"use client"

import { motion, Variants } from "framer-motion"

export default function HowItWorksSection() {
  const cardVariants: Variants = {
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

  const titleVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  }

  const ctaVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, delay: 0.5 } },
  }

  return (
    <section id="how-it-works" className="py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Section Title */}
        <motion.div className="text-center mb-16" variants={titleVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Your Report in Three Simple Steps</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our streamlined process makes accessibility analysis quick and effortless
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Step 1 */}
          <motion.div className="text-center space-y-6" variants={cardVariants}>
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
            </div>

            {/* Step Number */}
            <div className="relative">
              <span className="text-8xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                1
              </span>
            </div>

            {/* Step Title */}
            <h3 className="text-2xl font-semibold text-white">Paste Your URL</h3>

            {/* Step Description */}
            <p className="text-gray-400 text-lg leading-relaxed">
              Simply enter your website URL into our analyzer and we'll handle the rest.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div className="text-center space-y-6" variants={cardVariants}>
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>

            {/* Step Number */}
            <div className="relative">
              <span className="text-8xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                2
              </span>
            </div>

            {/* Step Title */}
            <h3 className="text-2xl font-semibold text-white">Run Analysis</h3>

            {/* Step Description */}
            <p className="text-gray-400 text-lg leading-relaxed">
              Our AI-powered engine scans your site against WCAG 2.1 AA guidelines in seconds.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div className="text-center space-y-6" variants={cardVariants}>
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c0 .621-.504 1.125 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </div>

            {/* Step Number */}
            <div className="relative">
              <span className="text-8xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                3
              </span>
            </div>

            {/* Step Title */}
            <h3 className="text-2xl font-semibold text-white">Receive Report</h3>

            {/* Step Description */}
            <p className="text-gray-400 text-lg leading-relaxed">
              Get a comprehensive report with actionable insights to improve accessibility.
            </p>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div className="text-center mt-16" variants={ctaVariants}>
          <p className="text-gray-500 text-sm">
            Ready to get started? It takes less than 30 seconds to analyze your website.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
