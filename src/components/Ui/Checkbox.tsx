import { CheckmarkCheckboxSvg } from '@c/Ui/Icons'
import cns from 'classnames'
import PropTypes from 'prop-types'
import { memo, useCallback, useMemo } from 'react'

interface ICheckboxProps {
  variant?: 'default'
  className?: string
  isChecked: boolean
  error?: string | boolean
  onChange: () => void
  children: any
}

const UiCheckbox: React.FC<ICheckboxProps> = ({
  className,
  isChecked,
  variant = 'default',
  error,
  onChange,
  children,
  ...props
}) => {
  const handleChange = useCallback(
    (e: any) => {
      if (onChange) {
        onChange()
      }
    },
    [onChange],
  )

  return (
    <label
      className={cns('checkbox-el', variant && `_${variant}`, className, error && 'error')}
      onClick={handleChange}
    >
      <span className="checkbox-el__btn checkbox-def">
        <input
          className="checkbox-def__inp"
          type="checkbox"
          name="inp-status"
          checked={isChecked}
          {...props}
        />
        <span className="checkbox-def__content">
          <CheckmarkCheckboxSvg />
        </span>
      </span>
      <span className="checkbox-el__text">{children}</span>
    </label>
  )
}

export default memo(UiCheckbox)
