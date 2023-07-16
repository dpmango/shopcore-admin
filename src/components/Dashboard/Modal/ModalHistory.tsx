import { toast } from 'react-toastify'

import { UiLoader, UiModal } from '@/components/Ui'
import { IOrderHistroyDto } from '@/core/interface'

import { ModalHead } from './Partials/ModalHead'

export const ModalHistory: React.FC = () => {
  const [historyList, setHistroyList] = useState<IOrderHistroyDto[]>([])
  const [loading, setLoading] = useState(true)

  const { modal, modalParams } = useAppSelector((store) => store.sesionState)

  const fetchHistroy = useCallback(async () => {
    setLoading(true)
    const { data, error } = await orderHistoryApi(modalParams.id)
    setLoading(false)

    if (data) setHistroyList(data)
    if (error) toast.error('Ошибка при получении данных. Попробуйте еще раз')
  }, [modalParams])

  useEffect(() => {
    if (modal === 'history' && modalParams.id) {
      fetchHistroy()
    } else {
      setHistroyList([])
    }
  }, [modal, modalParams])

  return (
    <UiModal name="history" modifier="history">
      <ModalHead title="История заказа" id={modalParams.id} created={modalParams.created} />

      <div className="modal-content__block">
        <UiLoader theme="inline" active={loading} throttleMs={50} />

        {historyList.map((x, idx) => (
          <div className="content-table-info" key={idx}>
            <div className="content-table-info__left">
              <div className="content-table-info__text">{dateToTimestamp(x.date)}</div>
              <div className="content-table-info__body">
                <div className="content-table-info__val">{x.info}</div>
                {x.reason && <div className="content-table-info__info">{x.reason}</div>}
              </div>
            </div>
            <div className="content-table-info__right">
              <div className="content-table-info__text">{secondsToStamp(x.waiting)}</div>
            </div>
          </div>
        ))}
      </div>
    </UiModal>
  )
}
