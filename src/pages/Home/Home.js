import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../actions';
import StyledHome from './HomeStyles';
import Icon from '../../components/common/icons/index';
import theme from '../../theme';
import { MarsRoverClip } from '../../videos';

class Home extends Component {
  // set active rover then fetch photos
  handleRoverSelect = async (maxPhotoDate, idx) => {
    // const { selectDateFilter, selectRover } = this.props.actions;
    // // default date filter to active rover max photo date
    // selectDateFilter({ date: new Date(maxPhotoDate) });
    // await selectRover({ idx });
    // this.props.fetchPhotos();
  };

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
            {this.props.rover.rovers.map((rover, i) => (
              <li
                key={i}
                className={`rover-list__item item-${i + 1}`}
                onClick={() => this.handleRoverSelect(rover.maxPhotoDate, i)}>
                {rover.name}
              </li>
            ))}
          </ul>
        </div>
      </StyledHome>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(Home);
