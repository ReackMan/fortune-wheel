import { useSearchParams } from 'next/navigation'

import { setAllCompleted } from '@/features/account/model/slice/accountSlice'
import { useAppDispatch } from '@/store/types'

export const useAccount = () => {
  const completed = useSearchParams().get('completed')

  const dispatch = useAppDispatch()

  if (completed === 'true') {
    dispatch(setAllCompleted())
  }
}
