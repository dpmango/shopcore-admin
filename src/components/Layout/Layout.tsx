import cns from 'classnames'

import { LayoutModals } from './Modals'

interface ILayout {
  children: React.ReactElement[] | React.ReactElement
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <div className={cns('layout')}>{children}</div>

      <LayoutModals />
    </>
  )
}
