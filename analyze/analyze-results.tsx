"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DarkCard } from "@/components/ui/dark-card"
import SectionBackground from "../components/section-background"
import { ArrowLeft, Download, Share2, ExternalLink, AlertTriangle, CheckCircle, XCircle, Clock } from "lucide-react"
import Link from "next/link"

export default function AnalyzeResults() {
  const searchParams = useSearchParams()
  const url = searchParams.get("url") || "https://example.com"

  // Mock analysis data - in real app, this would come from API
  const analysisData = {
    url: url,
    score: 78,
    grade: "B+",
    scanDate: new Date().toLocaleDateString(),
    scanTime: "2.3s",
    totalIssues: 23,
    criticalIssues: 3,
    warningIssues: 12,
    infoIssues: 8,
    categories: {
      colorContrast: { score: 85, issues: 4, status: "warning" },
      keyboardNav: { score: 92, issues: 2, status: "good" },
      ariaLabels: { score: 67, issues: 8, status: "critical" },
      images: { score: 88, issues: 3, status: "good" },
      forms: { score: 74, issues: 5, status: "warning" },
      headings: { score: 95, issues: 1, status: "good" },
    },
    issues: [
      {
        id: 1,
        severity: "critical",
        category: "ARIA Labels",
        title: "Missing ARIA labels on interactive elements",
        description:
          "Several buttons and form controls lack proper ARIA labels, making them inaccessible to screen readers.",
        element: '<button class="submit-btn">Submit</button>',
        location: "Contact form, line 45",
        solution: 'Add aria-label="Submit contact form" to the button element.',
        wcagReference: "WCAG 2.1 - 4.1.2 Name, Role, Value",
      },
      {
        id: 2,
        severity: "critical",
        category: "Color Contrast",
        title: "Insufficient color contrast ratio",
        description:
          "Text color #666666 on background #f0f0f0 has a contrast ratio of 2.8:1, below the required 4.5:1.",
        element: '<p class="description">Product description text</p>',
        location: "Product cards, multiple locations",
        solution: "Change text color to #4a4a4a or darker to achieve minimum 4.5:1 contrast ratio.",
        wcagReference: "WCAG 2.1 - 1.4.3 Contrast (Minimum)",
      },
      {
        id: 3,
        severity: "critical",
        category: "Keyboard Navigation",
        title: "Keyboard trap in modal dialog",
        description:
          "Users cannot escape the modal dialog using keyboard navigation, creating an accessibility barrier.",
        element: '<div class="modal-overlay">',
        location: "Newsletter signup modal",
        solution: "Implement proper focus management and add Escape key handler to close modal.",
        wcagReference: "WCAG 2.1 - 2.1.2 No Keyboard Trap",
      },
      {
        id: 4,
        severity: "warning",
        category: "Images",
        title: "Missing alt text for decorative images",
        description:
          'Decorative images should have empty alt attributes (alt="") to be properly ignored by screen readers.',
        element: '<img src="decoration.jpg" alt="decoration">',
        location: "Hero section background",
        solution: 'Change to alt="" for decorative images or add descriptive alt text if informative.',
        wcagReference: "WCAG 2.1 - 1.1.1 Non-text Content",
      },
      {
        id: 5,
        severity: "warning",
        category: "Forms",
        title: "Form inputs missing labels",
        description:
          "Several form inputs do not have associated labels, making them difficult for screen readers to identify.",
        element: '<input type="email" placeholder="Enter email">',
        location: "Newsletter signup form",
        solution: "Add <label> elements or use aria-label attributes for all form inputs.",
        wcagReference: "WCAG 2.1 - 3.3.2 Labels or Instructions",
      },
    ],
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-400"
    if (score >= 70) return "text-yellow-400"
    return "text-red-400"
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

  return (
    <SectionBackground direction="edge-in" className="min-h-screen">
      <div className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-700"></div>
              <div>
                <h1 className="text-2xl font-bold text-white">Accessibility Analysis</h1>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                  <span className="flex items-center">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    {analysisData.url}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    Scanned on {analysisData.scanDate}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:text-white">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:text-white">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>
          </div>

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
              <p className="text-gray-400 text-sm">Overall Accessibility Score</p>
              <div className="mt-4 text-xs text-gray-500">Scan completed in {analysisData.scanTime}</div>
            </DarkCard>

            {/* Issue Summary */}
            <DarkCard className="lg:col-span-2 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Issue Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{analysisData.totalIssues}</div>
                  <div className="text-xs text-gray-400">Total Issues</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-1">{analysisData.criticalIssues}</div>
                  <div className="text-xs text-gray-400">Critical</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">{analysisData.warningIssues}</div>
                  <div className="text-xs text-gray-400">Warnings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{analysisData.infoIssues}</div>
                  <div className="text-xs text-gray-400">Info</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
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

          {/* Category Breakdown */}
          <DarkCard className="p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-6">Category Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(analysisData.categories).map(([key, category]) => {
                const status = getCategoryStatus(category.status)
                return (
                  <div key={key} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {status.icon}
                      <div>
                        <div className="text-white font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</div>
                        <div className="text-xs text-gray-400">
                          {category.issues} issue{category.issues !== 1 ? "s" : ""}
                        </div>
                      </div>
                    </div>
                    <div className={`text-lg font-semibold ${status.color}`}>{category.score}%</div>
                  </div>
                )
              })}
            </div>
          </DarkCard>

          {/* Detailed Issues */}
          <DarkCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Detailed Issues</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
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
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
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

                  <p className="text-gray-300 mb-4">{issue.description}</p>

                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-gray-400 mb-1">Affected Element:</div>
                      <code className="text-xs bg-gray-800 text-gray-300 p-2 rounded block overflow-x-auto">
                        {issue.element}
                      </code>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-gray-400 mb-1">Recommended Solution:</div>
                      <p className="text-sm text-gray-300">{issue.solution}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                      <span className="text-xs text-gray-500">{issue.wcagReference}</span>
                      <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 text-xs">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {analysisData.totalIssues > analysisData.issues.length && (
              <div className="text-center mt-6">
                <Button variant="outline" className="border-gray-700 text-gray-300 hover:text-white">
                  Load More Issues ({analysisData.totalIssues - analysisData.issues.length} remaining)
                </Button>
              </div>
            )}
          </DarkCard>

          {/* Recommendations */}
          <DarkCard className="p-6 mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">Next Steps & Recommendations</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Fix Critical Issues First</h4>
                  <p className="text-gray-400 text-sm">
                    Address the 3 critical accessibility issues to improve compliance significantly.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-yellow-400 text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Improve ARIA Implementation</h4>
                  <p className="text-gray-400 text-sm">
                    Focus on proper ARIA labels and semantic HTML structure for better screen reader support.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Regular Testing</h4>
                  <p className="text-gray-400 text-sm">
                    Set up automated accessibility testing in your development workflow.
                  </p>
                </div>
              </div>
            </div>
          </DarkCard>
        </div>
      </div>
    </SectionBackground>
  )
}
