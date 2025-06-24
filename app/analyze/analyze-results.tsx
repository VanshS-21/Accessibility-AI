"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DarkCard } from "../../components/ui/dark-card"
import {
  ArrowLeft,
  Download,
  Share2,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Code,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function AnalyzeResults() {
  const searchParams = useSearchParams()
  const url = searchParams.get("url")
  const htmlParam = searchParams.get("html")
  const type = searchParams.get("type")

  // Decode HTML if it exists
  let htmlCode = ""
  if (htmlParam) {
    try {
      htmlCode = atob(decodeURIComponent(htmlParam))
    } catch (e) {
      console.error("Failed to decode HTML:", e)
    }
  }

  const isHtmlAnalysis = type === "html"
  const sourceUrl = url || "HTML Code Snippet"

  // Mock analysis data - in real app, this would come from API
  const analysisData = {
    url: sourceUrl,
    isHtml: isHtmlAnalysis,
    htmlPreview: isHtmlAnalysis ? htmlCode.substring(0, 200) + "..." : null,
    score: isHtmlAnalysis ? 65 : 78,
    grade: isHtmlAnalysis ? "C+" : "B+",
    scanDate: new Date().toLocaleDateString(),
    scanTime: isHtmlAnalysis ? "1.8s" : "2.3s",
    totalIssues: isHtmlAnalysis ? 31 : 23,
    criticalIssues: isHtmlAnalysis ? 5 : 3,
    warningIssues: isHtmlAnalysis ? 18 : 12,
    infoIssues: isHtmlAnalysis ? 8 : 8,
    categories: {
      colorContrast: {
        score: isHtmlAnalysis ? 45 : 85,
        issues: isHtmlAnalysis ? 8 : 4,
        status: isHtmlAnalysis ? "critical" : "warning",
        slug: "color-contrast",
      },
      keyboardNav: {
        score: isHtmlAnalysis ? 78 : 92,
        issues: isHtmlAnalysis ? 4 : 2,
        status: isHtmlAnalysis ? "warning" : "good",
        slug: "keyboard-navigation",
      },
      ariaLabels: {
        score: isHtmlAnalysis ? 52 : 67,
        issues: isHtmlAnalysis ? 12 : 8,
        status: "critical",
        slug: "aria-labels",
      },
      images: {
        score: isHtmlAnalysis ? 30 : 88,
        issues: isHtmlAnalysis ? 6 : 3,
        status: isHtmlAnalysis ? "critical" : "good",
        slug: "images",
      },
      forms: {
        score: isHtmlAnalysis ? 60 : 74,
        issues: isHtmlAnalysis ? 8 : 5,
        status: "warning",
        slug: "forms",
      },
      headings: {
        score: isHtmlAnalysis ? 85 : 95,
        issues: isHtmlAnalysis ? 2 : 1,
        status: "good",
        slug: "headings",
      },
    },
    issues: [
      {
        id: 1,
        severity: "critical",
        category: "Images",
        title: isHtmlAnalysis ? "Image missing alt attribute" : "Missing ARIA labels on interactive elements",
        description: isHtmlAnalysis
          ? "Image elements must have an alt attribute for accessibility. Empty alt='' is acceptable for decorative images."
          : "Several buttons and form controls lack proper ARIA labels, making them inaccessible to screen readers.",
        element: isHtmlAnalysis ? '<img src="image.jpg" alt="">' : '<button class="submit-btn">Submit</button>',
        location: isHtmlAnalysis ? "Line 23, <img> element" : "Contact form, line 45",
        solution: isHtmlAnalysis
          ? 'Add descriptive alt text: <img src="image.jpg" alt="Description of image content">'
          : 'Add aria-label="Submit contact form" to the button element.',
        wcagReference: isHtmlAnalysis ? "WCAG 2.1 - 1.1.1 Non-text Content" : "WCAG 2.1 - 4.1.2 Name, Role, Value",
      },
      {
        id: 2,
        severity: "critical",
        category: isHtmlAnalysis ? "Forms" : "Color Contrast",
        title: isHtmlAnalysis ? "Form input missing label" : "Insufficient color contrast ratio",
        description: isHtmlAnalysis
          ? "Form inputs must have associated labels to be accessible to screen readers and assistive technologies."
          : "Text color #666666 on background #f0f0f0 has a contrast ratio of 2.8:1, below the required 4.5:1.",
        element: isHtmlAnalysis
          ? '<input type="email" placeholder="Enter email">'
          : '<p class="description">Product description text</p>',
        location: isHtmlAnalysis ? "Line 28, form input" : "Product cards, multiple locations",
        solution: isHtmlAnalysis
          ? 'Add a label: <label for="email">Email:</label><input type="email" id="email" placeholder="Enter email">'
          : "Change text color to #4a4a4a or darker to achieve minimum 4.5:1 contrast ratio.",
        wcagReference: isHtmlAnalysis
          ? "WCAG 2.1 - 3.3.2 Labels or Instructions"
          : "WCAG 2.1 - 1.4.3 Contrast (Minimum)",
      },
      {
        id: 3,
        severity: isHtmlAnalysis ? "critical" : "critical",
        category: isHtmlAnalysis ? "ARIA Labels" : "Keyboard Navigation",
        title: isHtmlAnalysis ? "Button missing accessible name" : "Keyboard trap in modal dialog",
        description: isHtmlAnalysis
          ? "Interactive elements like buttons must have accessible names that describe their purpose."
          : "Users cannot escape the modal dialog using keyboard navigation, creating an accessibility barrier.",
        element: isHtmlAnalysis ? "<button>Click me</button>" : '<div class="modal-overlay">',
        location: isHtmlAnalysis ? "Line 25, button element" : "Newsletter signup modal",
        solution: isHtmlAnalysis
          ? 'Add descriptive text or aria-label: <button aria-label="Submit form">Click me</button>'
          : "Implement proper focus management and add Escape key handler to close modal.",
        wcagReference: isHtmlAnalysis ? "WCAG 2.1 - 4.1.2 Name, Role, Value" : "WCAG 2.1 - 2.1.2 No Keyboard Trap",
      },
      {
        id: 4,
        severity: "warning",
        category: isHtmlAnalysis ? "Headings" : "Images",
        title: isHtmlAnalysis ? "Heading structure may be unclear" : "Missing alt text for decorative images",
        description: isHtmlAnalysis
          ? "Ensure heading levels follow a logical hierarchy (h1, h2, h3, etc.) for better content structure."
          : 'Decorative images should have empty alt attributes (alt="") to be properly ignored by screen readers.',
        element: isHtmlAnalysis ? "<h2>About Us</h2>" : '<img src="decoration.jpg" alt="decoration">',
        location: isHtmlAnalysis ? "Line 20, heading element" : "Hero section background",
        solution: isHtmlAnalysis
          ? "Review heading hierarchy and ensure logical flow from h1 to lower levels."
          : 'Change to alt="" for decorative images or add descriptive alt text if informative.',
        wcagReference: isHtmlAnalysis ? "WCAG 2.1 - 1.3.1 Info and Relationships" : "WCAG 2.1 - 1.1.1 Non-text Content",
      },
      {
        id: 5,
        severity: "warning",
        category: "Forms",
        title: isHtmlAnalysis ? "Form submission method unclear" : "Form inputs missing labels",
        description: isHtmlAnalysis
          ? "Form elements should clearly indicate how they will be submitted and what data is required."
          : "Several form inputs do not have associated labels, making them difficult for screen readers to identify.",
        element: isHtmlAnalysis
          ? '<input type="submit" value="Submit">'
          : '<input type="email" placeholder="Enter email">',
        location: isHtmlAnalysis ? "Line 30, submit input" : "Newsletter signup form",
        solution: isHtmlAnalysis
          ? "Consider adding form validation and clear submission feedback."
          : "Add <label> elements or use aria-label attributes for all form inputs.",
        wcagReference: "WCAG 2.1 - 3.3.2 Labels or Instructions",
      },
    ],
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-300"
    if (score >= 70) return "text-yellow-300"
    return "text-red-300"
  }

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "from-green-400 to-green-500"
    if (grade.startsWith("B")) return "from-yellow-400 to-yellow-500"
    return "from-red-400 to-red-500"
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <XCircle className="w-5 h-5 text-red-400" />
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
      default:
        return <CheckCircle className="w-5 h-5 text-blue-400" />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "border-red-500/50 bg-red-500/5"
      case "warning":
        return "border-yellow-500/50 bg-yellow-500/5"
      default:
        return "border-blue-500/50 bg-blue-500/5"
    }
  }

  const getCategoryStatus = (status: string) => {
    switch (status) {
      case "good":
        return { icon: <CheckCircle className="w-4 h-4 text-green-400" />, color: "text-green-400" }
      case "warning":
        return { icon: <AlertTriangle className="w-4 h-4 text-yellow-400" />, color: "text-yellow-400" }
      case "critical":
        return { icon: <XCircle className="w-4 h-4 text-red-400" />, color: "text-red-400" }
      default:
        return { icon: <CheckCircle className="w-4 h-4 text-blue-400" />, color: "text-blue-400" }
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Accessibility Analysis Report",
          text: `Accessibility score: ${analysisData.score}% - ${analysisData.totalIssues} issues found`,
          url: window.location.href,
        })
        .catch(console.error)
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          alert("Report link copied to clipboard!")
        })
        .catch(() => {
          alert("Unable to share. Please copy the URL manually.")
        })
    }
  }

  const handleExportPDF = () => {
    // In a real app, this would generate and download a PDF
    alert("PDF export functionality would be implemented here")
  }

  const handleLoadMore = () => {
    // In a real app, this would load more issues
    alert("Load more issues functionality would be implemented here")
  }

  const handleLearnMore = (issueId: number) => {
    // In a real app, this would open detailed documentation
    alert(`Learn more about issue #${issueId}`)
  }

  // Build query string for category navigation
  const buildCategoryUrl = (categorySlug: string) => {
    const params = new URLSearchParams()
    if (isHtmlAnalysis) {
      params.set("html", htmlParam || "")
      params.set("type", "html")
    } else {
      params.set("url", url || "")
    }
    return `/analyze/${categorySlug}?${params.toString()}`
  }

  const getWcagLink = (wcagReference: string) => {
    const wcagMap: Record<string, string> = {
      "WCAG 2.1 - 1.1.1 Non-text Content": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html",
      "WCAG 2.1 - 4.1.2 Name, Role, Value": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html",
      "WCAG 2.1 - 3.3.2 Labels or Instructions":
        "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html",
      "WCAG 2.1 - 1.4.3 Contrast (Minimum)": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",
      "WCAG 2.1 - 2.1.2 No Keyboard Trap": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html",
      "WCAG 2.1 - 1.3.1 Info and Relationships":
        "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html",
    }
    return wcagMap[wcagReference] || "https://www.w3.org/WAI/WCAG21/Understanding/"
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white hover:bg-gray-800 border-0 bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-700"></div>
              <div>
                <h1 className="text-2xl font-bold text-white">Accessibility Analysis</h1>
                <div className="flex items-center space-x-4 text-sm text-gray-300 mt-1">
                  <span className="flex items-center">
                    {isHtmlAnalysis ? <Code className="w-3 h-3 mr-1" /> : <ExternalLink className="w-3 h-3 mr-1" />}
                    {isHtmlAnalysis ? "HTML Code Analysis" : analysisData.url}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    Scanned on {analysisData.scanDate}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                onClick={handleShare}
                variant="outline"
                size="sm"
                className="border-gray-600 bg-gray-800/50 text-gray-200 hover:text-white hover:bg-gray-700 hover:border-gray-500 transition-all duration-200"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button
                onClick={handleExportPDF}
                variant="outline"
                size="sm"
                className="border-gray-600 bg-gray-800/50 text-gray-200 hover:text-white hover:bg-gray-700 hover:border-gray-500 transition-all duration-200"
              >
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>
          </div>

          {/* HTML Preview for HTML Analysis */}
          {isHtmlAnalysis && analysisData.htmlPreview && (
            <DarkCard className="p-4 mb-8">
              <div className="flex items-center space-x-2 mb-3">
                <Code className="w-4 h-4 text-purple-400" />
                <h3 className="text-sm font-semibold text-white">Analyzed HTML Code</h3>
              </div>
              <code className="text-xs bg-gray-800 text-gray-300 p-3 rounded block overflow-x-auto">
                {analysisData.htmlPreview}
              </code>
            </DarkCard>
          )}

          {/* Score Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Main Score */}
            <DarkCard className="lg:col-span-1 p-8 text-center">
              <div className="mb-4">
                <div className={`text-6xl font-bold ${getScoreColor(analysisData.score)} mb-2`}>
                  {analysisData.score}
                </div>
                <div
                  className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${getGradeColor(analysisData.grade)} text-white font-semibold text-xl`}
                >
                  Grade {analysisData.grade}
                </div>
              </div>
              <p className="text-gray-300 text-sm">Overall Accessibility Score</p>
              <div className="mt-4 text-xs text-gray-400">Scan completed in {analysisData.scanTime}</div>
            </DarkCard>

            {/* Issue Summary */}
            <DarkCard className="lg:col-span-2 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Issue Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{analysisData.totalIssues}</div>
                  <div className="text-xs text-gray-300">Total Issues</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-1">{analysisData.criticalIssues}</div>
                  <div className="text-xs text-gray-300">Critical</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">{analysisData.warningIssues}</div>
                  <div className="text-xs text-gray-300">Warnings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{analysisData.infoIssues}</div>
                  <div className="text-xs text-gray-300">Info</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                  <span>Progress to WCAG AA Compliance</span>
                  <span>{analysisData.score}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${getGradeColor(analysisData.grade)}`}
                    style={{ width: `${analysisData.score}%` }}
                  ></div>
                </div>
              </div>
            </DarkCard>
          </div>

          {/* Category Breakdown - Now Clickable */}
          <DarkCard className="p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-6">Category Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(analysisData.categories).map(([key, category]) => {
                const status = getCategoryStatus(category.status)
                return (
                  <Link key={key} href={buildCategoryUrl(category.slug)} className="block">
                    <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-200 cursor-pointer group border border-transparent hover:border-purple-500/30">
                      <div className="flex items-center space-x-3">
                        {status.icon}
                        <div>
                          <div className="text-white font-medium capitalize group-hover:text-purple-300 transition-colors duration-200">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                          <div className="text-xs text-gray-300">
                            {category.issues} issue{category.issues !== 1 ? "s" : ""}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`text-lg font-semibold ${status.color}`}>{category.score}%</div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors duration-200" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
            <div className="mt-4 text-sm text-gray-400 text-center">
              Click on any category to view detailed issues and recommendations
            </div>
          </DarkCard>

          {/* Detailed Issues */}
          <DarkCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Recent Issues</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span>
                  Showing {analysisData.issues.length} of {analysisData.totalIssues} issues
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {analysisData.issues.map((issue) => (
                <div key={issue.id} className={`p-6 rounded-lg border ${getSeverityColor(issue.severity)}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getSeverityIcon(issue.severity)}
                      <div>
                        <h4 className="text-white font-semibold">{issue.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-300 mt-1">
                          <span className="bg-gray-800 px-2 py-1 rounded text-xs">{issue.category}</span>
                          <span>{issue.location}</span>
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium capitalize ${
                        issue.severity === "critical"
                          ? "bg-red-500/20 text-red-400"
                          : issue.severity === "warning"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {issue.severity}
                    </span>
                  </div>

                  <p className="text-gray-200 mb-4">{issue.description}</p>

                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-gray-300 mb-1">Affected Element:</div>
                      <code className="text-xs bg-gray-800 text-gray-300 p-2 rounded block overflow-x-auto">
                        {issue.element}
                      </code>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-gray-300 mb-1">Recommended Solution:</div>
                      <p className="text-sm text-gray-200">{issue.solution}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                      <a
                        href={getWcagLink(issue.wcagReference)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                      >
                        {issue.wcagReference}
                      </a>
                      <Button
                        onClick={() => handleLearnMore(issue.id)}
                        variant="ghost"
                        size="sm"
                        className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 text-xs border-0 bg-transparent"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {analysisData.totalIssues > analysisData.issues.length && (
              <div className="text-center mt-6">
                <Button
                  onClick={handleLoadMore}
                  variant="outline"
                  className="border-gray-600 bg-gray-800/50 text-gray-200 hover:text-white hover:bg-gray-700 hover:border-gray-500 transition-all duration-200"
                >
                  Load More Issues ({analysisData.totalIssues - analysisData.issues.length} remaining)
                </Button>
              </div>
            )}
          </DarkCard>

          {/* Recommendations */}
          {/* Enhanced Recommendations with WCAG Links */}
          <DarkCard className="p-6 mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">Next Steps & WCAG Compliance</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Fix Critical Issues First</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Address the {analysisData.criticalIssues} critical accessibility issues to improve compliance
                    significantly.
                  </p>
                  <a
                    href="https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:text-blue-300 underline"
                  >
                    View WCAG 2.1 Quick Reference →
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-yellow-400 text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">
                    {isHtmlAnalysis ? "Add Missing Attributes" : "Improve ARIA Implementation"}
                  </h4>
                  <p className="text-gray-300 text-sm mb-2">
                    {isHtmlAnalysis
                      ? "Focus on adding proper alt attributes, labels, and semantic HTML structure."
                      : "Focus on proper ARIA labels and semantic HTML structure for better screen reader support."}
                  </p>
                  <a
                    href="https://www.w3.org/WAI/ARIA/apg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:text-blue-300 underline"
                  >
                    ARIA Authoring Practices Guide →
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Regular Testing</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Set up automated accessibility testing in your development workflow.
                  </p>
                  <a
                    href="https://www.w3.org/WAI/test-evaluate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:text-blue-300 underline"
                  >
                    Learn about accessibility testing →
                  </a>
                </div>
              </div>
            </div>
          </DarkCard>
        </div>
      </div>
    </div>
  )
}
