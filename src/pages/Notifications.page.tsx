import { DashboardNotifications } from '@c/Dashboard'
import { Layout } from '@c/Layout'
import { Helmet } from 'react-helmet'

export const NotificationsPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Уведомления - {import.meta.env.VITE_APP_APP_NAME}</title>
      </Helmet>

      <DashboardNotifications />
    </Layout>
  )
}
