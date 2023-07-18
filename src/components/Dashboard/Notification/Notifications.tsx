import { WarningSvg } from '@c/Ui/Icons'

import { UiLoader } from '@/components/Ui'

import { NotificationCard } from './NotificationCard'

export const DashboardNotifications: React.FC = () => {
  const { notifications, loading } = useAppSelector((store) => store.notificationsStore)
  const dispatch = useAppDispatch()

  // data hooks
  const { initialDataLoaded } = useDateUpdater({ storeThunk: getNotificationsService })

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

        <UiLoader active={loading} theme={initialDataLoaded ? 'line' : 'page'} />
      </div>
    </div>
  )
}
