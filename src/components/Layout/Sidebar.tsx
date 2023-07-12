import {
  CancelationsSvg,
  NotificationSvg,
  OrdersSvg,
  StatsSvg,
  ThemeDark,
  ThemeLight,
} from '@c/Ui/Icons'
import { useWindowSize } from '@uidotdev/usehooks'
import cns from 'classnames'

export const LayoutSidebar: React.FC = () => {
  const { user } = useAppSelector((state) => state.sesionState)
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const { width } = useWindowSize()

  const { toggleTheme, setInitialTheme } = useTheme()

  useEffect(() => {
    setInitialTheme()
    dispatch(getUserService())
  }, [])

  return (
    <div className="lk-content__sidebar sidebar">
      <div className="sidebar__content">
        <div className="sidebar__top">
          <div className="sidebar__logo logo-def">SC</div>
        </div>
        <div className="sidebar__middle">
          <ul className="links-def">
            {width <= 768 ? (
              <li className={cns('links-def__el active')}>
                <a
                  className="links-def__link"
                  href="#"
                  onClick={() => dispatch(setModal('mobile-menu'))}
                >
                  <OrdersSvg />
                </a>
              </li>
            ) : (
              <li className={cns('links-def__el', pathname === '/' && 'active')}>
                <NavLink className="links-def__link" to="/">
                  <OrdersSvg />
                </NavLink>
              </li>
            )}

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
