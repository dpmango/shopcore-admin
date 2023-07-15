interface IHistroyBtnProps {
  className: string
  params: any
  historyCount: number
}
export const HistoryBtn: React.FC<IHistroyBtnProps> = ({ className, historyCount, params }) => {
  const dispatch = useAppDispatch()

  return (
    <div
      className={cns(className, 'btn-count btn-modal', historyCount < 1 && '_disabled')}
      onClick={() => historyCount > 0 && dispatch(setModal({ name: 'history', params: params }))}
    >
      <div className="btn-count__left">История</div>
      <div className="btn-count__right">{historyCount}</div>
    </div>
  )
}
