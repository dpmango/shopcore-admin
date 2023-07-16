// import { DislikeSvg, LikeSvg } from '@c/Ui/Icons'

interface IModalHeadProps {
  title: string
  id: string
  created: number
}

export const ModalHead: React.FC<IModalHeadProps> = ({ title, id, created }) => {
  return (
    <div className="modal-content__top">
      <div className="title-def modal-content__title">{title}</div>
      <div className="content-info-2">
        <span className="content-info-2__title">{id}</span>
        <span className="content-info-2__text">{dateToTimestamp(created)}</span>
      </div>
    </div>
  )
}
