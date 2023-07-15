import { ContentName, ContentUser, HistoryBtn } from '@c/Dashboard/Atom'
import { SettingsSvg, StatsMobileSvg } from '@c/Ui/Icons'

import { IStatDetailsDto, IStatOperatorDto } from '@/core/interface/Stat'

interface IStatCardProps extends IStatOperatorDto {}

const StatRenderer: React.FC<{ title: string; stat: IStatDetailsDto; index: number | string }> = ({
  stat,
  title,
  index,
}) => (
  <div className={cns('info-stat stat-el__el', `stat-el__el_${index}`)}>
    <div className="info-stat__title">{title}</div>
    <div className="info-stat__count">
      {numberShorten(stat.value)}
      {stat.change && (
        <span className={cns(stat.change > 0 && '_plus')}>
          {stat.change > 0 ? '+' : '-'}
          {Math.abs(stat.change)}
        </span>
      )}
    </div>
  </div>
)
export const StatCard: React.FC<IStatCardProps> = ({ operator, id, stats }) => {
  const dispatch = useAppDispatch()

  return (
    <div className={cns('content-el stat-el', false && 'stat-el_green')} data-id={id}>
      <div className="stat-el__content">
        <div className="stat-el__block stat-el__block_1">
          {operator && (
            <ContentUser avatar={operator.avatar} title={operator.name} description={operator.id} />
          )}
        </div>

        <div className="stat-el__block stat-el__block_2">
          <StatRenderer title="Сегодня" stat={stats.today} index="1" />
          <StatRenderer title="Вчера" stat={stats.yesterday} index="2" />
          <StatRenderer title="Эта неделя" stat={stats.currentWeek} index="3" />
          <StatRenderer title="Прошлая неделя" stat={stats.lastWeek} index="3" />
          <StatRenderer title="Всего" stat={stats.total} index="3" />
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
