import { PhotoProvider } from 'react-photo-view'
import { ToastContainer } from 'react-toastify'

import Router from '@/pages/Routes'

function App() {
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
