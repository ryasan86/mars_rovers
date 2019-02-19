import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'react-datepicker/dist/react-datepicker.css';

import { actionCreators } from '../../actions/RoverActions';
import { DatePickerContainer, StyledDatePicker } from './DateFiltersStyles';
import { Text } from './../../components/common/typography';
import { DATE_RANGES } from './../../constants';

class DatePicker extends Component {
  componentDidMount = () => {
    console.log(new Date(DATE_RANGES[this.props.selectedRover].minPhotoDate));
  };

  // unset tab since date picker is being used
  handleDateSelect = date => {
    this.props.actions.setActiveDateTab({});
    this.props.setDateFilter(date);
  };

  render() {
    const { selectedRover } = this.props;
    const minDate = new Date(DATE_RANGES[selectedRover].minPhotoDate);
    const maxDate = new Date(DATE_RANGES[selectedRover].maxPhotoDate);

    return (
      <DatePickerContainer>
        <Text>Select Date:</Text>
        <StyledDatePicker
          minDate={minDate}
          maxDate={maxDate}
          onChange={this.handleDateSelect}
          selected={maxDate}
          dateFormat="MMMM d, yyyy" />
      </DatePickerContainer>
    );
  }
}

export default connect(
  state => state.rover,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(DatePicker);
