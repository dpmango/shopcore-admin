import type { IApiResponse } from '@/core/interface/Api'
import type { IUser } from '@/core/interface/Auth'
import type { IAuthDto, ITelegramAuthDto, IWhoisDto } from '@/core/interface/Initialization'

// Auth (авторизация от ТГ)
export interface IAuthPayload {
  telegram: ITelegramAuthDto | null
}

export const fetchAuth = async ({ telegram, ...rest }: IAuthPayload) => {
  const { data, error } = (await api(`https://shopcore.ru/login/telegram`, {
    method: 'GET',
    params: {
      user: JSON.stringify(telegram),
      redirect: window.location.href,
    },
  })) as IApiResponse<IAuthDto>

  return { data, error: !data }
}

export const getUser = async () => {
  const { data, error } = (await api(`user`, {
    method: 'GET',
  })) as IApiResponse<IUser>

  return { data, error: !data }
}
