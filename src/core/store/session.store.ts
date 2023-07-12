import type { ISelectOption } from '@c/Ui/Select'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

// import { getChatList, getDialogUser, getMessagesByDialog, markRead } from '@/core/api/chat.api'
import { IUser } from '@/core/interface/Auth'

export interface ISession {
  user: IUser | null
  modal: string | null
  theme: 'dark' | 'light'
}

export const getUserService = createAsyncThunk('chat/me', async () => {
  const { data, error } = await getUser()

  return data
})

const initialState: ISession = {
  user: null,
  modal: null,
  theme: 'dark',
}

export const chatState = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    resetUser(state, action: PayloadAction) {
      Cookies.remove('auth-shopcorev2')
    },
    setModal(state, action: PayloadAction<string>) {
      state.modal = action.payload
    },
    closeModal(state) {
      state.modal = null
    },
    setTheme(state, action: PayloadAction<'dark' | 'light'>) {
      state.theme = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserService.fulfilled, (state, action: PayloadAction<any>) => {
      state.user = action.payload
    })
  },
})

export const { resetUser, setModal, closeModal, setTheme } = chatState.actions

export default chatState.reducer
