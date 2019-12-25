import React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
//import AllCommentsPage from './AllCommentsPage';
//import AboutPage from './AboutPage';
const AllCommentsPage = lazy(() => import('./AllCommentsPage'));
const AboutPage = lazy(() => import('./AboutPage'));

class Links extends React.Component {
  render() {
    return (
      <nav>
        <NavLink exact activeClassName="active" to="/">Comments</NavLink>
        <NavLink activeClassName="active" to="/about">About</NavLink>
      </nav>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Links />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route exact path="/" component={AllCommentsPage} />
              <Route path="/about" component={AboutPage} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }
}
