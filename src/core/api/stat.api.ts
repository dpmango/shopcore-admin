import type {
  IApiResponse,
  IMessageResponseDto,
  IOperatorStatDto,
  IStatOperatorDetailsDto,
  IStatOperatorDto,
} from '@/core/interface'

export const fetchOperatorsApi = async () => {
  const { data, error } = (await api(`operators`, {
    method: 'GET',
  })) as IApiResponse<IStatOperatorDto[]>

  return { data, error: !data }
}

interface IFetchOperatorPayload {
  id: string
}

// [get] Инфа об операторе и его доступах
export const fetchOperatorApi = async ({ id }: IFetchOperatorPayload) => {
  const { data, error } = (await api(`operator`, {
    method: 'GET',
    params: {
      id,
    },
  })) as IApiResponse<IStatOperatorDetailsDto>

  return { data, error: !data }
}

export interface IFetchOperatorStatPayload {
  id: string
  from: string
  to: string
}

// [get] Инфа об операторе и его доступах
export const fetchOperatorStatsApi = async ({ id, from, to }: IFetchOperatorStatPayload) => {
  const { data, error } = (await api(`operator/stats`, {
    method: 'GET',
    params: {
      id,
      from,
      to,
    },
  })) as IApiResponse<IOperatorStatDto>

  return { data, error: !data }
}

interface ISaveOperatorAccessPayload {
  id: string
  permissions: {
    id: string
    enabled: boolean
  }[]
}

// [post] сохранение доступов
export const saveOperatorAccessApi = async ({ id, permissions }: ISaveOperatorAccessPayload) => {
  const { data, error } = (await api(`operator/permissions`, {
    method: 'POST',
    body: {
      id,
      permissions,
    },
  })) as IApiResponse<IMessageResponseDto>

  return { data, error: !data }
}
