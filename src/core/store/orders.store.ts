import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ICancellationDto, IOrderDto } from '@/core/interface'
import type { RootState } from '@/core/store'

interface IFilter {
  type: 'afk' | 'work' | 'problem' | null
}

export interface IOrders {
  orders: IOrderDto[]
  cancellations: ICancellationDto[]
  loading: {
    orders: boolean
    cancellation: boolean
  }
  filter: IFilter
}

const initialState: IOrders = {
  orders: [],
  cancellations: [],
  loading: {
    orders: false,
    cancellation: false,
  },
  filter: {
    type: null,
  },
}

export const getOrdersService = createAsyncThunk('orders/list', async (_, { getState }) => {
  const {
    ordersState: { filter },
  } = getState() as RootState

  const { data, error } = await fetchOrdersApi({ ...filter })

  return data
})

export const getCancellationsService = createAsyncThunk('orders/cancellations', async () => {
  const { data, error } = await fetchCancellationApi()

  return data
})

export const ordersStore = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<Partial<IFilter>>) {
      state.filter = { ...state.filter, ...action.payload }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrdersService.pending, (state) => {
      state.loading.orders = true
    })
    builder.addCase(
      getOrdersService.fulfilled,
      (state, action: PayloadAction<IOrderDto[] | null>) => {
        if (action.payload) {
          state.orders = action.payload.sort((a, b) => (a.created < b.created ? 1 : -1))
        }

        state.loading.orders = false
      },
    )
    builder.addCase(getCancellationsService.pending, (state) => {
      state.loading.cancellation = true
    })
    builder.addCase(
      getCancellationsService.fulfilled,
      (state, action: PayloadAction<ICancellationDto[] | null>) => {
        if (action.payload) {
          state.cancellations = action.payload.sort((a, b) => (a.created < b.created ? 1 : -1))
        }

        state.loading.cancellation = false
      },
    )
  },
})

export const { setFilter } = ordersStore.actions

export default ordersStore.reducer
