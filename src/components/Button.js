import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      css={{
        background: 'none',
        border: 'none',
        display: 'block'
      }}
      {...rest}
    />
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Button
