"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface DarkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

const DarkCard = React.forwardRef<HTMLDivElement, DarkCardProps>(
  ({ className, children, hover = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles - varying dimensions support
          "bg-slate-900 border border-slate-800 rounded-xl",
          // Hover effects (optional)
          hover && "transition-all duration-200 hover:border-purple-500/50 hover:bg-slate-900/80",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)
DarkCard.displayName = "DarkCard"

export { DarkCard }
