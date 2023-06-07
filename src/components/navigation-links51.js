import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links51.css'

const NavigationLinks51 = (props) => {
  return (
    <nav className={`navigation-links51-nav ${props.rootClassName} `}>
      <span className="navigation-links51-text">{props.text}</span>
      <span className="navigation-links51-text1">{props.text1}</span>
      <span className="navigation-links51-text2">{props.text2}</span>
      <span className="navigation-links51-text3">{props.text3}</span>
      <span className="navigation-links51-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks51.defaultProps = {
  text: 'About',
  rootClassName: '',
  text2: 'Pricing',
  text4: 'Blog',
  text1: 'Features',
  text3: 'Team',
}

NavigationLinks51.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks51
