import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import CardWrap from './CardStyles';
import Loader from './../Loader/Loader';

class Card extends Component {
  state = {
    imgIsLoading: true
  };

  onPhotoLoad = () => {
    this.setState({ imgIsLoading: false });
  };

  render() {
    const { img_src, earth_date, sol, camera } = this.props.photo;

    return (
      <Reveal>
        <CardWrap {...this.state}>
          <div className="img-container">
            <img src={img_src} alt="rover" onLoad={this.onPhotoLoad} />
          </div>
          {this.state.imgIsLoading ? (
            <Loader style={{ position: 'absolute' }} />
          ) : (
            ''
          )}
          <div className="card-body">
            <p>Date: {earth_date}</p>
            <p>Martian Sol: {sol}</p>
            <p>
              Camera: {camera.full_name} ({camera.name})
            </p>
            <span onClick={() => window.open(img_src, '_blank')}>
              View Image
            </span>
          </div>
        </CardWrap>
      </Reveal>
    );
  }
}

export default Card;
