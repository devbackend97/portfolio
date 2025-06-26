import * as React from "react"
import { cn } from "../../lib/utils"

const cardVariantClasses = {
  default: "bg-purple-800/30 border border-purple-600/30 backdrop-blur-sm",
  secondary: "bg-gray-100 dark:bg-gray-800",
  destructive: "border-red-500/50 text-red-500",
  outline: "border-purple-300 bg-transparent",
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof cardVariantClasses
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl shadow-md text-white transition-all duration-300",
        cardVariantClasses[variant],
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
))
CardContent.displayName = "CardContent"

export { Card, CardContent }
