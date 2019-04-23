import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { actionCreators } from './actions';
import client from './client';
import Header from './layout/Header/Header';
import Sidebar from './layout/Sidebar/Sidebar';
import Main from './layout/Main/Main';

class App extends Component {
  componentDidMount = () => {
    this.handleFetchPhotos();
  };

  // fetch photo data
  handleFetchPhotos = () => {
    const { startLoading, stopLoading, storePhotos } = this.props.actions;
    startLoading();
    const { rovers, selectedDate: date } = this.props;
    const { name } = rovers.find(({ selected }) => selected); // selected rover
    client.getRoverPhotos({ name, date }, async ({ photos }) => {
      await storePhotos({ photos });
      stopLoading();
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Sidebar fetchPhotos={this.handleFetchPhotos} />
        <Switch>
          {this.props.rovers.map(({ name }, i) => (
            <Route key={i} path={`/${name}`} component={Main} />
          ))}
          <Redirect from="/" to="/curiosity" />
        </Switch>
      </Fragment>
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
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(App);
