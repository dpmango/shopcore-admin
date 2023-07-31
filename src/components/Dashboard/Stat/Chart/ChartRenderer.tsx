import { ChartData } from 'chart.js'
import Chart, { ChartConfiguration } from 'chart.js/auto'
import dayjs from 'dayjs'
import { Dictionary } from 'lodash'

import { IChartConvertedDto, IOperatorStatDto } from '@/core/interface'

import { colorMapper, createDatasetStyles } from './chart-styler'

interface IChartRenderer {
  recordsByTitle: Dictionary<IChartConvertedDto[]>
}

export const ChartRenderer: React.FC<IChartRenderer> = ({ recordsByTitle }) => {
  const canvasRef = useRef(null)
  const chartInstance = useRef<any | null>(null)

  const chartRenderData = useMemo(() => {
    if (!recordsByTitle) return
    // create dataset by weekdays 0 - 6
    const dataSets = Object.keys(recordsByTitle).map((x, idx) => {
      const titleRecords = recordsByTitle[x]

      const markupLabels = [...new Array(7)].map((_, idx) => {
        const matchWeekday = titleRecords.find((x) => x.week === idx)

        return (
          matchWeekday || {
            week: idx,
            value: 0,
            title: titleRecords[0]?.title || '',
            date: '?',
          }
        )
      })

      return {
        ...createDatasetStyles(colorMapper(idx + 1)),
        data: markupLabels.map((rec) => ({
          x: 0,
          y: rec.value,
          title: rec.title,
          date: rec.date,
        })),
      }
    })

    // console.log({ dataSets })

    const chartData = {
      labels: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
      padding: { left: 110 },
      color: '#fff',
      datasets: dataSets,
    }

    return chartData as ChartData
  }, [recordsByTitle])

  const initChart = useCallback(() => {
    if (!chartRenderData || !canvasRef.current) return

    const config: ChartConfiguration = {
      type: 'bar',
      data: chartRenderData,
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

    if (chartInstance.current) chartInstance.current.destroy()

    chartInstance.current = new Chart(canvasRef.current, config)
  }, [chartRenderData])

  useLayoutEffect(() => {
    if (canvasRef.current) {
      initChart()
    }
  }, [chartRenderData])

  return <canvas className="block-chart__chart" ref={canvasRef} />
}
