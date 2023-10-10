import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { fetchAuth } from '@/core/api/session.api'

export const useTelegramAuth = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const timer: { current: NodeJS.Timeout | null } = useRef(null)

  const refreshWatcher = useCallback(() => {
    const updateSession = async () => {
      const refreshToken = Cookies.get('refresh-ticketv2')
      if (!refreshToken) return
      const { data, error } = await refreshAuth()

      if (data) {
        Cookies.set('auth-ticketv2', data?.access_token)
      }
    }

    updateSession()
    timer.current = setInterval(updateSession, 30 * 60 * 1000)

    return () => {
      clearInterval(timer.current as NodeJS.Timeout)
    }
  }, [])

  // req: ITelegramAuthDto
  const onAuthSuccess = async ({
    access_token,
    refresh_token,
  }: {
    access_token: string
    refresh_token?: string
  }) => {
    try {
      if (!access_token) return
      Cookies.set('auth-ticketv2', access_token)
      refresh_token && Cookies.set('refresh-ticketv2', refresh_token)
      navigate('/')

      const { payload } = await dispatch(getChatListService())

      if (!payload) throw new Error()
    } catch (err) {
      toast.error('Что то пошло не так. Обратитьс к администратору')
    }
  }

  return {
    refreshWatcher,
    onAuthSuccess,
  }
}
