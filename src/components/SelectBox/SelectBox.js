import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SelectBoxContainer, StyledSelect } from './SelectBoxStyles';
import { Text } from './../../components/common/typography';
import { actionCreators } from '../../actions';
import { CAMERAS } from './../../constants';

class SelectBox extends Component {
  state = {
    camera: 'All'
  };

  handleCamFilterSelect = async e => {
    const camera = e.target.value;
    const { setCameraFilter } = this.props.actions;
    this.setState({ camera });
    await setCameraFilter({ camera });
  };

  render() {
    return (
      <SelectBoxContainer>
        <Text>Select Camera:</Text>
        <StyledSelect
          value={this.state.filter}
          onChange={this.handleCamFilterSelect}>
          <option value="All">All</option>
          {CAMERAS.map(({ abbrev, fullName }, i) => (
            <option key={i} value={abbrev}>
              {fullName} ({abbrev})
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
