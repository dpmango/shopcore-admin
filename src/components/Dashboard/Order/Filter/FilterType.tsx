import { UiCheckbox, UiSelect } from '@/components/Ui'

interface IFilterTypeProps {
  name: string
  baseName?: string
}

export const FilterType: React.FC<IFilterTypeProps> = ({ name, baseName }) => {
  const { orders, filter } = useAppSelector((store) => store.ordersState)
  const dispatch = useAppDispatch()

  return (
    <>
      <UiCheckbox
        className={name}
        baseName={baseName}
        isChecked={filter.type === 'afk'}
        onChange={() => dispatch(setFilter({ type: 'afk' }))}
      >
        AFK
      </UiCheckbox>
      <UiCheckbox
        className={name}
        baseName={baseName}
        isChecked={filter.type === 'work'}
        onChange={() => dispatch(setFilter({ type: 'work' }))}
      >
        В работе
      </UiCheckbox>
      <UiCheckbox
        className={name}
        baseName={baseName}
        isChecked={filter.type === 'problem'}
        onChange={() => dispatch(setFilter({ type: 'problem' }))}
      >
        Проблемные
      </UiCheckbox>
    </>
  )
}
