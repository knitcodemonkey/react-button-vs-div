import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ hideText, setHideText }) => {
  return (
    <button
      onClick={() => setHideText(!hideText)}
    >
      I am a button
    </button>
  )
}

Button.propTypes = {
  hideText: PropTypes.bool.isRequired,
  setHideText: PropTypes.func.isRequired
}

export default Button
