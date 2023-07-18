interface ILoaderProps {
  theme?: 'inline' | 'page' | 'line'
  active: boolean
  throttleMs?: number
}

export const Loader: React.FC<ILoaderProps> = ({
  active = true,
  theme = 'inline',
  throttleMs = 600,
}) => {
  const [showLoader, setShowLoader] = useState(false)

  const timer: { current: NodeJS.Timeout | null } = useRef(null)
  useEffect(() => {
    if (active) {
      timer.current = setTimeout(() => {
        setShowLoader(true)
      }, throttleMs)
    } else {
      setShowLoader(false)
      clearTimeout(timer.current as NodeJS.Timeout)
    }
  }, [active])

  return (
    <div className={cns('loader', theme, showLoader && '_active')}>
      <div className="loader__wrapper">
        <span className="loader-animation"></span>
      </div>
    </div>
  )
}
