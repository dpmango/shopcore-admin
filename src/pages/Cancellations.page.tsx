import { DashboardCancellations } from '@c/Dashboard'
import { Helmet } from 'react-helmet'

export const CancellationsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Отмены - {import.meta.env.VITE_APP_APP_NAME}</title>
      </Helmet>

      <DashboardCancellations />
    </>
  )
}
