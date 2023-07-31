export const createDatasetStyles = (color: string) => ({
  borderRadius: 100,
  barThickness: 11,
  borderWidth: 2.5,
  borderColor: 'transparent',
  backgroundColor: color,
})

export const colorMapper = (index: number) => {
  switch (index) {
    case 1:
      return '#9437F5'
    case 2:
      return '#279BE8'
    case 3:
      return '#FC9E24'
    case 4:
      return '#F52629'
    case 5:
      return '#CD765A'
    case 6:
      return '#667530'
    case 7:
      return '#F5D48B'
    case 8:
      return '#683CC3'
    case 9:
      return '#40EAE5'
    case 10:
      return '#11C471'
    case 11:
      return '#354E86'
    default:
      return '#9437F5'
  }
}

// function setBlackTheme() {
//   myChart.options.scales.y.grid.color = 'rgba(255,255,255, 0.15)'
//   myChart.update()
// }
// function setWhiteTheme() {
//   myChart.options.scales.y.grid.color = 'rgba(25,27,34, 0.15)'
//   myChart.update()
// }
// $('.theme--js').on('click', function () {
//   if ($('html').hasClass('light')) {
//     setBlackTheme()
//   } else {
//     setWhiteTheme()
//   }
// })
