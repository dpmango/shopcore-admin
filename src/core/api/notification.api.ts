import type { IApiResponse, INotificationDto } from '@/core/interface'

export const fetchNotificationsApi = async () => {
  const { data, error } = (await api(`notifications`, {
    method: 'GET',
  })) as IApiResponse<INotificationDto[]>

  return { data, error: !data }
}
