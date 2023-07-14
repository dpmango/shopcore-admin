import { LayoutSidebar, ModalMenu } from '@c/Layout'

interface ILayout {
  children: React.ReactElement[] | React.ReactElement
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <div className={cns('layout')}>
        <div className="lk-content">
          <LayoutSidebar />
          {children}
        </div>
      </div>

      <ModalMenu />
    </>
  )
}
