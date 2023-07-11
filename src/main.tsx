import '@/assets/styles/app.scss'
import 'virtual:svg-icons-register'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

const root = createRoot(document.getElementById('root') as HTMLElement)

// eslint-disable-next-line no-console
console.log(`APP version: ${APP_VERSION}`)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
