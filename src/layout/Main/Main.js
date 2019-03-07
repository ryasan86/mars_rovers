import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import MainWrap from './MainStyles';
import Loader from './../../components/Loader/Loader';
import Card from './../../components/Card/Card';
import { Title } from './../../components/common/typography';

const MainTitle = styled(Title)`
  color: ${({ theme }) => theme.dark};
  position: absolute;
  height: ${({ theme }) => `calc(100% - ${theme.navbarHeight})`};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Main extends Component {
  renderPhotos = () => {
    const { filteredPhotos } = this.props.rover;
    return filteredPhotos.length ? (
      filteredPhotos.map((photo, i) => {
        return <Card key={i} photo={photo} />;
      })
    ) : (
      <MainTitle>
        No available photos{' '}
        <span role="img" aria-label="img">
          😢
        </span>
      </MainTitle>
    );
  };

  render() {
    const { loading } = this.props.ui;

    return (
      <MainWrap loading={loading}>
        <ul>
          {loading ? (
            <Loader width="75px" height="75px" />
          ) : (
            this.renderPhotos()
          )}
        </ul>
      </MainWrap>
    );
  }
}

export default connect(
  state => state,
  null
)(Main);
