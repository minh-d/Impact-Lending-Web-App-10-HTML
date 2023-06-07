import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderNavigationUnlogged from '../components/header-navigation-unlogged'
import './signup.css'

const Signup = (props) => {
  return (
    <div className="signup-container">
      <Helmet>
        <title>signup - exported project</title>
        <meta property="og:title" content="signup - exported project" />
      </Helmet>
      <div className="page-wrapper signup-page-wapper">
        <HeaderNavigationUnlogged></HeaderNavigationUnlogged>
        <main className="login main-wrapper">
          <section className="section-header">
            <div className="signup-textandsupportingtext">
              <h1 className="signup-text DisplayxsSemibold">
                Create your account
              </h1>
              <span className="signup-text1 TextmdRegular">
                Join a community of changemakers
              </span>
            </div>
          </section>
          <section className="signup-actions">
            <a
              href="https://socious.io/"
              className="signup-button TextmdSemibold button"
            >
              <span className="signup-text2 TextmdSemibold">Get started</span>
            </a>
            <div className="signup-footerlinks">
              <div className="signup-row">
                <span className="signup-text3 TextsmRegular">
                  Have already an account?
                </span>
                <a href="https://socious.io/" className="signup-button1">
                  <span className="TextsmSemibold button-link">Sign in</span>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Signup
