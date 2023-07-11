import {
  CancelationsSvg,
  NotificationSvg,
  OrdersSvg,
  StatsSvg,
  ThemeDark,
  ThemeLight,
} from '@c/Ui/Icons'

export const DashboardSidebar: React.FC = () => {
  const { user } = useAppSelector((state) => state.chatState)
  const dispatch = useAppDispatch()

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

  const timer: { current: NodeJS.Timeout | null } = useRef(null)
  useEffect(() => {
    const initialRequests = async () => {
      await dispatch(getUserService())
    }

    const $html = document.querySelector('html')
    if (localStorageGet('theme') === 'dark') {
      $html?.classList.remove('light')
    } else {
      $html?.classList.add('light')
    }

    initialRequests()

    // timer.current = setInterval(
    //   () => {
    //     dispatch(getChatListService())
    //   },
    //   1 * 60 * 1000 * import.meta.env.VITE_APP_TRASEHOLD,
    // )

    // return () => {
    //   clearInterval(timer.current as NodeJS.Timeout)
    // }
  }, [])

  return (
    <div className="lk-content__sidebar sidebar">
      <div className="sidebar__content">
        <div className="sidebar__top">
          <div className="sidebar__logo logo-def">SC</div>
        </div>
        <div className="sidebar__middle">
          <ul className="links-def">
            <li className="links-def__el active">
              <NavLink className="links-def__link" to="/">
                <OrdersSvg />
              </NavLink>
            </li>
            <li className="links-def__el">
              <NavLink className="links-def__link" to="/cancellations">
                <CancelationsSvg />
              </NavLink>
            </li>
            <li className="links-def__el">
              <NavLink className="links-def__link" to="/notifications">
                <NotificationSvg />
              </NavLink>
            </li>
            <li className="links-def__el">
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
