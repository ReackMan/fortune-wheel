'use client'

import { useEffect } from 'react'

import { getIsShuffling } from '@/features/account/model/selectors/getIsShuffling'
import { shufflePrizesAsync } from '@/features/account/model/slice/accountSlice'
import { useAppDispatch, useAppSelector } from '@/store/types'

export const useFortuneWheel = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(shufflePrizesAsync())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const isShuffling = useAppSelector(getIsShuffling)

  return { isShuffling }
}
