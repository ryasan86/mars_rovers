import React, { Component } from 'react';

import {
  CardWrap,
  CardLoader,
  CardImgContainer,
  CardImg,
  CardBodyContainer,
  CardText,
  CardLink
} from './CardStyles';

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
      <CardWrap>
        <CardImgContainer>
          <CardImg
            src={img_src}
            alt="rover-photo"
            onLoad={this.onPhotoLoad}
            imgIsLoading={this.state.imgIsLoading}
          />
        </CardImgContainer>
        {this.state.imgIsLoading ? <CardLoader /> : ''}
        <CardBodyContainer imgIsLoading={this.state.imgIsLoading}>
          <CardText>Date: {earth_date}</CardText>
          <CardText>Martian Sol: {sol}</CardText>
          <CardText>
            Camera: {camera.full_name} ({camera.name})
          </CardText>
          <CardLink onClick={() => window.open(img_src, '_blank')}>
            View Image
          </CardLink>
        </CardBodyContainer>
      </CardWrap>
    );
  }
}

export default Card;
