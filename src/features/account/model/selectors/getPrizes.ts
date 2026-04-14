import { StateSchema } from '@/store/types'

export const getPrizes = (state: StateSchema) => state.account.fortuneWheel.prizes
