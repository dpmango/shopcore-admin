import { UiModal, UiSelect } from '@/components/Ui'

export const ModalSettings: React.FC = () => {
  return (
    <UiModal name="modal-stat" modifier="mob">
      <div className="modal-mob__top">
        <div className="title-def modal-mob__title">Настройка отображения статистики</div>
      </div>
      <div className="modal-mob__block">
        <div className="modal-mob__block-title">Сортировать</div>
        <UiSelect
          value={'today:asc'}
          className={'select-def_full'}
          options={[
            { label: 'За сегодня по убыванию', value: 'today:asc' },
            { label: 'B', value: 30 },
            { label: 'C', value: 15 },
          ]}
        />
      </div>
    </UiModal>
  )
}
