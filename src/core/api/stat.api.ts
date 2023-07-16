import type { IApiResponse, IStatOperatorDto } from '@/core/interface'

export const fetchOperatorStatApi = async () => {
  const { data, error } = (await api(`operators`, {
    method: 'GET',
  })) as IApiResponse<IStatOperatorDto[]>

  return { data, error: !data }
}
