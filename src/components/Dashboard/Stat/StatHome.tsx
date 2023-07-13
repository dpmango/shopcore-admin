import { ModalAccess, StatCard } from '@c/Dashboard'
import { SettingsSvg, TableCaretSvg } from '@c/Ui/Icons'
import cns from 'classnames'

import { MobileFilter } from './Filter/MobileFilter'

export const DashboardStat: React.FC = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="lk-content__content">
        <div className="lk-top-info">
          <div className="lk-content__title title-def lk-top-info__el">
            Статистика
            <div
              className="lk-top-info__btn lk-top-info__btn_stat btn-modal"
              onClick={() => dispatch(setModal({ name: 'modal-stat' }))}
            >
              <SettingsSvg />
            </div>
          </div>
        </div>
        <div className="sec-stat">
          <div className="sec-stat__content">
            <div className="sec-stat__left">
              <div className="block-content">
                <div className="acts-stat">
                  <div className="acts-stat__content">
                    <div className="acts-stat__el acts-stat__el_btn acts-stat__el_1 active">
                      Сегодня
                      <TableCaretSvg />
                    </div>
                    <div className="acts-stat__el acts-stat__el_2">Вчера</div>
                    <div className="acts-stat__el acts-stat__el_btn acts-stat__el_3 active">
                      Эта неделя
                      <TableCaretSvg />
                    </div>
                    <div className="acts-stat__el acts-stat__el_4">Прошлая неделя</div>
                    <div className="acts-stat__el acts-stat__el_5">Всего</div>
                  </div>
                </div>

                <div className="block-content__el">
                  <StatCard />
                </div>
              </div>
            </div>

            <div className="sec-stat__right">
              <div className="block-stat-info">
                <div className="block-stat-info__title">
                  Выполнено заказов за текущую рабочую неделю
                </div>
                <div className="block-stat-info__text">10 июня ... 16 июня</div>
                <div className="block-stat-info__bottom">
                  <div className="block-stat-info__count">
                    <span className="block-stat-info__count-span">+354</span>
                    <span className="block-stat-info__count-text">86 541</span>
                  </div>
                </div>
              </div>

              <div className="block-stat-info">
                <div className="block-stat-info__title">
                  Выполнено заказов за предыдущую рабочую неделю
                </div>
                <div className="block-stat-info__text">10 июня ... 16 июня</div>
                <div className="block-stat-info__bottom">
                  <div className="block-stat-info__count">
                    <span className="block-stat-info__count-text">86 541</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalAccess />
      <MobileFilter />
    </>
  )
}