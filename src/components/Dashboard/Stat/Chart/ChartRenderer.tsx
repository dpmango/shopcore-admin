import Chart, { ChartConfiguration } from 'chart.js/auto'

import { chartData } from './chart-data'

export const ChartRenderer: React.FC = () => {
  const canvasRef = useRef(null)
  const chartInstance = useRef<any | null>(null)

  const config: ChartConfiguration = {
    type: 'bar',
    data: chartData,
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
          external: function (context: any) {
            const tooltipEl = document.getElementById('chartjs-tooltip') as HTMLElement
            if (!tooltipEl) return

            const title = context.tooltip['dataPoints'][0]['raw']['title']
            const date = context.tooltip['dataPoints'][0]['raw']['date']
            const val = context.tooltip['dataPoints'][0]['raw']['y']
            const color =
              context.tooltip['$context']['tooltip']['labelColors'][0]['backgroundColor']

            tooltipEl.style.borderColor = color

            // Hide if no tooltip
            const tooltipModel = context.tooltip
            if (tooltipModel.opacity === 0) {
              tooltipEl.style.opacity = '0'
              return
            }

            // Set caret Position
            tooltipEl?.classList.remove('above', 'below', 'no-transform')
            if (tooltipModel.yAlign) {
              tooltipEl?.classList.add(tooltipModel.yAlign)
            } else {
              tooltipEl?.classList.add('no-transform')
            }

            const position = context.chart.canvas.getBoundingClientRect()

            // const bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont)

            // $('.tooltip-def__title').text('')
            // $('.tooltip-def__date').text('')
            // $('.tooltip-def__val').text('')
            // $('.tooltip-def__title').text(title)
            // $('.tooltip-def__date').text(date)
            // $('.tooltip-def__val').text(val)

            // Display, position, and set styles for font
            tooltipEl.style.opacity = '1'
            tooltipEl.style.display = 'block'
            tooltipEl.style.position = 'absolute'
            tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px'
            tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px'
            // tooltipEl.style.font = bodyFont.string
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
              weight: '400',
              family: 'PT Root UI VF',
              style: 'normal',
            },
          },
        },
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(255,255,255, 0.15)',
          },
          border: {
            display: false,
          },
          ticks: {
            beginAtZero: true,
            padding: 15,
            font: {
              size: 14,
              weight: '400',
              family: 'PT Root UI VF',
              style: 'normal',
              fontColor: '#fff',
            },
          },
        },
      },
    },
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

  useLayoutEffect(() => {
    if (canvasRef.current) {
      chartInstance.current = new Chart(canvasRef.current, config)
    }
  }, [])

  return <canvas className="block-chart__chart" ref={canvasRef} />
}
