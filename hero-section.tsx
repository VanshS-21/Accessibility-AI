"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Globe, Code, Sparkles } from "lucide-react"

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"url" | "html">("url")
  const [url, setUrl] = useState("")
  const [htmlCode, setHtmlCode] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const router = useRouter()

  const handleAnalyze = async () => {
    const hasInput = activeTab === "url" ? url.trim() : htmlCode.trim()

    if (hasInput) {
      setIsAnalyzing(true)

      // Simulate analysis delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Navigate to analyze page with appropriate parameter
      if (activeTab === "url") {
        router.push(`/analyze?url=${encodeURIComponent(url)}`)
      } else {
        // For HTML, we'll pass it as a base64 encoded parameter
        const encodedHtml = btoa(htmlCode)
        router.push(`/analyze?html=${encodeURIComponent(encodedHtml)}&type=html`)
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && activeTab === "url") {
      e.preventDefault()
      handleAnalyze()
    }
  }

  const currentInput = activeTab === "url" ? url : htmlCode
  const isDisabled = !currentInput.trim() || isAnalyzing

  // Sample HTML for demonstration
  const sampleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Page</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section>
            <h2>About Us</h2>
            <p>This is a sample paragraph with some content.</p>
            <img src="image.jpg" alt="">
            <button>Click me</button>
        </section>
        
        <form>
            <input type="email" placeholder="Enter email">
            <input type="submit" value="Submit">
        </form>
    </main>
</body>
</html>`

  // Company logos with proper SVG icons and names
  const companies = [
    {
      name: "Microsoft",
      icon: (
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" />
        </svg>
      ),
    },
    {
      name: "Google",
      icon: (
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      ),
    },
    {
      name: "Apple",
      icon: (
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
        </svg>
      ),
    },
    {
      name: "Amazon",
      icon: (
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.548.41-3.156.615-4.83.615-3.268 0-6.306-.756-9.116-2.27-.368-.197-.65-.42-.855-.67-.203-.25-.24-.476-.11-.674l.024-.066zm21.968.21c-.32-.26-.73-.398-1.23-.398-.68 0-1.31.295-1.89.885-.58.59-.87 1.275-.87 2.055 0 .78.29 1.465.87 2.055.58.59 1.21.885 1.89.885.5 0 .91-.138 1.23-.398.32-.26.48-.598.48-1.014v-.516c0-.416-.16-.754-.48-1.014zm-1.23 3.432c-.41 0-.77-.15-1.08-.45-.31-.3-.465-.675-.465-1.125s.155-.825.465-1.125c.31-.3.67-.45 1.08-.45s.77.15 1.08.45c.31.3.465.675.465 1.125s-.155.825-.465 1.125c-.31.3-.67.45-1.08.45z" />
        </svg>
      ),
    },
    {
      name: "Meta",
      icon: (
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Netflix",
      icon: (
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.71.002-22.95zM5.398 1.05V24c2.873-.358 5.398-.898 8.487-1.049V9.534z" />
        </svg>
      ),
    },
    {
      name: "Spotify",
      icon: (
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      ),
    },
    {
      name: "Airbnb",
      icon: (
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C7.8 0 4.4 3.4 4.4 7.6 4.4 13 12 24 12 24s7.6-11 7.6-16.4C19.6 3.4 16.2 0 12 0zm0 11.5c-2.2 0-3.9-1.8-3.9-3.9S9.8 3.7 12 3.7s3.9 1.8 3.9 3.9-1.7 3.9-3.9 3.9z" />
        </svg>
      ),
    },
    {
      name: "Uber",
      icon: (
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.812 9.6V24H7.188V9.6h9.624zM24 7.2v9.6h-4.8V7.2H24zM4.8 7.2v9.6H0V7.2h4.8zM16.812 0v7.2H7.188V0h9.624z" />
        </svg>
      ),
    },
    {
      name: "Tesla",
      icon: (
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 5.362L2.4 8.638v6.724L12 18.638l9.6-3.276V8.638L12 5.362zM12 0l12 4.8v14.4L12 24 0 19.2V4.8L12 0z" />
        </svg>
      ),
    },
    {
      name: "Adobe",
      icon: (
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624z" />
        </svg>
      ),
    },
    {
      name: "Slack",
      icon: (
        <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
        </svg>
      ),
    },
  ]

  return (
    <div id="hero" className="min-h-screen flex flex-col justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-16">
        {/* Main Headline */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl xl:text-7xl text-white leading-[0.9] tracking-wide lg:text-8xl font-extrabold">
            Make Your Website{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Accessible
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl max-w-4xl mx-auto leading-relaxed font-medium md:text-xl text-slate-400">
            Instant WCAG compliance analysis with actionable insights.
          </p>
        </div>

        {/* Input Section with Tabs */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Tab Navigation */}
          <div className="flex justify-center">
            <div className="flex bg-gray-900/50 rounded-xl p-1 border border-gray-800">
              <button
                onClick={() => setActiveTab("url")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === "url"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>Website URL</span>
              </button>
              <button
                onClick={() => setActiveTab("html")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === "html"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Code className="w-4 h-4" />
                <span>HTML Code</span>
              </button>
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-sm overflow-hidden">
            {activeTab === "url" ? (
              /* URL Input */
              <div className="flex flex-col sm:flex-row gap-4 p-2">
                <Input
                  type="url"
                  placeholder="Enter your website URL (e.g., https://example.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isAnalyzing}
                  className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 text-lg px-6 py-4 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  onClick={handleAnalyze}
                  disabled={isDisabled}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Analyzing...</span>
                    </div>
                  ) : (
                    "Analyze"
                  )}
                </Button>
              </div>
            ) : (
              /* HTML Input */
              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Code className="w-4 h-4" />
                    <span className="text-sm font-medium">Paste your HTML code</span>
                  </div>
                  <button
                    onClick={() => setHtmlCode(sampleHtml)}
                    className="flex items-center space-x-1 text-xs text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Use Sample</span>
                  </button>
                </div>
                <Textarea
                  placeholder="<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <title>Your Page</title>
</head>
<body>
    <!-- Your HTML content here -->
</body>
</html>"
                  value={htmlCode}
                  onChange={(e) => setHtmlCode(e.target.value)}
                  disabled={isAnalyzing}
                  className="min-h-[200px] bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 font-mono text-sm resize-none focus-visible:ring-1 focus-visible:ring-purple-500 focus-visible:border-purple-500"
                />
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">{htmlCode.length > 0 && `${htmlCode.length} characters`}</div>
                  <Button
                    onClick={handleAnalyze}
                    disabled={isDisabled}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isAnalyzing ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Analyzing...</span>
                      </div>
                    ) : (
                      "Analyze HTML"
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-400">Free • No signup • Instant results</p>
            {activeTab === "html" && (
              <p className="text-xs text-gray-500">
                Your HTML code is processed locally and never stored on our servers
              </p>
            )}
          </div>
        </div>

        {/* Social Proof Section - Moved Up and Integrated */}
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-sm text-gray-500 font-medium">Trusted by teams at</p>
          </div>

          {/* Infinite Scrolling Logo Strip */}
          <div className="relative overflow-hidden">
            {/* Blur edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

            {/* Scrolling container */}
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center space-x-16 px-6">
                {companies.map((company, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
                  >
                    {company.icon}
                    <span className="text-gray-400 font-medium text-sm whitespace-nowrap">{company.name}</span>
                  </div>
                ))}
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-16 px-6">
                {companies.map((company, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
                  >
                    {company.icon}
                    <span className="text-gray-400 font-medium text-sm whitespace-nowrap">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
