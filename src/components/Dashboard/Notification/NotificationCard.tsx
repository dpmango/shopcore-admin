import { ContentName, ContentUser } from '@c/Dashboard/Atom'

import { INotificationDto } from '@/core/interface'

interface INotificationCardProps extends INotificationDto {}

export const NotificationCard: React.FC<INotificationCardProps> = ({
  id,
  created,
  operator,
  text,
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
        </div>
      </div>
    </div>
  )
}
