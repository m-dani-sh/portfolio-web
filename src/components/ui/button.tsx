import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          outlinePrimary: "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white rounded-md px-4 py-2 transition-all",
          outlineSecondary: "border border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white rounded-md px-4 py-2 transition-all",
          outlineSuccess: "border border-green-500 text-green-500 bg-transparent hover:bg-green-500 hover:text-white rounded-md px-4 py-2 transition-all",
          outlineDanger: "border border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white rounded-md px-4 py-2 transition-all",
          outline1: "border border-[#3B82F6] text-[#3B82F6] bg-transparent hover:bg-[#3B82F6] hover:text-white rounded-md px-4 py-2 transition-all",

        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4  hover:underline",
        link1:"text-primary  underline-offset-4 hover:underline rounded-md px-3 py-2", // Link button style

      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "outline1",
      size: "xl",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
