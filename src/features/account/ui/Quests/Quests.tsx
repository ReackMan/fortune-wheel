'use client'

import { Icon } from '@iconify/react'

import { getQuests } from '@/features/account/model/selectors/getQuests'
import { Card } from '@/shared/components/card/Card'
import { useAppSelector } from '@/store/types'

export const Quests = () => {
  const quests = useAppSelector(getQuests)

  return (
    <div
      className={
        'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-start place-items-center gap-6'
      }
    >
      {quests.map((quest, index) => (
        <Card
          className={'w-full max-w-[576px] xl:max-w-[365px]'}
          icon={<Icon color={'#ff0633'} height={'24'} icon={`${quest.buttonIcon}`} width={'24'} />}
          key={index}
          {...quest}
        />
      ))}
    </div>
  )
}
