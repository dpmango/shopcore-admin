import { FilterCore } from '@c/Dashboard/Stat/Filter/FilterCore'
import { Dictionary } from 'lodash'

import { UiModal, UiSelect } from '@/components/Ui'
import { IChartConvertedDto } from '@/core/interface'

interface IMobileFilterOperator {
  recordsByTitle: Dictionary<IChartConvertedDto[]>
  selectedPeriod: string
  setSelectedPeriod: React.Dispatch<React.SetStateAction<string>>
  dateFilterOptions: {
    label: string
    value: string
  }[]
}

export const MobileFilterOperator: React.FC<IMobileFilterOperator> = ({
  recordsByTitle,
  selectedPeriod,
  setSelectedPeriod,
  dateFilterOptions,
}) => {
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
          value={selectedPeriod}
          className={'select-def_full'}
          options={dateFilterOptions}
          onSelect={(v) => setSelectedPeriod(v.value)}
        />
      </div>
      <div className="modal-mob__block">
        <div className="modal-mob__block-title">Отображаемые данные</div>
        {recordsByTitle && <FilterCore recordsByTitle={recordsByTitle} />}
      </div>
    </UiModal>
  )
}
