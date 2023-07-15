import { ContentName, ContentUser, HistoryBtn } from '@c/Dashboard/Atom'
import { PointerSvg, TelegramBlueSvg, WarningSvg } from '@c/Ui/Icons'

import { INotificationDto } from '@/core/interface/Notifications'

interface INotificationCardProps extends INotificationDto {}

export const NotificationCard: React.FC<INotificationCardProps> = ({
  id,
  created,
  operator,
  text,
  status,
}) => {
  const dispatch = useAppDispatch()

  return (
    <div className="content-el notifications-el">
      <div className="notifications-el__content">
        <div className="notifications-el__block notifications-el__block_1">
          {operator && (
            <ContentUser avatar={operator.avatar} title={operator.name} description={operator.id} />
          )}
        </div>
        <div className="notifications-el__block notifications-el__block_2">
          <div className="content-info">
            <div className="content-info__title">{id}</div>
            <div className="content-info__date">{dateToTimestamp(created)}</div>
          </div>
        </div>
        <div className="notifications-el__block notifications-el__block_3">
          <div className="text-info" dangerouslySetInnerHTML={{ __html: text }} />
          {/* Подключил карту <span className="text-green">4403 1304 0023 8543</span> к аккаунту{' '}
            <span className="text-blue">server32034@gmail.com</span> хотя в заказе указан{' '}
            <span className="text-blue">ruslan23424@gmail.com</span> */}
        </div>
      </div>
    </div>
  )
}
