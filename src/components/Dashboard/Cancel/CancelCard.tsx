import { ContentName, ContentUser, HistoryBtn } from '@c/Dashboard/Atom'
import { ClockSvg, PointerSvg, WarningWhiteSvg } from '@c/Ui/Icons'

import { ICancellationDto } from '@/core/interface/Cancellations'

interface IOrderCardProps extends ICancellationDto {}

export const CancelCard: React.FC<IOrderCardProps> = ({
  id,
  where,
  item,
  historyCount,
  problemCount,
  created,
  comment,
  operator,
}) => {
  const dispatch = useAppDispatch()

  return (
    <div className="content-el cancel-el">
      <div className="cancel-el__content">
        <div className="cancel-el__block cancel-el__block_1">
          <div className="content-info cancel-el__info">
            <div className="content-info__title">{id}</div>
            <div className="content-info__date">{dateToTimestamp(created)}</div>
          </div>
          <ContentName item={item} />
        </div>
        <div className="cancel-el__block cancel-el__block_2">
          <div className="cancel-el__userinfo">
            {operator && (
              <ContentUser
                avatar={operator.avatar}
                title={operator.name}
                description={operator.position}
              />
            )}
            <div className="content-descrp-2">
              <div className="content-descrp-2__title">Был в работе</div>
              <div className="content-descrp-2__text">{dateAgo(created)}</div>
            </div>
          </div>
          <div className="content-btns">
            <div className="content-btns__btn btn-def">
              <PointerSvg />
              <span className="btn-def__text">{historyCount}</span>
            </div>
            <div className="content-btns__btn btn-def">
              <ClockSvg />
              <span className="btn-def__text">45</span>
            </div>
            <div className="content-btns__btn btn-def">
              <WarningWhiteSvg />
              <span className="btn-def__text">{problemCount}</span>
            </div>
            <HistoryBtn
              className="content-btns__btn "
              historyCount={historyCount}
              params={{ id, created }}
            />
          </div>
        </div>
        <div className="cancel-el__block cancel-el__block_3">
          <div className="cancel-el__text text-def">{comment}</div>
        </div>
        <div className="cancel-el__block cancel-el__block_4">
          <HistoryBtn
            className="order-el__btnmob"
            historyCount={historyCount}
            params={{ id, created }}
          />

          <button
            className="btn-def cancel-el__btn btn-modal"
            onClick={() => dispatch(setModal({ name: 'confirm-cancel', params: { id, created } }))}
          >
            <span className="btn-def__text">Подтвердить</span>
          </button>
        </div>
      </div>
    </div>
  )
}
