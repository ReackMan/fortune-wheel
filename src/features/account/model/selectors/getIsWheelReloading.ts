import { StateSchema } from '@/store/types'

export const getIsWheelReloading = (state: StateSchema) =>
  state.account.fortuneWheel.isWheelReloading
