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

export const dateToTimestamp = (v: Date | string) => {
  return dayjs(v).format('DD MMMM YYYY в HH:mm')
}

export const dateAgo = (v: Date | string) => {
  return dayjs(v).fromNow(true)
}

export const formatMinutes = (v: string) => {
  const min = +v

  const hours = Math.floor(min / 60)
  const hh = hours ? `${hours} ${Plurize(hours, 'час', 'часа', 'часов')} ` : ''
  const mm = `${min - hours * 60} минут`

  return `${hh}${mm}`
}
