import React, { useState } from 'react'
import './App.css'

function ButtonVsDiv({hideText, setHideText}) {
  
  return (
        <button
          onClick={() =>
            setHideText(hideText)
          }
        >
          I am a button
        </button>
        <div
          onClick={() =>
            setHideText(hideText)
          }
        >
          I am a div
        </div>
      
  )
}

export default ButtonVsDiv
