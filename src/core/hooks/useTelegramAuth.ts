import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { fetchAuth } from '@/core/api/session.api'
import { ITelegramAuthDto } from '@/core/interface/Initialization'

export const useTelegramAuth = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  // req: ITelegramAuthDto
  const onAuthSuccess = async (token: string) => {
    try {
      Cookies.set('auth-ticketv2', token)
      navigate('/')

      const { payload } = await dispatch(getChatListService())

      if (!payload) throw new Error()
    } catch (err) {
      toast.error('Что то пошло не так. Обратитьс к администратору')
    }
  }

  return {
    onAuthSuccess,
  }
}
