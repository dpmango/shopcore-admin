import { toast } from 'react-toastify'

import { UiCheckbox, UiLoader, UiModal } from '@/components/Ui'
import { IStatPermission } from '@/core/interface'

export const ModalAccess: React.FC = () => {
  const { modal, modalParams } = useAppSelector((store) => store.sesionState)
  const dispatch = useAppDispatch()

  const [permissions, setPermissions] = useState<IStatPermission[]>([])
  const [selectedPermissions, setSelectedPermissions] = useState<IStatPermission[]>([])
  const [loading, setLoding] = useState(false)

  const handleCheckboxToggle = ({ id, enabled, name }: IStatPermission) => {
    if (selectedPermissions.some((x) => x.id === id)) {
      setSelectedPermissions((prev) => [...prev.filter((x) => x.id !== id)])
    } else {
      setSelectedPermissions((prev) => [...prev, ...[{ id, enabled, name }]])
    }
  }

  const handleSubmit = async () => {
    const { data, error } = await saveOperatorAccessApi({
      id: modalParams.id,
      permissions: selectedPermissions.map((x) => ({ ...x, enabled: true })),
    })
    if (error) {
      toast.error(`Ошибка, попробуйте снова`)
    } else {
      toast.success(`Обновлено`)
      dispatch(closeModal())
    }
  }

  useEffect(() => {
    if (modal !== 'operator-access') return

    setPermissions([])
    setSelectedPermissions([])

    const getOperatorDetails = async () => {
      setLoding(true)
      const { data } = await fetchOperatorApi({ id: modalParams.id })
      setLoding(false)

      if (data?.permissions) {
        setPermissions(data.permissions)
        setSelectedPermissions(data.permissions.filter((x) => x.enabled))
      } else {
        // @ts-ignore
        toast.error(data?.message || '')
      }
    }

    getOperatorDetails()
  }, [modal, modalParams.id])

  return (
    <UiModal name="operator-access" modifier="access">
      <div className="modal-content__top">
        <div className="title-def modal-content__title">Доступ</div>
        <div className="text-def">Игры доступные оператору {modalParams.name}</div>
      </div>
      <div className="modal-content__block">
        <UiLoader theme="inline" active={loading} throttleMs={200} />

        <div className="block-checkboxes">
          {permissions.map((p, idx) => (
            <UiCheckbox
              key={p.id}
              isChecked={selectedPermissions.some((x) => x.id === p.id)}
              onChange={() => handleCheckboxToggle(p)}
              className="block-checkboxes__el"
            >
              {p.name}
            </UiCheckbox>
          ))}
        </div>

        {!loading && (
          <button className="btn-def-2 modal-content__btn" onClick={handleSubmit}>
            <span>Сохранить</span>
          </button>
        )}
      </div>
    </UiModal>
  )
}
