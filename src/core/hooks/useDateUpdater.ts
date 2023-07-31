import { AsyncThunkAction } from '@reduxjs/toolkit'
import isEqual from 'lodash/isEqual'

export const useDateUpdater = ({
  storeThunk,
  thunkParams,
}: {
  storeThunk: any
  thunkParams?: any
}) => {
  const dispatch = useAppDispatch()
  const [initialDataLoaded, setInitialLoaded] = useState(false)
  const [thunkParamsPrev, setThunkParamsPrev] = useState<any>({})
  const thunkParamsChanged = useRef(false)

  const timer: { current: NodeJS.Timeout | null } = useRef(null)
  useEffect(() => {
    const initialFetch = async () => {
      await dispatch(storeThunk(thunkParams))
      setInitialLoaded(true)
    }
    if (!isEqual(thunkParams, thunkParamsPrev)) {
      thunkParamsChanged.current = true
      setInitialLoaded(false)
      setThunkParamsPrev(thunkParams)
    }

    timer.current = setInterval(
      async () => {
        await dispatch(storeThunk(thunkParams))
      },
      1 * 60 * 1000 * import.meta.env.VITE_APP_TRASEHOLD,
    )

    if (!initialDataLoaded || thunkParamsChanged.current) initialFetch()

    return () => {
      clearInterval(timer.current as NodeJS.Timeout)
    }
  }, [thunkParams])

  return {
    initialDataLoaded,
  }
}
