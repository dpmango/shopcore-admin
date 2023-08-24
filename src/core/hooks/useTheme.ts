export const useTheme = () => {
  const dispatch = useAppDispatch()
  const { theme } = useAppSelector((store) => store.sesionState)

  const toggleTheme = useCallback(() => {
    const $html = document.querySelector('html')
    $html?.classList.toggle('light')

    if (localStorageGet('theme-admin') === 'light') {
      localStorageSet('theme-admin', 'dark')
      dispatch(setTheme('dark'))
    } else {
      localStorageSet('theme-admin', 'light')
      dispatch(setTheme('light'))
    }
  }, [])

  const setInitialTheme = useCallback(() => {
    const $html = document.querySelector('html')
    let isDark = false
    if (localStorageGet('theme-admin') === 'dark') {
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
