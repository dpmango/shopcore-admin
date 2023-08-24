/* eslint-disable no-irregular-whitespace */

import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth'

import { ITelegramAuthDto } from '@/core/interface'

import { generateRandomShader } from './canvasGradinet'

export const AuthJWT: React.FC = () => {
  const [authToken, setAuthToken] = useState('')
  const { onAuthSuccess } = useTelegramAuth()

  const handleTgAuth = async (auth: ITelegramAuthDto) => {
    const { data } = await fetchAuth({ telegram: auth })
    if (data?.access_token) {
      onAuthSuccess(data?.access_token)
    }
  }

  useLayoutEffect(() => {
    generateRandomShader('shader')
  }, [])

  return (
    <div className="chat-auth">
      <canvas id="shader" />
      <div className="chat-auth__wrapper">
        <h3>
          Добро пожаловать! <br />
          Авторизируйтесь через Телеграм
        </h3>
        <TLoginButton
          botName={'ShopCore_Bot'}
          buttonSize={TLoginButtonSize.Large}
          lang="ru"
          usePic={false}
          cornerRadius={6}
          onAuthCallback={handleTgAuth}
          requestAccess={'write'}
        />
        <div className="chat-auth__minion">
          <a href="https://shopcore.ru/ticketsv2/">Перейти на tickets (v2)</a>
        </div>
        <div className="chat-auth__action">
          <h5>Или укажите свой токен</h5>
          <input
            type="text"
            placeholder="Токен eyJhbGci..."
            value={authToken}
            onChange={(e) => setAuthToken(e.target.value)}
          />

          <button className="btn chat-auth__btn" onClick={() => onAuthSuccess(authToken as string)}>
            Войти c токеном
          </button>
        </div>
      </div>
    </div>
  )
}
