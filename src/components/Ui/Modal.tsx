// import './modal.sass';
import { CloseSvg } from '@c/Ui/Icons'

interface IModalProps {
  name: string
  children: React.ReactElement[] | React.ReactElement | string
  modifier?: string
}

export const Modal: React.FC<IModalProps> = ({ name, modifier = 'mob', children }) => {
  const { modal } = useAppSelector((store) => store.sesionState)

  const { lockScroll, unlockScroll } = useScrollLock()
  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(closeModal())
  }

  useEffect(() => {
    lockScroll()

    return () => {
      unlockScroll()
    }
  }, [])

  return (
    <div className={cns('modal-def', modal === name ? 'visible' : 'hidden')} id={name}>
      <div className="modal-def__wrap">
        <div className={cns('modal-def__content modal-content', `modal-${modifier}`)}>
          <div className="close-def modal-def__close modal-content__close" onClick={handleClose}>
            <CloseSvg />
          </div>
          {children}
        </div>
        <div className="modal-def__overlay overlay" onClick={handleClose}></div>
      </div>
    </div>
  )
}
