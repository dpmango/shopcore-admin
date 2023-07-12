import Cookies from 'js-cookie'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import { AuthPage } from '@/pages/Auth.page'
import { CancellationsPage } from '@/pages/Cancellations.page'
import { NotificationsPage } from '@/pages/Notifications.page'
import { OrdersPage } from '@/pages/Orders.page'
import { StatsPage, StatsPageOperator } from '@/pages/Stats.page'

declare global {
  interface Window {
    gtag?: (key: string, trackingId: string, config: { page_path: string }) => void
    ym?: (key: number, action: string, params: string) => void
  }
}

const ProtectedRoute = () => {
  const accessToken = Cookies.get('auth-ticketv2')
  const location = useLocation()

  // закрытые роутов
  if (!accessToken) {
    return <Navigate to="/auth" state={{ from: location }} replace />
  }

  return <Outlet />
}

const Router = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />

      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<OrdersPage />} />
        <Route path="/cancellations" element={<CancellationsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/stats/:id" element={<StatsPageOperator />} />
      </Route>

      <Route path="*" element={<Navigate to="/auth" replace={true} />} />
    </Routes>
  )
}

export default Router
