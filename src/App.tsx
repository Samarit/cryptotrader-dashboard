import { useState } from 'react';
import './App.css';
import CurrencyBar from './components/CurrencyBar';
import StrategyButtons from './components/StrategyBar';
import ThemeToggle from './components/ThemeToggle';

export default function App() {

  const [currentTheme, setCurrentTheme] = useState('light')

  return (
      <div className={`App ${currentTheme}`}>
        <div className="dashboard">

          <StrategyButtons />
          <CurrencyBar />
          <ThemeToggle currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />

        </div>
      </div>
  )
}
