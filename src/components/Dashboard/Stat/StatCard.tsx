import { ContentName, ContentUser, HistoryBtn } from '@c/Dashboard/Atom'
import { SettingsSvg, StatsMobileSvg } from '@c/Ui/Icons'

import { IStatDto } from '@/core/interface/Stat'

interface IStatCardProps extends IStatDto {}

export const StatCard: React.FC<IStatCardProps> = ({ operator }) => {
  const dispatch = useAppDispatch()

  return (
    <div className={cns('content-el stat-el', false && 'stat-el_green')}>
      <div className="stat-el__content">
        <div className="stat-el__block stat-el__block_1">
          {operator && (
            <ContentUser avatar={operator.avatar} title={operator.name} description={operator.id} />
          )}
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
              onClick={() => dispatch(setModal({ name: 'modal-access' }))}
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
