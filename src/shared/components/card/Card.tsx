'use client'

import { ReactNode } from 'react'

import { cva, VariantProps } from 'class-variance-authority'

import { setQuestCompleted } from '@/features/account/model/slice/accountSlice'
import { Badge } from '@/shared/components/badge/Badge'
import { Button } from '@/shared/components/button/Button'
import { cn } from '@/shared/lib/utils/cn'
import { useAppDispatch } from '@/store/types'

const cardVariants = cva('relative p-6 flex flex-col', {
  defaultVariants: {
    variant: 'ghost',
  },
  variants: {
    variant: {
      ghost: 'card-border-1',
      primary: 'w-full max-w-[576px] flex-1 bg-foreground',
    },
  },
})

type Props = {
  title: string
  description: string
  buttonText: string
  id?: number
  icon?: ReactNode
  className?: string
  isCompleted?: boolean
} & VariantProps<typeof cardVariants>

export const Card = ({
  buttonText,
  className,
  description,
  icon,
  id,
  isCompleted,
  title,
  variant = 'ghost',
}: Props) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    if (variant === 'ghost') {
      dispatch(setQuestCompleted(id))
    }
  }

  return (
    <div className={cn(cardVariants({ className, variant }))}>
      <Badge className={'absolute top-0'} variant={isCompleted ? 'secondary' : 'primary'} />
      <h3
        className={`pt-1 alumni-semi-32 tracking-[0.01em] ${variant === 'primary' && 'text-background'}`}
      >
        {title}
      </h3>
      <p
        className={`py-2 ${variant === 'ghost' ? 'text-card' : 'text-secondary'} text-xl leading-5 whitespace-pre-line tracking-[0.01em]`}
      >
        {description}
      </p>
      {!isCompleted && (
        <Button
          className={'mt-2'}
          icon={icon}
          onClick={handleClick}
          variant={variant === 'ghost' ? 'secondary' : 'primary'}
        >
          <h3
            className={`alumni-semi-24 ${variant === 'ghost' ? 'text-background' : 'text-foreground'} uppercase`}
          >
            {buttonText}
          </h3>
        </Button>
      )}
    </div>
  )
}
