import type {
  IApiResponse,
  IMessageResponseDto,
  IStatOperatorDetailsDto,
  IStatOperatorDto,
} from '@/core/interface'

export const fetchOperatorStatApi = async () => {
  const { data, error } = (await api(`operators`, {
    method: 'GET',
  })) as IApiResponse<IStatOperatorDto[]>

  return { data, error: !data }
}

interface IFetchOperatorStatPayload {
  id: string
}

// [get] Инфа об операторе и его доступах
export const fetchOperatorApi = async ({ id }: IFetchOperatorStatPayload) => {
  const { data, error } = (await api(`operator`, {
    method: 'GET',
    params: {
      id,
    },
  })) as IApiResponse<IStatOperatorDetailsDto>

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
