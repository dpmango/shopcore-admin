import {
  CancelationsSvg,
  NotificationSvg,
  OrdersSvg,
  StatsSvg,
  ThemeDark,
  ThemeLight,
} from '@c/Ui/Icons'
import cns from 'classnames'

export const LayoutSidebar: React.FC = () => {
  const { user } = useAppSelector((state) => state.sesionState)
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()

  const toggleTheme = useCallback(() => {
    const $html = document.querySelector('html')
    $html?.classList.toggle('light')

    if (localStorageGet('theme') === 'light') {
      localStorageSet('theme', 'dark')
    } else {
      localStorageSet('theme', 'light')
    }
    // TODO + plus charts charts js colors
  }, [])

  useEffect(() => {
    const $html = document.querySelector('html')
    if (localStorageGet('theme') === 'dark') {
      $html?.classList.remove('light')
    } else {
      $html?.classList.add('light')
    }

    dispatch(getUserService())
  }, [])

  // $('.sidebar .links-def__link').on('click', function () {
  //   if ($(window).width() <= 768) {
  //     $('#modal-menu').fadeIn(300)
  //     _this.setNoscroll()
  //     return false
  //   }
  // })

  return (
    <div className="lk-content__sidebar sidebar">
      <div className="sidebar__content">
        <div className="sidebar__top">
          <div className="sidebar__logo logo-def">SC</div>
        </div>
        <div className="sidebar__middle">
          <ul className="links-def">
            <li className={cns('links-def__el', pathname === '/' && 'active')}>
              <NavLink className="links-def__link" to="/">
                <OrdersSvg />
              </NavLink>
            </li>
            <li className={cns('links-def__el', pathname === '/cancellations' && 'active')}>
              <NavLink className="links-def__link" to="/cancellations">
                <CancelationsSvg />
              </NavLink>
            </li>
            <li className={cns('links-def__el', pathname === '/notifications' && 'active')}>
              <NavLink className="links-def__link" to="/notifications">
                <NotificationSvg />
              </NavLink>
            </li>
            <li className={cns('links-def__el', pathname === '/stats' && 'active')}>
              <NavLink className="links-def__link" to="/stats">
                <StatsSvg />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebar__title">ShopCore</div>
        <div className="sidebar__footer">
          <div className="theme-btn" onClick={toggleTheme}>
            <ThemeLight />
            <ThemeDark />
          </div>
          <div className="sidebar__profile profile-def">
            <img className="profile-def__img" src={user?.telegramPhotoURL} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
