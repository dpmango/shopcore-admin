import { DashboardOrders } from '@c/Dashboard'
import { Helmet } from 'react-helmet'

export const OrdersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Заказы - {import.meta.env.VITE_APP_APP_NAME}</title>
      </Helmet>

      <DashboardOrders />
    </>
  )
}
