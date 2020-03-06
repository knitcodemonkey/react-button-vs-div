import React from 'react'
import PropTypes from 'prop-types'

const DivButton = ({ hideText, setHideText }) => {
  return (
    <div onClick={() => setHideText(!hideText)}>
      I am a div
    </div>
  )
}

DivButton.propTypes = {
  hideText: PropTypes.bool.isRequired,
  setHideText: PropTypes.func.isRequired
}
export default DivButton
