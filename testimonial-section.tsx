"use client"

import { motion, Variants } from "framer-motion"

export default function TestimonialSection() {
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
        {/* Quote Icon */}
        <motion.div className="flex justify-center mb-8" variants={itemVariants}>
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>
          </div>
        </motion.div>

        {/* Main Quote */}
        <motion.blockquote className="mb-12" variants={itemVariants}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-8">
            "This tool didn't just give us a score, it gave us a{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              roadmap
            </span>
            . We fixed critical issues in hours, not weeks."
          </p>
        </motion.blockquote>

        {/* User Info */}
        <motion.div className="flex flex-col items-center space-y-4" variants={itemVariants}>
          {/* Avatar */}
          <div className="relative">
            <img
              src="/placeholder-user.jpg"
              alt="Elara Vance"
              className="w-20 h-20 rounded-full border-2 border-gray-700 shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
          </div>

          {/* Name and Title */}
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-white">Elara Vance</h3>
            <p className="text-gray-400 text-lg">Lead Developer, NovaCorp</p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div className="flex justify-center mt-12 space-x-2" variants={itemVariants}>
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        </motion.div>

        {/* Additional Context */}
        <motion.div className="mt-16 max-w-2xl mx-auto" variants={itemVariants}>
          <p className="text-gray-500 text-sm leading-relaxed">
            Join thousands of developers and organizations who trust Symphony to make their websites
            inclusive and compliant with accessibility standards.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
