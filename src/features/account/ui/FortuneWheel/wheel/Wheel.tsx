'use client'

import { RefObject } from 'react'

import { Icon } from '@iconify/react'
import { AnimatePresence, motion } from 'framer-motion'

import { useWheel } from '@/features/account/lib/useWheel'
import { Timer } from '@/features/account/ui/FortuneWheel/timer/Timer'
import Discount from '@/shared/assets/icons/Discount'
import DiscountWin from '@/shared/assets/icons/DiscountWin'
import Fail from '@/shared/assets/icons/Fail'
import FailWin from '@/shared/assets/icons/FailWin'
import Frame from '@/shared/assets/icons/Frame'
import Gift from '@/shared/assets/icons/Gift'
import GiftWin from '@/shared/assets/icons/GiftWin'
import { Button } from '@/shared/components/button/Button'

const MotionButton = motion.create(Button)

type Props = {
  fortuneRef: RefObject<SVGSVGElement | null>
}

export const Wheel = ({ fortuneRef }: Props) => {
  const {
    containerRef,
    controls,
    handleReset,
    INITIAL_OFFSET,
    isSpinning,
    isWheelReloading,
    ITEM_WIDTH,
    showPopUp,
    spin,
    SPIN_ITEMS,
    winner,
  } = useWheel({ fortuneRef })

  const prizeImage = {
    discount: <Discount />,
    free: <Gift />,
    lose: <Fail />,
  }

  return (
    <>
      <div
        className={
          'relative py-4 flex flex-col gap-4 items-center w-full max-w-[1000px] overflow-hidden bg-[#1e2025] font-alumni '
        }
      >
        {isWheelReloading ? (
          <Timer isWheelReloading={isWheelReloading} />
        ) : (
          <>
            <div className={'relative flex w-full justify-center'}>
              <div className={'absolute bottom-0 z-20 flex w-full justify-center'}>
                <Frame className={''} />
              </div>

              <div
                className={'flex w-full overflow-hidden mask-fade justify-center'}
                ref={containerRef}
              >
                <motion.div
                  animate={controls}
                  className={'flex gap-1'}
                  initial={{ x: INITIAL_OFFSET }}
                  style={{ width: SPIN_ITEMS.length * ITEM_WIDTH }}
                >
                  {SPIN_ITEMS.map((item, i) => (
                    <div className={'flex-shrink-0'} key={i} style={{ width: ITEM_WIDTH }}>
                      <div
                        className={
                          'h-[208px] border-1 rounded-lg flex flex-col items-center justify-between py-4 transition-colors border-card'
                        }
                      >
                        <h3 className={'alumni-semi-24 text-card'}>{item.label}</h3>
                        <div
                          className={
                            'relative w-30 h-30 rounded-lg flex items-center justify-center'
                          }
                        >
                          {prizeImage[item.type]}
                        </div>
                        <h4 className={'text-[32px] leading-8 text-card font-kelly'}>
                          {item.value}
                        </h4>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className={'px-6 w-full'}>
              <AnimatePresence>
                {!isSpinning && !winner && (
                  <MotionButton
                    exit={{ opacity: 0, scale: 0.9 }}
                    fullWidth
                    icon={
                      <Icon
                        height={'24'}
                        icon={'material-symbols-light:featured-seasonal-and-gifts-rounded'}
                        width={'24'}
                      />
                    }
                    onClick={spin}
                  >
                    <h3 className={'alumni-semi-24 uppercase'}>Испытать удачу</h3>
                  </MotionButton>
                )}
              </AnimatePresence>
            </div>
          </>
        )}

        <AnimatePresence>
          {showPopUp && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className={
                'fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] min-w-[343px] max-w-[343px] md:max-w-[476px] h-[448px] px-4 md:px-6 py-8 flex flex-col gap-6 items-center bg-background rounded-[28px] shadow-2xl z-50 text-center'
              }
              initial={{ opacity: 0, y: 100 }}
            >
              <h2 className={'alumni-semi-44 whitespace-pre-line'}>
                {winner?.isWin ? 'Поздравляем!\nВы выиграли' : 'В другой раз\nповезёт!'}
              </h2>
              <div className={'relative py-4 w-full flex justify-center items-center'}>
                <p className={'absolute right-[218.5px] md:right-[282.5px] alumni-semi-24'}>
                  {winner?.isWin ? winner.label : 'Попробуйте'}
                </p>
                {winner?.type === 'free' && <GiftWin />}
                {winner?.type === 'discount' && <DiscountWin />}
                {!winner?.isWin && <FailWin />}
                <p
                  className={
                    'absolute left-[218.5px] md:left-[282.5px] text-2xl leading-6 font-kelly'
                  }
                >
                  {winner?.isWin ? winner.value : 'завтра'}
                </p>
              </div>
              <p className={'alumni-semi-24'}>{winner?.description}</p>
              <Button fullWidth onClick={handleReset} size={'lg'}>
                <p className={'alumni-semi-32 uppercase'}>Продолжить</p>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
