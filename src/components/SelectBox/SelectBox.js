import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SelectBoxContainer, SelectContainer, StyledSelect } from './SelectBoxStyles';
import { Text } from './../../components/common/typography';
import { actionCreators } from '../../actions';
import { CAMERAS } from './../../constants';
import theme from './../../theme';

class SelectBox extends Component {

  handleCamFilterSelect = async e => {
    const camera = e.target.value;
    const { selectCameraFilter, toggleSidebar } = this.props.actions;
    if (this.props.ui.sidebarIsOpen) toggleSidebar();
    this.setState({ camera });
    await selectCameraFilter({ camera });
  };

  render() {
    return (
      <SelectBoxContainer>
        <Text color={theme.primary}>Select Camera:</Text>
        <SelectContainer>
          <StyledSelect
            value={this.props.rover.selectedCamera}
            onChange={this.handleCamFilterSelect}>
            <option value="All">All</option>
            {CAMERAS.map(({ abbrev, fullName }, i) => (
              <option key={i} value={abbrev}>
                {fullName} ({abbrev})
              </option>
            ))}
          </StyledSelect>
        </SelectContainer>
      </SelectBoxContainer>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(SelectBox);
