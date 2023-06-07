import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import HeaderNavigationUnlogged from '../components/header-navigation-unlogged'
import Footer from '../components/footer'
import './projects-search-unlogged.css'

const ProjectsSearchUnlogged = (props) => {
  return (
    <div className="projects-search-unlogged-container">
      <Helmet>
        <title>projects-search-unlogged - exported project</title>
        <meta
          property="og:title"
          content="projects-search-unlogged - exported project"
        />
      </Helmet>
      <div className="page-wrapper">
        <HeaderNavigationUnlogged rootClassName="header-navigation-unlogged-root-class-name"></HeaderNavigationUnlogged>
        <main className="projects-search-unlogged-main main-wrapper">
          <section className="section-header">
            <div className="container">
              <div className="projects-search-unlogged-content">
                <div className="projects-search-unlogged-textandsupportingtext">
                  <span className="projects-search-unlogged-text TextxlSemibold">
                    232 projects posted
                  </span>
                  <span className="projects-search-unlogged-text01 TextmdRegular">
                    Find a loan
                  </span>
                </div>
              </div>
            </div>
            <div className="divider"></div>
          </section>
          <section className="projects-list">
            <div className="projects-search-unlogged-container2 container">
              <div className="projects-search-unlogged-filtersbar">
                <div className="projects-search-unlogged-inputdropdown">
                  <div className="projects-search-unlogged-inputwithlabel">
                    <input
                      type="text"
                      placeholder="Keyword"
                      className="projects-search-unlogged-textinput input TextmdRegular"
                    />
                  </div>
                </div>
                <div className="projects-search-unlogged-inputdropdown1">
                  <div className="projects-search-unlogged-inputwithlabel1">
                    <input
                      type="text"
                      value="Cameroon, CM"
                      placeholder="Country"
                      autoComplete="country"
                      className="projects-search-unlogged-textinput1 TextmdRegular input"
                    />
                  </div>
                </div>
              </div>
              <div className="projects-search-unlogged-content1">
                <div className="projects-search-unlogged-buttongroup">
                  <button className="projects-search-unlogged-frame-buttongroupbase TextmdRegular">
                    <span className="projects-search-unlogged-text02 TextsmSemibold">
                      Sort by date
                    </span>
                  </button>
                </div>
                <div className="projects-search-unlogged-buttongroup1">
                  <button className="projects-search-unlogged-frame-buttongroupbase1">
                    <img
                      alt="listI763"
                      src="/external/listi763-8a1i.svg"
                      className="projects-search-unlogged-list"
                    />
                  </button>
                  <button className="projects-search-unlogged-frame-buttongroupbase2">
                    <img
                      alt="markerpin02I763"
                      src="/external/markerpin02i763-92s.svg"
                      className="projects-search-unlogged-markerpin02"
                    />
                  </button>
                </div>
              </div>
              <div className="projects-search-unlogged-results">
                <Link
                  to="/project-details-unlogged"
                  className="projects-search-unlogged-navlink"
                >
                  <div className="projects-search-unlogged-frame-listingsearchresult project-item">
                    <div className="projects-search-unlogged-image">
                      <div className="projects-search-unlogged-image1">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1596788068873-9ffd5cacd4c4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGZhcm1lciUyMGFmcmljYXxlbnwwfHx8fDE2ODU5NDgzNjJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1400"
                          className="projects-search-unlogged-image2"
                        />
                      </div>
                      <div className="projects-search-unlogged-overlay"></div>
                      <div className="projects-search-unlogged-badge">
                        <img
                          alt="CMI763"
                          src="/external/cmi763-l2l.svg"
                          className="projects-search-unlogged-cm"
                        />
                        <span className="projects-search-unlogged-text03 TextsmMedium">
                          <span>Kumba, Cameroon</span>
                        </span>
                      </div>
                    </div>
                    <div className="projects-search-unlogged-content2">
                      <div className="projects-search-unlogged-details">
                        <div className="projects-search-unlogged-detailswrap">
                          <div className="projects-search-unlogged-textandsupportingtext1">
                            <span className="projects-search-unlogged-text05 TextlgSemibold">
                              <span>20 days</span>
                            </span>
                            <div className="projects-search-unlogged-textwrap">
                              <span className="projects-search-unlogged-text07 TextsmRegular">
                                <span>Remaining</span>
                              </span>
                            </div>
                          </div>
                          <div className="projects-search-unlogged-textandsupportingtext2">
                            <span className="projects-search-unlogged-text09 TextlgSemibold">
                              <span>4000 USDT</span>
                            </span>
                            <div className="projects-search-unlogged-textwrap1">
                              <span className="projects-search-unlogged-text11 TextsmRegular">
                                <span>$ 4003.98</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="projects-search-unlogged-progress">
                          <div className="projects-search-unlogged-progressbar">
                            <div className="projects-search-unlogged-progressbar1">
                              <div className="projects-search-unlogged-progress1"></div>
                            </div>
                          </div>
                          <div className="projects-search-unlogged-detailswrap1">
                            <div className="projects-search-unlogged-textandicon">
                              <span className="projects-search-unlogged-text13 TextsmRegular">
                                <span>20% funded</span>
                              </span>
                            </div>
                            <div className="projects-search-unlogged-textandicon1">
                              <span className="projects-search-unlogged-text15 TextsmRegular">
                                <span>3200 USDT to go</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="projects-search-unlogged-detailswrap2">
                          <div className="projects-search-unlogged-textandicon2">
                            <img
                              alt="clockfastforwardI439"
                              src="/external/clockfastforwardi439-q9uo.svg"
                              className="projects-search-unlogged-clockfastforward"
                            />
                            <span className="projects-search-unlogged-text17 TextmdMedium">
                              <span>12 months</span>
                            </span>
                          </div>
                          <div className="projects-search-unlogged-textandicon3">
                            <img
                              alt="trendup01I439"
                              src="/external/trendup01i439-x8f.svg"
                              className="projects-search-unlogged-trendup01"
                            />
                            <span className="projects-search-unlogged-text19 TextmdMedium">
                              <span>1.3% monthly interest</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="projects-search-unlogged-textandcategory">
                        <span className="projects-search-unlogged-text21 TextlgMedium">
                          <span>Regenerative Agriculture in Cameroon</span>
                        </span>
                        <span className="projects-search-unlogged-text23 TextmdMedium">
                          <span>
                            The CAC supports farmers in Cameroon to revitalize
                            their communities through regenerative agriculture.
                          </span>
                        </span>
                      </div>
                      <div className="projects-search-unlogged-actions">
                        <button className="projects-search-unlogged-button TextmdSemibold button">
                          <span className="projects-search-unlogged-text25 TextmdSemibold">
                            <span>Lend now</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/project-details-unlogged"
                  className="projects-search-unlogged-navlink1"
                >
                  <div className="projects-search-unlogged-frame-listingsearchresult1 project-item">
                    <div className="projects-search-unlogged-image3">
                      <div className="projects-search-unlogged-image4">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1596788068873-9ffd5cacd4c4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGZhcm1lciUyMGFmcmljYXxlbnwwfHx8fDE2ODU5NDgzNjJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1400"
                          className="projects-search-unlogged-image5"
                        />
                      </div>
                      <div className="projects-search-unlogged-overlay1"></div>
                      <div className="projects-search-unlogged-badge1">
                        <img
                          alt="CMI763"
                          src="/external/cmi763-l2l.svg"
                          className="projects-search-unlogged-cm1"
                        />
                        <span className="projects-search-unlogged-text27 TextsmMedium">
                          <span>Kumba, Cameroon</span>
                        </span>
                      </div>
                    </div>
                    <div className="projects-search-unlogged-content3">
                      <div className="projects-search-unlogged-details1">
                        <div className="projects-search-unlogged-detailswrap3">
                          <div className="projects-search-unlogged-textandsupportingtext3">
                            <span className="projects-search-unlogged-text29 TextlgSemibold">
                              <span>20 days</span>
                            </span>
                            <div className="projects-search-unlogged-textwrap2">
                              <span className="projects-search-unlogged-text31 TextsmRegular">
                                <span>Remaining</span>
                              </span>
                            </div>
                          </div>
                          <div className="projects-search-unlogged-textandsupportingtext4">
                            <span className="projects-search-unlogged-text33 TextlgSemibold">
                              <span>4000 USDT</span>
                            </span>
                            <div className="projects-search-unlogged-textwrap3">
                              <span className="projects-search-unlogged-text35 TextsmRegular">
                                <span>$ 4003.98</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="projects-search-unlogged-progress2">
                          <div className="projects-search-unlogged-progressbar2">
                            <div className="projects-search-unlogged-progressbar3">
                              <div className="projects-search-unlogged-progress3"></div>
                            </div>
                          </div>
                          <div className="projects-search-unlogged-detailswrap4">
                            <div className="projects-search-unlogged-textandicon4">
                              <span className="projects-search-unlogged-text37 TextsmRegular">
                                <span>20% funded</span>
                              </span>
                            </div>
                            <div className="projects-search-unlogged-textandicon5">
                              <span className="projects-search-unlogged-text39 TextsmRegular">
                                <span>3200 USDT to go</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="projects-search-unlogged-detailswrap5">
                          <div className="projects-search-unlogged-textandicon6">
                            <img
                              alt="clockfastforwardI439"
                              src="/external/clockfastforwardi439-q9uo.svg"
                              className="projects-search-unlogged-clockfastforward1"
                            />
                            <span className="projects-search-unlogged-text41 TextmdMedium">
                              <span>12 months</span>
                            </span>
                          </div>
                          <div className="projects-search-unlogged-textandicon7">
                            <img
                              alt="trendup01I439"
                              src="/external/trendup01i439-x8f.svg"
                              className="projects-search-unlogged-trendup011"
                            />
                            <span className="projects-search-unlogged-text43 TextmdMedium">
                              <span>1.3% monthly interest</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="projects-search-unlogged-textandcategory1">
                        <span className="projects-search-unlogged-text45 TextlgMedium">
                          <span>Regenerative Agriculture in Cameroon</span>
                        </span>
                        <span className="projects-search-unlogged-text47 TextmdMedium">
                          <span>
                            The CAC supports farmers in Cameroon to revitalize
                            their communities through regenerative agriculture.
                          </span>
                        </span>
                      </div>
                      <div className="projects-search-unlogged-actions1">
                        <button className="projects-search-unlogged-button1 TextmdSemibold button">
                          <span className="projects-search-unlogged-text49 TextmdSemibold">
                            <span>Lend now</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="projects-search-unlogged-pagination">
                <button className="projects-search-unlogged-button2">
                  <img
                    alt="arrowleftI439"
                    src="/external/arrowlefti439-hdvg.svg"
                    className="projects-search-unlogged-arrowleft"
                  />
                </button>
                <span className="projects-search-unlogged-text51 TextsmRegular">
                  <span className="projects-search-unlogged-text52">
                    Page
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="projects-search-unlogged-text53">1</span>
                  <span className="projects-search-unlogged-text54">
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
                <button className="projects-search-unlogged-button3">
                  <img
                    alt="arrowrightI439"
                    src="/external/arrowrighti439-rifd.svg"
                    className="projects-search-unlogged-arrowright"
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

export default ProjectsSearchUnlogged
