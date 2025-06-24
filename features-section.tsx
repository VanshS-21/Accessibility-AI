"use client"

import { DarkCard } from "./components/ui/dark-card"

export default function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Accessibility Analysis</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Advanced testing across all critical accessibility areas with actionable insights and detailed reporting
          </p>
        </div>

        {/* Features Grid - BetterStack Aligned Style */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {/* Row 1 */}
          <DarkCard className="group md:col-span-3 lg:col-span-4 p-8">
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
                <a
                  href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  WCAG 2.1
                </a>
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
                <span>
                  Tests against{" "}
                  <a
                    href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    WCAG 2.1 AA & AAA
                  </a>{" "}
                  standards
                </span>
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

          <DarkCard className="group md:col-span-3 lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                  </svg>
                </div>
              </div>
              <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md">
                Semantic
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300">
              ARIA Validation
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-5">
              Validates ARIA attributes and semantic HTML structure for optimal screen reader compatibility. Ensures
              proper landmark roles, state management, and accessible names are correctly implemented throughout your
              application.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                <span>ARIA roles & properties</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                <span>Semantic HTML validation</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                <span>Screen reader testing</span>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-800">
              <span className="text-xs text-purple-400 font-medium">Automated validation</span>
            </div>
          </DarkCard>

          <DarkCard className="group md:col-span-3 lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md">
                Navigation
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300">
              Keyboard Navigation
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-5">
              Comprehensive testing of tab order, focus indicators, and keyboard shortcuts to ensure complete keyboard
              accessibility. Identifies focus traps, missing skip links, and improper tab sequences that could hinder
              navigation.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                <span>Tab order validation</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                <span>Focus indicator testing</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                <span>Keyboard shortcut analysis</span>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-800">
              <span className="text-xs text-purple-400 font-medium">Interactive testing</span>
            </div>
          </DarkCard>

          {/* Row 2 */}
          <DarkCard className="group md:col-span-2 lg:col-span-2 p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md">Forms</span>
            </div>
            <h3 className="text-base font-semibold text-white mb-3 group-hover:text-purple-100 transition-colors duration-300">
              Form Testing
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
              Comprehensive evaluation of form accessibility including label associations, error handling mechanisms,
              and input validation feedback. Tests fieldset grouping, required field indicators, and form submission
              processes.
            </p>
            <div className="space-y-2 mb-3">
              <div className="flex items-center text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                <span>Label validation</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                <span>Error messaging</span>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-800">
              <span className="text-xs text-purple-400 font-medium">Form compliance</span>
            </div>
          </DarkCard>

          <DarkCard className="group md:col-span-4 lg:col-span-4 p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-md">Media</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300">
              Media Analysis
            </h3>
            <p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6">
              Comprehensive analysis of images, videos, and multimedia content for accessibility compliance. Our system
              identifies missing alt text, captions, transcripts, and audio descriptions while checking for decorative
              versus informative content classification. Advanced AI helps suggest appropriate alternative text for
              images.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Alt text validation</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Video caption checking</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Audio transcription</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span>AI-powered suggestions</span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span>Advanced analysis available</span>
                </div>
                <span className="text-xs text-purple-400 font-medium">AI-enhanced scanning</span>
              </div>
            </div>
          </DarkCard>

          <DarkCard className="group md:col-span-2 lg:col-span-2 p-5">
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
              <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md">Speed</span>
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

          {/* Row 3 */}
          <DarkCard className="group md:col-span-3 lg:col-span-3 p-6">
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
              <span className="text-xs font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md">Custom</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300">
              Custom Rules Engine
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-5">
              Configure organization-specific accessibility standards and create custom validation rules tailored to
              your industry requirements. Build custom test suites, define specific compliance levels, and integrate
              with your existing development workflow for seamless accessibility testing.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                <span>Industry-specific rules</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                <span>Custom test suites</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                <span>Workflow integration</span>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs text-purple-400 font-medium">Configurable rules</span>
                <span className="text-xs text-gray-500">Enterprise ready</span>
              </div>
            </div>
          </DarkCard>

          <DarkCard className="group md:col-span-3 lg:col-span-5 p-8">
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
              time, and share results with stakeholders. Advanced analytics help identify patterns and prioritize fixes
              for maximum impact.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-xs text-gray-400">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">15s</div>
                <div className="text-xs text-gray-400">Avg Scan Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-xs text-gray-400">Test Categories</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>PDF & HTML exports</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Progress tracking</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Team collaboration</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span>Priority scoring</span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span>Advanced analysis available</span>
                </div>
                <span className="text-xs text-purple-400 font-medium">Enterprise reporting</span>
              </div>
            </div>
          </DarkCard>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-4">
            Each analysis provides actionable recommendations with code examples and priority levels to help you fix
            accessibility issues efficiently.
          </p>
          <p className="text-gray-600 text-xs">
            All recommendations are based on{" "}
            <a
              href="https://www.w3.org/WAI/WCAG21/Understanding/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              WCAG 2.1 Guidelines
            </a>{" "}
            and{" "}
            <a
              href="https://www.w3.org/WAI/ARIA/apg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              ARIA Authoring Practices
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
