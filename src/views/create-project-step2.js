import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderNavigationLogged from '../components/header-navigation-logged'
import Footer from '../components/footer'
import './create-project-step2.css'

const CreateProjectStep2 = (props) => {
  return (
    <div className="create-project-step2-container">
      <Helmet>
        <title>create-project-step2 - exported project</title>
        <meta
          property="og:title"
          content="create-project-step2 - exported project"
        />
      </Helmet>
      <div className="page-wrapper">
        <HeaderNavigationLogged rootClassName="header-navigation-logged-root-class-name1"></HeaderNavigationLogged>
        <div className="create-project-step2-main main-wrapper">
          <div className="create-project-step2-container1 create-project container">
            <div className="section-header">
              <div className="create-project-step2-textandsupportingtext">
                <h1 className="create-project-step2-text DisplaymdSemibold">
                  <span>Now, let&apos;s define your funding goal</span>
                  <br></br>
                </h1>
                <span className="create-project-step2-text03 TextlgRegular">
                  Make it easy for people to learn about your project.
                </span>
              </div>
            </div>
            <div className="section-form">
              <div className="create-project-step2-form">
                <div className="create-project-step2-formfields">
                  <div className="create-project-step2-inputfield">
                    <div className="create-project-step2-inputwithlabel">
                      <span className="create-project-step2-text04 TextsmMedium">
                        Loan amount
                      </span>
                      <div className="create-project-step2-input">
                        <div className="create-project-step2-content">
                          <input
                            type="number"
                            placeholder="1000"
                            className="create-project-step2-textinput TextmdRegular"
                          />
                        </div>
                        <div className="create-project-step2-dropdown">
                          <span className="create-project-step2-text05 TextmdRegular">
                            <span>USDT</span>
                          </span>
                        </div>
                      </div>
                      <span className="create-project-step2-text07 TextsmRegular">
                        $ 4,001.79 USD
                      </span>
                    </div>
                  </div>
                  <div className="create-project-step2-inputfield1">
                    <div className="create-project-step2-inputwithlabel1">
                      <span className="create-project-step2-text08 TextsmMedium">
                        Repayment period
                      </span>
                      <select className="input">
                        <option value="6 months">6 months</option>
                        <option value="12 months">12 months</option>
                        <option value="24 months">24 months</option>
                        <option value="18 months">18 months</option>
                      </select>
                    </div>
                    <span className="create-project-step2-text09 TextsmRegular">
                      Fixed 1.3% monthly interest rate
                    </span>
                  </div>
                  <div className="card">
                    <div className="create-project-step2-container2">
                      <span className="create-project-step2-text10 TextsmMedium">
                        <span>Monthly cost for 12 months</span>
                      </span>
                      <div className="create-project-step2-numberandbadge">
                        <span className="create-project-step2-text12 DisplaysmSemibold">
                          <span>368.64 USDT</span>
                        </span>
                      </div>
                      <span className="create-project-step2-text14 TextsmRegular">
                        <span>
                          You are borrowing 4000 USDT over 12 months at 1.3%
                          monthly interest rate with a total loan cost of
                          4423.68 USDT.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="create-project-step2-actions">
                <button className="create-project-step2-button TextmdSemibold button">
                  <span className="create-project-step2-text16 TextmdSemibold">
                    Connect a wallet
                  </span>
                </button>
                <button className="create-project-step2-button1 button-secondary-gray">
                  <span className="create-project-step2-text17 TextmdSemibold">
                    <span>Cancel</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
    </div>
  )
}

export default CreateProjectStep2
