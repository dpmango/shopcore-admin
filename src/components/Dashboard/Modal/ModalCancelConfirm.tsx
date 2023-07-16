import { DislikeSvg, LikeSvg } from '@c/Ui/Icons'

import { UiModal } from '@/components/Ui'

import { ModalHead } from './Partials/ModalHead'

export const ModalCancelConfirm: React.FC = () => {
  const { modal, modalParams } = useAppSelector((store) => store.sesionState)

  // useEffect(() => {
  //   if (modal === 'history' && modalParams.id) {
  //   }
  // }, [modal, modalParams])

  return (
    <UiModal name="confirm-cancel" modifier="confirm">
      <ModalHead
        title="Подтвердить отмену заказа"
        id={modalParams.id}
        created={modalParams.created}
      />

      <div className="modal-content__block">
        <div className="estimation-btns">
          <label className="estimation-btns__btn estimation-btn">
            <input className="estimation-btn__inp" type="radio" name="order" />
            <div className="estimation-btn__dec">
              <LikeSvg />
            </div>
          </label>
          <label className="estimation-btns__btn estimation-btn estimation-btn_red">
            <input className="estimation-btn__inp" type="radio" name="order" />
            <div className="estimation-btn__dec">
              <DislikeSvg />
            </div>
          </label>
        </div>
      </div>
      <div className="modal-content__block block-info">
        <div className="block-info__title2">Ваша причина отмены (не обязательно)</div>
        <div className="block-info__text">
          Укажите свою причину отмены, если оператор указал неверную.
        </div>
        <textarea className="textarea-def">Не привязывается карта</textarea>
        <button className="btn-def-2 modal-content__btn">
          <span>Подтвердить</span>
        </button>
      </div>
    </UiModal>
  )
}
