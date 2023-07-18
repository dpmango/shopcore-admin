import { ModalCancelConfirm, ModalHistory } from '@c/Dashboard'
import { UiLoader } from '@c/Ui'

import { CancelCard } from './CancelCard'

export const DashboardCancellations: React.FC = () => {
  const { cancellations, loading } = useAppSelector((store) => store.ordersState)

  const dispatch = useAppDispatch()

  // data hooks
  const { initialDataLoaded } = useDateUpdater({ storeThunk: getCancellationsService })

  return (
    <>
      <div className="lk-content__content">
        <div className="lk-top-info">
          <div className="lk-content__title title-def lk-top-info__el">
            Отмены
            <span className="count-text title-def__count title-def__count_mob">
              {loading.cancellation ? '-' : cancellations.length}
            </span>
          </div>
        </div>
        <div className="block-content">
          {cancellations.map((x, idx) => (
            <div className="block-content__el" key={idx}>
              <CancelCard {...x} />
            </div>
          ))}
        </div>
        <UiLoader active={loading.cancellation} theme={initialDataLoaded ? 'line' : 'page'} />
      </div>

      <ModalHistory />
      <ModalCancelConfirm />
    </>
  )
}
