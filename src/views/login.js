import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderNavigationUnlogged from '../components/header-navigation-unlogged'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="page-wrapper login-page-wapper">
        <HeaderNavigationUnlogged></HeaderNavigationUnlogged>
        <main className="login main-wrapper">
          <section className="section-header">
            <div className="login-textandsupportingtext">
              <h1 className="login-text DisplayxsSemibold">
                <span>Log in to your account</span>
              </h1>
              <span className="login-text2 TextmdRegular">Welcome back!</span>
            </div>
          </section>
          <section className="login-actions">
            <a
              href="https://socious.io/"
              className="login-button TextmdSemibold button"
            >
              <span className="login-text3 TextmdSemibold">
                <span>Sign in</span>
              </span>
            </a>
            <div className="login-footerlinks">
              <div className="login-row">
                <span className="login-text5 TextsmRegular">
                  <span>Don’t have an account?</span>
                </span>
                <a href="https://socious.io/" className="login-button1">
                  <span className="login-text7 TextsmSemibold button-link">
                    <span>Sign up</span>
                  </span>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Login
