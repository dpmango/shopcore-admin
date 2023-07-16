import { DashboardStat, DashboardStatOperator } from '@c/Dashboard'
import { Helmet } from 'react-helmet'

export const StatsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Статистика - {import.meta.env.VITE_APP_APP_NAME}</title>
      </Helmet>

      <DashboardStat />
    </>
  )
}

export const StatsPageOperator: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Оператор - {import.meta.env.VITE_APP_APP_NAME}</title>
      </Helmet>

      <DashboardStatOperator />

      <div className="tooltip-def" id="chartjs-tooltip">
        <div className="tooltip-def__title"></div>
        <div className="tooltip-def__date"></div>
        <div className="tooltip-def__val"></div>
      </div>
    </>
  )
}
