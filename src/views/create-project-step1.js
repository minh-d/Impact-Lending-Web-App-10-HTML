import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderNavigationLogged from '../components/header-navigation-logged'
import Footer from '../components/footer'
import './create-project-step1.css'

const CreateProjectStep1 = (props) => {
  return (
    <div className="create-project-step1-container">
      <Helmet>
        <title>create-project-step1 - exported project</title>
        <meta
          property="og:title"
          content="create-project-step1 - exported project"
        />
      </Helmet>
      <div className="page-wrapper">
        <HeaderNavigationLogged rootClassName="header-navigation-logged-root-class-name3"></HeaderNavigationLogged>
        <div className="create-project-step1-main main-wrapper">
          <div className="create-project-step1-container1 create-project container">
            <div className="section-header">
              <div className="create-project-step1-textandsupportingtext">
                <h1 className="create-project-step1-text DisplaymdSemibold">
                  <span>First, let’s get you set up</span>
                </h1>
                <span className="create-project-step1-text02 TextlgRegular">
                  <span>
                    Make it easy for people to learn about your project.
                  </span>
                </span>
              </div>
            </div>
            <div className="section-form">
              <div className="create-project-step1-form">
                <div className="create-project-step1-formfields">
                  <div className="create-project-step1-inputfield">
                    <div className="create-project-step1-inputwithlabel">
                      <span className="create-project-step1-text04 TextsmMedium">
                        Project title
                      </span>
                      <input
                        type="text"
                        placeholder="Your project title"
                        className="input TextmdRegular"
                      />
                    </div>
                  </div>
                  <div className="create-project-step1-inputfield1">
                    <div className="create-project-step1-inputwithlabel1">
                      <span className="create-project-step1-text05 TextsmMedium">
                        Subtitle
                      </span>
                      <input
                        type="text"
                        placeholder="Your project short description"
                        className="input TextmdRegular"
                      />
                    </div>
                    <span className="create-project-step1-text06 TextsmRegular">
                      <span>
                        Write a clear, brief title and subtitle to help people
                        quickly understand your project. Both will appear on
                        your project and pre-launch pages.
                      </span>
                    </span>
                  </div>
                  <div className="create-project-step1-inputfield2">
                    <div className="create-project-step1-inputwithlabel2">
                      <span className="create-project-step1-text08 TextsmMedium">
                        <span>Location</span>
                      </span>
                      <input
                        type="text"
                        placeholder="Start typing a location..."
                        autoComplete="country"
                        className="TextmdRegular input"
                      />
                    </div>
                  </div>
                  <div className="create-project-step1-textareainputfield">
                    <div className="create-project-step1-inputwithlabel3">
                      <span className="create-project-step1-text10 TextsmMedium">
                        <span>Description</span>
                      </span>
                      <textarea
                        rows="4"
                        placeholder="Describe your project"
                        className="textarea TextmdRegular"
                      ></textarea>
                    </div>
                  </div>
                  <div className="create-project-step1-inputwithlabel4">
                    <span className="create-project-step1-text12 TextsmMedium">
                      <span>Photos</span>
                    </span>
                    <div className="create-project-step1-fileupload">
                      <div className="create-project-step1-frame-fileuploadbase">
                        <div className="create-project-step1-content">
                          <div className="create-project-step1-featuredicon">
                            <img
                              alt="uploadcloud02I763"
                              src="/external/uploadcloud02i763-40n2.svg"
                              className="create-project-step1-uploadcloud02"
                            />
                          </div>
                          <div className="create-project-step1-textandsupportingtext1">
                            <div className="create-project-step1-action">
                              <button className="create-project-step1-button">
                                <span className="create-project-step1-text14 TextsmSemibold">
                                  <span>Click to upload</span>
                                </span>
                              </button>
                              <span className="create-project-step1-text16 TextsmRegular">
                                <span>or drag and drop</span>
                              </span>
                            </div>
                            <span className="create-project-step1-text18 TextxsRegular">
                              <span>PNG, JPG or GIF</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="create-project-step1-inputfield3">
                    <div className="create-project-step1-inputwithlabel5">
                      <span className="create-project-step1-text20 TextsmMedium">
                        <span>Video link (Youtube, Vimeo)</span>
                      </span>
                      <input
                        type="text"
                        placeholder="Video URL"
                        autoComplete="url"
                        className="TextmdRegular input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="create-project-step1-actions">
                <button className="create-project-step1-button1 TextmdSemibold button">
                  <span className="create-project-step1-text22 TextmdSemibold">
                    <span>Save and continue</span>
                  </span>
                </button>
                <button className="create-project-step1-button2 button-secondary-gray">
                  <span className="create-project-step1-text24 TextmdSemibold">
                    <span>Cancel</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
    </div>
  )
}

export default CreateProjectStep1
