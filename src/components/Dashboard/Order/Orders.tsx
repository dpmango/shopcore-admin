import { ModalHistory, ModalPostpone, OrderCard } from '@c/Dashboard'
import { CheckmarkCheckboxSvg, SettingsSvg } from '@c/Ui/Icons'
import dayjs from 'dayjs'

import { UiLoader, UiSelect } from '@/components/Ui'

import { FilterType } from './Filter/FilterType'
import { MobileFilter } from './Filter/MobileFilter'

export const DashboardOrders: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all')
  const { loading, orders, filter } = useAppSelector((store) => store.ordersState)
  const dispatch = useAppDispatch()

  // data hooks
  const { initialDataLoaded } = useDateUpdater({ storeThunk: getOrdersService })

  const ordersFiltered = useMemo(() => {
    if (activeTab === 'hot') {
      return orders
        .filter((x) => {
          const cooldownDjs = dayjs.unix(x.cooldown).unix()
          const fromnow = dayjs().unix()
          const diffMM = (fromnow - cooldownDjs) / 60
          return diffMM < 0 && diffMM >= -15
        })
        .sort((a, b) => (a.cooldown < b.cooldown ? -1 : 1))
    }

    return orders
  }, [orders, activeTab])

  return (
    <>
      <div className="lk-content__content">
        <div className="lk-top-info">
          <div className="lk-content__title title-def lk-top-info__el">
            Заказы
            <span className="count-text title-def__count">
              {loading.orders ? '-' : ordersFiltered.length}
            </span>
            <div
              className="lk-top-info__btn btn-modal"
              onClick={() => dispatch(setModal({ name: 'modal-settings' }))}
            >
              <SettingsSvg />
            </div>
          </div>
          <FilterType name="lk-top-info__el" />
        </div>
        <div className="lk-top-acts">
          <div className="lk-top-acts__content">
            <div className="lk-top-acts__left">
              <ul className="tabs-def lk-top-acts__tabs">
                <li
                  className={cns('tabs-def__el ', activeTab === 'all' && 'active')}
                  onClick={() => setActiveTab('all')}
                >
                  Все
                  <div className="tabs-def__point"></div>
                </li>
                <li
                  className={cns('tabs-def__el ', activeTab === 'hot' && 'active')}
                  onClick={() => setActiveTab('hot')}
                >
                  С истекающим временем
                  <div className="tabs-def__point"></div>
                </li>
              </ul>
              <UiSelect
                value={'all'}
                className="lk-top-acts__select"
                options={[
                  { label: 'Все темы', value: 'all' },
                  { label: '10 минут', value: 10 },
                  { label: '5 минут', value: 5 },
                ]}
              />
            </div>
            <div className="lk-top-acts__right">
              <div className="block-select">
                <div className="block-select__title">Напоминать за</div>
                <UiSelect
                  value={15}
                  className="select-def_2"
                  options={[
                    { label: '15 минут', value: 15 },
                    { label: '10 минут', value: 10 },
                    { label: '5 минут', value: 5 },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="block-content">
          {ordersFiltered.map((x, idx) => (
            <div className="block-content__el" key={idx}>
              <OrderCard {...x} />
            </div>
          ))}
        </div>
        <UiLoader active={loading.orders} theme={initialDataLoaded ? 'line' : 'page'} />
      </div>

      <ModalHistory />
      <ModalPostpone />
      <MobileFilter />
    </>
  )
}
