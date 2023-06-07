import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import HeaderNavigationLogged from '../components/header-navigation-logged'
import Footer from '../components/footer'
import './projects-search-logged.css'

const ProjectsSearchLogged = (props) => {
  return (
    <div className="projects-search-logged-container">
      <Helmet>
        <title>projects-search-logged - exported project</title>
        <meta
          property="og:title"
          content="projects-search-logged - exported project"
        />
      </Helmet>
      <div className="page-wrapper">
        <HeaderNavigationLogged rootClassName="header-navigation-logged-root-class-name"></HeaderNavigationLogged>
        <main className="projects-search-logged-main main-wrapper">
          <section className="section-header">
            <div className="container">
              <div className="projects-search-logged-content">
                <div className="projects-search-logged-textandsupportingtext">
                  <span className="projects-search-logged-text TextxlSemibold">
                    232 projects posted
                  </span>
                  <span className="projects-search-logged-text01 TextmdRegular">
                    Find a loan
                  </span>
                </div>
              </div>
            </div>
            <div className="divider"></div>
          </section>
          <section className="projects-list">
            <div className="projects-search-logged-container2 container">
              <div className="projects-search-logged-filtersbar">
                <div className="projects-search-logged-inputdropdown">
                  <div className="projects-search-logged-inputwithlabel">
                    <input
                      type="text"
                      placeholder="Keyword"
                      className="projects-search-logged-textinput input TextmdRegular"
                    />
                  </div>
                </div>
                <div className="projects-search-logged-inputdropdown1">
                  <div className="projects-search-logged-inputwithlabel1">
                    <input
                      type="text"
                      value="Cameroon, CM"
                      placeholder="Country"
                      autoComplete="country"
                      className="projects-search-logged-textinput1 input TextmdRegular"
                    />
                  </div>
                </div>
              </div>
              <div className="projects-search-logged-content1">
                <div className="projects-search-logged-buttongroup">
                  <button className="projects-search-logged-frame-buttongroupbase TextmdRegular">
                    <span className="projects-search-logged-text02 TextsmSemibold">
                      Sort by date
                    </span>
                  </button>
                </div>
                <div className="projects-search-logged-buttongroup1">
                  <button className="projects-search-logged-frame-buttongroupbase1">
                    <img
                      alt="listI763"
                      src="/external/listi763-8a1i.svg"
                      className="projects-search-logged-list"
                    />
                  </button>
                  <button className="projects-search-logged-frame-buttongroupbase2">
                    <img
                      alt="markerpin02I763"
                      src="/external/markerpin02i763-92s.svg"
                      className="projects-search-logged-markerpin02"
                    />
                  </button>
                </div>
              </div>
              <div className="projects-search-logged-results">
                <Link
                  to="/project-details-logged"
                  className="projects-search-logged-navlink"
                >
                  <div className="project-item">
                    <div className="projects-search-logged-image">
                      <div className="projects-search-logged-image1">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1596788068873-9ffd5cacd4c4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGZhcm1lciUyMGFmcmljYXxlbnwwfHx8fDE2ODU5NDgzNjJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1400"
                          className="projects-search-logged-image2"
                        />
                      </div>
                      <div className="projects-search-logged-overlay"></div>
                      <div className="projects-search-logged-badge">
                        <img
                          alt="CMI763"
                          src="/external/cmi763-l2l.svg"
                          className="projects-search-logged-cm"
                        />
                        <span className="projects-search-logged-text03 TextsmMedium">
                          <span>Kumba, Cameroon</span>
                        </span>
                      </div>
                    </div>
                    <div className="projects-search-logged-content2">
                      <div className="projects-search-logged-details">
                        <div className="projects-search-logged-detailswrap">
                          <div className="projects-search-logged-textandsupportingtext1">
                            <span className="projects-search-logged-text05 TextlgSemibold">
                              <span>20 days</span>
                            </span>
                            <div className="projects-search-logged-textwrap">
                              <span className="projects-search-logged-text07 TextsmRegular">
                                <span>Remaining</span>
                              </span>
                            </div>
                          </div>
                          <div className="projects-search-logged-textandsupportingtext2">
                            <span className="projects-search-logged-text09 TextlgSemibold">
                              <span>4000 USDT</span>
                            </span>
                            <div className="projects-search-logged-textwrap1">
                              <span className="projects-search-logged-text11 TextsmRegular">
                                <span>$ 4003.98</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="projects-search-logged-progress">
                          <div className="projects-search-logged-progressbar">
                            <div className="projects-search-logged-progressbar1">
                              <div className="projects-search-logged-progress1"></div>
                            </div>
                          </div>
                          <div className="projects-search-logged-detailswrap1">
                            <div className="projects-search-logged-textandicon">
                              <span className="projects-search-logged-text13 TextsmRegular">
                                <span>20% funded</span>
                              </span>
                            </div>
                            <div className="projects-search-logged-textandicon1">
                              <span className="projects-search-logged-text15 TextsmRegular">
                                <span>3200 USDT to go</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="projects-search-logged-detailswrap2">
                          <div className="projects-search-logged-textandicon2">
                            <img
                              alt="clockfastforwardI439"
                              src="/external/clockfastforwardi439-q9uo.svg"
                              className="projects-search-logged-clockfastforward"
                            />
                            <span className="projects-search-logged-text17 TextmdMedium">
                              <span>12 months</span>
                            </span>
                          </div>
                          <div className="projects-search-logged-textandicon3">
                            <img
                              alt="trendup01I439"
                              src="/external/trendup01i439-x8f.svg"
                              className="projects-search-logged-trendup01"
                            />
                            <span className="projects-search-logged-text19 TextmdMedium">
                              <span>1.3% monthly interest</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="projects-search-logged-textandcategory">
                        <span className="projects-search-logged-text21 TextlgMedium">
                          <span>Regenerative Agriculture in Cameroon</span>
                        </span>
                        <span className="projects-search-logged-text23 TextmdMedium">
                          <span>
                            The CAC supports farmers in Cameroon to revitalize
                            their communities through regenerative agriculture.
                          </span>
                        </span>
                      </div>
                      <div className="projects-search-logged-actions">
                        <button className="projects-search-logged-button TextmdSemibold button">
                          <span className="projects-search-logged-text25 TextmdSemibold">
                            <span>Lend now</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/project-details-logged"
                  className="projects-search-logged-navlink1"
                >
                  <div className="project-item">
                    <div className="projects-search-logged-image3">
                      <div className="projects-search-logged-image4">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1596788068873-9ffd5cacd4c4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGZhcm1lciUyMGFmcmljYXxlbnwwfHx8fDE2ODU5NDgzNjJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1400"
                          className="projects-search-logged-image5"
                        />
                      </div>
                      <div className="projects-search-logged-overlay1"></div>
                      <div className="projects-search-logged-badge1">
                        <img
                          alt="CMI763"
                          src="/external/cmi763-l2l.svg"
                          className="projects-search-logged-cm1"
                        />
                        <span className="projects-search-logged-text27 TextsmMedium">
                          <span>Kumba, Cameroon</span>
                        </span>
                      </div>
                    </div>
                    <div className="projects-search-logged-content3">
                      <div className="projects-search-logged-details1">
                        <div className="projects-search-logged-detailswrap3">
                          <div className="projects-search-logged-textandsupportingtext3">
                            <span className="projects-search-logged-text29 TextlgSemibold">
                              <span>20 days</span>
                            </span>
                            <div className="projects-search-logged-textwrap2">
                              <span className="projects-search-logged-text31 TextsmRegular">
                                <span>Remaining</span>
                              </span>
                            </div>
                          </div>
                          <div className="projects-search-logged-textandsupportingtext4">
                            <span className="projects-search-logged-text33 TextlgSemibold">
                              <span>4000 USDT</span>
                            </span>
                            <div className="projects-search-logged-textwrap3">
                              <span className="projects-search-logged-text35 TextsmRegular">
                                <span>$ 4003.98</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="projects-search-logged-progress2">
                          <div className="projects-search-logged-progressbar2">
                            <div className="projects-search-logged-progressbar3">
                              <div className="projects-search-logged-progress3"></div>
                            </div>
                          </div>
                          <div className="projects-search-logged-detailswrap4">
                            <div className="projects-search-logged-textandicon4">
                              <span className="projects-search-logged-text37 TextsmRegular">
                                <span>20% funded</span>
                              </span>
                            </div>
                            <div className="projects-search-logged-textandicon5">
                              <span className="projects-search-logged-text39 TextsmRegular">
                                <span>3200 USDT to go</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="projects-search-logged-detailswrap5">
                          <div className="projects-search-logged-textandicon6">
                            <img
                              alt="clockfastforwardI439"
                              src="/external/clockfastforwardi439-q9uo.svg"
                              className="projects-search-logged-clockfastforward1"
                            />
                            <span className="projects-search-logged-text41 TextmdMedium">
                              <span>12 months</span>
                            </span>
                          </div>
                          <div className="projects-search-logged-textandicon7">
                            <img
                              alt="trendup01I439"
                              src="/external/trendup01i439-x8f.svg"
                              className="projects-search-logged-trendup011"
                            />
                            <span className="projects-search-logged-text43 TextmdMedium">
                              <span>1.3% monthly interest</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="projects-search-logged-textandcategory1">
                        <span className="projects-search-logged-text45 TextlgMedium">
                          <span>Regenerative Agriculture in Cameroon</span>
                        </span>
                        <span className="projects-search-logged-text47 TextmdMedium">
                          <span>
                            The CAC supports farmers in Cameroon to revitalize
                            their communities through regenerative agriculture.
                          </span>
                        </span>
                      </div>
                      <div className="projects-search-logged-actions1">
                        <button className="projects-search-logged-button1 TextmdSemibold button">
                          <span className="projects-search-logged-text49 TextmdSemibold">
                            <span>Lend now</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="projects-search-logged-pagination">
                <button className="projects-search-logged-button2">
                  <img
                    alt="arrowleftI439"
                    src="/external/arrowlefti439-hdvg.svg"
                    className="projects-search-logged-arrowleft"
                  />
                </button>
                <span className="projects-search-logged-text51 TextsmRegular">
                  <span className="projects-search-logged-text52">
                    Page
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="projects-search-logged-text53">1</span>
                  <span className="projects-search-logged-text54">
                    {' '}
                    of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>10</span>
                </span>
                <button className="projects-search-logged-button3">
                  <img
                    alt="arrowrightI439"
                    src="/external/arrowrighti439-rifd.svg"
                    className="projects-search-logged-arrowright"
                  />
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default ProjectsSearchLogged
