import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { AccountSchema } from '@/features/account/model/types/types'

const initialState: AccountSchema = {
  fortuneWheel: {
    freeGiftDay: 1,
    isShuffling: true,
    isWheelReloading: false,
    prizes: [
      {
        description: 'Активируйте в течение 24 часов',
        isWin: true,
        label: 'СКИДКА',
        type: 'discount',
        value: '5%',
      },
      {
        description: 'Активируйте в течение 24 часов',
        isWin: true,
        label: 'СКИДКА',
        type: 'discount',
        value: '10%',
      },
      {
        description: 'Активируйте в течение 24 часов',
        isWin: true,
        label: 'СКИДКА',
        type: 'discount',
        value: '20%',
      },
      {
        description: 'Активируйте в течение 24 часов',
        isWin: true,
        label: 'СКИДКА',
        type: 'discount',
        value: '30%',
      },
      {
        description: 'Активируйте в течение 24 часов',
        isWin: true,
        label: 'СКИДКА',
        type: 'discount',
        value: '50%',
      },
      {
        description: 'Активируйте в течение 24 часов',
        isWin: true,
        label: 'СКИДКА',
        type: 'discount',
        value: '70%',
      },
      {
        description: 'Они уже добавлены к вашей подписке',
        isWin: true,
        label: 'БЕСПЛАТНЫЕ',
        type: 'free',
        value: '6 часов',
      },
      { description: '', isWin: false, label: 'ПОПРОБУЙ', type: 'lose', value: 'завтра' },
    ],
  },
  quests: [
    {
      buttonText: 'Оставить отзыв',
      description: 'Поделитесь своим мнением о HiroVPN и получите 3 дня VPN бесплатно!',
      id: 1,
      isCompleted: false,
      title: 'ОСТАВЬ ОТЗЫВ',
    },
    {
      buttonIcon: 'ion:share-outline',
      buttonText: 'Поделиться',
      description: 'Пригласите друга в HiroVPN и получите 1 день VPN бесплатно!',
      id: 2,
      isCompleted: false,
      title: 'ПОДЕЛИТЬСЯ С ДРУЗЬЯМИ',
    },
    {
      buttonIcon: 'simple-icons:googleplay',
      buttonText: 'Поддержать',
      description:
        'Поставьте лайки 5 комментариям, с которыми вы согласны, и мы подарим вам 2 дня VPN бесплатно!',
      id: 3,
      isCompleted: false,
      title: 'ПОДДЕРЖИТЕ НАС ЛАЙКАМИ',
    },
    {
      buttonText: 'Оценить',
      description: 'Поделись впечатлением и получи 1 день VPN в подарок!',
      id: 4,
      isCompleted: false,
      title: 'ОЦЕНИ НАС В GOOGLE КАРТАХ',
    },
    {
      buttonText: 'Оценить',
      description: 'Поделись впечатлением и получи 1 день VPN в подарок!',
      id: 5,
      isCompleted: false,
      title: 'ОЦЕНИ НАС В ЯНДЕКС КАРТАХ',
    },
    {
      buttonIcon: 'ic:baseline-telegram',
      buttonText: 'Подписаться',
      description:
        'Подпишитесь на канал HiroVPN – получайте новости и апдейты самыми первыми, а так же 1 день VPN бесплатно!',
      id: 6,
      isCompleted: false,
      title: 'ПОДПИСАТЬСЯ НА TG-КАНАЛ',
    },
  ],
}

export const shufflePrizesAsync = createAsyncThunk(
  'account/shufflePrizesAsync',
  async (_, { dispatch }) => {
    dispatch(accountSlice.actions.setShuffling(true))
    await new Promise(resolve => setTimeout(resolve, 800))
    dispatch(shufflePrizes())
    dispatch(accountSlice.actions.setShuffling(false))
  }
)

export const accountSlice = createSlice({
  initialState: initialState,
  name: 'account',
  reducers: {
    increaseFreeGiftDay: state => {
      if (state.fortuneWheel.freeGiftDay < 7) {
        state.fortuneWheel.freeGiftDay += 1
      } else state.fortuneWheel.freeGiftDay = 1
    },
    setAllCompleted: state => {
      state.fortuneWheel.freeGiftDay = 7
      state.fortuneWheel.isShuffling = false
      state.fortuneWheel.isWheelReloading = true
      state.quests.map(q => (q.isCompleted = true))
    },
    setIsWheelReloading: (state, action) => {
      state.fortuneWheel.isWheelReloading = action.payload
      localStorage.setItem('state.fortuneWheel.isWheelReloading', JSON.stringify(action.payload))
    },
    setQuestCompleted: (state, action) => {
      const index = state.quests.findIndex(quest => quest.id === action.payload)

      state.quests[index].isCompleted = true
    },
    setShuffling: (state, action) => {
      state.fortuneWheel.isShuffling = action.payload
    },
    shufflePrizes: state => {
      state.fortuneWheel.prizes = [...state.fortuneWheel.prizes].sort(() => Math.random() - 0.5)
    },
  },
})

export const {
  increaseFreeGiftDay,
  setAllCompleted,
  setIsWheelReloading,
  setQuestCompleted,
  setShuffling,
  shufflePrizes,
} = accountSlice.actions

export const { reducer: accountReducer } = accountSlice
