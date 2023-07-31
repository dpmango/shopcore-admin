import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IFetchOperatorStatPayload } from '@/core/api/stat.api'
import { IOperatorStatDto, IStatOperatorDetailsDto, IStatOperatorDto } from '@/core/interface'

export interface IStats {
  operators: IStatOperatorDto[]
  operator: IStatOperatorDetailsDto | null
  stats: IOperatorStatDto | null
  loading: {
    list: boolean
    operator: boolean
    stats: boolean
  }
}

const initialState: IStats = {
  operators: [],
  operator: null,
  stats: null,
  loading: {
    list: false,
    operator: false,
    stats: false,
  },
}

export const getOperatorStatsService = createAsyncThunk('stats/operators', async () => {
  const { data, error } = await fetchOperatorsApi()

  return data
})

export const getOperatorDetailsService = createAsyncThunk(
  'stats/operators/details',
  async ({ id, from, to }: IFetchOperatorStatPayload) => {
    const { data: operator } = await fetchOperatorApi({ id: id || '' })
    const { data: stats } = await fetchOperatorStatsApi({
      id: id || '',
      from: from,
      to: to,
    })

    return { operator, stats }
  },
)

export const statsStore = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOperatorStatsService.pending, (state) => {
      state.loading.list = true
    })
    builder.addCase(
      getOperatorStatsService.fulfilled,
      (state, action: PayloadAction<IStatOperatorDto[] | null>) => {
        if (action.payload) {
          state.operators = action.payload
        }

        state.loading.list = false
      },
    )
    builder.addCase(getOperatorDetailsService.pending, (state) => {
      state.loading.stats = true
    })
    builder.addCase(
      getOperatorDetailsService.fulfilled,
      (
        state,
        action: PayloadAction<{
          operator: IStatOperatorDetailsDto | null
          stats: IOperatorStatDto | null
        }>,
      ) => {
        if (action.payload.stats) {
          state.stats = action.payload.stats
        }
        if (action.payload.operator) {
          state.operator = action.payload.operator
        }

        state.loading.stats = false
      },
    )
  },
})

// export const { setFilter } = ordersStore.actions

export default statsStore.reducer
