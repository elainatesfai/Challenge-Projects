import React from 'react'
import '../CSS/calculator.css'

export default function Calculator() {
  return (
    <div className='calculator-container'>
        <div className="result-container">
            0
        </div>
        <div className="buttons-container">
            <div className="row">
                <button className="button 7">7</button>
                <button className="button 8">8</button>
                <button className="button 9">9</button>
            </div>
        </div>
    </div>
  )
}
