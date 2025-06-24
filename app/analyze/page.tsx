"use client"

import { Suspense } from "react"
import AnalyzeResults from "./analyze-results"

export default function AnalyzePage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-white">Loading analysis...</div>
          </div>
        }
      >
        <AnalyzeResults />
      </Suspense>
    </div>
  )
}
