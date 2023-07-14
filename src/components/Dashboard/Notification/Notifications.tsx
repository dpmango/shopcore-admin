import { WarningSvg } from '@c/Ui/Icons'

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
          <div className="content-el notifications-el">
            <div className="notifications-el__content">
              <div className="notifications-el__block notifications-el__block_1">
                <div className="content-user">
                  <img
                    className="content-user__img"
                    src="https://randomuser.me/api/portraits/men/74.jpg"
                    alt=""
                  />
                  <div className="content-user__body">
                    <div className="content-user__title">Жора</div>
                    <div className="content-user__text">3302468557</div>
                  </div>
                </div>
              </div>
              <div className="notifications-el__block notifications-el__block_2">
                <div className="content-info">
                  <div className="content-info__title">kajzlcbout</div>
                  <div className="content-info__date">30 февраля 2023 в 15:43</div>
                </div>
              </div>
              <div className="notifications-el__block notifications-el__block_3">
                <div className="text-info">
                  Подключил карту <span className="text-green">4403 1304 0023 8543</span> к аккаунту{' '}
                  <span className="text-blue">server32034@gmail.com</span> хотя в заказе указан{' '}
                  <span className="text-blue">ruslan23424@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block-content__el">
          <div className="content-el notifications-el">
            <div className="notifications-el__content">
              <div className="notifications-el__block notifications-el__block_1">
                <div className="content-user">
                  <img
                    className="content-user__img"
                    src="https://randomuser.me/api/portraits/men/74.jpg"
                    alt=""
                  />
                  <div className="content-user__body">
                    <div className="content-user__title">Жора</div>
                    <div className="content-user__text">3302468557</div>
                  </div>
                </div>
              </div>
              <div className="notifications-el__block notifications-el__block_2">
                <div className="content-info">
                  <div className="content-info__title">kajzlcbout</div>
                  <div className="content-info__date">30 февраля 2023 в 15:43</div>
                </div>
              </div>
              <div className="notifications-el__block notifications-el__block_3">
                <div className="text-info">
                  Не отвечает в заказе в течении <span className="text-yellow">15 минут</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block-content__el">
          <div className="content-el content-el_red notifications-el">
            <div className="notifications-el__content">
              <div className="notifications-el__block notifications-el__block_1">
                <div className="content-user">
                  <img
                    className="content-user__img"
                    src="https://randomuser.me/api/portraits/men/74.jpg"
                    alt=""
                  />
                  <div className="content-user__body">
                    <div className="content-user__title">Жора</div>
                    <div className="content-user__text">3302468557</div>
                  </div>
                </div>
              </div>
              <div className="notifications-el__block notifications-el__block_2">
                <div className="content-info">
                  <div className="content-info__title">kajzlcbout</div>
                  <div className="content-info__date">30 февраля 2023 в 15:43</div>
                </div>
              </div>
              <div className="notifications-el__block notifications-el__block_3">
                <WarningSvg className="notifications-el__icon" />
                <div className="text-info">
                  Странное выполнение заказа. Прошло с момента взятия
                  <span className="text-red">46 секунд</span>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
