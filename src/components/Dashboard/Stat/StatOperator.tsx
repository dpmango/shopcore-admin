import { FilterCore } from '@c/Dashboard/Stat/Filter/FilterCore'
import { UiLoader, UiSelect } from '@c/Ui'
import { BackArrowSvg, SettingsSvg } from '@c/Ui/Icons'
import dayjs, { Dayjs } from 'dayjs'
import groupBy from 'lodash/groupBy'

import { ChartRenderer } from './Chart/ChartRenderer'
import { MobileFilterOperator } from './Filter/MobileFilterOperator'

export const DashboardStatOperator: React.FC = () => {
  const dispatch = useAppDispatch()
  const { loading, operator, stats } = useAppSelector((store) => store.statsStore)

  const [selectedPeriod, setSelectedPeriod] = useState('currentWeek')
  const params = useParams()

  // filter
  const curRange = useMemo(() => {
    let base = dayjs()
    if (selectedPeriod === 'lastWeek') {
      base = dayjs().subtract(1, 'week')
    } else if (selectedPeriod === 'last2Week') {
      base = dayjs().subtract(2, 'week')
    }

    const start = base.startOf('week')
    const end = base.endOf('week')

    return {
      from: start.format('DD.MM.YYYY'),
      to: end.format('DD.MM.YYYY'),
    }
  }, [selectedPeriod])

  const dateFilterOptions = useMemo(() => {
    const lastWeek = dayjs().subtract(1, 'week')
    const last2Week = dayjs().subtract(2, 'week')

    const toDDMM = (x: Dayjs) => {
      const start = x.startOf('week')
      const end = x.endOf('week')

      return `${start.format('DD MMM')} - ${end.format('DD MMM')}`
    }

    return [
      { label: toDDMM(dayjs()), value: 'currentWeek' },
      { label: toDDMM(lastWeek), value: 'lastWeek' },
      { label: toDDMM(last2Week), value: 'last2Week' },
    ]
  }, [])

  // Convert Dataset
  const recordsByTitle = useMemo(() => {
    if (!stats) return null
    const records = [] as { title: string; date: string; week: number; value: number }[]
    Object.keys(stats).forEach((x) => {
      const djs = dayjs(x, 'DD.MM.YYYY', true)
      const titlesDto = stats[x]

      Object.keys(titlesDto).forEach((title: string) => {
        records.push({
          title: title,
          date: djs.format('DD MM YYYY'),
          week: djs.day(),
          value: +titlesDto[title] || 0,
        })
      })
    })

    return groupBy(records, 'title')
  }, [stats])

  const thunkParams = useMemo(() => {
    return {
      ...curRange,
      id: params.id || '',
    }
  }, [params.id, curRange])

  const { initialDataLoaded } = useDateUpdater({
    storeThunk: getOperatorDetailsService,
    thunkParams,
  })

  return (
    <>
      <div className="lk-content__content">
        <div className="stat-top-info">
          <div className="stat-top-info__acts">
            <Link className="stat-top-info__prev prev-btn" to="/stats">
              <BackArrowSvg />
            </Link>
            <div className="stat-top-info__title">Статистика оператора</div>
            <button
              className="stat-top-info__btn btn-def-icon btn-modal"
              onClick={() => dispatch(setModal({ name: 'mobile-operator' }))}
            >
              <SettingsSvg />
            </button>
          </div>
          <div className="stat-top-info__user content-user-2">
            <img
              className="content-user-2__img"
              src={
                operator?.operator.avatar ||
                'https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=170x170&k=20&c=pVkxcoiVUlD0uOzasLU41qdrAQpT1B3vBfKSJQWuNq4='
              }
              alt={operator?.operator.name}
            />
            <div className="content-user-2__name">{operator?.operator.name}</div>
            <div className="content-user-2__info">{operator?.operator.position}</div>
          </div>
          <div className="stat-top-info__info">
            <div className="stat-top-info__info-mob info-descrp">
              <div className="info-descrp__title">Номер</div>
              <div className="info-descrp__text">{operator?.operator.id}</div>
            </div>
            <div className="stat-top-info__info-block content-user-3">
              <div className="content-user-3__text">
                ? Закреплен <span>за менеджером</span>
              </div>
              <div className="content-user-3__user">
                <img
                  className="content-user-3__img"
                  src="https://randomuser.me/api/portraits/men/74.jpg"
                  alt=""
                />
                <div className="content-user-3__name">Светлана</div>
              </div>
            </div>
          </div>
        </div>

        {/* кнопки */}
        <div className="lk-top-acts">
          <div className="lk-top-acts__content">
            <div className="lk-top-acts__left">
              <ul className="tabs-def lk-top-acts__tabs">
                <li className="tabs-def__el">Эффективность</li>
                <li className="tabs-def__el active">Игры</li>
                <li className="tabs-def__el">Дополнительно</li>
              </ul>
              <UiSelect
                value={selectedPeriod}
                className={'lk-top-acts__select select-def_3'}
                options={dateFilterOptions}
                onSelect={(v) => setSelectedPeriod(v.value)}
              />
            </div>
            <div className="lk-top-acts__right"></div>
          </div>
        </div>

        {/* график */}
        <div className="sec-chart">
          <div className="sec-chart__wrap">
            <div className="sec-chart__content">
              <div className="sec-chart__left">
                <div className="block-chart">
                  {recordsByTitle && <ChartRenderer recordsByTitle={recordsByTitle} />}

                  <UiLoader active={loading.stats} theme={initialDataLoaded ? 'line' : 'page'} />
                </div>
              </div>
              <div className="sec-chart__right">
                {recordsByTitle && <FilterCore recordsByTitle={recordsByTitle} />}
              </div>
            </div>
          </div>
        </div>
      </div>

      {recordsByTitle && (
        <MobileFilterOperator
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
          recordsByTitle={recordsByTitle}
          dateFilterOptions={dateFilterOptions}
        />
      )}
    </>
  )
}
