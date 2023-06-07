import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links11.css'

const NavigationLinks11 = (props) => {
  return (
    <nav className={`navigation-links11-nav ${props.rootClassName} `}></nav>
  )
}

NavigationLinks11.defaultProps = {
  text4: 'Blog',
  rootClassName: '',
  text1: 'Features',
  text: 'About',
  text3: 'Team',
  text2: 'Pricing',
}

NavigationLinks11.propTypes = {
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks11
