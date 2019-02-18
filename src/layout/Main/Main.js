import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MainWrap, CardsContainer } from './MainStyles';
import Loader from './../../components/Loader/Loader';
import Card from './../../components/Card/Card';

class Main extends Component {
  renderPhotos = () => {
    const { photos } = this.props;
    return photos.length ? (
      photos.map((photo, i) => {
        return <Card key={i} photo={photo} />;
      })
    ) : (
      <h2>
        No photos for this day{' '}
        <span role="img" aria-label="img">
          😢
        </span>
      </h2>
    );
  };

  render() {
    const { loading } = this.props;

    return (
      <MainWrap>
        <CardsContainer loading={loading}>
          {loading ? <Loader width="75px" height="75px" /> : this.renderPhotos()}
        </CardsContainer>
      </MainWrap>
    );
  }
}

export default connect(
  state => state.rover,
  null
)(Main);
