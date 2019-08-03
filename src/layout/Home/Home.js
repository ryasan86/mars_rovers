import React, { Component } from 'react';

import StyledHome from './HomeStyles';
import Icon from '../../components/common/icons/index';
import theme from '../../theme';
import { MarsRoverClip } from '../../videos';

class Home extends Component {
  render() {
    return (
      <StyledHome>
        <video preload="auto" muted="muted" loop={true} autoPlay="autoplay">
          <source src={MarsRoverClip} />
        </video>
        <div className="init-menu">
          <div className="header">
            <h1>Mars Rovers</h1>
            <Icon name="rover" width={200} fill={theme.primary} />
          </div>
          <ul className="rover-list">
            <li className="rover-list__item item-1">Curiosity</li>
            <li className="rover-list__item item-2">Opportunity</li>
            <li className="rover-list__item item-3">Spirit</li>
          </ul>
        </div>
      </StyledHome>
    );
  }
}

export default Home;
