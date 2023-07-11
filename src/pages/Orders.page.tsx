import { DashboardOrders } from '@c/Dashboard'
import { Layout } from '@c/Layout'
import { Helmet } from 'react-helmet'

export const OrdersPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Заказы - {import.meta.env.VITE_APP_APP_NAME}</title>
      </Helmet>

      <DashboardOrders />
    </Layout>
  )
}
