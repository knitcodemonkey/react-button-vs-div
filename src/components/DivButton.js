import React from 'react'
import PropTypes from 'prop-types'

const DivButton = ({ onClick, ...rest }) => {
  return <div onClick={onClick} {...rest} />
}

DivButton.propTypes = {
  onClick: PropTypes.func.isRequired
}
export default DivButton
