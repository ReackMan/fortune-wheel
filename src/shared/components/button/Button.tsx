import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center shrink-0 gap-4 rounded-full cursor-pointer',
  {
    defaultVariants: {
      size: 'default',
      variant: 'primary',
    },
    variants: {
      fullWidth: {
        true: 'w-full',
      },
      size: {
        default: 'h-10 px-4 py-2',
        lg: 'h-12 px-6',
      },
      variant: {
        ghost: 'bg-transparent text-foreground',
        outlined: 'bg-transparent text-foreground border border-foreground',
        primary: 'bg-accent text-foreground shadow-m3-elev-5',
        secondary: 'bg-foreground text-background',
      },
    },
  }
)

type ButtonProps = {
  asChild?: boolean
  icon?: ReactNode
  children: ReactNode
} & VariantProps<typeof buttonVariants> &
  ComponentPropsWithoutRef<'button'>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, fullWidth = false, icon, size, variant, ...rest }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ className, fullWidth, size, variant }))}
        ref={ref}
        type={'button'}
        {...rest}
      >
        {children}
        {icon && icon}
      </button>
    )
  }
)

Button.displayName = 'Button'
export { Button }
