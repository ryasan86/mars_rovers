import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './pages/Home/Home';
// import Main from './pages/Main/Main';

class App extends Component {
  componentDidMount = () => {
    this.roverHasBeenSelected();
  };

  roverHasBeenSelected = () => {
    const x = this.props.rovers.some(rover => rover.selected);
    console.log(x);
  };

  render() {
    return (
      <>
        <Home />
      </>
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
