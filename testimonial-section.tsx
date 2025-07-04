"use client"

export default function TestimonialSection() {
  return (
    <section className="px-4 py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Quote Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>
          </div>
        </div>

        {/* Main Quote */}
        <blockquote className="mb-12">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-8">
            "This tool didn't just give us a score, it gave us a{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              roadmap
            </span>
            . We fixed critical issues in hours, not weeks."
          </p>
        </blockquote>

        {/* User Info */}
        <div className="flex flex-col items-center space-y-4">
          {/* Avatar */}
          <div className="relative">
            <img
              src="/placeholder.svg?height=80&width=80"
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
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-12 space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        </div>

        {/* Additional Context */}
        <div className="mt-16 max-w-2xl mx-auto">
          <p className="text-gray-500 text-sm leading-relaxed">
            Join thousands of developers and organizations who trust Accessibility Analyzer to make their websites
            inclusive and compliant with accessibility standards.
          </p>
        </div>
      </div>
    </section>
  )
}
