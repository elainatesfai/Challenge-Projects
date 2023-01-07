import React from 'react'
import { useState } from 'react'
import '../../css/qaquestion.css'

export default function QAQuestion({question}) {
  const [like, setLike] = useState(false)
  const [counter, setCounter] = useState(0)

  const toggleLike = () => {
    setLike(!like)
    if(like === false) {
        setCounter(counter + 1)
    }
    else {
        setCounter(counter - 1)
    }
  }
  
  return (
    <div className='question-container'>
      <div className="question-title">{question}</div>
      <div className="like">
        <i className={ like ? "fa-solid fa-heart" : "fa-regular fa-heart"} onClick={toggleLike}></i>
        <div className="like-counter">{counter}</div>
      </div>

    </div>
  )
}
