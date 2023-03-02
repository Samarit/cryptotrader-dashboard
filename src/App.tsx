import { useEffect, useState } from 'react';
import './App.css';
import ApexChart from './components/ApexChart';
import CurrencyBar from './components/CurrencyBar';
import StrategyButtons from './components/StrategyBar';
import ThemeToggle from './components/ThemeToggle';

const fetchStrategyData = async (st_num) => {
  try {
    const response = await fetch(`https://api.1282075-cv69336.tw1.ru/api/dashboard?st_num=${st_num}`)
    const data = await response.json()
    return data
  } 
  catch (err) {
    console.log('Api fetch error: ', err);
  }
}


export default function App() {

  // Theme state
  const [currentTheme, setCurrentTheme] = useState('light')

  // Strategy state
  const [activeStrategy, setactiveStrategy] = useState(2)

  // Currency state
  const [activeCurrency, setactiveCurrency] = useState('USD')

  // Chart data state
  const [chartData, setChartData] = useState({title: 'Динамика роста для стратегии №2', data_btc: [], data_usd: []})

  const buttonStrategyClick = (e) => {

    const st_num = +e.target.id //strategy number
    setactiveStrategy(st_num)

    fetchStrategyData(st_num).then((data) => {
      setChartData(data)
    })
    
    return false
  }

  const buttonCurrencyClick = (e) => {
    setactiveCurrency(e.target.id)
    return false
  }

  // First component render
  useEffect(() => {
    fetchStrategyData(activeStrategy).then((data) => {
      setChartData(data)
    })
  }, [])

  return (
      <div className={`App ${currentTheme}`}>
        <div className="dashboard">

          <StrategyButtons buttonStrategyClick={buttonStrategyClick} activeStrategy={activeStrategy}/>
          <CurrencyBar buttonCurrencyClick={buttonCurrencyClick} activeCurrency={activeCurrency}/>
          <ApexChart chartData={chartData} activeCurrency={activeCurrency} currentTheme={currentTheme}/>
          <ThemeToggle currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />

        </div>
      </div>
  )
}
