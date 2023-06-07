import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import HeaderNavigationUnlogged from '../components/header-navigation-unlogged'
import Footer from '../components/footer'
import './project-details-unlogged.css'

const ProjectDetailsUnlogged = (props) => {
  return (
    <div className="project-details-unlogged-container">
      <Helmet>
        <title>project-details-unlogged - exported project</title>
        <meta
          property="og:title"
          content="project-details-unlogged - exported project"
        />
      </Helmet>
      <div className="page-wrapper project-details-unlogged-pagewrapper">
        <HeaderNavigationUnlogged rootClassName="header-navigation-unlogged-root-class-name1"></HeaderNavigationUnlogged>
        <main className="project-details-unlogged-main main-wrapper">
          <div className="content-wrapper">
            <div className="section-header">
              <div className="container">
                <Link
                  to="/project-details-unlogged"
                  className="project-details-unlogged-button TextsmSemibold button-link"
                >
                  <img
                    alt="arrowleftI763"
                    src="/external/arrowlefti763-80v.svg"
                    className="project-details-unlogged-arrowleft"
                  />
                  <span className="project-details-unlogged-text TextsmSemibold">
                    <span>Back to projects</span>
                  </span>
                </Link>
                <div className="project-details-unlogged-content1">
                  <div className="project-details-unlogged-textandsupportingtext">
                    <h1 className="project-details-unlogged-text02 DisplayxsSemibold">
                      <span>Regenerative Agriculture in Cameroon</span>
                    </h1>
                    <span className="project-details-unlogged-text04 TextmdRegular">
                      <span>
                        The CAC supports farmers in Cameroon to revitalize their
                        communities through regenerative agriculture.
                      </span>
                    </span>
                  </div>
                  <div className="project-details-unlogged-location">
                    <img
                      alt="markerpin017636"
                      src="/external/markerpin017636-6dv.svg"
                      className="project-details-unlogged-markerpin01"
                    />
                    <span className="project-details-unlogged-text06 TextmdMedium">
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
                      className="project-details-unlogged-image"
                    />
                  </div>
                  <div className="project-details-unlogged-textandsupportingtext1">
                    <span className="project-details-unlogged-text08 TextlgSemibold">
                      Created by Yanick
                    </span>
                    <div className="badge">
                      <img
                        alt="shieldtickI763"
                        src="/external/shieldticki763-wqvk.svg"
                        className="project-details-unlogged-shieldtick"
                      />
                      <span className="project-details-unlogged-text09 TextsmMedium">
                        <span>Identity verified</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
            </section>
            <section className="section-details">
              <div className="project-details-unlogged-container3 container">
                <div className="project-details-unlogged-text11">
                  <h2 className="project-details-unlogged-text12 TextxlMedium">
                    <span>More about this loan</span>
                  </h2>
                  <p className="project-details-unlogged-text14 TextmdRegular">
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
                <div className="project-details-unlogged-photos">
                  <figure className="project-details-unlogged-image1">
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1596788068873-9ffd5cacd4c4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGZhcm1lciUyMGFmcmljYXxlbnwwfHx8fDE2ODU5NDgzNjJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1500"
                      className="project-details-unlogged-image2"
                    />
                  </figure>
                </div>
              </div>
            </section>
          </div>
          <div className="sidebar">
            <div className="project-details-unlogged-container4 container">
              <div className="loan-details">
                <div className="project-details-unlogged-content2">
                  <div className="project-details-unlogged-details">
                    <div className="project-details-unlogged-detailswrap">
                      <div className="project-details-unlogged-textandsupportingtext2">
                        <span className="project-details-unlogged-text16 TextlgSemibold">
                          <span>20 days</span>
                        </span>
                        <div className="project-details-unlogged-textwrap">
                          <span className="project-details-unlogged-text18 TextsmRegular">
                            <span>Remaining</span>
                          </span>
                        </div>
                      </div>
                      <div className="project-details-unlogged-textandsupportingtext3">
                        <span className="project-details-unlogged-text20 TextlgSemibold">
                          <span>4000 USDT</span>
                        </span>
                        <div className="project-details-unlogged-textwrap1">
                          <span className="project-details-unlogged-text22 TextsmRegular">
                            <span>$ 4003.98</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="project-details-unlogged-progress">
                      <div className="project-details-unlogged-progressbar">
                        <div className="project-details-unlogged-progressbar1">
                          <div className="project-details-unlogged-progress1"></div>
                        </div>
                      </div>
                      <div className="project-details-unlogged-detailswrap1">
                        <div className="project-details-unlogged-textandicon">
                          <span className="project-details-unlogged-text24 TextsmRegular">
                            <span>20% funded</span>
                          </span>
                        </div>
                        <div className="project-details-unlogged-textandicon1">
                          <span className="project-details-unlogged-text26 TextsmRegular">
                            <span>3200 USDT to go</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="project-details-unlogged-detailswrap2">
                      <div className="project-details-unlogged-textandicon2">
                        <img
                          alt="clockfastforwardI439"
                          src="/external/clockfastforwardi439-q9uo.svg"
                          className="project-details-unlogged-clockfastforward"
                        />
                        <span className="project-details-unlogged-text28 TextmdMedium">
                          12 months
                        </span>
                      </div>
                      <div className="project-details-unlogged-textandicon3">
                        <img
                          alt="trendup01I439"
                          src="/external/trendup01i439-x8f.svg"
                          className="project-details-unlogged-trendup01"
                        />
                        <span className="project-details-unlogged-text29 TextmdMedium">
                          1.3% monthly interest
                        </span>
                      </div>
                    </div>
                    <div className="project-details-unlogged-inputfield">
                      <div className="project-details-unlogged-inputwithlabel">
                        <span className="project-details-unlogged-text30 TextsmMedium">
                          <span>Contribution amount</span>
                        </span>
                        <div className="project-details-unlogged-input">
                          <div className="project-details-unlogged-content3">
                            <input
                              type="number"
                              placeholder="1000"
                              className="project-details-unlogged-textinput TextmdRegular"
                            />
                          </div>
                          <div className="project-details-unlogged-dropdown">
                            <span className="project-details-unlogged-text32 TextmdRegular">
                              <span>USDT</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="project-details-unlogged-actions">
                      <button className="project-details-unlogged-button1 TextmdSemibold button">
                        <span className="project-details-unlogged-text34 TextmdSemibold">
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

export default ProjectDetailsUnlogged
