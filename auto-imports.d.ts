/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by unplugin-auto-import
export {}
declare global {
  const APP_VERSION: typeof import('./src/core/utils/dev')['APP_VERSION']
  const LOG: typeof import('./src/core/utils/dev')['LOG']
  const Link: typeof import('react-router-dom')['Link']
  const NavLink: typeof import('react-router-dom')['NavLink']
  const Navigate: typeof import('react-router-dom')['Navigate']
  const Outlet: typeof import('react-router-dom')['Outlet']
  const PerformanceLog: typeof import('./src/core/utils/dev')['PerformanceLog']
  const Plurize: typeof import('./src/core/utils/number')['Plurize']
  const Route: typeof import('react-router-dom')['Route']
  const Routes: typeof import('react-router-dom')['Routes']
  const Type: typeof import('./src/core/interface/Orders')['Type']
  const accessReview: typeof import('./src/core/api/chat.api')['accessReview']
  const api: typeof import('./src/core/api')['api']
  const blobToData: typeof import('./src/core/utils/file')['blobToData']
  const buildParams: typeof import('./src/core/utils/api')['buildParams']
  const bytesToMegaBytes: typeof import('./src/core/utils/bytes')['bytesToMegaBytes']
  const chatState: typeof import('./src/core/store/session.store')['chatState']
  const chatStore: typeof import('./src/core/store/chat.store')['default']
  const closeModal: typeof import('./src/core/store/session.store')['closeModal']
  const closeTicket: typeof import('./src/core/api/chat.api')['closeTicket']
  const copyToClipboard: typeof import('./src/core/utils/clipboard')['copyToClipboard']
  const createRef: typeof import('react')['createRef']
  const dateAgo: typeof import('./src/core/utils/date')['dateAgo']
  const dateToTimestamp: typeof import('./src/core/utils/date')['dateToTimestamp']
  const fetchAuth: typeof import('./src/core/api/session.api')['fetchAuth']
  const fetchOrdersApi: typeof import('./src/core/api/orders.api')['fetchOrdersApi']
  const flushDataState: typeof import('./src/core/store/chat.store')['flushDataState']
  const formatBytes: typeof import('./src/core/utils/bytes')['formatBytes']
  const formatMinutes: typeof import('./src/core/utils/date')['formatMinutes']
  const formatPrice: typeof import('./src/core/utils/number')['formatPrice']
  const forwardRef: typeof import('react')['forwardRef']
  const generateDaysFrom: typeof import('./src/core/utils/date')['generateDaysFrom']
  const generateTimeSlots: typeof import('./src/core/utils/date')['generateTimeSlots']
  const getChatList: typeof import('./src/core/api/chat.api')['getChatList']
  const getChatListService: typeof import('./src/core/store/chat.store')['getChatListService']
  const getChatMessagesService: typeof import('./src/core/store/chat.store')['getChatMessagesService']
  const getChatUserService: typeof import('./src/core/store/chat.store')['getChatUserService']
  const getDialogUser: typeof import('./src/core/api/chat.api')['getDialogUser']
  const getMessagesByDialog: typeof import('./src/core/api/chat.api')['getMessagesByDialog']
  const getOrders: typeof import('./src/core/store/orders.store')['getOrders']
  const getOrdersService: typeof import('./src/core/store/orders.store')['getOrdersService']
  const getRandomInt: typeof import('./src/core/utils/dev')['getRandomInt']
  const getThemes: typeof import('./src/core/api/chat.api')['getThemes']
  const getThemesService: typeof import('./src/core/store/chat.store')['getThemesService']
  const getUser: typeof import('./src/core/api/session.api')['getUser']
  const getUserService: typeof import('./src/core/store/session.store')['getUserService']
  const isDevelopmentSite: typeof import('./src/core/utils/dev')['isDevelopmentSite']
  const lazy: typeof import('react')['lazy']
  const localStorageGet: typeof import('./src/core/utils/localstorage')['localStorageGet']
  const localStorageSet: typeof import('./src/core/utils/localstorage')['localStorageSet']
  const markRead: typeof import('./src/core/api/chat.api')['markRead']
  const markReadService: typeof import('./src/core/store/chat.store')['markReadService']
  const memo: typeof import('react')['memo']
  const minutesToTimestamp: typeof import('./src/core/utils/date')['minutesToTimestamp']
  const ordersStore: typeof import('./src/core/store/orders.store')['default']
  const pad: typeof import('./src/core/utils/number')['pad']
  const postMessage: typeof import('./src/core/api/chat.api')['postMessage']
  const refseTicket: typeof import('./src/core/api/chat.api')['refseTicket']
  const resetUser: typeof import('./src/core/store/session.store')['resetUser']
  const secondsToStamp: typeof import('./src/core/utils/date')['secondsToStamp']
  const sessionStore: typeof import('./src/core/store/session.store')['default']
  const setActiveDialog: typeof import('./src/core/store/chat.store')['setActiveDialog']
  const setFilter: typeof import('./src/core/store/orders.store')['setFilter']
  const setModal: typeof import('./src/core/store/session.store')['setModal']
  const setSimulator: typeof import('./src/core/store/chat.store')['setSimulator']
  const setStateCoin: typeof import('./src/core/store/chat.store')['setStateCoin']
  const setStateDataForce: typeof import('./src/core/store/chat.store')['setStateDataForce']
  const setStateTime: typeof import('./src/core/store/chat.store')['setStateTime']
  const setTheme: typeof import('./src/core/store/session.store')['setTheme']
  const setUi: typeof import('./src/core/store/chat.store')['setUi']
  const startTransition: typeof import('react')['startTransition']
  const store: typeof import('./src/core/store')['store']
  const timestampToMinutes: typeof import('./src/core/utils/date')['timestampToMinutes']
  const transferTicket: typeof import('./src/core/api/chat.api')['transferTicket']
  const useAppDispatch: typeof import('./src/core/store')['useAppDispatch']
  const useAppSelector: typeof import('./src/core/store')['useAppSelector']
  const useCallback: typeof import('react')['useCallback']
  const useClickOutside: typeof import('./src/core/hooks/useClickOutside')['useClickOutside']
  const useContext: typeof import('react')['useContext']
  const useDebugValue: typeof import('react')['useDebugValue']
  const useDeferredValue: typeof import('react')['useDeferredValue']
  const useEffect: typeof import('react')['useEffect']
  const useHref: typeof import('react-router-dom')['useHref']
  const useId: typeof import('react')['useId']
  const useImperativeHandle: typeof import('react')['useImperativeHandle']
  const useInRouterContext: typeof import('react-router-dom')['useInRouterContext']
  const useInsertionEffect: typeof import('react')['useInsertionEffect']
  const useLayoutEffect: typeof import('react')['useLayoutEffect']
  const useLinkClickHandler: typeof import('react-router-dom')['useLinkClickHandler']
  const useLocation: typeof import('react-router-dom')['useLocation']
  const useMemo: typeof import('react')['useMemo']
  const useNavigate: typeof import('react-router-dom')['useNavigate']
  const useNavigationType: typeof import('react-router-dom')['useNavigationType']
  const useOutlet: typeof import('react-router-dom')['useOutlet']
  const useOutletContext: typeof import('react-router-dom')['useOutletContext']
  const useParams: typeof import('react-router-dom')['useParams']
  const useReducer: typeof import('react')['useReducer']
  const useRef: typeof import('react')['useRef']
  const useResolvedPath: typeof import('react-router-dom')['useResolvedPath']
  const useRoutes: typeof import('react-router-dom')['useRoutes']
  const useScrollLock: typeof import('./src/core/hooks/useScrollLock')['useScrollLock']
  const useSearchParams: typeof import('react-router-dom')['useSearchParams']
  const useState: typeof import('react')['useState']
  const useSyncExternalStore: typeof import('react')['useSyncExternalStore']
  const useTelegramAuth: typeof import('./src/core/hooks/useTelegramAuth')['useTelegramAuth']
  const useTheme: typeof import('./src/core/hooks/useTheme')['useTheme']
  const useTransition: typeof import('react')['useTransition']
}
