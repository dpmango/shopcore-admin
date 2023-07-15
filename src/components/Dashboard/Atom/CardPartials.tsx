import { IOrderItem } from '@/core/interface/Orders'

interface IContentNameProps {
  className?: string
  item: IOrderItem
}

export const ContentName: React.FC<IContentNameProps> = ({ className, item }) => {
  return (
    <div className={cns('content-name', className)}>
      <span className="content-name__title">{item.name}</span>
      <span className="content-name__mob">,</span>
      <span className="content-name__text">{item.type}</span>
    </div>
  )
}

interface IContentUserProps {
  className?: string
  avatar?: string
  title: string
  description: string
}

export const ContentUser: React.FC<IContentUserProps> = ({
  className,
  avatar,
  title,
  description,
}) => {
  return (
    <div className={cns('content-user', className)}>
      <img
        className="content-user__img"
        src={
          avatar ||
          'https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=170x170&k=20&c=pVkxcoiVUlD0uOzasLU41qdrAQpT1B3vBfKSJQWuNq4='
        }
        alt={title}
      />
      <div className="content-user__body">
        <div className="content-user__title">{title}</div>
        <div className="content-user__text">{description}</div>
      </div>
    </div>
  )
}
