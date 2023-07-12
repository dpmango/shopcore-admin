import { UiModal, UiSelect } from '@/components/Ui'

export const ModalPostpone: React.FC = () => {
  return (
    <UiModal name="modal-postpone" modifier="postpone">
      <div className="modal-content__top">
        <div className="title-def modal-content__title">Отложить заказ</div>
        <div className="content-info-2">
          <span className="content-info-2__title">kajzlcbout</span>
          <span className="content-info-2__text">30 февраля 2023 в 15:43</span>
        </div>
      </div>
      <div className="block-info modal-content__block">
        <div className="block-info__title">На сколько откладываем</div>

        <UiSelect
          value={120}
          widthLimiter={true}
          options={[
            { label: '2 часа', value: 120 },
            { label: '30 минут', value: 30 },
            { label: '15 минут', value: 15 },
          ]}
        />
      </div>
      <div className="block-info modal-content__block">
        <div className="block-info__title">Причина</div>
        <textarea className="textarea-def">Не привязывается карта</textarea>
        <button className="btn-def-2 modal-content__btn">
          <span>Отложить</span>
        </button>
      </div>
    </UiModal>
  )
}
