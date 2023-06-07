import React from 'react'

import PropTypes from 'prop-types'

import './primary-button.css'

const PrimaryButton = (props) => {
  return (
    <div className={`primary-button-container ${props.rootClassName} `}>
      <button type="button" className="primary">
        <span className="primary-button-text TextmdSemibold">Continue</span>
      </button>
    </div>
  )
}

PrimaryButton.defaultProps = {
  rootClassName: '',
}

PrimaryButton.propTypes = {
  rootClassName: PropTypes.string,
}

export default PrimaryButton
