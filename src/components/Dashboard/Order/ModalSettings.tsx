import { CheckmarkCheckboxSvg } from '@c/Ui/Icons'

import { UiModal, UiSelect } from '@/components/Ui'

export const ModalOrderSettings: React.FC = () => {
  return (
    <UiModal name="modal-settings" modifier="mob">
      <div className="modal-mob__top">
        <div className="title-def modal-mob__title">
          Настройка
          <br />
          отображения заказов
        </div>
      </div>
      <div className="modal-mob__block">
        <div className="modal-mob__block-title">Отображать</div>
        <label className="checkbox-el-2">
          <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
          <div className="checkbox-el-2__dec"></div>
          <span className="checkbox-el-2__btn checkbox-def">
            <span className="checkbox-def__content">
              <CheckmarkCheckboxSvg />
            </span>
          </span>
          <span className="checkbox-el-2__text">AFK</span>
        </label>
        <label className="checkbox-el-2">
          <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
          <div className="checkbox-el-2__dec"></div>
          <span className="checkbox-el-2__btn checkbox-def">
            <span className="checkbox-def__content">
              <CheckmarkCheckboxSvg />
            </span>
          </span>
          <span className="checkbox-el-2__text">В работе</span>
        </label>
        <label className="checkbox-el-2">
          <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
          <div className="checkbox-el-2__dec"></div>
          <span className="checkbox-el-2__btn checkbox-def">
            <span className="checkbox-def__content">
              <CheckmarkCheckboxSvg />
            </span>
          </span>
          <span className="checkbox-el-2__text">Проблемные</span>
        </label>
      </div>
      <div className="modal-mob__block">
        <div className="modal-mob__block-title">Напоминать за</div>
        <UiSelect
          value={15}
          className="select-def_full"
          options={[
            { label: '15 минут', value: 15 },
            { label: '10 минут', value: 10 },
            { label: '5 минут', value: 5 },
          ]}
        />
      </div>
    </UiModal>
  )
}
