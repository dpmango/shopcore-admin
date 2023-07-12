import { UiCheckbox, UiSelect } from '@c/Ui'

export const FilterCore: React.FC = () => {
  return (
    <div className="block-checkboxes-2">
      <div className="block-checkboxes-2__el">
        <UiCheckbox
          baseName="checkbox-el-3"
          isChecked={false}
          counter={249}
          onChange={() => null}
          data-style="--color: #f5d48b"
        >
          Сделано заказов
        </UiCheckbox>

        <div className="stat-descrp">
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
        </div>
      </div>
      <div className="block-checkboxes-2__el">
        <UiCheckbox
          baseName="checkbox-el-3"
          isChecked={false}
          counter={34}
          onChange={() => null}
          data-style="--color: #683cc3"
        >
          Отправил в AFK
        </UiCheckbox>
      </div>
      <div className="block-checkboxes-2__el">
        <UiCheckbox
          baseName="checkbox-el-3"
          isChecked={false}
          counter={166}
          onChange={() => null}
          data-style="--color: #40eae5"
        >
          Отправил в Проблемные
        </UiCheckbox>
      </div>
      <div className="block-checkboxes-2__el">
        <UiCheckbox
          baseName="checkbox-el-3"
          isChecked={false}
          counter={4}
          onChange={() => null}
          data-style="--color: #11c471"
        >
          Отправил в Обратно
        </UiCheckbox>
      </div>
    </div>
  )
}
