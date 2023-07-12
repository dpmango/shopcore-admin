import {
  CancelationsMobileSvg,
  NotificationMobileSvg,
  OrdersMobileSvg,
  StatsMobileSvg,
  ThemeDark,
  ThemeLight,
} from '@c/Ui/Icons'

import { UiModal } from '@/components/Ui'

export const ModalMenu: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const dispatch = useAppDispatch()

  const handleMenuClick = () => {
    dispatch(closeModal())
  }

  return (
    <UiModal name="mobile-menu" modifier="mob">
      <div className="modal-mob__top">
        <div className="title-def modal-mob__title">Меню</div>
      </div>
      <ul className="links-def-mob" onClick={handleMenuClick}>
        <li className="links-def-mob__el active">
          <NavLink className="links-def-mob__link" to="/">
            <div className="links-def-mob__icon">
              <OrdersMobileSvg />
            </div>
            Заказы
          </NavLink>
        </li>
        <li className="links-def-mob__el">
          <NavLink className="links-def-mob__link" to="/cancellations">
            <div className="links-def-mob__icon">
              <CancelationsMobileSvg />
            </div>
            Отмены
          </NavLink>
        </li>
        <li className="links-def-mob__el">
          <NavLink className="links-def-mob__link" to="/notifications">
            <div className="links-def-mob__icon">
              <NotificationMobileSvg />
            </div>
            Уведомления
          </NavLink>
        </li>
        <li className="links-def-mob__el">
          <NavLink className="links-def-mob__link" to="/stats">
            <div className="links-def-mob__icon">
              <StatsMobileSvg />
            </div>
            Статистика
          </NavLink>
        </li>
        <li className="links-def-mob__el">
          {theme === 'dark' ? (
            <a className="links-def-mob__link" onClick={toggleTheme}>
              <div className="links-def-mob__icon">
                <ThemeLight />
              </div>
              Дневная тема
            </a>
          ) : (
            <a className="links-def-mob__link" onClick={toggleTheme}>
              <div className="links-def-mob__icon">
                <ThemeDark />
              </div>
              Ночная тема
            </a>
          )}
        </li>
      </ul>
    </UiModal>
  )
}
