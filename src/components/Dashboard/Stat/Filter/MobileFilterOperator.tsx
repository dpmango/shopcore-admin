import { FilterCore } from '@c/Dashboard/Stat/Filter/FilterCore'

import { UiCheckbox, UiModal, UiSelect } from '@/components/Ui'
import { CheckmarkCheckboxSvg } from '@/components/Ui/Icons'

export const MobileFilterOperator: React.FC = () => {
  return (
    <UiModal name="mobile-operator" modifier="mob">
      <div className="modal-mob__top">
        <div className="title-def modal-mob__title">
          Настройка
          <br />
          отображения
          <br />
          статистики
        </div>
      </div>
      <div className="modal-mob__block">
        <div className="modal-mob__block-title">Период</div>
        <UiSelect
          value={'range'}
          className={'select-def_full'}
          options={[
            { label: '2 часа', value: 'range' },
            { label: '30 минут', value: 30 },
            { label: '15 минут', value: 15 },
          ]}
        />
      </div>
      <div className="modal-mob__block">
        <div className="modal-mob__block-title">Отображаемые данные</div>
        <FilterCore />
      </div>
    </UiModal>
  )
}
