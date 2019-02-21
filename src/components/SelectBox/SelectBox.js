import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  SelectBoxContainer,
  StyledLabel,
  StyledSelect
} from './SelectBoxStyles';
import { actionCreators } from '../../actions';
import { CAMERAS } from './../../constants';

class SelectBox extends Component {
  handleCamFilterSelect = e => {
    this.props.actions.setCameraFilter({ camera: e.target.value });
  };

  render() {
    return (
      <SelectBoxContainer>
        <StyledLabel>Select Camera:</StyledLabel>
        <StyledSelect
          value={this.props.selectedCamera}
          onChange={this.handleCamFilterSelect}>
          <option value="All">All</option>
          {CAMERAS.map(({ abbrev, camera }, i) => (
            <option key={i} value={abbrev}>
              {camera} ({abbrev})
            </option>
          ))}
        </StyledSelect>
      </SelectBoxContainer>
    );
  }
}

export default connect(
  state => state.rover,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(SelectBox);
