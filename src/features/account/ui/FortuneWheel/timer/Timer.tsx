import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

type Props = {
  isWheelReloading: boolean
}

export const Timer = ({ isWheelReloading }: Props) => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60)

  useEffect(() => {
    if (!isWheelReloading) return

    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [isWheelReloading])

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, '0')
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, '0')
    const s = (seconds % 60).toString().padStart(2, '0')

    return { h, m, s }
  }

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      className={'flex flex-col items-center text-center px-6 w-full'}
      initial={{ opacity: 0, scale: 0.95 }}
    >
      <div className={'w-full flex'}>
        {Object.entries(formatTime(timeLeft)).map(([label, value], index) => (
          <div className={'flex'} key={index}>
            <div className={'flex flex-col items-center gap-1'}>
              <div className={'flex gap-1'}>
                {value.split('').map((char, i) => (
                  <div
                    className={
                      'w-10 p-2 flex items-center justify-center border rounded-sm text-[44px] leading-11 font-kelly'
                    }
                    key={i}
                  >
                    {char}
                  </div>
                ))}
              </div>
              <span className={'text-xl leading-5 text-card'}>
                {label === 'h' && 'Часы'}
                {label === 'm' && 'Минуты'}
                {label === 's' && 'Секунды'}
              </span>
            </div>
            {(index === 0 || index === 1) && (
              <p className={'w-2.5 mx-1 alumni-semi-44 text-center'}>:</p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
