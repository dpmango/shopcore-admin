export const uniqueArray = (arr: any[]) => {
  return arr.filter((obj, index) => arr.findIndex((item) => item.value === obj.value) === index)
}
