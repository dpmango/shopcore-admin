import { delay, min } from 'lodash'
import { toast } from 'react-toastify'

import { UiModal, UiSelect } from '@/components/Ui'

import { ModalHead } from './Partials/ModalHead'

export const ModalPostpone: React.FC = () => {
  const { modalParams } = useAppSelector((store) => store.sesionState)
  const dispatch = useAppDispatch()

  // const [delayPeriod, setDelayPeriod] = useState(120)
  const [delayHH, setDelayHH] = useState('')
  const [delayMM, setDelayMM] = useState('')
  const [comment, setComment] = useState('')

  const delayTotalMM = useMemo(() => {
    let total = 0

    if (isFinite(+delayHH)) {
      total += (+delayHH || 0) * 60
    }
    if (isFinite(+delayMM)) {
      total += +delayMM || 0
    }

    return total
  }, [delayHH, delayMM])

  const handleSubmit = async () => {
    console.log({ delayTotalMM })
    if (!isFinite(delayTotalMM) || delayTotalMM <= 0) {
      toast.error('Укажите на сколько отложить заказ')
      return
    }

    if (delayTotalMM >= 96 * 60) {
      toast.error('Отложить заказ можно не более чем на 96 часов')
      return
    }

    const { data, error } = await orderPostponeApi({
      id: modalParams.id,
      reason: comment,
      minutes: delayTotalMM,
    })
    if (error) {
      toast.error(`Ошибка, попробуйте снова`)
    } else {
      toast.success(data?.message)
      setDelayHH('')
      setDelayMM('')

      dispatch(closeModal())
    }
  }

  return (
    <UiModal name="postpone" modifier="postpone">
      <ModalHead title="Отложить заказ" id={modalParams.id} created={modalParams.created} />

      <div className="block-info modal-content__block">
        <div className="block-info__title">На сколько откладываем</div>

        {/* <UiSelect
          value={delayPeriod}
          widthLimiter={true}
          options={[
            { label: '2 дня', value: 2 * 24 * 60 },
            { label: '1 день', value: 24 * 60 },
            { label: '6 часов', value: 6 * 60 },
            { label: '2 часа', value: 120 },
            { label: '1 час', value: 60 },
            { label: '30 минут', value: 30 },
            { label: '15 минут', value: 15 },
            // { label: 'Указать свое', value: 0 },
          ]}
          onSelect={(v) => setDelayPeriod(v.value)}
        /> */}

        <div className="delay-input">
          <input
            className="modal-content__input"
            value={delayHH}
            onChange={(e) => setDelayHH(e.target.value)}
            type="number"
            min="1"
            max="96"
            placeholder="часов"
          />

          <input
            className="modal-content__input"
            value={delayMM}
            onChange={(e) => setDelayMM(e.target.value)}
            type="number"
            min="1"
            max="60"
            placeholder="минут"
          />
        </div>
      </div>
      <div className="block-info modal-content__block">
        <div className="block-info__title">Причина</div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="textarea-def"
        />
        <button className="btn-def-2 modal-content__btn" onClick={handleSubmit}>
          <span>Отложить</span>
        </button>
      </div>
    </UiModal>
  )
}
