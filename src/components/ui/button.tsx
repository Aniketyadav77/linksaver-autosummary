import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'glass' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const variants = {
      default: "bg-gradient-to-r from-[rgba(var(--accent-1),0.9)] to-[rgba(var(--accent-2),0.9)] text-white border-transparent shadow-md",
      glass: "bg-[color:var(--glass-surface)] hover:bg-[rgba(255,255,255,0.06)] text-white border-[color:var(--glass-border)] backdrop-blur-sm",
      outline: "bg-transparent border-[color:var(--glass-border)] hover:bg-[rgba(255,255,255,0.02)] text-white"
    }
    
    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-12 px-6 text-base",
      lg: "h-14 px-8 text-lg"
    }

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-2xl font-medium transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[rgba(var(--accent-1),0.45)] disabled:pointer-events-none disabled:opacity-50 border",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
