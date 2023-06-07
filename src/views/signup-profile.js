import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderNavigationUnlogged from '../components/header-navigation-unlogged'
import './signup-profile.css'

const SignupProfile = (props) => {
  return (
    <div className="signup-profile-container">
      <Helmet>
        <title>signup-profile - exported project</title>
        <meta property="og:title" content="signup-profile - exported project" />
      </Helmet>
      <div className="page-wrapper">
        <HeaderNavigationUnlogged></HeaderNavigationUnlogged>
        <main className="main-wrapper create-profile">
          <div className="signup-profile-container1 container">
            <section className="signup-profile-header section-header">
              <div className="signup-profile-textandsupportingtext">
                <span className="signup-profile-text DisplaymdSemibold">
                  Tell us about yourself
                </span>
                <span className="signup-profile-text01 TextmdRegular">
                  <span>
                    This information is used to get started. It does not leave
                    our systems and isn’t shared with anyone outside our
                    platform.
                  </span>
                </span>
              </div>
            </section>
            <div className="signup-profile-section section-form">
              <div className="signup-profile-form">
                <div className="signup-profile-inputfield">
                  <div className="signup-profile-inputwithlabel">
                    <span className="signup-profile-text03 TextsmMedium">
                      <span>Username</span>
                    </span>
                    <input
                      type="text"
                      placeholder="@username"
                      autoComplete="username"
                      className="signup-profile-textinput input TextmdRegular"
                    />
                  </div>
                </div>
                <div className="signup-profile-inputfield1">
                  <div className="signup-profile-inputwithlabel1">
                    <span className="signup-profile-text05 TextsmMedium">
                      <span>First Name (optional)</span>
                    </span>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      autoComplete="given-name"
                      className="signup-profile-textinput1 input TextmdRegular"
                    />
                  </div>
                </div>
                <div className="signup-profile-inputfield2">
                  <div className="signup-profile-inputwithlabel2">
                    <span className="signup-profile-text07 TextsmMedium">
                      <span>Last Name (optional)</span>
                    </span>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      autoComplete="family-name"
                      className="signup-profile-textinput2 TextmdRegular input"
                    />
                  </div>
                </div>
                <div className="signup-profile-inputdropdown">
                  <div className="signup-profile-inputwithlabel3">
                    <span className="signup-profile-text09 TextsmMedium">
                      <span>Location (optional)</span>
                    </span>
                    <select
                      autoComplete="country"
                      className="signup-profile-select input"
                    >
                      <option value="Country" selected>
                        Country
                      </option>
                      <option value="Japan">Japan</option>
                      <option value="New Option">New Option</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="signup-profile-actions">
                <a
                  href="https://socious.io/"
                  className="signup-profile-button TextmdSemibold button"
                >
                  <span className="signup-profile-text11 TextmdSemibold">
                    Continue
                  </span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SignupProfile
