import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links2.css'

const NavigationLinks2 = (props) => {
  return <nav className={`navigation-links2-nav ${props.rootClassName} `}></nav>
}

NavigationLinks2.defaultProps = {
  rootClassName: '',
  text2: 'Pricing',
  text: 'About',
  text3: 'Team',
  text1: 'Features',
  text4: 'Blog',
}

NavigationLinks2.propTypes = {
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks2
