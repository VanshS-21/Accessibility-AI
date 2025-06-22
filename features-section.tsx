"use client"

import { DarkCard } from "./components/ui/dark-card"
import { motion, Variants } from "framer-motion"

export default function FeaturesSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="features" className="py-20 px-8 lg:px-24">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Accessibility Analysis</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Advanced testing across all critical accessibility areas with actionable insights and detailed reporting
          </p>
        </motion.div>

        {/* Features Grid - BetterStack Aligned Style */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-8">
          {/* Row 1 */}
          <motion.div className="md:col-span-3 lg:col-span-4" variants={itemVariants}>
            <DarkCard className="group h-full p-7">
              {/* Header with Icon and Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
                      />
                    </svg>
                  </div>
                </div>
                <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-md">
                  WCAG 2.1
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300">
                Color Contrast Analysis
              </h3>
              <p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6">
                Automatically detects color contrast ratios across your entire website and identifies text that doesn't
                meet WCAG AA or AAA standards. Our advanced algorithm analyzes foreground and background color
                combinations, including overlays, gradients, and dynamic content to ensure comprehensive coverage.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Tests against WCAG 2.1 AA & AAA standards</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Analyzes dynamic content and overlays</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Provides specific color recommendations</span>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span>Advanced analysis available</span>
                  </div>
                  <span className="text-xs text-purple-400 font-medium">Real-time scanning</span>
                </div>
              </div>
            </DarkCard>
          </motion.div>

          <motion.div className="md:col-span-3 lg:col-span-4" variants={itemVariants}>
            <DarkCard className="group h-full p-7">
              {/* Header with Icon and Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8-3 1 3m0 0h.01M6 16.5h12M6 16.5a2.25 2.25 0 00-2.25 2.25v1.5A2.25 2.25 0 006 22.5h12a2.25 2.25 0 002.25-2.25v-1.5A2.25 2.25 0 0018 16.5M6 16.5v-1.5a2.25 2.25 0 00-2.25-2.25H3.75"
                      />
                    </svg>
                  </div>
                </div>
                <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-md">
                  Navigation
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300">
                Keyboard Navigation & Focus
              </h3>
              <p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6">
                Ensures all interactive elements are reachable and operable via keyboard. Our tool identifies focus
                order issues, missing focus indicators, and keyboard traps that can prevent users from navigating your
                site effectively. We provide clear guidance on implementing logical focus order and visible focus
                styles.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Verifies logical focus order</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Checks for visible focus indicators</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Detects keyboard traps</span>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span>Interactive element testing</span>
                  </div>
                  <span className="text-xs text-purple-400 font-medium">Automated checks</span>
                </div>
              </div>
            </DarkCard>
          </motion.div>

          {/* Row 2 */}
          <motion.div className="md:col-span-2 lg:col-span-2" variants={itemVariants}>
            <DarkCard className="group h-full p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </div>
                </div>
                <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md">
                  Content
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-3 group-hover:text-purple-100 transition-colors duration-300">
                Image Alt-Text
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
                Scans for missing or empty alt attributes on images and provides AI-powered suggestions for descriptive
                alt text.
              </p>
              <div className="space-y-2 mb-3">
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  <span>AI suggestions</span>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                  <span>Decorative image detection</span>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800">
                <span className="text-xs text-purple-400 font-medium">Content analysis</span>
              </div>
            </DarkCard>
          </motion.div>

          <motion.div className="md:col-span-2 lg:col-span-4" variants={itemVariants}>
            <DarkCard className="group h-full p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </div>
                </div>
                <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md">
                  Mobile
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-3 group-hover:text-purple-100 transition-colors duration-300">
                Mobile Accessibility
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
                Checks for mobile-specific accessibility issues like touch target size, viewport scaling, and device
                orientation handling to ensure a seamless experience on all devices.
              </p>
              <div className="space-y-2 mb-3">
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  <span>Touch target analysis</span>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                  <span>Responsive design checks</span>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800">
                <span className="text-xs text-purple-400 font-medium">Device emulation</span>
              </div>
            </DarkCard>
          </motion.div>

          <motion.div className="md:col-span-2 lg:col-span-2" variants={itemVariants}>
            <DarkCard className="group h-full p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.59-.79-1.59-1.76V9.51c0-.97.71-1.76 1.59-1.76h2.24Z"
                      />
                    </svg>
                  </div>
                </div>
                <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md">
                  Speed
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-3 group-hover:text-purple-100 transition-colors duration-300">
                Performance Impact
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
                Analyzes how accessibility features affect page performance and loading times. Evaluates the impact of
                screen reader compatibility, keyboard navigation enhancements, and ARIA implementations on overall site
                speed.
              </p>
              <div className="space-y-2 mb-3">
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  <span>Load time analysis</span>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                  <span>Resource optimization</span>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800">
                <span className="text-xs text-purple-400 font-medium">Performance metrics</span>
              </div>
            </DarkCard>
          </motion.div>

          {/* Row 3 */}
          <motion.div className="md:col-span-3 lg:col-span-3" variants={itemVariants}>
            <DarkCard className="group h-full p-5">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m0 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                      />
                    </svg>
                  </div>
                </div>
                <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md">
                  Custom
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300">
                Customizable Rule Sets
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-5">
                Tailor the analysis to your specific needs with customizable rule sets. Define your own accessibility
                guidelines, focus on specific WCAG criteria, or create rules for your organization's design system.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  <span>Define custom rules</span>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                  <span>Focus on specific WCAG levels</span>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                  <span>Integrate with design systems</span>
                </div>
              </div>
            </DarkCard>
          </motion.div>

          <motion.div className="md:col-span-3 lg:col-span-5" variants={itemVariants}>
            <DarkCard className="group h-full p-7">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-md">
                  Reports
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300">
                Compliance Reporting & Analytics
              </h3>
              <p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6">
                Generates comprehensive reports with actionable insights, priority recommendations, and detailed
                compliance scores across all WCAG guidelines. Export reports in multiple formats, track progress over
                time, and share results with stakeholders. Advanced analytics help identify patterns and prioritize
                fixes for maximum impact.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Exportable PDF, CSV, and JSON reports</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Historical data and progress tracking</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Shareable dashboards for team collaboration</span>
                </div>
              </div>
            </DarkCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
