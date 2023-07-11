import { DashboardStat } from '@c/Dashboard'
import { Layout } from '@c/Layout'
import { Helmet } from 'react-helmet'

export const StatsPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Статистика - {import.meta.env.VITE_APP_APP_NAME}</title>
      </Helmet>

      <DashboardStat />
    </Layout>
  )
}
