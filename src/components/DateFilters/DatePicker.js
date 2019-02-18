import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'react-datepicker/dist/react-datepicker.css';

import { actionCreators } from '../../actions/RoverActions';
import { DatePickerContainer, StyledDatePicker } from './DateFiltersStyles';
import { Text } from './../../components/common/typography';

class DatePicker extends Component {
  // unset tab since date picker is being used
  handleDateSelect = date => {
    this.props.actions.setActiveDateTab({});
    this.props.setDateFilter(date);
  };

  render() {
    return (
      <DatePickerContainer>
        <Text>Select Date:</Text>
        <StyledDatePicker
          selected={new Date(this.props.selectedDate)}
          onChange={this.handleDateSelect}
          dateFormat="MMMM d, yyyy" />
      </DatePickerContainer>
    );
  }
}

export default connect(
  state => state.rover,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(DatePicker);
