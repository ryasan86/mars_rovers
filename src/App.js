import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './pages/Home/Home';
import Main from './pages/Main/Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={600}
                classNames="fade">
                <Switch location={location}>
                  <Route component={Home} path="/" exact />
                  <Route component={Main} path="/main" />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </BrowserRouter>
    );
  }
}

// type check shape of incoming photo data
App.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      img_src: PropTypes.string,
      earth_date: PropTypes.string,
      sol: PropTypes.number,
      camera: PropTypes.shape({
        name: PropTypes.string,
        full_name: PropTypes.string
      }).isRequired
    }).isRequired
  )
};

export default connect(
  state => state.rover,
  null
)(App);
