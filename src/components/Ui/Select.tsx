import { CaretSvg, SearchSvg } from '@c/Ui/Icons'
import { animated, useSpring } from '@react-spring/web'

// import './select.sass';

interface ISelectProps {
  className?: string
  value: string | number
  widthLimiter?: boolean
  options: ISelectOption[]
  disabled?: boolean
  placeholder?: any
  onSelect?: (x: ISelectOption) => void
}

export interface ISelectOption {
  value: any
  label: string
  disabled?: boolean
  modifier?: string
}

export const Select: React.FC<ISelectProps> = ({
  className,
  value,
  options,
  disabled,
  placeholder,
  widthLimiter,
  onSelect,
}) => {
  const [opened, setOpened] = useState<boolean>(false)
  const [springs, api] = useSpring(() => ({
    from: { height: 0, opacity: 0 },
  }))

  const wrapperRef = useRef(null)

  useClickOutside(wrapperRef, () => setOpened(false))

  const currentTitle = useMemo(() => {
    return options?.find((x) => x.value === value)?.label || placeholder
  }, [value, options, placeholder])

  const handleSelect = (option: ISelectOption) => {
    onSelect && onSelect(option)
    setOpened(false)
  }

  // spring
  useEffect(() => {
    const closedStyle = {
      height: 0,
      opacity: 0,
    }
    const openedStyle = {
      height: 150,
      opacity: 1,
    }
    if (opened) {
      api.start({
        from: { ...closedStyle },
        to: { ...openedStyle },
      })
    } else {
      api.start({
        from: { ...openedStyle },
        to: { ...closedStyle },
      })
    }
  }, [opened])

  return (
    <div
      className={cns(
        'select-def',
        widthLimiter && 'select-def_width',
        disabled && 'select--disabled',
        className,
      )}
      ref={wrapperRef}
    >
      <div
        className={cns('select-def__top', opened && '_active')}
        onClick={() => setOpened(!opened)}
      >
        <div className="block-select__text select-def__val">{currentTitle}</div>
        <CaretSvg />
      </div>
      <animated.ul
        className={cns('select-def__dropdown', opened && '_active')}
        style={{
          ...springs,
        }}
      >
        {options?.length ? (
          options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className={cns(
                'select-def__dropdown-el block-select__text',
                option.disabled && '_disabled',
                option.label === currentTitle && 'active',
                option.modifier && `_${option.modifier}`,
              )}
            >
              {option.label}
            </div>
          ))
        ) : (
          <span>{'Пусто'}</span>
        )}
      </animated.ul>
    </div>
  )
}
