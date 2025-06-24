"use client"

import { Suspense } from "react"
import CategoryIssues from "./category-issues"

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-white">Loading category analysis...</div>
          </div>
        }
      >
        <CategoryIssues />
      </Suspense>
    </div>
  )
}
