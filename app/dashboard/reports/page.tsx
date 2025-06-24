"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Clock } from "lucide-react"

export default function ReportsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [sortBy, setSortBy] = useState("date")
  const [sortOrder, setSortOrder] = useState("desc")
  const [viewMode, setViewMode] = useState("grid")
  const [selectedReport, setSelectedReport] = useState<any>(null)

  // Mock data for reports
  const reports = [
    {
      id: 1,
      title: "E-commerce Homepage Analysis",
      url: "https://shop.example.com",
      date: "2024-01-15",
      score: 92,
      issues: 3,
      status: "completed",
      category: "E-commerce",
      tags: ["homepage", "critical"],
      duration: "2m 34s",
      pages: 5,
      description: "Comprehensive accessibility audit of the main e-commerce homepage and key user flows.",
    },
    {
      id: 2,
      title: "Blog Platform Audit",
      url: "https://blog.example.com",
      date: "2024-01-12",
      score: 78,
      issues: 12,
      status: "completed",
      category: "Blog",
      tags: ["content", "navigation"],
      duration: "4m 12s",
      pages: 8,
      description: "Full accessibility review of blog platform including article pages and navigation.",
    },
    {
      id: 3,
      title: "Web Application Dashboard",
      url: "https://app.example.com",
      date: "2024-01-10",
      score: 85,
      issues: 7,
      status: "in-progress",
      category: "Web App",
      tags: ["dashboard", "forms"],
      duration: "3m 45s",
      pages: 12,
      description: "Accessibility analysis of the main application dashboard and user interface components.",
    },
    {
      id: 4,
      title: "Corporate Website",
      url: "https://company.example.com",
      date: "2024-01-08",
      score: 95,
      issues: 2,
      status: "completed",
      category: "Corporate",
      tags: ["corporate", "minimal"],
      duration: "1m 58s",
      pages: 6,
      description: "Corporate website accessibility audit focusing on compliance and user experience.",
    },
    {
      id: 5,
      title: "Portfolio Site Review",
      url: "https://portfolio.example.com",
      date: "2024-01-05",
      score: 88,
      issues: 5,
      status: "completed",
      category: "Portfolio",
      tags: ["creative", "images"],
      duration: "2m 15s",
      pages: 4,
      description: "Creative portfolio site accessibility review with focus on image accessibility.",
    },
    {
      id: 6,
      title: "News Website Analysis",
      url: "https://news.example.com",
      date: "2024-01-03",
      score: 72,
      issues: 15,
      status: "failed",
      category: "News",
      tags: ["content-heavy", "media"],
      duration: "5m 22s",
      pages: 20,
      description: "Comprehensive news website audit covering articles, media content, and navigation.",
    },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-300"
    if (score >= 70) return "text-yellow-300"
    return "text-red-300"
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completed
          </Badge>
        )
      case "in-progress":
        return (
          <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
            <Clock className="w-3 h-3 mr-1" />
            In Progress
          </Badge>
        )
      case "failed":
        return (
          <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Failed
          </Badge>
        )
      default:
        return <Badge className="bg-gray-500/20 text-gray-300 border-gray-500/30">\
