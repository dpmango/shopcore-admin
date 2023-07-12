import type { ISelectOption } from '@c/Ui/Select'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

// import { getChatList, getDialogUser, getMessagesByDialog, markRead } from '@/core/api/chat.api'
import { IUser } from '@/core/interface/Auth'

export interface ISession {
  user: IUser | null
}

export const getUserService = createAsyncThunk('chat/me', async () => {
  const { data, error } = await getUser()

  return data
})

const initialState: ISession = {
  user: null,
}

export const chatState = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    resetUser(state, action: PayloadAction) {
      Cookies.remove('auth-shopcorev2')
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserService.fulfilled, (state, action: PayloadAction<any>) => {
      state.user = action.payload
    })
  },
})

export const { resetUser } = chatState.actions

export default chatState.reducer
