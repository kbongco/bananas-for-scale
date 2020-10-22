import React, { useState } from 'react'
import './Converter.css'

export default function Converter() {
  const [pounds, updatePounds] = useState(0.206)
  const [bananas, updateBananas] = useState(1)

  const convertPoundsToBananas = name => e => {
    const { value } = e.target
    const map = {
      bananaToPounds: value * 0.206,
      poundsToBanana:  value / 0.206
    }
    updatePounds(map[name])
}

  return (
    <div className='bananas'>
      <h1>Convert how much you weigh in bananas </h1>
      <h2>1 banana is equal to 0.206lbs(approximately)</h2>
      <div className='container'>
        <label>Weight in Pounds</label><br></br>
        <input 
          name='pounds'
          type='number'
          value={pounds}
          onChange={e => updatePounds(e.target.value)}
          onChange={convertPoundsToBananas("poundsToBanana")} />
        <br></br>
        <label>The weight in BANANAS!</label><br></br>
        <input 
          name='bananas'
          type='number'
          value={bananas} 
          onChange={e => updateBananas(e.target.value)} 
          onChange={convertPoundsToBananas("bananaToPounds")} />
      </div>
      
    </div>
  )
}
