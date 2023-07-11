// import './modal.sass';
import cns from 'classnames'

interface IModalProps {
  name: string
  children: React.ReactElement[] | React.ReactElement
  handleClose: () => void
}

export const Modal: React.FC<IModalProps> = ({ name, children, handleClose }) => {
  const { lockScroll, unlockScroll } = useScrollLock()

  useEffect(() => {
    lockScroll()

    return () => {
      unlockScroll()
    }
  }, [])

  return (
    <div className={cns('modal modal--active', `modal--${name}`)}>
      <div className="fader fader--active fader--modal" onClick={handleClose}></div>

      <div className="container container--modal">{children}</div>
    </div>
  )
}
