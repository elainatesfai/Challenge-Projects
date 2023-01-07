import React from 'react'
import Navbar from '../components/Navbar'
import '../css/qa.css'
import QAQuestion from '../components/Common Components/QAQuestion'

function QA() {
  return (
    <>
      <Navbar />
      <div className='qa-container'>
        <QAQuestion 
        question="Question"/>
      </div>
    </>
  )
}

export default QA
