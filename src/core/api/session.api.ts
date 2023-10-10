import Cookies from 'js-cookie'

import type { IApiResponse, IAuthDto, ITelegramAuthDto, IUser, IWhoisDto } from '@/core/interface'

// Auth (авторизация от ТГ)
export interface IAuthPayload {
  telegram: ITelegramAuthDto | null
}

export const fetchAuth = async ({ telegram, ...rest }: IAuthPayload) => {
  const { data, error } = (await api(`https://shopcore.ru/login/telegram`, {
    method: 'GET',
    params: {
      user: JSON.stringify(telegram),
      // redirect: window.location.href,
    },
  })) as IApiResponse<IAuthDto>

  return { data, error: !data }
}

export const refreshAuth = async () => {
  const refreshToken = Cookies.get('refresh-ticketv2')

  const { data, error } = (await api(`https://shopcore.ru/login/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' as string,
      //@ts-ignore
      Authorization: refreshToken && `Bearer ${refreshToken}`,
    },
  })) as IApiResponse<IAuthDto>

  return { data, error: !!data }
}

export const getUser = async () => {
  const { data, error } = (await api(`user`, {
    method: 'GET',
  })) as IApiResponse<IUser>

  return { data, error: !data }
}
