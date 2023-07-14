import dayjs from 'dayjs'
import locale_ru from 'dayjs/locale/ru'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isToday from 'dayjs/plugin/isToday'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

locale_ru
dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isToday)
dayjs.locale('ru')

export const dateToTimestamp = (v: number) => {
  return dayjs.unix(v).format('DD MMMM YYYY в HH:mm')
}

export const dateAgo = (v: number) => {
  return dayjs.unix(v).fromNow(true)
}

export const secondsToStamp = (v: number) => {
  const min = Math.round(v / 60)

  const days = Math.floor(min / 60 / 24)
  const hours = Math.floor(min / 60)
  const dd = days ? `${days} ${Plurize(days, 'день', 'дня', 'дней')} ` : ''
  const hh = hours ? `${hours} ${Plurize(hours, 'час', 'часа', 'часов')} ` : ''
  const mm = !dd && `${min - hours * 60} мин`

  return `${dd}${hh}${mm}`
}
