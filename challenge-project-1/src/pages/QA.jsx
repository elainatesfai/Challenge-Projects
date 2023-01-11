import React from 'react'
import Navbar from '../components/Navbar'
import '../css/qa.css'
import QAQuestion from '../components/Common Components/QAQuestion'

// This is the app.js for the QA page

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
