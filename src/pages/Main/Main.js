import React, { Component } from 'react';
// import { Route, Redirect, Switch } from 'react-router-dom';

import client from '../../client';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Photos from '../../components/Photos/Photos';

class Main extends Component {
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
      <div>
        <Header />
        <Sidebar fetchPhotos={this.handleFetchPhotos} />
        <Photos />
        {/* <Switch>
          {this.props.rovers.map(({ name }, i) => (
            <Route key={i} path={`/${name}`} component={Main} />
          ))}
          <Redirect from="/" to="/curiosity" />
        </Switch> */}
      </div>
    );
  }
}

export default Main;
