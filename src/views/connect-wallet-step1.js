import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderNavigationLogged from '../components/header-navigation-logged'
import Footer from '../components/footer'
import './connect-wallet-step1.css'

const ConnectWalletStep1 = (props) => {
  return (
    <div className="connect-wallet-step1-container">
      <Helmet>
        <title>connect-wallet-step1 - exported project</title>
        <meta
          property="og:title"
          content="connect-wallet-step1 - exported project"
        />
      </Helmet>
      <div className="page-wrapper">
        <HeaderNavigationLogged rootClassName="header-navigation-logged-root-class-name5"></HeaderNavigationLogged>
        <div className="connect-wallet-step1-main main-wrapper">
          <div className="connect-wallet-step1-container1 create-project container">
            <div className="section-header">
              <div className="connect-wallet-step1-textandsupportingtext">
                <h1 className="connect-wallet-step1-text DisplaymdSemibold">
                  Connect a wallet
                </h1>
                <span className="connect-wallet-step1-text1 TextlgRegular">
                  There is not wallet connected to your account.
                </span>
              </div>
            </div>
            <div className="section-form">
              <div className="connect-wallet-step1-form">
                <div className="connect-wallet-step1-formfields"></div>
              </div>
              <div className="connect-wallet-step1-actions">
                <button className="connect-wallet-step1-walletbutton button-secondary-gray">
                  <div className="connect-wallet-step1-walleticon">
                    <div className="connect-wallet-step1-group">
                      <img
                        alt="VectorI763"
                        src="/external/vectori763-p3z9.svg"
                        className="connect-wallet-step1-vector"
                      />
                      <img
                        alt="VectorI763"
                        src="/external/vectori763-vdy.svg"
                        className="connect-wallet-step1-vector1"
                      />
                    </div>
                  </div>
                  <span className="connect-wallet-step1-text2 TextmdSemibold">
                    <span>WalletConnect</span>
                  </span>
                </button>
                <button className="connect-wallet-step1-button button-secondary-gray">
                  <span className="connect-wallet-step1-text4 TextmdSemibold">
                    Back
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
    </div>
  )
}

export default ConnectWalletStep1
