import { StateSchema } from '@/store/types'

export const getQuests = (state: StateSchema) => state.account.quests
