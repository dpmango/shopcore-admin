import { CheckmarkCheckboxSvg } from '@c/Ui/Icons'
import cns from 'classnames'
import PropTypes from 'prop-types'
import { memo, useCallback, useMemo } from 'react'

interface ICheckboxProps {
  variant?: 'default'
  className?: string
  baseName?: string
  isChecked: boolean
  error?: string | boolean
  counter?: number | string
  onChange: () => void
  children: any
}

const UiCheckbox: React.FC<ICheckboxProps> = ({
  className,
  isChecked,
  baseName = 'checkbox-el',
  variant = 'default',
  error,
  counter,
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
    <label className={cns(baseName, variant && `_${variant}`, className, error && 'error')}>
      <span className={cns(`${baseName}__btn`, 'checkbox-def')}>
        <input
          className="checkbox-def__inp"
          type="checkbox"
          name="inp-status"
          checked={isChecked}
          onChange={handleChange}
          {...props}
        />
        <span className="checkbox-def__content">
          <CheckmarkCheckboxSvg />
        </span>
      </span>
      <span className={cns(`${baseName}__text`)}>{children}</span>
      {counter && <span className={cns(`${baseName}__text`)}>{counter}</span>}
    </label>
  )
}

export default memo(UiCheckbox)
