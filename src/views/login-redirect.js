import React from 'react'

import { Helmet } from 'react-helmet'

import './login-redirect.css'

const LoginRedirect = (props) => {
  return (
    <div className="login-redirect-container">
      <Helmet>
        <title>login-redirect - exported project</title>
        <meta property="og:title" content="login-redirect - exported project" />
      </Helmet>
      <div className="login-redirect-page-wrapper page-wrapper">
        <div className="blur"></div>
        <div className="login-redirect-modal modal">
          <div className="login-redirect-container1 modal_container">
            <div className="modal-header">
              <div className="featured-icon">
                <img
                  alt="lock01I763"
                  src="/external/lock01i763-kp2.svg"
                  className="login-redirect-lock01"
                />
              </div>
              <div className="login-redirect-textandsupportingtext">
                <span className="login-redirect-text TextlgSemibold">
                  Sign in with your Decentralized ID
                </span>
                <span className="login-redirect-text01 TextsmRegular">
                  To sign in click the button to continue to the ProofSpace app.
                </span>
              </div>
              <div className="login-redirect-loading">
                <img
                  alt="SVGLoadinganim7637"
                  src="/external/svgloadinganim7637-s4wg.svg"
                  className="login-redirect-sv-loadinganim"
                />
                <span className="login-redirect-text02 TextsmRegular">
                  <span>
                    This page should refresh automatically once confirmed by
                    your app.
                  </span>
                  <br></br>
                  <span>If it doesn’t refresh click here.</span>
                </span>
              </div>
              <button className="login-redirect-buttonclose-x">
                <img
                  alt="xcloseI763"
                  src="/external/xclosei763-d67.svg"
                  className="login-redirect-xclose"
                />
              </button>
            </div>
            <div className="login-redirect-frame-modalactions modal-actions">
              <a
                href="https://socious.io/"
                target="_blank"
                rel="noreferrer noopener"
                className="login-redirect-socialbutton social-button"
              >
                <img
                  alt="SocialiconI763"
                  src="/external/socialiconi763-3mh.svg"
                  className="login-redirect-socialicon"
                />
                <span className="login-redirect-text06 TextmdSemibold">
                  <span>Sign in with ProofSpace</span>
                </span>
              </a>
            </div>
            <div className="login-redirect-frame-modalactions1 modal-actions">
              <div className="login-redirect-content">
                <div className="login-redirect-wrap">
                  <span className="login-redirect-text08 TextlgSemibold">
                    <span>Get ProofSpace app</span>
                  </span>
                  <div className="login-redirect-actions">
                    <a
                      href="https://apps.apple.com/us/app/proofspace/id1512258409"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="login-redirect-link"
                    >
                      <img
                        alt="Mobileappstorebadge7637"
                        src="/external/mobileappstorebadge7637-ngj9.svg"
                        className="login-redirect-mobileappstorebadge"
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=io.zaka.app&amp;pli=1"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="login-redirect-link1"
                    >
                      <img
                        alt="Mobileappstorebadge7637"
                        src="/external/mobileappstorebadge7637-1fvq.svg"
                        className="login-redirect-mobileappstorebadge1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginRedirect
