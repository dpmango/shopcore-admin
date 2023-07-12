import { UiModal } from '@/components/Ui'
import { CheckmarkCheckboxSvg } from '@/components/Ui/Icons'

export const ModalAccess: React.FC = () => {
  return (
    <UiModal name="modal-access" modifier="access">
      <div className="modal-content__top">
        <div className="title-def modal-content__title">Доступ</div>
        <div className="text-def">Игры доступные оператору</div>
      </div>
      <div className="modal-content__block">
        <div className="block-checkboxes">
          <label className="block-checkboxes__el checkbox-el">
            <span className="checkbox-el__btn checkbox-def">
              <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
              <span className="checkbox-def__content">
                <CheckmarkCheckboxSvg />
              </span>
            </span>
            <span className="checkbox-el__text">Fortnite</span>
          </label>
          <label className="block-checkboxes__el checkbox-el">
            <span className="checkbox-el__btn checkbox-def">
              <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
              <span className="checkbox-def__content">
                <CheckmarkCheckboxSvg />
              </span>
            </span>
            <span className="checkbox-el__text">Fortnite</span>
          </label>
          <label className="block-checkboxes__el checkbox-el">
            <span className="checkbox-el__btn checkbox-def">
              <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
              <span className="checkbox-def__content">
                <CheckmarkCheckboxSvg />
              </span>
            </span>
            <span className="checkbox-el__text">Overwatch 2</span>
          </label>
          <label className="block-checkboxes__el checkbox-el">
            <span className="checkbox-el__btn checkbox-def">
              <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
              <span className="checkbox-def__content">
                <CheckmarkCheckboxSvg />
              </span>
            </span>
            <span className="checkbox-el__text">Overwatch 2</span>
          </label>
          <label className="block-checkboxes__el checkbox-el">
            <span className="checkbox-el__btn checkbox-def">
              <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
              <span className="checkbox-def__content">
                <CheckmarkCheckboxSvg />
              </span>
            </span>
            <span className="checkbox-el__text">Drawl stars, Crash Royale</span>
          </label>
          <label className="block-checkboxes__el checkbox-el">
            <span className="checkbox-el__btn checkbox-def">
              <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
              <span className="checkbox-def__content">
                <CheckmarkCheckboxSvg />
              </span>
            </span>
            <span className="checkbox-el__text">Drawl stars, Crash Royale</span>
          </label>
        </div>
        <button className="btn-def-2 modal-content__btn">
          <span>Сохранить</span>
        </button>
      </div>
    </UiModal>
  )
}
