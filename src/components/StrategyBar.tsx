import { useState } from "react"
import Button from "./Button"

// Collection of buttons data
const strategyButtonsData = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }
]

export default function StrategyButtons() {

  const [activeButton, setActiveButton] = useState(2)

  const buttonStrategyClick = (e) => {
    setActiveButton(+e.target.id)

    return false
  }

  const buttonReloadClick = (e) => {
    /* Dont know what behavior is */
  }

  return (
    <div className="strategy-buttons">

      <span>Стратегия №</span>

      {/* Strategy buttons */}
      {strategyButtonsData.map((el) => {
        return <Button id={el.id} clickHandler={buttonStrategyClick} activeButton={activeButton} key={el.id} />
      })}

      {/* Reload button */}
      <Button id='reload' clickHandler={buttonReloadClick} activeButton={null}/>

    </div>
  )
}