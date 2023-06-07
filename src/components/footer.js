import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-footer footer-component ${props.rootClassName} `}>
      <div className="footer-container">
        <p className="footer-text TextmdRegular">
          © 2023 Socious Inc. All rights reserved.
        </p>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
