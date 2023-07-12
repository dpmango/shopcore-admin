import { ClockSvg, PointerSvg, WarningWhiteSvg } from '@c/Ui/Icons'

import { IOrderDto } from '@/core/interface/Orders'

interface IOrderCardProps extends IOrderDto {}

export const CancelCard: React.FC<IOrderCardProps> = ({ id, where, item, cooldown, created }) => {
  const dispatch = useAppDispatch()

  return (
    <div className="content-el cancel-el">
      <div className="cancel-el__content">
        <div className="cancel-el__block cancel-el__block_1">
          <div className="content-info cancel-el__info">
            <div className="content-info__title">kajzlcbout</div>
            <div className="content-info__date">30 февраля 2023 в 15:43</div>
          </div>
          <div className="content-name">
            <span className="content-name__title">Человек-паук из Эпицентра</span>
            <span className="content-name__mob">,</span>
            <span className="content-name__text">PlayStation</span>
          </div>
        </div>
        <div className="cancel-el__block cancel-el__block_2">
          <div className="cancel-el__userinfo">
            <div className="content-user">
              <img
                className="content-user__img"
                src="https://randomuser.me/api/portraits/men/74.jpg"
                alt=""
              />
              <div className="content-user__body">
                <div className="content-user__title">Светлана</div>
                <div className="content-user__text">Команда Harold</div>
              </div>
            </div>
            <div className="content-descrp-2">
              <div className="content-descrp-2__title">Был в работе</div>
              <div className="content-descrp-2__text">1 день 14 минут</div>
            </div>
          </div>
          <div className="content-btns">
            <div className="content-btns__btn btn-def">
              <PointerSvg />
              <span className="btn-def__text">45</span>
            </div>
            <div className="content-btns__btn btn-def">
              <ClockSvg />
              <span className="btn-def__text">45</span>
            </div>
            <div className="content-btns__btn btn-def">
              <WarningWhiteSvg />
              <span className="btn-def__text">9</span>
            </div>
            <div
              className="content-btns__btn btn-count btn-modal"
              onClick={() => dispatch(setModal({ name: 'modal-history' }))}
            >
              <div className="btn-count__left">История</div>
              <div className="btn-count__right">27</div>
            </div>
          </div>
        </div>
        <div className="cancel-el__block cancel-el__block_3">
          <div className="cancel-el__text text-def">
            Забанил бота, родительский контроль (который мы снять не можем), заблокирован Epic/PS,
            клиент уже перепривязывал Xbox и не имеет доступа к новым, случайно заказал, заказал
            второй набор, невозможность выполнить заказ сегодня (у клиента там привязаны левые
            почты, телефоны к которым нету доступа)
          </div>
        </div>
        <div className="cancel-el__block cancel-el__block_4">
          <button
            className="cancel-el__btnmob btn-count btn-modal"
            onClick={() => dispatch(setModal({ name: 'modal-history' }))}
          >
            <div className="btn-count__left">История</div>
            <div className="btn-count__right">27</div>
          </button>
          <button
            className="btn-def cancel-el__btn btn-modal"
            onClick={() => dispatch(setModal({ name: 'modal-confirm' }))}
          >
            <span className="btn-def__text">Подтвердить</span>
          </button>
        </div>
      </div>
    </div>
  )
}
