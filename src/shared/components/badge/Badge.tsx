import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/lib/utils/cn'

const badgeVariants = cva('inline-block px-2 py-0.5 text-xl leading-5', {
  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    variant: {
      primary: 'bg-accent text-foreground shadow-m3-elev-5',
      secondary: 'bg-foreground text-background',
    },
  },
})

type BadgeProps = {
  className?: string
} & VariantProps<typeof badgeVariants>

export const Badge = ({ className, variant = 'primary' }: BadgeProps) => {
  return (
    <span className={cn(badgeVariants({ className, variant }))}>
      {variant === 'primary' ? 'Доступен' : 'Выполнен'}
    </span>
  )
}
