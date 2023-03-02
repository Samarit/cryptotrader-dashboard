import ReactApexChart from "react-apexcharts"
import { ApexOptions } from 'apexcharts';

export default function ApexChart({chartData, activeCurrency}) {

  const dataSeries = chartData[`data_${activeCurrency.toLowerCase()}`]

  const valueData = dataSeries.map((el) => {
    return el.value
  })

  const timeData = dataSeries.map((el) => {
    return el.time
  })

  const options: ApexOptions = {
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: 'zoom'
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
    },
    title: {
      text: 'Stock Price Movement',
      align: 'left'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
      title: {
        text: 'Price'
      },
    },
    xaxis: {
      type: 'datetime',
      categories: timeData
    },
  };

  const series = [{
    name: 'XYZ MOTORS',
    data: valueData
  }]

  return (
    <ReactApexChart 
      options={options}
      series={series}
      />
  )
}