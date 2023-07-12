import { CheckmarkCheckboxSvg } from '@c/Ui/Icons'

import { UiCheckbox, UiModal, UiSelect } from '@/components/Ui'

import { FilterType } from './FilterType'

export const MobileFilter: React.FC = () => {
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
        <FilterType name="" baseName="checkbox-el-2" />
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
