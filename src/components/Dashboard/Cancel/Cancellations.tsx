import { ModalCancelConfirm, ModalHistory } from '@c/Dashboard'
import cns from 'classnames'

import { CancelCard } from './CancelCard'

export const DashboardCancellations: React.FC = () => {
  const { orders, filter } = useAppSelector((store) => store.ordersState)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="lk-content__content">
        <div className="lk-top-info">
          <div className="lk-content__title title-def lk-top-info__el">
            Отмены
            <span className="count-text title-def__count title-def__count_mob">
              {111 || orders.length}
            </span>
          </div>
        </div>
        <div className="block-content">
          {/* {orders.map((x, idx) => (
            <div className="block-content__el" key={idx}>
              <CancelCard {...x} />
            </div>
          ))} */}
        </div>
      </div>

      <ModalHistory />
      <ModalCancelConfirm />
    </>
  )
}
