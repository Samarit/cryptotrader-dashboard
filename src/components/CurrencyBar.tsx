import Button from "./Button"
import {useState} from 'react'

const currencyButtons = [
  {
    id: 'USD'
  },
  {
    id: 'BTC'
  }
]

export default function CurrencyBar({activeCurrencyButton, buttonCurrencyClick}) {

  const [activeButton, setActiveButton] = useState('USD')

  const currencyButtonClick = (e) => [
    setActiveButton(e.target.id)
  ]

  return (
    <div className="currency-bar">
      <span>Валюта</span>

      {currencyButtons.map((el) => {
        return <Button id={el.id} clickHandler={buttonCurrencyClick} activeButton={activeCurrencyButton} key={el.id}/>
      })}
      
      <span>Комментарий: </span>
    </div>
  )
}