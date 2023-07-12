import { DashboardOrders } from '@c/Dashboard'
import { Layout } from '@c/Layout'
import { Helmet } from 'react-helmet'

export const OrdersPage: React.FC = () => {
  const dispatch = useAppDispatch()

  const timer: { current: NodeJS.Timeout | null } = useRef(null)

  useEffect(() => {
    dispatch(getOrdersService())

    timer.current = setInterval(
      () => {
        dispatch(getOrdersService())
      },
      1 * 60 * 1000 * import.meta.env.VITE_APP_TRASEHOLD,
    )

    return () => {
      clearInterval(timer.current as NodeJS.Timeout)
    }
  })

  return (
    <Layout>
      <Helmet>
        <title>Заказы - {import.meta.env.VITE_APP_APP_NAME}</title>
      </Helmet>

      <DashboardOrders />
    </Layout>
  )
}
