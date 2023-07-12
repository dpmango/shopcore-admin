import { UiModal, UiSelect } from '@/components/Ui'
import { CheckmarkCheckboxSvg } from '@/components/Ui/Icons'

export const ModalSettings: React.FC = () => {
  return (
    <UiModal name="modal-stat-mob" modifier="mob">
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
        <div className="block-checkboxes-2">
          <div className="block-checkboxes-2__el">
            <label className="checkbox-el-3" data-style="--color: #F5D48B;">
              <span className="checkbox-el-3__btn checkbox-def">
                <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
                <span className="checkbox-def__content">
                  <CheckmarkCheckboxSvg />
                </span>
              </span>
              <span className="checkbox-el-3__text">Сделано заказов</span>
              <span className="checkbox-el-3__text">249</span>
            </label>
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
            <label className="checkbox-el-3" data-style="--color: #683CC3;">
              <span className="checkbox-el-3__btn checkbox-def">
                <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
                <span className="checkbox-def__content">
                  <CheckmarkCheckboxSvg />
                </span>
              </span>
              <span className="checkbox-el-3__text">Отправил в AFK</span>
              <span className="checkbox-el-3__text">34</span>
            </label>
          </div>
          <div className="block-checkboxes-2__el">
            <label className="checkbox-el-3" data-style="--color: #40EAE5;">
              <span className="checkbox-el-3__btn checkbox-def">
                <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
                <span className="checkbox-def__content">
                  <CheckmarkCheckboxSvg />
                </span>
              </span>
              <span className="checkbox-el-3__text">Отправил в Проблемные</span>
              <span className="checkbox-el-3__text">166</span>
            </label>
          </div>
          <div className="block-checkboxes-2__el">
            <label className="checkbox-el-3" data-style="--color: #11C471;">
              <span className="checkbox-el-3__btn checkbox-def">
                <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
                <span className="checkbox-def__content">
                  <CheckmarkCheckboxSvg />
                </span>
              </span>
              <span className="checkbox-el-3__text">Отправил в Обратно</span>
              <span className="checkbox-el-3__text">4</span>
            </label>
          </div>
        </div>
      </div>
    </UiModal>
  )
}
