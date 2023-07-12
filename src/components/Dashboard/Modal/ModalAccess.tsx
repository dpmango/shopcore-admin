import { UiCheckbox, UiModal } from '@/components/Ui'
import { CheckmarkCheckboxSvg } from '@/components/Ui/Icons'

export const ModalAccess: React.FC = () => {
  const gameList = useMemo(() => {
    return [
      { id: 1, label: 'Fortnite' },
      { id: 2, label: 'Overwatch 2' },
      { id: 3, label: 'Drawl stars, Crash Royale' },
      { id: 4, label: 'a' },
      { id: 5, label: 'b' },
      { id: 6, label: 'c' },
    ]
  }, [])

  return (
    <UiModal name="modal-access" modifier="access">
      <div className="modal-content__top">
        <div className="title-def modal-content__title">Доступ</div>
        <div className="text-def">Игры доступные оператору</div>
      </div>
      <div className="modal-content__block">
        <div className="block-checkboxes">
          {gameList.map((game, idx) => (
            <UiCheckbox
              key={idx}
              isChecked={false}
              onChange={() => null}
              className="block-checkboxes__el"
            >
              {game.label}
            </UiCheckbox>
          ))}
        </div>
        <button className="btn-def-2 modal-content__btn">
          <span>Сохранить</span>
        </button>
      </div>
    </UiModal>
  )
}
