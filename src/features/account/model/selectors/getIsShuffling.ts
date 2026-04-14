import { StateSchema } from '@/store/types'

export const getIsShuffling = (state: StateSchema) => state.account.fortuneWheel.isShuffling
