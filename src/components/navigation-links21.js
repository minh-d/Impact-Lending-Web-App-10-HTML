import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links21.css'

const NavigationLinks21 = (props) => {
  return (
    <nav className={`navigation-links21-nav ${props.rootClassName} `}>
      <span className="navigation-links21-text">{props.text}</span>
      <span className="navigation-links21-text1">{props.text1}</span>
      <span className="navigation-links21-text2">{props.text2}</span>
      <span className="navigation-links21-text3">{props.text3}</span>
      <span className="navigation-links21-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks21.defaultProps = {
  text2: 'Pricing',
  text3: 'Team',
  text1: 'Features',
  rootClassName: '',
  text4: 'Blog',
  text: 'About',
}

NavigationLinks21.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks21
