import { UiCheckbox, UiSelect } from '@c/Ui'
import { Dictionary } from 'lodash'

import { IChartConvertedDto, IOperatorStatDto } from '@/core/interface'

interface IFilterCore {
  recordsByTitle: Dictionary<IChartConvertedDto[]>
}

export const FilterCore: React.FC<IFilterCore> = ({ recordsByTitle }) => {
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

  return (
    <div className="block-checkboxes-2">
      {options.map((x, idx) => (
        <div className="block-checkboxes-2__el" key={idx}>
          <UiCheckbox
            baseName="checkbox-el-3"
            isChecked={false}
            counter={x.counter}
            onChange={() => null}
            data-style="--color: #f5d48b"
          >
            {x.title}
          </UiCheckbox>

          {/* <div className="stat-descrp">
            <div className="stat-descrp__el">
              <div className="stat-descrp__text">
                <span>43</span> в АФК
              </div>
            </div>
            <div className="stat-descrp__el">
              <div className="stat-descrp__text">
                <span>43</span> отказался
              </div>
            </div>
            <div className="stat-descrp__el">
              <div className="stat-descrp__text">
                <span>43</span> отменил
              </div>
            </div>
          </div> */}
        </div>
      ))}
    </div>
  )
}
