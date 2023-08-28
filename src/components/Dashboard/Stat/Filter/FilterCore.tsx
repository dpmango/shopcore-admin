import { UiCheckbox, UiSelect } from '@c/Ui'
import { Dictionary } from 'lodash'

import { IChartConvertedDto, IOperatorStatDto } from '@/core/interface'

interface IFilterCore {
  recordsByTitle: Dictionary<IChartConvertedDto[]>
}

export const FilterCore: React.FC<IFilterCore> = ({ recordsByTitle }) => {
  const dispatch = useAppDispatch()
  const { filter } = useAppSelector((store) => store.statsStore)

  const options = useMemo(() => {
    return Object.keys(recordsByTitle).map((x) => {
      const data = recordsByTitle[x]

      const counter = data.reduce((acc, x) => {
        acc = acc + x.value
        return acc
      }, 0)

      return {
        title: x,
        counter,
      }
    })
  }, [recordsByTitle])

  const handleToggle = useCallback(
    (val: string) => {
      if (filter.includes(val)) {
        dispatch(setFilterStat(filter.filter((x) => x !== val)))
      } else {
        dispatch(setFilterStat([...filter, val]))
      }
    },
    [filter],
  )

  return (
    <div className="block-checkboxes-2">
      {options.map((x, idx) => (
        <div className="block-checkboxes-2__el" key={idx}>
          <UiCheckbox
            baseName="checkbox-el-3"
            isChecked={filter.includes(x.title)}
            counter={x.counter}
            onChange={() => handleToggle(x.title)}
            data-style="--color: #f5d48b"
          >
            {x.title}
          </UiCheckbox>
        </div>
      ))}
    </div>
  )
}
