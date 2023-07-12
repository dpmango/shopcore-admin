export const useTheme = () => {
  const dispatch = useAppDispatch()
  const { theme } = useAppSelector((store) => store.sesionState)

  const toggleTheme = useCallback(() => {
    const $html = document.querySelector('html')
    $html?.classList.toggle('light')

    if (localStorageGet('theme') === 'light') {
      localStorageSet('theme', 'dark')
      dispatch(setTheme('dark'))
    } else {
      localStorageSet('theme', 'light')
      dispatch(setTheme('light'))
    }

    // TODO + plus charts charts js colors
  }, [])

  const setInitialTheme = useCallback(() => {
    const $html = document.querySelector('html')
    let isDark = false
    if (localStorageGet('theme') === 'dark') {
      $html?.classList.remove('light')
      isDark = true
    } else {
      $html?.classList.add('light')
    }
    dispatch(setTheme(isDark ? 'dark' : 'light'))
  }, [])

  return {
    toggleTheme,
    setInitialTheme,
    theme,
  }
}
