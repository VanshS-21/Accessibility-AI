"use client"

import { useParams, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DarkCard } from "../../../components/ui/dark-card"
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
  Filter,
  Search,
  BookOpen,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"

// Extended mock data with more issues per category
const getCategoryData = (category: string, isHtml = false) => {
  const categoryMap: Record<string, any> = {
    "color-contrast": {
      name: "Color Contrast",
      description: "Issues related to insufficient color contrast ratios that affect readability and accessibility.",
      icon: "🎨",
      wcagGuideline: "WCAG 2.1 - 1.4.3 Contrast (Minimum)",
      wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",
      severity: "critical",
      totalIssues: isHtml ? 12 : 8,
      score: isHtml ? 45 : 72,
      impact: "High - Affects users with visual impairments and low vision",
      quickFix: "Adjust text and background colors to meet minimum 4.5:1 contrast ratio",
      issues: [
        {
          id: 1,
          severity: "critical",
          title: "Insufficient contrast ratio in navigation links",
          description: "Navigation links have a contrast ratio of 2.1:1, well below the required 4.5:1 minimum.",
          element: '<a class="nav-link" style="color: #888;">Home</a>',
          location: "Header navigation, lines 15-20",
          solution: "Change link color from #888 to #333 or darker to achieve 4.5:1 contrast ratio.",
          wcagReference: "WCAG 2.1 - 1.4.3 Contrast (Minimum)",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",
          impact: "Users with visual impairments cannot distinguish navigation links",
          effort: "Low",
          priority: "High",
        },
        {
          id: 2,
          severity: "critical",
          title: "Button text lacks sufficient contrast",
          description: "Primary action buttons use light gray text on white background with only 1.8:1 contrast ratio.",
          element: '<button class="btn-primary" style="color: #ccc; background: #fff;">Submit</button>',
          location: "Contact form, line 45",
          solution: "Use dark text color (#333) or change background to provide adequate contrast.",
          wcagReference: "WCAG 2.1 - 1.4.3 Contrast (Minimum)",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",
          impact: "Critical actions may be invisible to users with low vision",
          effort: "Low",
          priority: "Critical",
        },
        {
          id: 3,
          severity: "warning",
          title: "Secondary text has borderline contrast",
          description: "Helper text and descriptions have 4.2:1 contrast ratio, slightly below the 4.5:1 requirement.",
          element: '<p class="help-text" style="color: #666;">Enter your email address</p>',
          location: "Form fields, multiple locations",
          solution: "Darken text color to #555 to achieve compliant 4.5:1 contrast ratio.",
          wcagReference: "WCAG 2.1 - 1.4.3 Contrast (Minimum)",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",
          impact: "Some users may have difficulty reading helper text",
          effort: "Low",
          priority: "Medium",
        },
        {
          id: 4,
          severity: "warning",
          title: "Link hover state insufficient contrast",
          description: "Links on hover change to a color with only 3.8:1 contrast ratio against the background.",
          element: '<a href="#" style="color: #7c7c7c;">Learn more</a>',
          location: "Content area links, various pages",
          solution: "Adjust hover color to maintain at least 4.5:1 contrast ratio.",
          wcagReference: "WCAG 2.1 - 1.4.3 Contrast (Minimum)",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",
          impact: "Interactive feedback may not be visible to all users",
          effort: "Low",
          priority: "Medium",
        },
        {
          id: 5,
          severity: "info",
          title: "Placeholder text low contrast",
          description: "Form placeholder text has 3.2:1 contrast ratio, which may be acceptable but could be improved.",
          element: '<input type="text" placeholder="Search..." style="color: #999;">',
          location: "Search forms, header",
          solution: "Consider darkening placeholder text or using alternative labeling methods.",
          wcagReference: "WCAG 2.1 - 1.4.3 Contrast (Minimum)",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",
          impact: "Placeholder text may be difficult to read",
          effort: "Low",
          priority: "Low",
        },
      ],
    },
    "aria-labels": {
      name: "ARIA Labels",
      description:
        "Missing or incorrect ARIA attributes that impact screen reader accessibility and semantic understanding.",
      icon: "🏷️",
      wcagGuideline: "WCAG 2.1 - 4.1.2 Name, Role, Value",
      wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html",
      severity: "critical",
      totalIssues: isHtml ? 15 : 10,
      score: isHtml ? 52 : 67,
      impact: "Critical - Essential for screen reader users",
      quickFix: "Add descriptive aria-label attributes to interactive elements",
      issues: [
        {
          id: 6,
          severity: "critical",
          title: "Button missing accessible name",
          description:
            "Interactive button has no text content or aria-label, making it inaccessible to screen readers.",
          element: '<button class="icon-btn"><svg>...</svg></button>',
          location: "Header actions, line 25",
          solution: 'Add aria-label: <button aria-label="Open menu" class="icon-btn">',
          wcagReference: "WCAG 2.1 - 4.1.2 Name, Role, Value",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html",
          impact: "Screen reader users cannot understand button purpose",
          effort: "Low",
          priority: "Critical",
        },
        {
          id: 7,
          severity: "critical",
          title: "Form input lacks proper labeling",
          description: "Input field has no associated label element or aria-label attribute.",
          element: '<input type="email" placeholder="Email">',
          location: "Newsletter signup, line 67",
          solution: 'Add label: <label for="email">Email Address</label><input id="email" type="email">',
          wcagReference: "WCAG 2.1 - 3.3.2 Labels or Instructions",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html",
          impact: "Screen readers cannot identify input purpose",
          effort: "Low",
          priority: "Critical",
        },
        {
          id: 8,
          severity: "warning",
          title: "Image missing alt attribute",
          description: "Informative image lacks alternative text description.",
          element: '<img src="chart.png">',
          location: "Statistics section, line 89",
          solution: 'Add descriptive alt text: <img src="chart.png" alt="Sales increased 40% this quarter">',
          wcagReference: "WCAG 2.1 - 1.1.1 Non-text Content",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html",
          impact: "Screen reader users miss important visual information",
          effort: "Low",
          priority: "High",
        },
        {
          id: 9,
          severity: "warning",
          title: "Link purpose unclear from context",
          description: "Generic 'Read more' links don't provide sufficient context about their destination.",
          element: '<a href="/article1">Read more</a>',
          location: "Blog preview cards, multiple locations",
          solution:
            'Add context: <a href="/article1" aria-label="Read more about accessibility best practices">Read more</a>',
          wcagReference: "WCAG 2.1 - 2.4.4 Link Purpose (In Context)",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html",
          impact: "Users cannot determine link destinations",
          effort: "Medium",
          priority: "Medium",
        },
        {
          id: 10,
          severity: "info",
          title: "Landmark roles could be more specific",
          description: "Generic div elements could use more semantic HTML or ARIA landmark roles.",
          element: '<div class="sidebar">...</div>',
          location: "Page layout, line 12",
          solution: 'Use semantic HTML: <aside class="sidebar"> or add role="complementary"',
          wcagReference: "WCAG 2.1 - 1.3.1 Info and Relationships",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html",
          impact: "Navigation efficiency could be improved",
          effort: "Medium",
          priority: "Low",
        },
      ],
    },
    "keyboard-navigation": {
      name: "Keyboard Navigation",
      description:
        "Issues preventing effective keyboard-only navigation and focus management throughout the interface.",
      icon: "⌨️",
      wcagGuideline: "WCAG 2.1 - 2.1 Keyboard Accessible",
      wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html",
      severity: "critical",
      totalIssues: isHtml ? 8 : 6,
      score: isHtml ? 78 : 85,
      impact: "High - Critical for keyboard-only users",
      quickFix: "Ensure all interactive elements are keyboard accessible with visible focus indicators",
      issues: [
        {
          id: 11,
          severity: "critical",
          title: "Modal dialog creates keyboard trap",
          description: "Users cannot escape modal dialog using keyboard navigation, violating keyboard accessibility.",
          element: '<div class="modal" tabindex="-1">',
          location: "Newsletter modal, line 156",
          solution: "Implement focus management with Escape key handler and focus cycling within modal.",
          wcagReference: "WCAG 2.1 - 2.1.2 No Keyboard Trap",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html",
          impact: "Keyboard users become trapped in modal",
          effort: "High",
          priority: "Critical",
        },
        {
          id: 12,
          severity: "warning",
          title: "Custom dropdown not keyboard accessible",
          description: "JavaScript dropdown menu cannot be operated with keyboard arrow keys or Enter.",
          element: '<div class="dropdown-menu">',
          location: "User menu, line 34",
          solution: "Add keyboard event handlers for arrow keys, Enter, and Escape.",
          wcagReference: "WCAG 2.1 - 2.1.1 Keyboard",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html",
          impact: "Dropdown functionality unavailable to keyboard users",
          effort: "High",
          priority: "High",
        },
        {
          id: 13,
          severity: "warning",
          title: "Focus indicators barely visible",
          description: "Default browser focus outline is suppressed without providing alternative focus indication.",
          element: "button:focus { outline: none; }",
          location: "Global CSS, line 23",
          solution: "Add custom focus styles with sufficient contrast and visibility.",
          wcagReference: "WCAG 2.1 - 2.4.7 Focus Visible",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html",
          impact: "Users cannot track keyboard focus position",
          effort: "Medium",
          priority: "High",
        },
        {
          id: 14,
          severity: "info",
          title: "Skip link missing",
          description: "Page lacks skip navigation link for keyboard users to bypass repetitive content.",
          element: "Missing skip link",
          location: "Page header",
          solution: 'Add skip link: <a href="#main" class="skip-link">Skip to main content</a>',
          wcagReference: "WCAG 2.1 - 2.4.1 Bypass Blocks",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html",
          impact: "Inefficient navigation for keyboard users",
          effort: "Low",
          priority: "Medium",
        },
      ],
    },
    images: {
      name: "Images",
      description:
        "Issues with image accessibility including missing alt text, improper descriptions, and decorative image handling.",
      icon: "🖼️",
      wcagGuideline: "WCAG 2.1 - 1.1.1 Non-text Content",
      wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html",
      severity: "warning",
      totalIssues: isHtml ? 9 : 5,
      score: isHtml ? 30 : 78,
      impact: "Medium - Affects content comprehension",
      quickFix: "Add descriptive alt text to all informative images",
      issues: [
        {
          id: 15,
          severity: "critical",
          title: "Informative image missing alt text",
          description: "Chart image conveys important data but has no alternative text description.",
          element: '<img src="sales-chart.png">',
          location: "Dashboard, line 45",
          solution: 'Add descriptive alt: <img src="sales-chart.png" alt="Sales increased 25% from Q1 to Q2 2024">',
          wcagReference: "WCAG 2.1 - 1.1.1 Non-text Content",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html",
          impact: "Critical data inaccessible to screen reader users",
          effort: "Low",
          priority: "Critical",
        },
        {
          id: 16,
          severity: "warning",
          title: "Decorative image has unnecessary alt text",
          description: "Background decoration image has alt text that adds no value for screen readers.",
          element: '<img src="decoration.svg" alt="decoration">',
          location: "Hero section, line 12",
          solution: 'Mark as decorative: <img src="decoration.svg" alt="" role="presentation">',
          wcagReference: "WCAG 2.1 - 1.1.1 Non-text Content",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html",
          impact: "Unnecessary noise for screen reader users",
          effort: "Low",
          priority: "Medium",
        },
        {
          id: 17,
          severity: "warning",
          title: "Complex image needs detailed description",
          description: "Infographic contains detailed information that cannot be conveyed in alt text alone.",
          element: '<img src="process-flow.png" alt="Process flow">',
          location: "How it works section, line 78",
          solution: "Provide detailed description in surrounding text or use longdesc attribute.",
          wcagReference: "WCAG 2.1 - 1.1.1 Non-text Content",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html",
          impact: "Complex information not fully accessible",
          effort: "Medium",
          priority: "Medium",
        },
      ],
    },
    forms: {
      name: "Forms",
      description:
        "Form accessibility issues including missing labels, unclear error messages, and inadequate instructions.",
      icon: "📝",
      wcagGuideline: "WCAG 2.1 - 3.3 Input Assistance",
      wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html",
      severity: "warning",
      totalIssues: isHtml ? 11 : 7,
      score: isHtml ? 60 : 74,
      impact: "High - Prevents form completion",
      quickFix: "Associate all form inputs with descriptive labels",
      issues: [
        {
          id: 18,
          severity: "critical",
          title: "Required field not indicated",
          description: "Required form fields lack proper indication for screen reader users.",
          element: '<input type="email" required>',
          location: "Contact form, line 23",
          solution:
            'Add aria-required: <input type="email" required aria-required="true" aria-describedby="email-help">',
          wcagReference: "WCAG 2.1 - 3.3.2 Labels or Instructions",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html",
          impact: "Users unaware of required fields",
          effort: "Low",
          priority: "Critical",
        },
        {
          id: 19,
          severity: "warning",
          title: "Error messages not associated with fields",
          description:
            "Form validation errors appear but are not programmatically associated with the relevant input fields.",
          element: '<div class="error">Invalid email</div>',
          location: "Form validation, line 67",
          solution:
            'Use aria-describedby: <input aria-describedby="email-error"><div id="email-error">Invalid email</div>',
          wcagReference: "WCAG 2.1 - 3.3.1 Error Identification",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html",
          impact: "Error context unclear to screen readers",
          effort: "Medium",
          priority: "High",
        },
        {
          id: 20,
          severity: "warning",
          title: "Fieldset missing legend",
          description: "Group of related form controls lacks descriptive legend element.",
          element: '<fieldset><input type="radio" name="plan"></fieldset>',
          location: "Pricing selection, line 89",
          solution:
            'Add legend: <fieldset><legend>Choose your plan</legend><input type="radio" name="plan"></fieldset>',
          wcagReference: "WCAG 2.1 - 1.3.1 Info and Relationships",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html",
          impact: "Relationship between form controls unclear",
          effort: "Low",
          priority: "Medium",
        },
      ],
    },
    headings: {
      name: "Headings",
      description:
        "Issues with heading structure, hierarchy, and semantic organization that affect content navigation.",
      icon: "📋",
      wcagGuideline: "WCAG 2.1 - 1.3.1 Info and Relationships",
      wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html",
      severity: "info",
      totalIssues: isHtml ? 4 : 3,
      score: isHtml ? 85 : 92,
      impact: "Medium - Affects content structure",
      quickFix: "Ensure logical heading hierarchy without skipping levels",
      issues: [
        {
          id: 21,
          severity: "warning",
          title: "Heading levels skip hierarchy",
          description: "Page jumps from h1 directly to h3, skipping h2 level in the heading hierarchy.",
          element: "<h1>Main Title</h1>...<h3>Subsection</h3>",
          location: "Content sections, line 45",
          solution: "Use h2 for major sections, then h3 for subsections to maintain logical hierarchy.",
          wcagReference: "WCAG 2.1 - 1.3.1 Info and Relationships",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html",
          impact: "Content structure unclear for screen readers",
          effort: "Low",
          priority: "Medium",
        },
        {
          id: 22,
          severity: "info",
          title: "Multiple h1 elements on page",
          description: "Page contains multiple h1 elements, which may confuse document structure.",
          element: "<h1>Page Title</h1>...<h1>Section Title</h1>",
          location: "Multiple sections",
          solution: "Use only one h1 per page, typically for the main page title.",
          wcagReference: "WCAG 2.1 - 1.3.1 Info and Relationships",
          wcagLink: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html",
          impact: "Document structure may be ambiguous",
          effort: "Low",
          priority: "Low",
        },
      ],
    },
  }

  return categoryMap[category] || null
}

