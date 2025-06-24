"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  HelpCircle,
  BookOpen,
  MessageCircle,
  Mail,
  Phone,
  ExternalLink,
  Search,
  Play,
  FileText,
  Users,
  Zap,
  Shield,
  Globe,
  Clock,
  Star,
  Send,
} from "lucide-react"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "medium",
  })

  const faqs = [
    {
      id: "getting-started",
      question: "How do I get started with accessibility analysis?",
      answer:
        "Getting started is easy! Simply enter your website URL in the analysis tool, select your scan preferences, and click 'Start Analysis'. Our tool will automatically scan your site and provide a comprehensive accessibility report within minutes.",
      category: "Getting Started",
    },
    {
      id: "wcag-compliance",
      question: "What WCAG guidelines does the tool check for?",
      answer:
        "Our tool checks for WCAG 2.1 Level AA compliance, including color contrast ratios, keyboard navigation, ARIA labels, image alt text, form accessibility, heading structure, and more. We cover over 50 different accessibility criteria.",
      category: "Standards",
    },
    {
      id: "report-understanding",
      question: "How do I understand my accessibility report?",
      answer:
        "Your report includes an overall accessibility score, categorized issues by severity (Critical, Warning, Info), specific recommendations for each issue, and WCAG reference links. Each issue includes the affected code snippet and step-by-step fix instructions.",
      category: "Reports",
    },
    {
      id: "fixing-issues",
      question: "How do I fix the accessibility issues found?",
      answer:
        "Each issue in your report includes detailed fix instructions, code examples, and links to relevant WCAG documentation. Start with Critical issues first, as they have the highest impact on accessibility. Our recommendations are prioritized by effort and impact.",
      category: "Fixes",
    },
    {
      id: "scan-frequency",
      question: "How often should I scan my website?",
      answer:
        "We recommend scanning your website after any significant updates or at least monthly. You can set up automated scans in your dashboard to receive regular reports and track your accessibility progress over time.",
      category: "Best Practices",
    },
    {
      id: "team-collaboration",
      question: "Can I share reports with my team?",
      answer:
        "Yes! You can share reports via direct links, export them as PDFs, or invite team members to your dashboard. Team features include commenting on issues, assigning tasks, and tracking resolution progress.",
      category: "Collaboration",
    },
    {
      id: "api-access",
      question: "Do you provide API access for automated testing?",
      answer:
        "Yes, we offer a comprehensive REST API for integrating accessibility testing into your CI/CD pipeline. The API allows you to trigger scans, retrieve results, and monitor accessibility metrics programmatically.",
      category: "Integration",
    },
    {
      id: "data-security",
      question: "How secure is my website data?",
      answer:
        "We take security seriously. All scans are performed securely, we don't store your website content, and all data is encrypted in transit and at rest. We're SOC 2 compliant and follow industry best practices for data protection.",
      category: "Security",
    },
  ]

  const tutorials = [
    {
      id: "basic-scan",
      title: "Running Your First Accessibility Scan",
      description: "Learn how to perform a basic accessibility analysis of your website",
      duration: "5 min",
      difficulty: "Beginner",
      topics: ["URL Analysis", "Report Overview", "Issue Categories"],
    },
    {
      id: "understanding-reports",
      title: "Understanding Your Accessibility Report",
      description: "Deep dive into report sections, scores, and recommendations",
      duration: "8 min",
      difficulty: "Beginner",
      topics: ["Score Interpretation", "Issue Prioritization", "WCAG References"],
    },
    {
      id: "fixing-contrast",
      title: "Fixing Color Contrast Issues",
      description: "Step-by-step guide to resolving color contrast problems",
      duration: "12 min",
      difficulty: "Intermediate",
      topics: ["Contrast Ratios", "Color Tools", "Design Solutions"],
    },
    {
      id: "aria-implementation",
      title: "Implementing ARIA Labels and Roles",
      description: "Master ARIA attributes for better screen reader support",
      duration: "15 min",
      difficulty: "Intermediate",
      topics: ["ARIA Basics", "Screen Readers", "Best Practices"],
    },
    {
      id: "keyboard-navigation",
      title: "Ensuring Keyboard Accessibility",
      description: "Make your site fully navigable without a mouse",
      duration: "10 min",
      difficulty: "Intermediate",
      topics: ["Focus Management", "Tab Order", "Keyboard Shortcuts"],
    },
    {
      id: "automated-testing",
      title: "Setting Up Automated Accessibility Testing",
      description: "Integrate accessibility testing into your development workflow",
      duration: "20 min",
      difficulty: "Advanced",
      topics: ["CI/CD Integration", "API Usage", "Automated Reporting"],
    },
  ]

  const resources = [
    {
      title: "WCAG 2.1 Guidelines",
      description: "Official Web Content Accessibility Guidelines",
      url: "https://www.w3.org/WAI/WCAG21/Understanding/",
      type: "External",
      icon: Globe,
    },
    {
      title: "ARIA Authoring Practices",
      description: "Best practices for implementing ARIA",
      url: "https://www.w3.org/WAI/ARIA/apg/",
      type: "External",
      icon: BookOpen,
    },
    {
      title: "Color Contrast Checker",
      description: "Tool for checking color contrast ratios",
      url: "/tools/contrast-checker",
      type: "Tool",
      icon: Zap,
    },
    {
      title: "Accessibility Testing Checklist",
      description: "Comprehensive checklist for manual testing",
      url: "/resources/checklist.pdf",
      type: "Download",
      icon: FileText,
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted:", contactForm)
    // Reset form
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
      priority: "medium",
    })
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "Advanced":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Help & Support</h1>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Find answers to common questions, learn from our tutorials, and get the support you need to make your website
          accessible to everyone.
        </p>
      </div>

      {/* Quick Search */}
      <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 h-4 w-4" />
            <Input
              placeholder="Search for help topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
            />
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="faq" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-gray-800/50 border border-gray-700/50">
          <TabsTrigger
            value="faq"
            className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-white text-gray-200"
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            FAQ
          </TabsTrigger>
          <TabsTrigger
            value="tutorials"
            className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-white text-gray-200"
          >
            <Play className="mr-2 h-4 w-4" />
            Tutorials
          </TabsTrigger>
          <TabsTrigger
            value="resources"
            className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-white text-gray-200"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Resources
          </TabsTrigger>
          <TabsTrigger
            value="contact"
            className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-white text-gray-200"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Contact
          </TabsTrigger>
        </TabsList>

        {/* FAQ Tab */}
        <TabsContent value="faq" className="space-y-6">
          <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Frequently Asked Questions</CardTitle>
              <CardDescription className="text-gray-200">
                Find quick answers to the most common questions about accessibility testing
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-8">
                  <HelpCircle className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">No results found</h3>
                  <p className="text-gray-300">Try adjusting your search terms</p>
                </div>
              ) : (
                <Accordion type="single" collapsible className="space-y-2">
                  {filteredFaqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="border border-gray-700/50 rounded-lg px-4 bg-gray-800/30"
                    >
                      <AccordionTrigger className="text-white hover:text-purple-300 hover:no-underline">
                        <div className="flex items-center space-x-3 text-left">
                          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                            {faq.category}
                          </Badge>
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-200 pt-4 pb-2">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tutorials Tab */}
        <TabsContent value="tutorials" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tutorials.map((tutorial) => (
              <Card key={tutorial.id} className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-white text-lg mb-2">{tutorial.title}</CardTitle>
                      <CardDescription className="text-gray-200">{tutorial.description}</CardDescription>
                    </div>
                    <Play className="h-5 w-5 text-purple-400 mt-1" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center text-gray-300">
                      <Clock className="h-3 w-3 mr-1" />
                      {tutorial.duration}
                    </div>
                    <Badge className={getDifficultyColor(tutorial.difficulty)}>{tutorial.difficulty}</Badge>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-white">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tutorial.topics.map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs bg-gray-800 text-gray-200">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    <Play className="mr-2 h-4 w-4" />
                    Start Tutorial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <Card key={index} className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-purple-500/20 rounded-lg">
                        <Icon className="h-5 w-5 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1">{resource.title}</h3>
                        <p className="text-gray-200 text-sm mb-3">{resource.description}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="border-gray-600 text-gray-300 bg-gray-800/50 text-xs">
                            {resource.type}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                            asChild
                          >
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Open
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Additional Resources */}
          <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Additional Resources</CardTitle>
              <CardDescription className="text-gray-200">
                More tools and resources to help you build accessible websites
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <h4 className="text-white font-medium mb-1">Community Forum</h4>
                  <p className="text-gray-200 text-sm">Connect with other developers</p>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <FileText className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <h4 className="text-white font-medium mb-1">Documentation</h4>
                  <p className="text-gray-200 text-sm">Comprehensive guides and API docs</p>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <h4 className="text-white font-medium mb-1">Best Practices</h4>
                  <p className="text-gray-200 text-sm">Industry standards and tips</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Send us a Message</CardTitle>
                <CardDescription className="text-gray-200">
                  Can't find what you're looking for? Send us a message and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-200">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm((prev) => ({ ...prev, name: e.target.value }))}
                        className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-200">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))}
                        className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-200">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, subject: e.target.value }))}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-200">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Get in Touch</CardTitle>
                  <CardDescription className="text-gray-200">Multiple ways to reach our support team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Mail className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email Support</p>
                      <p className="text-gray-200 text-sm">support@symphony.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <MessageCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Live Chat</p>
                      <p className="text-gray-200 text-sm">Available 9 AM - 6 PM PST</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Phone className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Phone Support</p>
                      <p className="text-gray-200 text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Response Times</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">General Inquiries</span>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                      <Clock className="h-3 w-3 mr-1" />
                      24 hours
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">Technical Support</span>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      <Clock className="h-3 w-3 mr-1" />
                      12 hours
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">Critical Issues</span>
                    <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                      <Clock className="h-3 w-3 mr-1" />4 hours
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-white font-medium mb-2">Enterprise Support</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    Need dedicated support? Our enterprise plans include priority support, dedicated account management,
                    and SLA guarantees.
                  </p>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-200 hover:text-white hover:bg-gray-800"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
