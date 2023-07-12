import { UiCheckbox, UiSelect } from '@/components/Ui'

interface IFilterTypeProps {
  name: string
  baseName?: string
}

export const FilterType: React.FC<IFilterTypeProps> = ({ name, baseName }) => {
  const { filter } = useAppSelector((store) => store.ordersState)
  const dispatch = useAppDispatch()

  const changeFilter = useCallback(
    (type: 'afk' | 'work' | 'problem') => {
      dispatch(setFilter({ type: filter.type === type ? null : type }))
      dispatch(getOrdersService())
    },
    [filter.type],
  )

  return (
    <>
      <UiCheckbox
        className={name}
        baseName={baseName}
        isChecked={filter.type === 'afk'}
        onChange={() => changeFilter('afk')}
      >
        AFK
      </UiCheckbox>
      <UiCheckbox
        className={name}
        baseName={baseName}
        isChecked={filter.type === 'work'}
        onChange={() => changeFilter('work')}
      >
        В работе
      </UiCheckbox>
      <UiCheckbox
        className={name}
        baseName={baseName}
        isChecked={filter.type === 'problem'}
        onChange={() => changeFilter('problem')}
      >
        Проблемные
      </UiCheckbox>
    </>
  )
}
