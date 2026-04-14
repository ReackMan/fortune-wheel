'use client'

import { Icon } from '@iconify/react'

import { useAccount } from '@/features/account/lib/useAccount'
import { Quests } from '@/features/account/ui/Quests/Quests'

import { FortuneWheel } from './FortuneWheel/FortuneWheel'
import { TellAboutHiro } from './TellAboutHiro/TellAboutHiro'

export const Account = () => {
  useAccount()

  return (
    <section className={'custom-container py-10 m-auto w-full flex flex-col items-center'}>
      <h1 className={'text-[64px] leading-[64px]'}>АККАУНТ</h1>
      <div className={'w-full flex flex-col'}>
        <div className={'py-8 flex items-center'}>
          <h2 className={'flex-1 text-[44px] leading-[44px]'}>Квесты</h2>
          <Icon height={'24'} icon={'material-symbols-light:close'} width={'24'} />
        </div>
        <div className={'flex flex-col gap-8'}>
          <div className={'grid grid-cols-1 md:grid-cols-2 place-items-center gap-6'}>
            <FortuneWheel />
            <TellAboutHiro />
          </div>
          <Quests />
        </div>
      </div>
    </section>
  )
}
