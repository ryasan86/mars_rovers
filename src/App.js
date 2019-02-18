import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import client from './client';
import { actionCreators } from './actions/RoverActions';
import { ROVERS } from './constants';
import NavBar from "./layout/NavBar/NavBar";
import Sidebar from './layout/Sidebar/Sidebar';
import Main from './layout/Main/Main';

class App extends Component {
  componentDidMount = () => {
    this.handleFetchPhotos();
  };

  // fetch photo data
  handleFetchPhotos = () => {
    const { startLoading, stopLoading, storePhotos } = this.props.actions;
    // toggleSidebar();
    startLoading();
    const { selectedRover: rover, selectedDate: date } = this.props;
    client.getRoverPhotos({ rover, date }, async ({ photos }) => {
      await storePhotos({ photos });
      stopLoading();
    });
  };

  render() {
    return (
      <Fragment>
        <NavBar />
        <Sidebar fetchPhotos={this.handleFetchPhotos} />
        <Switch>
          {ROVERS.map((rover, i) => (
            <Route
              key={i}
              path={`/${rover}`}
              render={() => <Main />} />
          ))}
          <Redirect from="/" to="/curiosity" />
        </Switch>
      </Fragment>
    );
  }
}

// type check shape of photo data
App.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      img_src: PropTypes.string.isRequired,
      earth_date: PropTypes.string.isRequired,
      sol: PropTypes.number.isRequired,
      camera: PropTypes.shape({
        name: PropTypes.string.isRequired,
        full_name: PropTypes.string.isRequired
      })
    })
  )
};

export default connect(
  state => state.rover,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(App);
