import { ModalAccess, StatCard } from '@c/Dashboard'
import { UiLoader } from '@c/Ui'
import { SettingsSvg, TableCaretSvg } from '@c/Ui/Icons'
import dayjs from 'dayjs'

import { IStatOperatorDto } from '@/core/interface'

import { MobileFilter } from './Filter/MobileFilter'

export const DashboardStat: React.FC = () => {
  const { operators, loading } = useAppSelector((store) => store.statsStore)
  const { user } = useAppSelector((store) => store.sesionState)
  const dispatch = useAppDispatch()

  // table filter
  const [curFilter, setCurFilter] = useState({
    dir: 0,
    idx: 0,
  })

  const filtersAvailable = useMemo(() => {
    return [
      { label: 'Сегодня' },
      { label: 'Вчера' },
      { label: 'Эта неделя' },
      { label: 'Прошлая неделя' },
      { label: 'Всего' },
    ]
  }, [])

  const updateFilter = (idx: number) => {
    if (idx === curFilter.idx) {
      setCurFilter({ idx, dir: curFilter.dir ? 0 : 1 })
    } else {
      setCurFilter({ idx, dir: 0 })
    }
  }

  const operatorsFiltered = useMemo(() => {
    return [...operators].sort((a, b) => {
      let condition = a.stats.today < b.stats.today
      if (curFilter.idx === 1) {
        condition = a.stats.yesterday < b.stats.yesterday
      } else if (curFilter.idx === 2) {
        condition = a.stats.currentWeek < b.stats.currentWeek
      } else if (curFilter.idx === 3) {
        condition = a.stats.lastWeek < b.stats.lastWeek
      } else if (curFilter.idx === 4) {
        condition = a.stats.total < b.stats.total
      }

      if (curFilter.dir === 1) {
        return condition ? -1 : 1
      }

      return condition ? 1 : -1
    })
  }, [operators, curFilter])

  // stats
  const statsComputed = useMemo(() => {
    // compute
    const today = operators.reduce((acc, x) => acc + x.stats.today || 0, 0)
    const currentWeek = operators.reduce((acc, x) => acc + x.stats.currentWeek || 0, 0)
    const prevWeek = operators.reduce((acc, x) => acc + x.stats.lastWeek || 0, 0)

    // labels
    const curWeekDate = dayjs()
    const prevWeelDate = dayjs().subtract(1, 'week')
    const prev2WeelDate = dayjs().subtract(2, 'week')

    const currentWeekDate = {
      start: prevWeelDate.day(6).format('DD MMM'),
      end: curWeekDate.day(5).format('DD MMM'),
    }
    const prevWeekDate = {
      start: prev2WeelDate.day(6).format('DD MMM'),
      end: prevWeelDate.day(5).format('DD MMM'),
    }

    return [
      {
        label: 'Баланс',
        date: ``,
        value: formatPrice(user?.balance, 0) + ' ₽',
      },
      {
        label: 'Выполнено заказов за текущую рабочую неделю',
        date: `${currentWeekDate.start} ... ${currentWeekDate.end}`,
        value: formatPrice(currentWeek, 0),
      },
      {
        label: 'Выполнено заказов за предыдущую рабочую неделю',
        date: `${prevWeekDate.start} ... ${prevWeekDate.end}`,
        value: formatPrice(prevWeek, 0),
      },
      {
        label: 'Выполнено заказов за сегодня',
        date: `${curWeekDate.format('DD MMM')}`,
        value: formatPrice(today, 0),
      },
    ]
  }, [operators, user])

  // data hooks
  const { initialDataLoaded } = useDateUpdater({ storeThunk: getOperatorStatsService })

  return (
    <>
      <div className="lk-content__content">
        <div className="lk-top-info">
          <div className="lk-content__title title-def lk-top-info__el">
            Статистика
            <div
              className="lk-top-info__btn lk-top-info__btn_stat btn-modal"
              onClick={() => dispatch(setModal({ name: 'modal-stat' }))}
            >
              <SettingsSvg />
            </div>
          </div>
        </div>
        <div className="sec-stat">
          <div className="sec-stat__content">
            <div className="sec-stat__left">
              <div className="block-content">
                <UiLoader active={loading.list} theme={initialDataLoaded ? 'line' : 'page'} />

                <div className="acts-stat">
                  <div className="acts-stat__content">
                    {filtersAvailable.map((x, idx) => (
                      <div
                        key={idx}
                        onClick={() => updateFilter(idx)}
                        className={cns(
                          `acts-stat__el acts-stat__el_btn acts-stat__el_${idx + 1}`,
                          curFilter.idx === idx && 'active',
                          curFilter.dir === 1 && '_desc',
                        )}
                      >
                        {x.label}
                        {curFilter.idx === idx && <TableCaretSvg />}
                      </div>
                    ))}
                  </div>
                </div>

                {operatorsFiltered.map((operator) => (
                  <div className="block-content__el" key={operator.id}>
                    <StatCard {...operator} />
                  </div>
                ))}
              </div>
            </div>

            <div className="sec-stat__right">
              {statsComputed.map((x, idx) => (
                <div className="block-stat-info" key={idx}>
                  <div className="block-stat-info__title">{x.label}</div>
                  <div className="block-stat-info__text">{x.date}</div>
                  <div className="block-stat-info__bottom">
                    <div className="block-stat-info__count">
                      {/* <span className="block-stat-info__count-span">+354</span> */}
                      <span className="block-stat-info__count-text">{x.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ModalAccess />
      <MobileFilter />
    </>
  )
}
