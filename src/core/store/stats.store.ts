import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IStatOperatorDto } from '@/core/interface'

export interface IStats {
  operators: IStatOperatorDto[]
  loading: boolean
}

const initialState: IStats = {
  operators: [],
  loading: false,
}

export const getOperatorStatsService = createAsyncThunk('stats/operators', async () => {
  const { data, error } = await fetchOperatorStatApi()

  return data
})

export const statsStore = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOperatorStatsService.pending, (state) => {
      state.loading = true
    })
    builder.addCase(
      getOperatorStatsService.fulfilled,
      (state, action: PayloadAction<IStatOperatorDto[] | null>) => {
        if (action.payload) {
          state.operators = action.payload
        }

        state.loading = false
      },
    )
  },
})

// export const { setFilter } = ordersStore.actions

export default statsStore.reducer
