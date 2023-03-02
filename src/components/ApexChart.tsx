import ReactApexChart from "react-apexcharts"
import { ApexOptions } from 'apexcharts';

export default function ApexChart({chartData, activeCurrency, currentTheme}) {

  const dataSeries = chartData[`data_${activeCurrency.toLowerCase()}`]

  console.log(dataSeries);
  

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
      text: chartData.title,
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
    theme: {
      mode: currentTheme
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
      title: {
        text: 'Price'
      },
    },
    xaxis: {
      type: 'datetime',
      categories: timeData,
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