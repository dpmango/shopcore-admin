import { UiModal } from '@/components/Ui'

export const ModalHistory: React.FC = () => {
  return (
    <UiModal name="modal-history" modifier="history">
      <div className="modal-content__top">
        <div className="title-def modal-content__title">История заказа</div>
        <div className="content-info-2">
          <span className="content-info-2__title">kajzlcbout</span>
          <span className="content-info-2__text">30 февраля 2023 в 15:43</span>
        </div>
      </div>
      <div className="modal-content__block">
        <div className="content-table-info">
          <div className="content-table-info__left">
            <div className="content-table-info__text">21 апреля 2023 в 15:43</div>
            <div className="content-table-info__body">
              <div className="content-table-info__val">Ben отправил в AFK</div>
            </div>
          </div>
          <div className="content-table-info__right">
            <div className="content-table-info__text">15 мин</div>
          </div>
        </div>

        <div className="content-table-info">
          <div className="content-table-info__left">
            <div className="content-table-info__text">21 апреля 2023 в 15:43</div>
            <div className="content-table-info__body">
              <div className="content-table-info__val">Александра отложила заказ</div>
              <div className="content-table-info__info">Не привязалась карта</div>
            </div>
          </div>
          <div className="content-table-info__right">
            <div className="content-table-info__text">15 мин</div>
          </div>
        </div>
      </div>
    </UiModal>
  )
}
