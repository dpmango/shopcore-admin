import { PhotoProvider } from 'react-photo-view'
import { ToastContainer } from 'react-toastify'

import Router from '@/pages/Routes'

function App() {
  const { refreshWatcher } = useTelegramAuth()
  useEffect(() => {
    refreshWatcher()
  }, [])

  return (
    <>
      <PhotoProvider>
        <Router />
      </PhotoProvider>

      <ToastContainer />
    </>
  )
}

export default App
