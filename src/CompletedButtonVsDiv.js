import React from 'react'
import '../App.css'

const allowedKeys = ['Enter', 'Space']

const DivButton = ({ hideText, setHideText }) => {
  return (
    <div
      role="button"
      tabIndex="0"
      onClick={() => setHideText(!hideText)}
      onKeyPress={e => {
        allowedKeys.indexOf(e?.code) > -1 &&
          setHideText(!hideText)
      }}
      css={{
        // Did you forget about this? I forgot about this.
        display: 'inline-block',
        textAlign: 'center',
        color: 'buttontext', // this is a thing?
        borderRadius: 2, // so tiny, so cute
        backgroundColor: '#EFEFEF', // The 2000's called...
        boxSizing: 'border-box', // #love
        padding: '1px 7px', // huh. 7px. Not my first guess.
        border: '1px outset #767676', // random, but okay
        cursor: 'pointer' // iOS: "No pointer? no clicky."
      }}
    >
      I am a div
    </div>
  )
}

export default DivButton
