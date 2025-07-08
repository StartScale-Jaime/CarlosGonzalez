import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          "hover:cursor-pointer inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            // Variants
            "bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl": variant === 'default',
            "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl": variant === 'primary',
            "bg-blue-50 text-blue-600 hover:bg-blue-100": variant === 'secondary',
            "border border-gray-300 bg-white hover:bg-gray-50": variant === 'outline',
            "hover:bg-gray-100": variant === 'ghost',
            // Sizes
            "h-8 px-3 text-sm": size === 'sm',
            "h-10 px-4": size === 'md',
            "h-12 px-6 text-lg": size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, type ButtonProps } 