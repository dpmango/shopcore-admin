import { WarningSvg } from '@c/Ui/Icons'

import { UiLoader } from '@/components/Ui'

import { NotificationCard } from './NotificationCard'

export const DashboardNotifications: React.FC = () => {
  const { notifications, loading } = useAppSelector((store) => store.notificationsStore)
  const dispatch = useAppDispatch()

  const timer: { current: NodeJS.Timeout | null } = useRef(null)

  useEffect(() => {
    dispatch(getNotificationsService())

    timer.current = setInterval(
      () => {
        dispatch(getNotificationsService())
      },
      1 * 60 * 1000 * import.meta.env.VITE_APP_TRASEHOLD,
    )

    return () => {
      clearInterval(timer.current as NodeJS.Timeout)
    }
  }, [])

  return (
    <div className="lk-content__content">
      <div className="lk-top-info">
        <div className="lk-content__title title-def lk-top-info__el">
          Уведомления
          <span className="count-text title-def__count title-def__count_mob">
            {loading ? '-' : notifications.length}
          </span>
        </div>
      </div>
      <div className="block-content">
        {notifications.map((x, idx) => (
          <div className="block-content__el" key={idx}>
            <NotificationCard {...x} />
          </div>
        ))}

        <UiLoader active={loading} theme="page" />
      </div>
    </div>
  )
}
