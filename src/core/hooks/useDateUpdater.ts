import { AsyncThunkAction } from '@reduxjs/toolkit'

export const useDateUpdater = ({ storeThunk }: { storeThunk: any }) => {
  const dispatch = useAppDispatch()
  const [initialDataLoaded, setInitialLoaded] = useState(false)

  const timer: { current: NodeJS.Timeout | null } = useRef(null)
  useEffect(() => {
    const initialFetch = async () => {
      await dispatch(storeThunk())
      setInitialLoaded(true)
    }

    timer.current = setInterval(
      async () => {
        await dispatch(storeThunk())
      },
      1 * 60 * 1000 * import.meta.env.VITE_APP_TRASEHOLD,
    )

    initialFetch()

    return () => {
      clearInterval(timer.current as NodeJS.Timeout)
    }
  }, [])

  return {
    initialDataLoaded,
  }
}
