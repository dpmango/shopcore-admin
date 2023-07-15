// 1000.00 -> 1 000.00
export const formatPrice = (num: any, trailingZeros = 0, showFree = true) => {
  const spacesRegex = /\B(?=(\d{3})+(?!\d))/g
  let value = ''
  if (num === null || num === undefined) {
    return '0.00'
  }

  if (typeof num === 'number') {
    value = num.toFixed(trailingZeros).replace(spacesRegex, ' ')
  } else if (typeof num === 'string') {
    value = parseFloat(num).toFixed(trailingZeros).replace(spacesRegex, ' ')
  }

  if (+value === 0) {
    if (showFree) {
      return 'Бесплатно'
    } else {
      return ''
    }
  }

  return `${value} ₽`
}

export const pad = (v: string | number, size = 2) => {
  let s = String(v)
  while (s.length < size) {
    s = '0' + s
  }
  return s
}

export const Plurize = (number: number, one: string, two: string, five: string) => {
  let n = Math.abs(number)
  n %= 100
  if (n >= 5 && n <= 20) {
    return five
  }
  n %= 10
  if (n === 1) {
    return one
  }
  if (n >= 2 && n <= 4) {
    return two
  }
  return five
}

export const numberShorten = (num: number) => {
  return Math.abs(num) >= 1.0e9
    ? (Math.abs(num) / 1.0e9).toFixed(2) + ' млр.'
    : Math.abs(num) >= 1.0e6
    ? (Math.abs(num) / 1.0e6).toFixed(2) + ' млн.'
    : Math.abs(num) >= 1.0e3
    ? (Math.abs(num) / 1.0e3).toFixed(2) + ' тыс.'
    : Math.abs(num)
}
