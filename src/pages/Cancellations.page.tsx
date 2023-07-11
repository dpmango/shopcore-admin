import { DashboardCancellations } from '@c/Dashboard'
import { Layout } from '@c/Layout'
import { Helmet } from 'react-helmet'

export const CancellationsPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Отмены - {import.meta.env.VITE_APP_APP_NAME}</title>
      </Helmet>

      <DashboardCancellations />
    </Layout>
  )
}
