"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  FileText,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  Users,
  Globe,
  ArrowRight,
  Calendar,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function DashboardOverview() {
  const stats = [
    {
      title: "Total Analyses",
      value: "24",
      change: "+3 this month",
      icon: FileText,
      color: "text-blue-400",
    },
    {
      title: "Issues Resolved",
      value: "156",
      change: "+12 this week",
      icon: CheckCircle,
      color: "text-green-400",
    },
    {
      title: "Active Issues",
      value: "8",
      change: "-4 from last week",
      icon: AlertTriangle,
      color: "text-yellow-400",
    },
    {
      title: "Avg. Score",
      value: "87%",
      change: "+5% improvement",
      icon: TrendingUp,
      color: "text-purple-400",
    },
  ]

  const recentAnalyses = [
    {
      id: 1,
      url: "https://example.com",
      date: "2024-01-15",
      score: 92,
      issues: 3,
      status: "completed",
      category: "E-commerce",
    },
    {
      id: 2,
      url: "https://blog.example.com",
      date: "2024-01-12",
      score: 78,
      issues: 12,
      status: "completed",
      category: "Blog",
    },
    {
      id: 3,
      url: "https://app.example.com",
      date: "2024-01-10",
      score: 85,
      issues: 7,
      status: "in-progress",
      category: "Web App",
    },
  ]

  const upcomingTasks = [
    {
      title: "Review color contrast issues",
      dueDate: "Today",
      priority: "high",
      url: "https://example.com",
    },
    {
      title: "Fix heading structure",
      dueDate: "Tomorrow",
      priority: "medium",
      url: "https://blog.example.com",
    },
    {
      title: "Add alt text to images",
      dueDate: "Jan 20",
      priority: "low",
      url: "https://app.example.com",
    },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-400"
    if (score >= 70) return "text-yellow-400"
    return "text-red-400"
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Completed</Badge>
      case "in-progress":
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">In Progress</Badge>
      default:
        return <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30">Unknown</Badge>
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-red-500 bg-red-500/5"
      case "medium":
        return "border-l-yellow-500 bg-yellow-500/5"
      case "low":
        return "border-l-green-500 bg-green-500/5"
      default:
        return "border-l-gray-500 bg-gray-500/5"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome back! Here's a summary of your accessibility analysis activity.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">{stat.title}</CardTitle>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <p className="text-xs text-gray-400">{stat.change}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Analyses */}
        <div className="lg:col-span-2">
          <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white">Recent Analyses</CardTitle>
                <CardDescription className="text-gray-400">Your latest accessibility reports</CardDescription>
              </div>
              <Button asChild variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:text-white">
                <Link href="/dashboard/reports">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAnalyses.map((analysis) => (
                <div
                  key={analysis.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Globe className="h-4 w-4 text-gray-400" />
                      <span className="text-white font-medium truncate">{analysis.url}</span>
                      {getStatusBadge(analysis.status)}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {analysis.date}
                      </span>
                      <span className="flex items-center">
                        <Target className="h-3 w-3 mr-1" />
                        {analysis.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${getScoreColor(analysis.score)}`}>{analysis.score}%</div>
                    <div className="text-sm text-gray-400">{analysis.issues} issues</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                <Link href="/analyze">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  New Analysis
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-gray-700 text-gray-300 hover:text-white">
                <Link href="/dashboard/reports">
                  <FileText className="mr-2 h-4 w-4" />
                  View Reports
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-gray-700 text-gray-300 hover:text-white">
                <Link href="/dashboard/profile">
                  <Users className="mr-2 h-4 w-4" />
                  Edit Profile
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Upcoming Tasks</CardTitle>
              <CardDescription className="text-gray-400">Issues that need your attention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingTasks.map((task, index) => (
                <div key={index} className={`p-3 rounded-lg border-l-4 ${getPriorityColor(task.priority)}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white mb-1">{task.title}</p>
                      <p className="text-xs text-gray-400 truncate">{task.url}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-xs text-gray-400">
                        <Clock className="h-3 w-3 mr-1" />
                        {task.dueDate}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Progress Overview */}
          <Card className="bg-gray-900/50 border-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Progress Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Overall Compliance</span>
                  <span className="text-white font-medium">87%</span>
                </div>
                <Progress value={87} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Issues Resolved</span>
                  <span className="text-white font-medium">95%</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Monthly Goal</span>
                  <span className="text-white font-medium">73%</span>
                </div>
                <Progress value={73} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
