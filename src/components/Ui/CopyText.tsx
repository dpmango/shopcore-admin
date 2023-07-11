import { CopySvg } from '@c/Ui/Icons'
import cns from 'classnames'
import { toast } from 'react-toastify'

interface ICopyText {
  text: string
  className: string
}

export const CopyText: React.FC<ICopyText> = ({ text, className }) => {
  const handleCopy = async () => {
    await copyToClipboard(text)
    toast.info(`Скопировано: ${text}`)
  }

  return (
    <div className={cns('block-copy', className)} onClick={handleCopy}>
      {text}
      <div className="block-copy__btn">
        <CopySvg />
      </div>
    </div>
  )
}
