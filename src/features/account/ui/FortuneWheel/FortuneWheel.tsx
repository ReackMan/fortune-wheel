'use client'

import { useRef } from 'react'

import { useFortuneWheel } from '@/features/account/lib/useFortuneWheel'
import { FreeGift } from '@/features/account/ui/FortuneWheel/freeGift/FreeGift'
import { Wheel } from '@/features/account/ui/FortuneWheel/wheel/Wheel'
import Fortune from '@/shared/assets/icons/Fortune'
import { Loader } from '@/shared/components/loader/Loader'

export const FortuneWheel = () => {
  const fortuneRef = useRef<SVGSVGElement>(null)

  const { isShuffling } = useFortuneWheel()

  return (
    <div
      className={
        'w-full max-w-[343px] sm:max-w-[576px] md:max-w-[452px] lg:max-w-[576px] py-6 flex flex-col card-border-2'
      }
    >
      <div className={'mx-6 flex items-center'}>
        <div className={'w-full'}>
          <h3 className={'text-[32px] leading-8 font-alumni font-semibold'}>КОЛЕСО ФОРТУНЫ</h3>
          <p className={'max-w-[210px] text-card text-xl leading-5'}>
            Испытайте удачу раз в день и выигрывайте бонусы для VPN!
          </p>
        </div>
        <Fortune className={''} ref={fortuneRef} />
      </div>
      {isShuffling ? <Loader /> : <Wheel fortuneRef={fortuneRef} />}
      <FreeGift />
    </div>
  )
}
