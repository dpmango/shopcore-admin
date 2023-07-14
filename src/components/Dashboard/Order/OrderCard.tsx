import { PointerSvg, TelegramBlueSvg, WarningSvg } from '@c/Ui/Icons'

import { IOrderDto } from '@/core/interface/Orders'

interface IOrderCardProps extends IOrderDto {}

export const OrderCard: React.FC<IOrderCardProps> = ({
  id,
  where,
  item,
  cooldown,
  created,
  historyCount,
  problemCount,
}) => {
  const dispatch = useAppDispatch()

  return (
    <div className="order-el content-el">
      <div className="order-el__content">
        <div className="order-el__block order-el__block_1">
          <div className="content-info">
            <div className="content-info__title">
              {id}
              <TelegramBlueSvg />
            </div>
            <div className="content-info__date">{dateToTimestamp(created)}</div>
          </div>
        </div>
        <div className="order-el__block order-el__block_2">
          <div className="content-name">
            <span className="content-name__title">{item.name}</span>
            <span className="content-name__mob">,</span>
            <span className="content-name__text">{item.type}</span>
          </div>
        </div>
        <div className="order-el__block order-el__block_3">
          <div className="content-user">
            <img
              className="content-user__img"
              src="https://randomuser.me/api/portraits/men/74.jpg"
              alt=""
            />
            <div className="content-user__body">
              <div className="content-user__title">{where.name}</div>
              <div className="content-user__text">{dateAgo(where.time)}</div>
            </div>
          </div>
        </div>
        <div className="order-el__block order-el__block_4">
          <div className="content-btns">
            <div className="content-btns__btn btn-def">
              <PointerSvg />
              <span className="btn-def__text">{historyCount}</span>
            </div>
            <div className="content-btns__btn btn-def btn-def_red">
              <WarningSvg className="btn-def__icon" />
              <span className="btn-def__text">{problemCount}</span>
            </div>
            <div
              className={cns(
                'content-btns__btn btn-count btn-modal',
                historyCount < 1 && '_disabled',
              )}
              onClick={() =>
                historyCount > 0 && dispatch(setModal({ name: 'history', params: { id, created } }))
              }
            >
              <div className="btn-count__left">История</div>
              <div className="btn-count__right">{historyCount}</div>
            </div>
          </div>
        </div>
        <div className="order-el__block order-el__block_5">
          <div className="content-descrp">
            <div className="content-descrp__top">
              <span className="content-descrp__title">Cooldown </span>
              <span className="content-descrp__val">{dateAgo(cooldown)}</span>
            </div>
            <div className="content-descrp__text">
              <span className="content-descrp__title">Ожидает </span>
              <span className="content-descrp__val">{dateAgo(created)}</span>
            </div>
          </div>
        </div>
        <div className="order-el__block order-el__block_6">
          <div
            className="btn-count btn-modal"
            onClick={() => dispatch(setModal({ name: 'modal-postpone', params: { id, created } }))}
          >
            <div className="btn-count__left">Отложить</div>
            <div className="btn-count__right">0</div>
          </div>
          <div
            className="order-el__btnmob btn-count btn-modal"
            onClick={() => dispatch(setModal({ name: 'history', params: { id, created } }))}
          >
            <div className="btn-count__left">История</div>
            <div className="btn-count__right">{historyCount}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
