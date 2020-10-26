import React, { useState } from 'react'
import './Converter.css'

export default function Converter() {
  const [pounds, updatePounds] = useState('')
  const [bananaValue, updateBananaValue] = useState('')

  const convert = () => {
    let bananaValue = (pounds * 3)
    updateBananaValue(bananaValue)
  }

  return (
    <div className='bananas'>
      <h1>Convert how much things weigh in bananas </h1>
      <div className='container'>
        <label>Weight in Pounds</label><br></br>
        <input 
          name='pounds'
          type='number'
          onChange={(e)=>updatePounds(e.target.value)}
          value={pounds}/>
        <br></br>
        <button label='calculate' className='convert' onClick={convert}> THE weight in bananas</button>
        <div className='final'>
          {
            isNaN(bananaValue) ? null : <h2>The weight you put in is 
             equal to {bananaValue} bananas!
            </h2>
          }
        </div>
      </div>
      
    </div>
  )
}
