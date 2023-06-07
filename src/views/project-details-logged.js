import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import HeaderNavigationLogged from '../components/header-navigation-logged'
import Footer from '../components/footer'
import './project-details-logged.css'

const ProjectDetailsLogged = (props) => {
  return (
    <div className="project-details-logged-container">
      <Helmet>
        <title>project-details-logged - exported project</title>
        <meta
          property="og:title"
          content="project-details-logged - exported project"
        />
      </Helmet>
      <div className="page-wrapper project-details-logged-pagewrapper">
        <HeaderNavigationLogged rootClassName="header-navigation-logged-root-class-name4"></HeaderNavigationLogged>
        <main className="project-details-logged-main main-wrapper">
          <div className="content-wrapper">
            <div className="section-header">
              <div className="container">
                <Link
                  to="/projects-search-logged"
                  className="project-details-logged-button TextsmSemibold button-link"
                >
                  <img
                    alt="arrowleftI763"
                    src="/external/arrowlefti763-80v.svg"
                    className="project-details-logged-arrowleft"
                  />
                  <span className="project-details-logged-text TextsmSemibold">
                    <span>Back to projects</span>
                  </span>
                </Link>
                <div className="project-details-logged-content1">
                  <div className="project-details-logged-textandsupportingtext">
                    <h1 className="project-details-logged-text02 DisplayxsSemibold">
                      <span>Regenerative Agriculture in Cameroon</span>
                    </h1>
                    <span className="project-details-logged-text04 TextmdRegular">
                      <span>
                        The CAC supports farmers in Cameroon to revitalize their
                        communities through regenerative agriculture.
                      </span>
                    </span>
                  </div>
                  <div className="project-details-logged-location">
                    <img
                      alt="markerpin017636"
                      src="/external/markerpin017636-6dv.svg"
                      className="project-details-logged-markerpin01"
                    />
                    <span className="project-details-logged-text06 TextmdMedium">
                      <span>Kumba, Cameroon</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
            </div>
            <section className="section-profile">
              <div className="container">
                <div className="profile">
                  <div className="avatar">
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1596788068873-9ffd5cacd4c4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGZhcm1lciUyMGFmcmljYXxlbnwwfHx8fDE2ODU5NDgzNjJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1500"
                      className="project-details-logged-image"
                    />
                  </div>
                  <div className="project-details-logged-textandsupportingtext1">
                    <span className="project-details-logged-text08 TextlgSemibold">
                      Created by Yanick
                    </span>
                    <div className="badge">
                      <img
                        alt="shieldtickI763"
                        src="/external/shieldticki763-wqvk.svg"
                        className="project-details-logged-shieldtick"
                      />
                      <span className="project-details-logged-text09 TextsmMedium">
                        <span>Identity verified</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
            </section>
            <section className="section-details">
              <div className="project-details-logged-container3 container">
                <div className="project-details-logged-text11">
                  <h2 className="project-details-logged-text12 TextxlMedium">
                    <span>More about this loan</span>
                  </h2>
                  <p className="project-details-logged-text14 TextmdRegular">
                    <span>
                      The Cameroon Agriculture Cooperative engages farmers in
                      Southwest Cameroon who are revitalizing their communities
                      with economic empowerment in concert with sustainable
                      farming practices. Membership to the group is based on
                      ethical and sustainable practices of each farmer and in
                      turn, suppers farmers with funding opportunities,
                      networking and technical assistance.
                    </span>
                  </p>
                </div>
                <div className="project-details-logged-photos">
                  <div className="project-details-logged-image1">
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1596788068873-9ffd5cacd4c4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGZhcm1lciUyMGFmcmljYXxlbnwwfHx8fDE2ODU5NDgzNjJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1500"
                      className="project-details-logged-image2"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="sidebar">
            <div className="project-details-logged-container4 container">
              <div className="loan-details">
                <div className="project-details-logged-content2">
                  <div className="project-details-logged-details">
                    <div className="project-details-logged-detailswrap">
                      <div className="project-details-logged-textandsupportingtext2">
                        <span className="project-details-logged-text16 TextlgSemibold">
                          <span>20 days</span>
                        </span>
                        <div className="project-details-logged-textwrap">
                          <span className="project-details-logged-text18 TextsmRegular">
                            <span>Remaining</span>
                          </span>
                        </div>
                      </div>
                      <div className="project-details-logged-textandsupportingtext3">
                        <span className="project-details-logged-text20 TextlgSemibold">
                          <span>4000 USDT</span>
                        </span>
                        <div className="project-details-logged-textwrap1">
                          <span className="project-details-logged-text22 TextsmRegular">
                            <span>$ 4003.98</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="project-details-logged-progress">
                      <div className="project-details-logged-progressbar">
                        <div className="project-details-logged-progressbar1">
                          <div className="project-details-logged-progress1"></div>
                        </div>
                      </div>
                      <div className="project-details-logged-detailswrap1">
                        <div className="project-details-logged-textandicon">
                          <span className="project-details-logged-text24 TextsmRegular">
                            <span>20% funded</span>
                          </span>
                        </div>
                        <div className="project-details-logged-textandicon1">
                          <span className="project-details-logged-text26 TextsmRegular">
                            <span>3200 USDT to go</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="project-details-logged-detailswrap2">
                      <div className="project-details-logged-textandicon2">
                        <img
                          alt="clockfastforwardI439"
                          src="/external/clockfastforwardi439-q9uo.svg"
                          className="project-details-logged-clockfastforward"
                        />
                        <span className="project-details-logged-text28 TextmdMedium">
                          12 months
                        </span>
                      </div>
                      <div className="project-details-logged-textandicon3">
                        <img
                          alt="trendup01I439"
                          src="/external/trendup01i439-x8f.svg"
                          className="project-details-logged-trendup01"
                        />
                        <span className="project-details-logged-text29 TextmdMedium">
                          1.3% monthly interest
                        </span>
                      </div>
                    </div>
                    <div className="project-details-logged-inputfield">
                      <div className="project-details-logged-inputwithlabel">
                        <span className="project-details-logged-text30 TextsmMedium">
                          <span>Contribution amount</span>
                        </span>
                        <div className="project-details-logged-input">
                          <div className="project-details-logged-content3">
                            <input
                              type="number"
                              placeholder="1000"
                              className="project-details-logged-textinput TextmdRegular"
                            />
                          </div>
                          <div className="project-details-logged-dropdown">
                            <span className="project-details-logged-text32 TextmdRegular">
                              <span>USDT</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="project-details-logged-actions">
                      <button className="project-details-logged-button1 TextmdSemibold button">
                        <span className="project-details-logged-text34 TextmdSemibold">
                          <span>Lend now</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default ProjectDetailsLogged
