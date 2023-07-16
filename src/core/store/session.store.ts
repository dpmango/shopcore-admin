import type { ISelectOption } from '@c/Ui/Select'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

// import { getChatList, getDialogUser, getMessagesByDialog, markRead } from '@/core/api/chat.api'
import { IUser } from '@/core/interface'

export interface ISession {
  user: IUser | null
  modal: string | null
  modalParams: any
  theme: 'dark' | 'light'
}

export const getUserService = createAsyncThunk('chat/me', async () => {
  const { data, error } = await getUser()

  return data
})

const initialState: ISession = {
  user: null,
  modal: null,
  modalParams: {},
  theme: 'dark',
}

export const chatState = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    resetUser(state, action: PayloadAction) {
      Cookies.remove('auth-shopcorev2')
    },
    setModal(state, action: PayloadAction<{ name: string; params?: any }>) {
      state.modal = action.payload.name
      state.modalParams = action.payload.params || {}
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
