import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Login from './views/login'
import CreateProjectLp from './views/create-project-lp'
import ProjectDetailsUnlogged from './views/project-details-unlogged'
import CreateProjectStep2 from './views/create-project-step2'
import LoginRedirect from './views/login-redirect'
import CreateProjectStep1 from './views/create-project-step1'
import LoginModal from './views/login-modal'
import SignupProfile from './views/signup-profile'
import ConnectWalletStep1 from './views/connect-wallet-step1'
import ConnectWalletStep2 from './views/connect-wallet-step2'
import ProjectsSearchLogged from './views/projects-search-logged'
import Signup from './views/signup'
import ProjectsSearchUnlogged from './views/projects-search-unlogged'
import ProjectDetailsLogged from './views/project-details-logged'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Login} exact path="/" />
        <Route component={CreateProjectLp} exact path="/create-project-lp" />
        <Route
          component={ProjectDetailsUnlogged}
          exact
          path="/project-details-unlogged"
        />
        <Route
          component={CreateProjectStep2}
          exact
          path="/create-project-step2"
        />
        <Route component={LoginRedirect} exact path="/login-redirect" />
        <Route
          component={CreateProjectStep1}
          exact
          path="/create-project-step1"
        />
        <Route component={LoginModal} exact path="/login-modal" />
        <Route component={SignupProfile} exact path="/signup-profile" />
        <Route
          component={ConnectWalletStep1}
          exact
          path="/connect-wallet-step1"
        />
        <Route
          component={ConnectWalletStep2}
          exact
          path="/connect-wallet-step2"
        />
        <Route
          component={ProjectsSearchLogged}
          exact
          path="/projects-search-logged"
        />
        <Route component={Signup} exact path="/signup" />
        <Route
          component={ProjectsSearchUnlogged}
          exact
          path="/projects-search-unlogged"
        />
        <Route
          component={ProjectDetailsLogged}
          exact
          path="/project-details-logged"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
