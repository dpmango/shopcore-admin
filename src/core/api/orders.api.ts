import type { IApiResponse } from '@/core/interface/Api'
import type { IOrderDto, IOrderHistroyDto } from '@/core/interface/Orders'

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

  return { data, error: !data }
}

export const orderHistoryApi = async (id: string) => {
  const { data, error } = (await api(`order/history`, {
    method: 'GET',
    params: { id: id },
  })) as IApiResponse<IOrderHistroyDto[]>

  return {
    data: data?.length && data.sort((a, b) => (a.date < b.date ? 1 : -1)),
    error: !data,
  }
}

export interface IOrderPostpronePayload {
  id: string
  reason: string
  minutes: number
}

export const orderPostproneApi = async (payload: IOrderPostpronePayload) => {
  const { data, error } = (await api(`order/postprone`, {
    method: 'POST',
    body: payload,
  })) as IApiResponse<any>

  return { data, error: !data }
}
