import Chart from 'chart.js'

const chart = () => {
  const ctx = document.getElementById('myChart')
  let data = {
    labels: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
    padding: { left: 110 },
    datasets: [
      {
        borderRadius: 100,
        barThickness: 11,
        borderWidth: 2.5,
        borderColor: 'transparent',
        backgroundColor: '#9437F5',
        data: [
          {
            x: 0,
            y: 80,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 80,
            title: 'Отправил в AFK',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 80,
            title: 'Отправил в Проблемные',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 80,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 80,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 80,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 80,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
        ],
      },
      {
        borderRadius: 100,
        barThickness: 11,
        borderWidth: 2.5,
        borderColor: 'transparent',
        backgroundColor: '#279BE8',
        data: [
          {
            x: 0,
            y: 40,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 40,
            title: 'Отправил в AFK',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 40,
            title: 'Отправил в Проблемные',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 40,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 40,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 40,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 40,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
        ],
      },
      {
        borderRadius: 100,
        barThickness: 11,
        borderWidth: 2.5,
        borderColor: 'transparent',
        backgroundColor: '#FC9E24',
        data: [
          {
            x: 0,
            y: 160,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 260,
            title: 'Отправил в AFK',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 160,
            title: 'Отправил в Проблемные',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 260,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 160,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 260,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 160,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
        ],
      },
      {
        borderRadius: 100,
        barThickness: 11,
        borderWidth: 2.5,
        borderColor: 'transparent',
        backgroundColor: '#F52629',
        data: [
          {
            x: 0,
            y: 20,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 40,
            title: 'Отправил в AFK',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 20,
            title: 'Отправил в Проблемные',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 40,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 20,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 40,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 20,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
        ],
      },
      {
        borderRadius: 100,
        barThickness: 11,
        borderWidth: 2.5,
        borderColor: 'transparent',
        backgroundColor: '#CD765A',
        data: [
          {
            x: 0,
            y: 30,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 5,
            title: 'Отправил в AFK',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 30,
            title: 'Отправил в Проблемные',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 30,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 5,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 30,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 20,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
        ],
      },
      {
        borderRadius: 100,
        barThickness: 11,
        borderWidth: 2.5,
        borderColor: 'transparent',
        backgroundColor: '#667530',
        data: [
          {
            x: 0,
            y: 130,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 120,
            title: 'Отправил в AFK',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 130,
            title: 'Отправил в Проблемные',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 120,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 130,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 120,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 130,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
        ],
      },
      {
        borderRadius: 100,
        barThickness: 11,
        borderWidth: 2.5,
        borderColor: 'transparent',
        backgroundColor: '#F5D48B',
        data: [
          {
            x: 0,
            y: 105,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 105,
            title: 'Отправил в AFK',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 105,
            title: 'Отправил в Проблемные',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 105,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 105,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 105,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 105,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
        ],
      },
      {
        borderRadius: 100,
        barThickness: 11,
        borderWidth: 2.5,
        borderColor: 'transparent',
        backgroundColor: '#683CC3',
        data: [
          {
            x: 0,
            y: 105,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 130,
            title: 'Отправил в AFK',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 105,
            title: 'Отправил в Проблемные',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 130,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 105,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 130,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 105,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
        ],
      },
      {
        borderRadius: 100,
        barThickness: 11,
        borderWidth: 2.5,
        borderColor: 'transparent',
        backgroundColor: '#40EAE5',
        data: [
          {
            x: 0,
            y: 10,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 150,
            title: 'Отправил в AFK',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 10,
            title: 'Отправил в Проблемные',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 150,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 10,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 150,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 10,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
        ],
      },
      {
        borderRadius: 100,
        barThickness: 11,
        borderWidth: 2.5,
        borderColor: 'transparent',
        backgroundColor: '#11C471',
        data: [
          {
            x: 0,
            y: 30,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 20,
            title: 'Отправил в AFK',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 30,
            title: 'Отправил в Проблемные',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 20,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 30,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 20,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 30,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
        ],
      },
      {
        borderRadius: 100,
        barThickness: 11,
        borderWidth: 2.5,
        borderColor: 'transparent',
        backgroundColor: '#354E86',
        data: [
          {
            x: 0,
            y: 5,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 20,
            title: 'Отправил в AFK',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 5,
            title: 'Отправил в Проблемные',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 20,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 5,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 20,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
          {
            x: 0,
            y: 5,
            title: 'Overwatch 2',
            date: '22 июня 2023',
          },
        ],
      },
    ],
    color: '#fff',
  }
  const config = {
    type: 'bar',
    data: data,
    options: {
      layout: {},
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 0,
      },
      plugins: {
        legend: {
          display: false,
          labels: {
            color: '#fff',
            // '#333333',
          },
        },

        tooltip: {
          xAlign: 'center',
          enabled: false,
          external: function (context) {
            // Tooltip Element
            let tooltipEl = document.getElementById('chartjs-tooltip')

            let title = context.tooltip['dataPoints'][0]['raw']['title']
            let date = context.tooltip['dataPoints'][0]['raw']['date']
            let val = context.tooltip['dataPoints'][0]['raw']['y']
            let color = context.tooltip['$context']['tooltip']['labelColors'][0]['backgroundColor']
            // console.log(color);
            document.querySelector('.tooltip-def').css({
              'border-color': color,
            })

            // Hide if no tooltip
            const tooltipModel = context.tooltip
            if (tooltipModel.opacity === 0) {
              tooltipEl.style.opacity = 0
              return
            }

            // Set caret Position
            tooltipEl.classList.remove('above', 'below', 'no-transform')
            if (tooltipModel.yAlign) {
              tooltipEl.classList.add(tooltipModel.yAlign)
            } else {
              tooltipEl.classList.add('no-transform')
            }

            function getBody(bodyItem) {
              return bodyItem.lines
            }

            const position = context.chart.canvas.getBoundingClientRect()
            const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont)

            // $('.tooltip-def__title').text('')
            // $('.tooltip-def__date').text('')
            // $('.tooltip-def__val').text('')
            // $('.tooltip-def__title').text(title)
            // $('.tooltip-def__date').text(date)
            // $('.tooltip-def__val').text(val)

            // Display, position, and set styles for font
            tooltipEl.style.opacity = 1
            tooltipEl.style.display = 'block'
            tooltipEl.style.position = 'absolute'
            tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px'
            tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px'
            tooltipEl.style.font = bodyFont.string
            tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px'
            tooltipEl.style.pointerEvents = 'none'
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
            color: 'rgba(255,255,255, 0.15)',
          },
          ticks: {
            maxRotation: 0,
            minRotation: 0,
            font: {
              size: 14,
              weight: 400,
              family: 'PT Root UI VF',
              style: 'normal',
            },
          },
        },
        y: {
          beginAtZero: true,
          grid: {
            drawBorder: false,
            color: 'rgba(255,255,255, 0.15)',
          },
          ticks: {
            beginAtZero: true,
            padding: 15,
            font: {
              size: 14,
              weight: 400,
              family: 'PT Root UI VF',
              style: 'normal',
              fontColor: '#fff',
            },
          },
        },
      },
    },
  }
  let myChart
  myChart = new Chart(ctx, config)
  function setBlackTheme() {
    myChart.options.scales.y.grid.color = 'rgba(255,255,255, 0.15)'
    myChart.update()
  }
  function setWhiteTheme() {
    myChart.options.scales.y.grid.color = 'rgba(25,27,34, 0.15)'
    myChart.update()
  }
  // $('.theme--js').on('click', function () {
  //   if ($('html').hasClass('light')) {
  //     setBlackTheme()
  //   } else {
  //     setWhiteTheme()
  //   }
  // })
}
