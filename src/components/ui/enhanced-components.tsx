import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
  variant?: "primary" | "secondary" | "muted"
}

const LoadingSpinner = React.forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  ({ className, size = "md", variant = "primary", ...props }, ref) => {
    const sizeClasses = {
      sm: "w-4 h-4",
      md: "w-6 h-6", 
      lg: "w-8 h-8"
    }

    const variantClasses = {
      primary: "border-purple-600 border-t-transparent",
      secondary: "border-pink-600 border-t-transparent", 
      muted: "border-gray-400 border-t-transparent dark:border-gray-600"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "animate-spin rounded-full border-2",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      />
    )
  }
)
LoadingSpinner.displayName = "LoadingSpinner"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "circular" | "rectangular"
  animation?: "pulse" | "wave" | "none"
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = "default", animation = "pulse", ...props }, ref) => {
    const variantClasses = {
      default: "rounded-md",
      circular: "rounded-full",
      rectangular: "rounded-none"
    }

    const animationClasses = {
      pulse: "animate-pulse",
      wave: "animate-pulse", // Puedes personalizar esto más
      none: ""
    }

    return (
      <div
        ref={ref}
        className={cn(
          "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800",
          variantClasses[variant],
          animationClasses[animation],
          className
        )}
        {...props}
      />
    )
  }
)
Skeleton.displayName = "Skeleton"

export interface FloatingActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  size?: "sm" | "md" | "lg"
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left"
}

const FloatingActionButton = React.forwardRef<HTMLButtonElement, FloatingActionButtonProps>(
  ({ className, asChild = false, size = "md", position = "bottom-right", ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const sizeClasses = {
      sm: "h-12 w-12",
      md: "h-14 w-14",
      lg: "h-16 w-16"
    }

    const positionClasses = {
      "bottom-right": "fixed bottom-6 right-6",
      "bottom-left": "fixed bottom-6 left-6", 
      "top-right": "fixed top-6 right-6",
      "top-left": "fixed top-6 left-6"
    }

    return (
      <Comp
        ref={ref}
        className={cn(
          "z-50 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center",
          sizeClasses[size],
          positionClasses[position],
          "hover:from-purple-700 hover:to-pink-700",
          "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
          className
        )}
        {...props}
      />
    )
  }
)
FloatingActionButton.displayName = "FloatingActionButton"

export { LoadingSpinner, Skeleton, FloatingActionButton }
