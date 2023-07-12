import type { IApiResponse } from '@/core/interface/Api'
import type { IAuthDto, ITelegramAuthDto, IWhoisDto } from '@/core/interface/Initialization'
import type { IOrderDto } from '@/core/interface/Orders'

// Auth (авторизация от ТГ)
export interface IFetchOrdersPayload {
  type: 'afk' | 'work' | 'problem' | null
}

export const fetchOrdersApi = async ({ type }: IFetchOrdersPayload) => {
  const { data, error } = (await api(`orders`, {
    method: 'GET',
    params: {
      type: type || '',
    },
  })) as IApiResponse<IOrderDto[]>

  return { data, error: !!data }
}

export interface IORderPostpronePayload {
  id: string
  reason: string
  minutes: number
}

export const orderPostproneApi = async (payload: IORderPostpronePayload) => {
  const { data, error } = (await api(`order/postprone`, {
    method: 'POST',
    body: payload,
  })) as IApiResponse<IOrderDto[]>

  return { data, error: !!data }
}
