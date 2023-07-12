import cns from 'classnames'

interface ILoaderProps {
  theme: 'inline' | 'page'
  active: boolean
}

export const Loader: React.FC<ILoaderProps> = ({ active = true, theme = 'inline' }) => {
  return (
    <div className={cns('loader', theme, active && '_active')}>
      <div className="loader__wrapper">
        <span className="loader-animation"></span>
      </div>
    </div>
  )
}
