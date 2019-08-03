import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import PhotosWrap from './PhotosStyles';
import Loader from '../Loader/Loader';
import Card from '../Card/Card';
import { Title } from '../common/typography';

const PhotosTitle = styled(Title)`
  color: ${({ theme }) => theme.dark};
  position: absolute;
  height: ${({ theme }) => `calc(100% - ${theme.navbarHeight})`};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Photos extends Component {
  renderPhotos = () => {
    const { filteredPhotos } = this.props.rover;
    return filteredPhotos.length ? (
      filteredPhotos.map((photo, i) => {
        return <Card key={i} photo={photo} />;
      })
    ) : (
      <PhotosTitle>
        No available photos{' '}
        <span role="img" aria-label="img">
          😢
        </span>
      </PhotosTitle>
    );
  };

  render() {
    const { loading } = this.props.ui;

    return (
      <PhotosWrap loading={loading}>
        <ul>
          {loading ? (
            <Loader width="75px" height="75px" />
          ) : (
            this.renderPhotos()
          )}
        </ul>
      </PhotosWrap>
    );
  }
}

export default connect(
  state => state,
  null
)(Photos);
