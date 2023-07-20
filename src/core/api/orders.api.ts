import type {
  IApiResponse,
  ICancellationDto,
  IMessageResponseDto,
  IOrderDto,
  IOrderHistroyDto,
} from '@/core/interface'

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

export const fetchCancellationApi = async () => {
  const { data, error } = (await api(`orders/cancellations`, {
    method: 'GET',
  })) as IApiResponse<ICancellationDto[]>

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

export const orderPostponeApi = async (payload: IOrderPostpronePayload) => {
  const { data, error } = (await api(`order/postpone`, {
    method: 'POST',
    body: payload,
  })) as IApiResponse<IMessageResponseDto>

  return { data, error: !data }
}

export interface IOrderHideCancelledPayload {
  id: string
  like: boolean
  comment: string
}

// [post] Подтвердить отмену заказу
export const orderHideCancelledApi = async (payload: IOrderHideCancelledPayload) => {
  const { data, error } = (await api(`order/hidecancelled`, {
    method: 'POST',
    body: payload,
  })) as IApiResponse<null>

  return { data, error: !data }
}
