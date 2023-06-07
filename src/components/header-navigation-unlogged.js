import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header-navigation-unlogged.css'

const HeaderNavigationUnlogged = (props) => {
  return (
    <header
      className={`header-navigation-unlogged-headernavigation navbar-component ${props.rootClassName} `}
    >
      <div
        data-role="Header"
        className="header-navigation-unlogged-header navbar-container"
      >
        <Link
          to="/projects-search-unlogged"
          className="header-navigation-unlogged-navlink"
        >
          <div className="header-navigation-unlogged-logo logo">
            <div className="logomark">
              <img
                alt={props.Content_alt12}
                src={props.Content_src12}
                className="header-navigation-unlogged-image"
              />
            </div>
          </div>
        </Link>
        <nav className="header-navigation-unlogged-nav navbar">
          <div className="navbar-menu-right">
            <div className="navbar-button-wrapper">
              <a
                href={props.link_text1}
                target="_blank"
                rel="noreferrer noopener"
                className="TextmdSemibold button-tertiary-gray"
              >
                {props.text2}
              </a>
              <a
                href={props.link_text12}
                target="_blank"
                rel="noreferrer noopener"
                className="TextmdSemibold button"
              >
                {props.text21}
              </a>
            </div>
          </div>
        </nav>
        <div data-role="BurgerMenu" className="navbar-menu-button">
          <div className="menu-icon">
            <img
              alt={props.menu02_alt13}
              src={props.menu02_src13}
              className=""
            />
          </div>
        </div>
      </div>
    </header>
  )
}

HeaderNavigationUnlogged.defaultProps = {
  link_text11: 'https://example.com',
  text3: 'My loans',
  Content_alt11: 'ContentI763',
  menu02_src13: '/external/menu02i763-3oc9.svg',
  Content_alt1: 'ContentI763',
  Content_src11:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/57798a7d-7487-4bc2-bbd7-6ad6e0be8c51/892e3892-71f8-4747-a8cb-c9769db3ac7e?org_if_sml=12337',
  Content_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/57798a7d-7487-4bc2-bbd7-6ad6e0be8c51/892e3892-71f8-4747-a8cb-c9769db3ac7e?org_if_sml=12337',
  Content_src12: '/external/contenti763-n5sa.svg',
  rootClassName: '',
  menu02_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/57798a7d-7487-4bc2-bbd7-6ad6e0be8c51/89dfde96-9fcd-43ea-a486-150bbaa24886?org_if_sml=1220',
  text1: 'My projects',
  Content_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/57798a7d-7487-4bc2-bbd7-6ad6e0be8c51/892e3892-71f8-4747-a8cb-c9769db3ac7e?org_if_sml=12337',
  menu02_alt: 'menu02I763',
  Content_alt12: 'ContentI763',
  link_text: 'https://example.com',
  menu02_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/57798a7d-7487-4bc2-bbd7-6ad6e0be8c51/89dfde96-9fcd-43ea-a486-150bbaa24886?org_if_sml=1220',
  link_text12: 'https://example.com',
  text21: 'Start a project',
  text2: 'Log in',
  menu02_alt13: 'menu02I763',
  text: 'Link',
  menu02_alt1: 'menu02I763',
  link_text1: 'https://example.com',
  Content_alt: 'ContentI763',
  link_url: 'https://example.com',
}

HeaderNavigationUnlogged.propTypes = {
  link_text11: PropTypes.string,
  text3: PropTypes.string,
  Content_alt11: PropTypes.string,
  menu02_src13: PropTypes.string,
  Content_alt1: PropTypes.string,
  Content_src11: PropTypes.string,
  Content_src1: PropTypes.string,
  Content_src12: PropTypes.string,
  rootClassName: PropTypes.string,
  menu02_src: PropTypes.string,
  text1: PropTypes.string,
  Content_src: PropTypes.string,
  menu02_alt: PropTypes.string,
  Content_alt12: PropTypes.string,
  link_text: PropTypes.string,
  menu02_src1: PropTypes.string,
  link_text12: PropTypes.string,
  text21: PropTypes.string,
  text2: PropTypes.string,
  menu02_alt13: PropTypes.string,
  text: PropTypes.string,
  menu02_alt1: PropTypes.string,
  link_text1: PropTypes.string,
  Content_alt: PropTypes.string,
  link_url: PropTypes.string,
}

export default HeaderNavigationUnlogged
