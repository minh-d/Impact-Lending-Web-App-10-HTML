import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderNavigationLogged from '../components/header-navigation-logged'
import Footer from '../components/footer'
import './create-project-lp.css'

const CreateProjectLp = (props) => {
  return (
    <div className="create-project-lp-container">
      <Helmet>
        <title>create-project-lp - exported project</title>
        <meta
          property="og:title"
          content="create-project-lp - exported project"
        />
      </Helmet>
      <div className="page-wrapper create-project-lp-page-wapper">
        <HeaderNavigationLogged rootClassName="header-navigation-logged-root-class-name2"></HeaderNavigationLogged>
        <div className="create-project-lp-main main-wrapper">
          <section className="create-project container">
            <div className="create-project-lp-content">
              <div className="create-project-lp-headingandsupportingtext">
                <div className="create-project-lp-headingandbadge">
                  <span className="create-project-lp-text DisplaymdSemibold">
                    <span>Loans designed around you</span>
                  </span>
                </div>
                <span className="create-project-lp-text02 TextxlRegular">
                  <span>Bring your project into life.</span>
                  <br></br>
                  <span>Apply in minutes, Get funded today!</span>
                </span>
              </div>
              <div className="create-project-lp-actions">
                <button className="create-project-lp-button button-secondary-gray">
                  <span className="create-project-lp-text06 TextmdSemibold">
                    <span>Learn more</span>
                  </span>
                </button>
                <button className="create-project-lp-button1 TextmdSemibold button">
                  <span className="create-project-lp-text08 TextmdSemibold">
                    <span>Get started</span>
                  </span>
                </button>
              </div>
            </div>
          </section>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
    </div>
  )
}

export default CreateProjectLp
