import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderNavigationLogged from '../components/header-navigation-logged'
import Footer from '../components/footer'
import './connect-wallet-step2.css'

const ConnectWalletStep2 = (props) => {
  return (
    <div className="connect-wallet-step2-container">
      <Helmet>
        <title>connect-wallet-step2 - exported project</title>
        <meta
          property="og:title"
          content="connect-wallet-step2 - exported project"
        />
      </Helmet>
      <div className="page-wrapper">
        <HeaderNavigationLogged rootClassName="header-navigation-logged-root-class-name6"></HeaderNavigationLogged>
        <div className="connect-wallet-step2-main main-wrapper">
          <div className="connect-wallet-step2-container1 create-project container">
            <div className="section-header">
              <div className="connect-wallet-step2-textandsupportingtext">
                <h1 className="connect-wallet-step2-text DisplaymdSemibold">
                  Connect a wallet
                </h1>
                <span className="connect-wallet-step2-text01 TextlgRegular">
                  There is not wallet connected to your account.
                </span>
              </div>
            </div>
            <div className="section-form">
              <div className="connect-wallet-step2-form">
                <div className="connect-wallet-step2-formfields">
                  <div className="card">
                    <div className="connect-wallet-step2-inputfield">
                      <div className="connect-wallet-step2-inputwithlabel">
                        <span className="connect-wallet-step2-text02 TextsmMedium">
                          <span>Your wallet address</span>
                        </span>
                        <div className="connect-wallet-step2-input">
                          <div className="connect-wallet-step2-content">
                            <input
                              type="text"
                              placeholder="0x09750ad...360fdb7"
                              className="connect-wallet-step2-textinput TextmdRegular"
                            />
                          </div>
                          <button className="connect-wallet-step2-button">
                            <img
                              alt="copy01I763"
                              src="/external/copy01i763-vilj.svg"
                              className="connect-wallet-step2-copy01"
                            />
                            <span className="connect-wallet-step2-text04 TextsmSemibold">
                              <span>Copy</span>
                            </span>
                          </button>
                        </div>
                      </div>
                      <span className="connect-wallet-step2-text06 TextsmRegular">
                        <span>
                          This is the address where you will receive your loan
                          once your project is funded
                        </span>
                      </span>
                    </div>
                    <button className="connect-wallet-step2-button1">
                      <span className="connect-wallet-step2-text08 TextmdSemibold">
                        <span>Disconnect wallet</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="connect-wallet-step2-actions">
                <button className="connect-wallet-step2-button2 TextmdSemibold button">
                  <span className="connect-wallet-step2-text10 TextmdSemibold">
                    Lend 1000 USDT to Yanick
                  </span>
                </button>
                <button className="connect-wallet-step2-button3 button-secondary-gray">
                  <span className="connect-wallet-step2-text11 TextmdSemibold">
                    Back
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
    </div>
  )
}

export default ConnectWalletStep2
