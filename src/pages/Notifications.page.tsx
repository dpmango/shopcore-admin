import { DashboardNotifications } from '@c/Dashboard'
import { Helmet } from 'react-helmet'

export const NotificationsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Уведомления - {import.meta.env.VITE_APP_APP_NAME}</title>
      </Helmet>

      <DashboardNotifications />
    </>
  )
}