export default function CategoryIssues() {
  const params = useParams()
  const searchParams = useSearchParams()
  const category = params.category as string
  const url = searchParams.get("url")
  const htmlParam = searchParams.get("html")
  const type = searchParams.get("type")

  const [searchTerm, setSearchTerm] = useState("")
  const [severityFilter, setSeverityFilter] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("priority")

  const isHtmlAnalysis = type === "html"
  const sourceUrl = url || "HTML Code Snippet"

  const categoryData = getCategoryData(category, isHtmlAnalysis)

  const filteredAndSortedIssues = useMemo(() => {
    if (!categoryData) return []

    const filtered = categoryData.issues.filter((issue: any) => {
      const matchesSearch =
        issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesSeverity = severityFilter === "all" || issue.severity === severityFilter
      return matchesSearch && matchesSeverity
    })

    // Sort issues
    filtered.sort((a: any, b: any) => {
      switch (sortBy) {
        case "priority":
          const priorityOrder = { Critical: 0, High: 1, Medium: 2, Low: 3 }
          return (
            (priorityOrder[a.priority as keyof typeof priorityOrder] || 4) -
            (priorityOrder[b.priority as keyof typeof priorityOrder] || 4)
          )
        case "severity":
          const severityOrder = { critical: 0, warning: 1, info: 2 }
          return (
            (severityOrder[a.severity as keyof typeof severityOrder] || 3) -
            (severityOrder[b.severity as keyof typeof severityOrder] || 3)
          )
        case "effort":
          const effortOrder = { Low: 0, Medium: 1, High: 2 }
          return (
            (effortOrder[a.effort as keyof typeof effortOrder] || 3) -
            (effortOrder[b.effort as keyof typeof effortOrder] || 3)
          )
        default:
          return 0
      }
    })

    return filtered
  }, [categoryData, searchTerm, severityFilter, sortBy])

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Category Not Found</h1>
          <p className="text-gray-400 mb-6">The requested issue category could not be found.</p>
          <Link href="/analyze">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Analysis
            </Button>
          </Link>
        </div>
      </div>
    )
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "bg-red-500/20 text-red-400"
      case "High":
        return "bg-orange-500/20 text-orange-400"
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400"
      case "Low":
        return "bg-blue-500/20 text-blue-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case "Low":
        return "bg-green-500/20 text-green-400"
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400"
      case "High":
        return "bg-red-500/20 text-red-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${categoryData.name} Issues - Accessibility Analysis`,
          text: `Found ${categoryData.totalIssues} ${categoryData.name.toLowerCase()} issues`,
          url: window.location.href,
        })
        .catch(console.error)
    } else {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("Link copied to clipboard!"))
        .catch(() => alert("Unable to share. Please copy the URL manually."))
    }
  }

  const handleExportPDF = () => {
    alert("PDF export functionality would be implemented here")
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href={`/analyze?${isHtmlAnalysis ? `html=${encodeURIComponent(htmlParam || "")}&type=html` : `url=${encodeURIComponent(url || "")}`}`}
              className="hover:text-white transition-colors"
            >
              Analysis Report
            </Link>
            <span>/</span>
            <span className="text-white">{categoryData.name}</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Link
                href={`/analyze?${isHtmlAnalysis ? `html=${encodeURIComponent(htmlParam || "")}&type=html` : `url=${encodeURIComponent(url || "")}`}`}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-gray-800 border-0 bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Report
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-700"></div>
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">{categoryData.icon}</span>
                  <h1 className="text-2xl font-bold text-white">{categoryData.name} Issues</h1>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center">
                    {isHtmlAnalysis ? <Code className="w-3 h-3 mr-1" /> : <ExternalLink className="w-3 h-3 mr-1" />}
                    {isHtmlAnalysis ? "HTML Code Analysis" : sourceUrl}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                onClick={handleShare}
                variant="outline"
                size="sm"
                className="border-gray-600 bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700 hover:border-gray-500"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button
                onClick={handleExportPDF}
                variant="outline"
                size="sm"
                className="border-gray-600 bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700 hover:border-gray-500"
              >
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>
          </div>

          {/* Category Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            {/* Category Score */}
            <DarkCard className="p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">{categoryData.score}%</div>
              <div className="text-sm text-gray-400 mb-2">Category Score</div>
              <div
                className={`text-xs px-2 py-1 rounded ${
                  categoryData.score >= 80
                    ? "bg-green-500/20 text-green-400"
                    : categoryData.score >= 60
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                }`}
              >
                {categoryData.score >= 80 ? "Good" : categoryData.score >= 60 ? "Needs Work" : "Critical"}
              </div>
            </DarkCard>

            {/* Total Issues */}
            <DarkCard className="p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">{categoryData.totalIssues}</div>
              <div className="text-sm text-gray-400 mb-2">Total Issues</div>
              <div className="text-xs text-gray-500">In this category</div>
            </DarkCard>

            {/* Impact Level */}
            <DarkCard className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp
                  className={`w-8 h-8 ${
                    categoryData.impact.startsWith("Critical")
                      ? "text-red-400"
                      : categoryData.impact.startsWith("High")
                        ? "text-orange-400"
                        : "text-yellow-400"
                  }`}
                />
              </div>
              <div className="text-sm text-gray-400 mb-2">Impact Level</div>
              <div className="text-xs text-gray-300">{categoryData.impact.split(" - ")[0]}</div>
            </DarkCard>

            {/* WCAG Reference */}
            <DarkCard className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-sm text-gray-400 mb-2">WCAG Guideline</div>
              <div className="text-xs text-gray-300">{categoryData.wcagGuideline.split(" - ")[0]}</div>
            </DarkCard>
          </div>

          {/* Category Description & Quick Fix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <DarkCard className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Target className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">About This Category</h3>
              </div>
              <p className="text-gray-300 mb-4">{categoryData.description}</p>
              <div className="text-sm text-gray-400">
                <strong>Impact:</strong> {categoryData.impact}
              </div>
            </DarkCard>

            <DarkCard className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-semibold text-white">Quick Fix</h3>
              </div>
              <p className="text-gray-300 mb-4">{categoryData.quickFix}</p>
              <div className="text-sm text-gray-400">
                <strong>WCAG Reference:</strong>{" "}
                <a
                  href={categoryData.wcagLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                >
                  {categoryData.wcagGuideline}
                </a>
              </div>
            </DarkCard>
          </div>

          {/* Filters and Search */}
          <DarkCard className="p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Search className="w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search issues..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select
                    value={severityFilter}
                    onChange={(e) => setSeverityFilter(e.target.value)}
                    className="bg-gray-800 border border-gray-700 text-white rounded px-3 py-2 text-sm"
                  >
                    <option value="all">All Severities</option>
                    <option value="critical">Critical</option>
                    <option value="warning">Warning</option>
                    <option value="info">Info</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-800 border border-gray-700 text-white rounded px-3 py-2 text-sm"
                >
                  <option value="priority">Priority</option>
                  <option value="severity">Severity</option>
                  <option value="effort">Effort</option>
                </select>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              Showing {filteredAndSortedIssues.length} of {categoryData.totalIssues} issues
            </div>
          </DarkCard>

          {/* Issues List */}
          <div className="space-y-6">
            {filteredAndSortedIssues.map((issue: any) => (
              <DarkCard key={issue.id} className={`p-6 border ${getSeverityColor(issue.severity)}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getSeverityIcon(issue.severity)}
                    <div>
                      <h4 className="text-white font-semibold text-lg">{issue.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                        <span className="bg-gray-800 px-2 py-1 rounded text-xs">Issue #{issue.id}</span>
                        <span>{issue.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(issue.priority)}`}>
                      {issue.priority}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getEffortColor(issue.effort)}`}>
                      {issue.effort} effort
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{issue.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-2">Affected Element:</div>
                    <code className="text-xs bg-gray-800 text-gray-300 p-3 rounded block overflow-x-auto">
                      {issue.element}
                    </code>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-2">Recommended Solution:</div>
                    <div className="bg-gray-800/50 p-3 rounded">
                      <p className="text-sm text-gray-300">{issue.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>
                        <strong>Impact:</strong> {issue.impact}
                      </span>
                      <span>
                        <strong>WCAG:</strong>
                        <a
                          href={issue.wcagLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                        >
                          {issue.wcagReference}
                        </a>
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 text-xs border-0 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </DarkCard>
            ))}
          </div>

          {filteredAndSortedIssues.length === 0 && (
            <DarkCard className="p-12 text-center">
              <div className="text-gray-400 mb-4">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold mb-2">No issues found</h3>
                <p>Try adjusting your search terms or filters.</p>
              </div>
            </DarkCard>
          )}

          {/* Category-Specific Recommendations */}
          <DarkCard className="p-6 mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">Category-Specific Recommendations</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-400 text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Prioritize Critical Issues</h4>
                  <p className="text-gray-400 text-sm">
                    Focus on fixing critical {categoryData.name.toLowerCase()} issues first as they have the highest
                    impact on accessibility.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Test with Assistive Technology</h4>
                  <p className="text-gray-400 text-sm">
                    After implementing fixes, test with screen readers and other assistive technologies to ensure proper
                    functionality.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-400 text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Implement Automated Testing</h4>
                  <p className="text-gray-400 text-sm">
                    Set up automated accessibility testing in your development workflow to catch{" "}
                    {categoryData.name.toLowerCase()} issues early.
                  </p>
                </div>
              </div>
            </div>
          </DarkCard>
          {/* WCAG Resources Section */}
          <DarkCard className="p-6 mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">WCAG Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-medium mb-2">Official Guidelines</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://www.w3.org/WAI/WCAG21/quickref/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                    >
                      WCAG 2.1 Quick Reference
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.w3.org/WAI/WCAG21/Understanding/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                    >
                      Understanding WCAG 2.1
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.w3.org/WAI/WCAG21/Techniques/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                    >
                      WCAG 2.1 Techniques
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Testing Tools</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://www.w3.org/WAI/test-evaluate/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                    >
                      Evaluating Web Accessibility
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.w3.org/WAI/ARIA/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                    >
                      ARIA Authoring Practices
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </DarkCard>
        </div>
      </div>
    </div>
  )
}
