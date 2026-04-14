import { Icon } from '@iconify/react'

import { getFreeGiftDay } from '@/features/account/model/selectors/getFreeGiftDay'
import GiftWin from '@/shared/assets/icons/GiftWin'
import { Button } from '@/shared/components/button/Button'
import { useAppSelector } from '@/store/types'

export const FreeGift = () => {
  const freeGiftDay = useAppSelector(getFreeGiftDay)

  return (
    <div className={'px-6 flex flex-col gap-2.5'}>
      <p className={'text-xl leading-5 tracking-light'}>
        Крути колесо 7 дней подряд без пропусков и получи на 7-й день гарантированный 1 день
        подписки!
      </p>
      <div className={'relative px-4 py-2 flex card-border-1'}>
        <p className={'flex-1 alumni-semi-44 text-center'}>1</p>
        <p className={'flex-1 alumni-semi-44 text-center'}>2</p>
        <p className={'flex-1 alumni-semi-44 text-center'}>3</p>
        <p className={'flex-1 alumni-semi-44 text-center'}>4</p>
        <p className={'flex-1 alumni-semi-44 text-center'}>5</p>
        <p className={'flex-1 alumni-semi-44 text-center'}>6</p>
        <div className={'relative flex-1 flex justify-center alumni-semi-44'}>
          <GiftWin className={'absolute'} height={44} width={44} />
          <span className={'z-20'}>7</span>
        </div>
        <div
          className={'absolute h-4 bg-accent top-[22px] left-0 z-[-999]'}
          style={{
            width: freeGiftDay < 7 ? `calc((100% - 32px) * ${freeGiftDay} / 7 + 16px)` : '100%',
          }}
        />
      </div>
      {freeGiftDay === 7 && (
        <Button
          fullWidth
          icon={
            <Icon
              height={'24'}
              icon={'material-symbols-light:featured-seasonal-and-gifts-rounded'}
              width={'24'}
            />
          }
          variant={'secondary'}
        >
          <h3 className={'alumni-semi-24 uppercase'}>забрать награду</h3>
        </Button>
      )}
    </div>
  )
}
