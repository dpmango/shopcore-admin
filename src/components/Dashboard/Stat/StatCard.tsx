import { SettingsSvg, StatsMobileSvg } from '@c/Ui/Icons'
import cns from 'classnames'

export const StatCard: React.FC = () => {
  const dispatch = useAppDispatch()

  return (
    <div className={cns('content-el stat-el', false && 'stat-el_green')}>
      <div className="stat-el__content">
        <div className="stat-el__block stat-el__block_1">
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
        <div className="stat-el__block stat-el__block_2">
          <div className="info-stat stat-el__el stat-el__el_1">
            <div className="info-stat__title">Сегодня</div>
            <div className="info-stat__count">43</div>
          </div>
          <div className="info-stat stat-el__el stat-el__el_2">
            <div className="info-stat__title">Вчера</div>
            <div className="info-stat__count">40</div>
          </div>
          <div className="info-stat stat-el__el stat-el__el_3">
            <div className="info-stat__title">Эта неделя</div>
            <div className="info-stat__count">
              400<span>-27</span>
            </div>
          </div>
          <div className="info-stat stat-el__el stat-el__el_4">
            <div className="info-stat__title">Прошлая неделя</div>
            <div className="info-stat__count">427</div>
          </div>
          <div className="info-stat stat-el__el stat-el__el_5">
            <div className="info-stat__title">Всего</div>
            <div className="info-stat__count">2,76 млн</div>
          </div>
        </div>
        <div className="stat-el__block stat-el__block_3">
          <div className="content-btns">
            <Link to="/stats/1" className="content-btns__btn btn-def">
              <StatsMobileSvg className="btn-def__icon" />
              <span className="btn-def__text">Статистика</span>
            </Link>
            <button
              className="content-btns__btn btn-def btn-modal"
              onClick={() => dispatch(setModal('modal-access'))}
            >
              <SettingsSvg className="btn-def__icon" />

              <span className="btn-def__text">Доступ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
