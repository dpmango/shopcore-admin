import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { INotificationDto } from '@/core/interface'

export interface INotifications {
  notifications: INotificationDto[]
  loading: boolean
}

const initialState: INotifications = {
  notifications: [],
  loading: false,
}

export const getNotificationsService = createAsyncThunk('notifications/list', async () => {
  const { data, error } = await fetchNotificationsApi()

  return data
})

export const notificationsStore = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotificationsService.pending, (state) => {
      state.loading = true
    })
    builder.addCase(
      getNotificationsService.fulfilled,
      (state, action: PayloadAction<INotificationDto[] | null>) => {
        if (action.payload) {
          state.notifications = action.payload.sort((a, b) => (a.created < b.created ? 1 : -1))
        }

        state.loading = false
      },
    )
  },
})

// export const { setFilter } = ordersStore.actions

export default notificationsStore.reducer
