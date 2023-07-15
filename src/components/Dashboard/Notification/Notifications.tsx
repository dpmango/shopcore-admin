import { WarningSvg } from '@c/Ui/Icons'

import { NotificationCard } from './NotificationCard'

export const DashboardNotifications: React.FC = () => {
  return (
    <div className="lk-content__content">
      <div className="lk-top-info">
        <div className="lk-content__title title-def lk-top-info__el">
          Уведомления<span className="count-text title-def__count title-def__count_mob">27</span>
        </div>
      </div>
      <div className="block-content">
        <div className="block-content__el">
          <NotificationCard
            {...{
              id: '1',
              status: 1,
              created: 1686240433,
              operator: { name: 'Жора', position: 'admin', id: '123' },
              text: 'Подключил карту 4403 1304 0023 8543 к аккаунту <span class="text-blue">server32034@gmail.com</span> хотя в заказе указан ruslan23424@gmail.com',
            }}
          />
        </div>

        <div className="block-content__el">
          <NotificationCard
            {...{
              id: '2',
              status: 2,
              created: 1686240433,
              operator: { name: 'Жора', position: 'admin', id: '123' },
              text: 'Странное выполнение заказа. Прошло с момента взятия <span class="text-red">46 секунд</span>.',
            }}
          />
        </div>
      </div>
    </div>
  )
}
