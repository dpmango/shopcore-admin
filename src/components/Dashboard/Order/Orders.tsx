import { OrderCard } from '@c/Dashboard'
import { CheckmarkCheckboxSvg, SettingsSvg } from '@c/Ui/Icons'
import cns from 'classnames'

import { UiCheckbox } from '@/components/Ui'

export const DashboardOrders: React.FC = () => {
  const { orders, filter } = useAppSelector((store) => store.ordersState)
  const dispatch = useAppDispatch()

  return (
    <div className="lk-content__content">
      <div className="lk-top-info">
        <div className="lk-content__title title-def lk-top-info__el">
          Заказы<span className="count-text title-def__count">{orders.length}</span>
          <div className="lk-top-info__btn btn-modal" data-modal="#modal-settings">
            <SettingsSvg />
          </div>
        </div>
        <UiCheckbox
          className="lk-top-info__el"
          isChecked={filter.type === 'afk'}
          onChange={() => dispatch(setFilter({ type: 'afk' }))}
        >
          AFK
        </UiCheckbox>
        <UiCheckbox
          className="lk-top-info__el"
          isChecked={filter.type === 'work'}
          onChange={() => dispatch(setFilter({ type: 'work' }))}
        >
          В работе
        </UiCheckbox>
        <UiCheckbox
          className="lk-top-info__el"
          isChecked={filter.type === 'problem'}
          onChange={() => dispatch(setFilter({ type: 'problem' }))}
        >
          Проблемные
        </UiCheckbox>
      </div>
      <div className="lk-top-acts">
        <div className="lk-top-acts__content">
          <div className="lk-top-acts__left">
            <ul className="tabs-def lk-top-acts__tabs">
              <li className="tabs-def__el active">
                Все
                <div className="tabs-def__point"></div>
              </li>
              <li className="tabs-def__el">
                С истекающим временем
                <div className="tabs-def__point"></div>
              </li>
            </ul>
            <div className="lk-top-acts__select select-def">
              <div className="select-def__top">
                <div className="select-def__val select-def__text">Все темы</div>
                <svg
                  className="select-def__arr"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" rx="10" fill="white" fillOpacity="0.1" />
                  <path
                    d="M6 8L9.98617 12L13.9723 8"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <ul className="select-def__dropdown">
                <li className="select-def__dropdown-el">5 мин</li>
                <li className="select-def__dropdown-el">10 мин</li>
                <li className="select-def__dropdown-el">15 мин</li>
              </ul>
            </div>
          </div>
          <div className="lk-top-acts__right">
            <div className="block-select">
              <div className="block-select__title">Напоминать за</div>
              <div className="select-def select-def_2">
                <div className="select-def__top">
                  <div className="select-def__val select-def__text">15 мин</div>
                  <svg
                    className="select-def__arr"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="20" rx="10" fill="#191B22" />
                    <path
                      d="M6 8L9.98617 12L13.9723 8"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <ul className="select-def__dropdown">
                  <li className="select-def__dropdown-el">5 мин</li>
                  <li className="select-def__dropdown-el">10 мин</li>
                  <li className="select-def__dropdown-el">15 мин</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-content">
        {orders.map((x, idx) => (
          <div className="block-content__el" key={idx}>
            <OrderCard {...x} />
          </div>
        ))}
      </div>
    </div>
  )
}
