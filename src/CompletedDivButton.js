import React from 'react'

const allowedKeys = [
  13, // Enter
  32 // Space
]

const DivButton = ({ onClick, ...rest }) => {
  return (
    <div
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyPress={e => {
        allowedKeys.indexOf(e.charCode) > -1 &&
          onClick()
      }}
      css={{
        // Did you forget about this? I forgot about this.
        display: 'inline-block',
        textAlign: 'center',
        color: 'buttontext', // this is a thing?
        borderRadius: 2, // so tiny, so cute
        backgroundColor: '#efefef', // The 2000's called...
        boxSizing: 'border-box', // #love
        padding: '1px 7px', // huh. 7px. Not my first guess.
        border: '1px outset #767676', // random, but okay
        cursor: 'pointer', // iOS: "No pointer? no clicky."
        '&:hover': {
          backgroundColor: '#e3e3e3'
        }
      }}
      {...rest}
    />
  )
}

export default DivButton
