import React from 'react'

import { Helmet } from 'react-helmet'

import './login-modal.css'

const LoginModal = (props) => {
  return (
    <div className="login-modal-container">
      <Helmet>
        <title>login-modal - exported project</title>
        <meta property="og:title" content="login-modal - exported project" />
      </Helmet>
      <div className="login-modal-page-wrapper page-wrapper">
        <div className="blur"></div>
        <div className="login-modal-modal modal">
          <div className="login-modal-container1 modal_container">
            <div className="modal-header login-modal-frame-modalheader">
              <div className="featured-icon">
                <img
                  alt="lock01I763"
                  src="/external/lock01i763-kp2.svg"
                  className="login-modal-lock01"
                />
              </div>
              <div className="login-modal-textandsupportingtext">
                <span className="login-modal-text TextlgSemibold">
                  Sign in with your Decentralized ID
                </span>
                <div className="alert">
                  <div className="login-modal-textandsupportingtext1">
                    <img
                      alt="infocircle7637"
                      src="/external/infocircle7637-k2xn.svg"
                      className="login-modal-infocircle"
                    />
                    <span className="login-modal-text01 TextsmRegular">
                      <span>
                        We’ve partnered with ProofSpace/Atala Prism
                        Decentralized ID for secure sign-ins and sign-ups,
                        providing users with top-notch privacy and control.
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        ProofSpace is an identification verification tool used
                        by security-conscious entities such as the United
                        Nations Development Program, the World Health
                        Organization, and Microsoft.
                      </span>
                    </span>
                  </div>
                </div>
                <span className="login-modal-text06">
                  To sign in click the button to continue to the ProofSpace app.
                </span>
              </div>
              <button className="login-modal-buttonclose-x">
                <img
                  alt="xcloseI763"
                  src="/external/xclosei763-d67.svg"
                  className="login-modal-xclose"
                />
              </button>
            </div>
            <div className="login-modal-frame-modalactions modal-actions">
              <a
                href="https://socious.io/"
                target="_blank"
                rel="noreferrer noopener"
                className="login-modal-socialbutton social-button"
              >
                <img
                  alt="SocialiconI763"
                  src="/external/socialiconi763-3mh.svg"
                  className="login-modal-socialicon"
                />
                <span className="login-modal-text07 TextmdSemibold">
                  <span>Sign in with ProofSpace</span>
                </span>
              </a>
            </div>
            <div className="login-modal-frame-modalactions1 modal-actions">
              <div className="login-modal-content">
                <div className="login-modal-wrap">
                  <span className="login-modal-text09 TextlgSemibold">
                    <span>Get ProofSpace app</span>
                  </span>
                  <div className="login-modal-actions">
                    <a
                      href="https://apps.apple.com/us/app/proofspace/id1512258409"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="login-modal-link"
                    >
                      <img
                        alt="Mobileappstorebadge7637"
                        src="/external/mobileappstorebadge7637-ngj9.svg"
                        className="login-modal-mobileappstorebadge"
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=io.zaka.app&amp;pli=1"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="login-modal-link1"
                    >
                      <img
                        alt="Mobileappstorebadge7637"
                        src="/external/mobileappstorebadge7637-1fvq.svg"
                        className="login-modal-mobileappstorebadge1"
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

export default LoginModal
