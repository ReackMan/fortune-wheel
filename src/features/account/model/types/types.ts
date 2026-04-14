export type Prize = {
  label: string
  isWin: boolean
  type: 'free' | 'discount' | 'lose'
  value: string
  description: string
}

export type Quest = {
  buttonIcon?: string
  buttonText: string
  description: string
  title: string
  isCompleted: boolean
  id: number
}

export type AccountSchema = {
  fortuneWheel: {
    freeGiftDay: number
    isShuffling: boolean
    isWheelReloading: boolean
    prizes: Prize[]
  }
  quests: Quest[]
}
