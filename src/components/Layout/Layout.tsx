import cns from 'classnames'

import { LayoutModals } from './Modals'
import { LayoutSidebar } from './Sidebar'

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

      <LayoutModals />
    </>
  )
}
