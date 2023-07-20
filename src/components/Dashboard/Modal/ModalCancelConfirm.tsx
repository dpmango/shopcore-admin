import { DislikeSvg, LikeSvg } from '@c/Ui/Icons'
import { toast } from 'react-toastify'

import { UiModal } from '@/components/Ui'

import { ModalHead } from './Partials/ModalHead'

export const ModalCancelConfirm: React.FC = () => {
  const { modal, modalParams } = useAppSelector((store) => store.sesionState)
  const dispatch = useAppDispatch()

  const [like, setLike] = useState<boolean | null>(null)
  const [comment, setComment] = useState('')

  const handleSubmit = async () => {
    const { data, error } = await orderHideCancelledApi({
      id: modalParams.id,
      comment: comment,
      like: like || false,
    })

    if (error) {
      toast.error(`Ошибка, попробуйте снова`)
    } else {
      toast.success(`Подтверждена отмена заказа ${modalParams.id}`)
      dispatch(closeModal())
    }
  }

  return (
    <UiModal name="confirm-cancel" modifier="confirm">
      <ModalHead
        title="Подтвердить отмену заказа"
        id={modalParams.id}
        created={modalParams.created}
      />

      <div className="modal-content__block">
        <div className="estimation-btns">
          <label
            className={cns('estimation-btns__btn estimation-btn', like === true && '_active')}
            onClick={() => setLike(true)}
          >
            <input
              className="estimation-btn__inp"
              type="radio"
              name="order"
              onChange={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            />
            <div className={cns('estimation-btn__dec')}>
              <LikeSvg />
            </div>
          </label>
          <label
            className={cns(
              'estimation-btns__btn estimation-btn estimation-btn_red',
              like === false && '_active',
            )}
            onClick={() => setLike(false)}
          >
            <input
              className="estimation-btn__inp"
              type="radio"
              name="order"
              onChange={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            />
            <div className={cns('estimation-btn__dec')}>
              <DislikeSvg />
            </div>
          </label>
        </div>
      </div>
      <div className="modal-content__block block-info">
        <div className="block-info__title2">Ваша причина отмены (не обязательно)</div>
        <div className="block-info__text">
          Укажите свою причину отмены, если оператор указал неверную.
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="textarea-def"
          placeholder="Причина отмены"
        />
        <button className="btn-def-2 modal-content__btn" onClick={handleSubmit}>
          <span>Подтвердить</span>
        </button>
      </div>
    </UiModal>
  )
}
