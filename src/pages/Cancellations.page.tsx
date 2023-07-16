import { DashboardCancellations } from '@c/Dashboard'
import { Layout } from '@c/Layout'
import { Helmet } from 'react-helmet'

export const CancellationsPage: React.FC = () => {
  const dispatch = useAppDispatch()

  const timer: { current: NodeJS.Timeout | null } = useRef(null)

  useEffect(() => {
    dispatch(getCancellationsService())

    timer.current = setInterval(
      () => {
        dispatch(getCancellationsService())
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
        <title>Отмены - {import.meta.env.VITE_APP_APP_NAME}</title>
      </Helmet>

      <DashboardCancellations />
    </Layout>
  )
}
