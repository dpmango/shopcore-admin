import { FilterCore } from '@c/Dashboard/Stat/Filter/FilterCore'
import { UiSelect } from '@c/Ui'
import { BackArrowSvg, SettingsSvg } from '@c/Ui/Icons'
import { toast } from 'react-toastify'

import { IStatOperatorDetailsDto } from '@/core/interface'

import { ChartRenderer } from './Chart/ChartRenderer'
import { MobileFilterOperator } from './Filter/MobileFilterOperator'

export const DashboardStatOperator: React.FC = () => {
  const dispatch = useAppDispatch()
  const { modal, modalParams } = useAppSelector((store) => store.sesionState)

  const [operator, setOperator] = useState<IStatOperatorDetailsDto | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getOperatorDetails = async () => {
      setLoading(true)
      const { data } = await fetchOperatorApi({ id: modalParams.id })
      setLoading(false)

      if (!data?.permissions) {
        // @ts-ignore
        toast.error(data?.message || '')
      }
    }

    getOperatorDetails()
  }, [modal, modalParams.id])

  return (
    <>
      <div className="lk-content__content">
        <div className="stat-top-info">
          <div className="stat-top-info__acts">
            <a className="stat-top-info__prev prev-btn" href="#">
              <BackArrowSvg />
            </a>
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
              src="https://randomuser.me/api/portraits/men/74.jpg"
              alt=""
            />
            <div className="content-user-2__name">Жора</div>
            <div className="content-user-2__info">{operator?.operator.name}</div>
          </div>
          <div className="stat-top-info__info">
            <div className="stat-top-info__info-mob info-descrp">
              <div className="info-descrp__title">Номер</div>
              <div className="info-descrp__text">{operator?.operator.id}</div>
            </div>
            <div className="stat-top-info__info-block content-user-3">
              <div className="content-user-3__text">
                Закреплен <span>за менеджером</span>
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
                <li className="tabs-def__el active">Эффективность</li>
                <li className="tabs-def__el">Игры</li>
                <li className="tabs-def__el">Дополнительно</li>
              </ul>
              <UiSelect
                value={'range'}
                className={'lk-top-acts__select select-def_3'}
                options={[
                  { label: '22 июня ... 15 июня<', value: 'range' },
                  { label: 'B', value: 30 },
                  { label: 'C', value: 15 },
                ]}
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
                  <ChartRenderer />
                </div>
              </div>
              <div className="sec-chart__right">
                <FilterCore />
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileFilterOperator />
    </>
  )
}
