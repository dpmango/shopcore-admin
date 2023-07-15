import { UiModal, UiSelect } from '@/components/Ui'

import { ModalHead } from './Partials/ModalHead'

export const ModalPostpone: React.FC = () => {
  const { modalParams } = useAppSelector((store) => store.sesionState)

  const [delayPeriod, setDelayPeriod] = useState(120)
  const [comment, setComment] = useState('')

  const handleSubmit = async () => {
    await orderPostproneApi({ id: modalParams.id, reason: comment, minutes: delayPeriod })
  }

  return (
    <UiModal name="postpone" modifier="postpone">
      <ModalHead title="Отложить заказ" id={modalParams.id} created={modalParams.create} />

      <div className="block-info modal-content__block">
        <div className="block-info__title">На сколько откладываем</div>

        <UiSelect
          value={delayPeriod}
          widthLimiter={true}
          options={[
            { label: '2 часа', value: 120 },
            { label: '30 минут', value: 30 },
            { label: '15 минут', value: 15 },
          ]}
          onSelect={(v) => setDelayPeriod(v.value)}
        />
      </div>
      <div className="block-info modal-content__block">
        <div className="block-info__title">Причина</div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="textarea-def"
        ></textarea>
        <button className="btn-def-2 modal-content__btn" onClick={handleSubmit}>
          <span>Отложить</span>
        </button>
      </div>
    </UiModal>
  )
}
