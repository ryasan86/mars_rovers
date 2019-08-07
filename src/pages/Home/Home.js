import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { actionCreators } from '../../actions';
import StyledHome from './HomeStyles';
import { MarsRoverClip } from '../../videos';
import Icon from '../../components/common/icons/index';
import theme from '../../theme';

class Home extends Component {
  // set active rover then fetch photos
  handleRoverSelect = async (maxPhotoDate, idx) => {
    const { selectDateFilter, selectRover } = this.props.actions;
    // default date filter to active rover max photo date
    selectDateFilter({ date: new Date(maxPhotoDate) });
    await selectRover({ idx });
  };

  render() {
    return (
      <StyledHome>
        <video preload="auto" muted="muted" loop={true} autoPlay="autoplay">
          <source src={MarsRoverClip} />
        </video>
        <div className="header">
          <h1 className="title">Mars Rovers</h1>
          <Icon name="rover" width={175} fill={theme.primary} />
        </div>
        <ul className="rover-list">
          {this.props.rover.rovers.map((rover, i) => (
            <li key={i} className="rover-list__item">
              <Link
                to={{ pathname: '/main', search: `?name=${rover.name}` }}
                onClick={() => this.handleRoverSelect(rover.maxPhotoDate, i)}
                className="link">
                {rover.name}
              </Link>
            </li>
          ))}
        </ul>
      </StyledHome>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(Home);
