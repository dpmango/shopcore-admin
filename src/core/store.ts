import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import notificationsStore from '@/core/store/notifications.store'
import ordersState from '@/core/store/orders.store'
import sesionState from '@/core/store/session.store'
import statsStore from '@/core/store/stats.store'

export const store = configureStore({
  reducer: {
    sesionState,
    ordersState,
    notificationsStore,
    statsStore,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
