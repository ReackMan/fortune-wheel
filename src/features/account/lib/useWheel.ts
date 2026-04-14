'use client'

import { RefObject, useMemo, useRef, useState } from 'react'

import confetti from 'canvas-confetti'
import { useAnimation } from 'framer-motion'

import { getIsWheelReloading } from '@/features/account/model/selectors/getIsWheelReloading'
import { getPrizes } from '@/features/account/model/selectors/getPrizes'
import {
  increaseFreeGiftDay,
  setIsWheelReloading,
  shufflePrizesAsync,
} from '@/features/account/model/slice/accountSlice'
import { useAppDispatch, useAppSelector } from '@/store/types'

const ITEM_WIDTH = 120
const GAP = 4
const ITEM_STEP = ITEM_WIDTH + GAP
const INITIAL_OFFSET = 36
const REPEAT_COUNT = 25

type Props = {
  fortuneRef: RefObject<SVGSVGElement | null>
}

export const useWheel = ({ fortuneRef }: Props) => {
  const dispatch = useAppDispatch()
  const prizes = useAppSelector(getPrizes)
  const isWheelReloading = useAppSelector(getIsWheelReloading)

  const containerRef = useRef<HTMLDivElement>(null)

  const [isSpinning, setIsSpinning] = useState(false)
  const [winner, setWinner] = useState<(typeof prizes)[0] | null>(null)
  const [showPopUp, setShowPopUp] = useState(false)

  const controls = useAnimation()

  const SPIN_ITEMS = useMemo(() => [...Array(REPEAT_COUNT)].flatMap(() => prizes), [prizes])

  const spin = async () => {
    if (!containerRef.current) return

    setIsSpinning(true)
    setWinner(null)

    const winIndex = Math.floor(Math.random() * prizes.length) + (SPIN_ITEMS.length - 10)
    const winItem = SPIN_ITEMS[winIndex]

    const targetX = `calc(50% - ${winIndex * ITEM_STEP + ITEM_WIDTH / 2}px)`

    await controls.start({
      transition: { duration: 4.5, ease: [0.2, 0, 0, 1] },
      x: targetX,
    })

    setWinner(winItem)
    setIsSpinning(false)

    if (winItem.isWin && fortuneRef.current) {
      const rect = fortuneRef.current.getBoundingClientRect()

      const x = (rect.left + rect.width / 2) / window.innerWidth
      const y = (rect.top + rect.height / 2) / window.innerHeight

      confetti({
        colors: ['#ff0633', '#fdfdfd', '#ffbd00'],
        gravity: 0.5,
        origin: { x, y },
        particleCount: 100,
        scalar: 1.5,
        shapes: ['star'],
        spread: 360,
        startVelocity: 30,
        ticks: 200,
        zIndex: 999,
      })
    }

    setTimeout(() => setShowPopUp(true), 500)
  }

  const handleReset = () => {
    setShowPopUp(false)
    setWinner(null)
    controls.set({ x: INITIAL_OFFSET })

    dispatch(setIsWheelReloading(true))
    dispatch(increaseFreeGiftDay())
    dispatch(shufflePrizesAsync())
  }

  return {
    containerRef,
    controls,
    handleReset,
    INITIAL_OFFSET,
    isSpinning,
    isWheelReloading,
    ITEM_STEP,
    ITEM_WIDTH,
    showPopUp,
    spin,
    SPIN_ITEMS,
    winner,
  }
}
