import { ReactNode } from 'react'

import { Icon } from '@iconify/react'

import { Button } from '@/shared/components/button/Button'

type Props = {
  title: ReactNode
  items?: {
    label: string
    icon?: ReactNode
  }[]
  isSupport?: boolean
}

export const FooterColumn = ({ isSupport, items, title }: Props) => {
  return (
    <>
      {!isSupport && (
        <div className={'flex flex-col flex-1 gap-4 md:gap-7'}>
          <h3 className={'alumni-semi-24 text-card uppercase'}>{title}</h3>
          <div>
            {items?.map((item, index) => (
              <h4
                className={'h-12 flex items-center gap-4 text-xl leading-5 font-kelly'}
                key={index}
              >
                {item.icon}
                {item.label}
              </h4>
            ))}
          </div>
        </div>
      )}
      {isSupport && (
        <div className={'flex flex-col flex-1 gap-7'}>
          <h3 className={'alumni-semi-24 text-card uppercase'}>{title}</h3>
          <Button
            className={'w-[152px] px-4'}
            icon={
              <Icon color={'#ff0633'} height={'24'} icon={'ic:baseline-telegram'} width={'24'} />
            }
            size={'lg'}
            variant={'secondary'}
          >
            <h4 className={'flex gap-4 text-xl leading-5 text-background font-kelly'}>Telegram</h4>
          </Button>
          <div className={'flex flex-col gap-5'}>
            <p className={'text-xl leading-5 uppercase font-normal'}>Публичная оферта</p>
            <p className={'text-xl leading-5'}>Пользовательское соглашение</p>
          </div>
        </div>
      )}
    </>
  )
}
