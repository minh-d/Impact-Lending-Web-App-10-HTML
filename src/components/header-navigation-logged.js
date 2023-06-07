import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header-navigation-logged.css'

const HeaderNavigationLogged = (props) => {
  return (
    <header
      className={`header-navigation-logged-headernavigation navbar-component ${props.rootClassName} `}
    >
      <div
        data-role="Header"
        className="header-navigation-logged-header navbar-container"
      >
        <Link
          to="/projects-search-logged"
          className="header-navigation-logged-navlink"
        >
          <div className="header-navigation-logged-logo logo">
            <div className="logomark">
              <img
                alt={props.Content_alt12}
                src={props.Content_src12}
                className="header-navigation-logged-image"
              />
            </div>
          </div>
        </Link>
        <nav className="header-navigation-logged-nav navbar">
          <div className="header-navigation-logged-left navbar-menu-left">
            <a
              href={props.link_url}
              target="_blank"
              rel="noreferrer noopener"
              className="TextmdSemibold navbar-link"
            >
              {props.text1}
            </a>
            <a
              href={props.link_text11}
              target="_blank"
              rel="noreferrer noopener"
              className="TextmdSemibold navbar-link"
            >
              {props.text3}
            </a>
          </div>
          <div className="navbar-menu-right">
            <a
              href={props.link_text}
              target="_blank"
              rel="noreferrer noopener"
              className="TextmdSemibold button"
            >
              {props.text}
            </a>
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

HeaderNavigationLogged.defaultProps = {
  Content_src121:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/57798a7d-7487-4bc2-bbd7-6ad6e0be8c51/892e3892-71f8-4747-a8cb-c9769db3ac7e?org_if_sml=12337',
  link_text1: 'https://example.com',
  text32: 'My loans',
  text11: 'My projects',
  link_text12: 'https://example.com',
  Content_alt12: 'ContentI763',
  Content_alt121: 'ContentI763',
  link_text111: 'https://example.com',
  menu02_src1: '/external/menu02i763-3oc9.svg',
  text: 'Start a project',
  link_text11: 'https://example.com',
  link_text: 'https://example.com',
  text21: 'Start a project',
  text31: 'My loans',
  Content_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/57798a7d-7487-4bc2-bbd7-6ad6e0be8c51/892e3892-71f8-4747-a8cb-c9769db3ac7e?org_if_sml=12337',
  menu02_src12: '/external/menu02i763-3oc9.svg',
  link_text2: 'https://example.com',
  menu02_alt11: 'menu02I763',
  Content_src11:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/57798a7d-7487-4bc2-bbd7-6ad6e0be8c51/892e3892-71f8-4747-a8cb-c9769db3ac7e?org_if_sml=12337',
  Content_src12: '/external/contenti763-n5sa.svg',
  Content_alt11: 'ContentI763',
  text3: 'My loans',
  text2: 'Start a project',
  text4: 'Start a project',
  menu02_alt13: 'menu02I763',
  menu02_alt12: 'menu02I763',
  menu02_src11: '/external/menu02i763-3oc9.svg',
  Content_alt122: 'ContentI763',
  link_url: 'https://example.com',
  text1: 'My projects',
  Content_src122:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/57798a7d-7487-4bc2-bbd7-6ad6e0be8c51/892e3892-71f8-4747-a8cb-c9769db3ac7e?org_if_sml=12337',
  link_url2: 'https://example.com',
  link_url1: 'https://example.com',
  rootClassName: '',
  menu02_alt14: 'menu02I763',
  link_text112: 'https://example.com',
  menu02_src13: '/external/menu02i763-3oc9.svg',
  menu02_src14:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/57798a7d-7487-4bc2-bbd7-6ad6e0be8c51/89dfde96-9fcd-43ea-a486-150bbaa24886?org_if_sml=1220',
  menu02_alt1: 'menu02I763',
  Content_alt1: 'ContentI763',
  text12: 'My projects',
}

HeaderNavigationLogged.propTypes = {
  Content_src121: PropTypes.string,
  link_text1: PropTypes.string,
  text32: PropTypes.string,
  text11: PropTypes.string,
  link_text12: PropTypes.string,
  Content_alt12: PropTypes.string,
  Content_alt121: PropTypes.string,
  link_text111: PropTypes.string,
  menu02_src1: PropTypes.string,
  text: PropTypes.string,
  link_text11: PropTypes.string,
  link_text: PropTypes.string,
  text21: PropTypes.string,
  text31: PropTypes.string,
  Content_src1: PropTypes.string,
  menu02_src12: PropTypes.string,
  link_text2: PropTypes.string,
  menu02_alt11: PropTypes.string,
  Content_src11: PropTypes.string,
  Content_src12: PropTypes.string,
  Content_alt11: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  menu02_alt13: PropTypes.string,
  menu02_alt12: PropTypes.string,
  menu02_src11: PropTypes.string,
  Content_alt122: PropTypes.string,
  link_url: PropTypes.string,
  text1: PropTypes.string,
  Content_src122: PropTypes.string,
  link_url2: PropTypes.string,
  link_url1: PropTypes.string,
  rootClassName: PropTypes.string,
  menu02_alt14: PropTypes.string,
  link_text112: PropTypes.string,
  menu02_src13: PropTypes.string,
  menu02_src14: PropTypes.string,
  menu02_alt1: PropTypes.string,
  Content_alt1: PropTypes.string,
  text12: PropTypes.string,
}

export default HeaderNavigationLogged
