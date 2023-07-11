import cns from 'classnames'

import { DashboardSidebar } from './Sidebar'

export const DashboardNotifications: React.FC = () => {
  return (
    <div className="lk-content">
      <DashboardSidebar />

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
                    <img className="content-user__img" src="../img/pr.png" alt="" />
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
                    Подключил карту <span className="text-green">4403 1304 0023 8543</span> к
                    аккаунту <span className="text-blue">server32034@gmail.com</span> хотя в заказе
                    указан <span className="text-blue">ruslan23424@gmail.com</span>
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
                    <img className="content-user__img" src="../img/pr.png" alt="" />
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
                    <img className="content-user__img" src="../img/pr.png" alt="" />
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
                  <svg
                    className="notifications-el__icon"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 15.375C10.8274 15.375 10.6875 15.2351 10.6875 15.0625C10.6875 14.8899 10.8274 14.75 11 14.75"
                      stroke="#C1352C"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M11 15.375C11.1726 15.375 11.3125 15.2351 11.3125 15.0625C11.3125 14.8899 11.1726 14.75 11 14.75"
                      stroke="#C1352C"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M11 12.25V6"
                      stroke="#C1352C"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2.06663 12.0676C1.78384 11.7844 1.625 11.4007 1.625 11.0005C1.625 10.6004 1.78384 10.2165 2.06663 9.93344L9.93325 2.06759C10.0733 1.92729 10.2395 1.81598 10.4225 1.74004C10.6056 1.66409 10.8018 1.625 10.9999 1.625C11.1981 1.625 11.3943 1.66409 11.5774 1.74004C11.7604 1.81598 11.9267 1.92729 12.0666 2.06759L19.9333 9.93344C20.2161 10.2165 20.3749 10.6004 20.3749 11.0005C20.3749 11.4007 20.2161 11.7844 19.9333 12.0676L12.0666 19.9334C11.7837 20.2162 11.4 20.3749 10.9999 20.3749C10.5999 20.3749 10.2163 20.2162 9.93325 19.9334L2.06663 12.0676Z"
                      stroke="#C1352C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
    </div>
  )
}
