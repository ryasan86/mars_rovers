import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'react-datepicker/dist/react-datepicker.css';

import { DatePickerContainer, StyledDatePicker } from './DatePickerStyles';
import { Text } from './../../components/common/typography';
import { actionCreators } from '../../actions';
import { DATE_RANGES } from './../../constants';
import { capitalize } from './../../utils';

class DatePicker extends Component {
  handleDateSelect = async date => {
    const { toggleSidebar, setDateFilter } = this.props.actions;
    toggleSidebar();
    await setDateFilter({ date });
    this.props.fetchPhotos();
  };

  render() {
    const { selectedRover, selectedDate } = this.props;
    const minDate = new Date(DATE_RANGES[selectedRover].minPhotoDate);
    const maxDate = new Date(DATE_RANGES[selectedRover].maxPhotoDate);

    return (
      <DatePickerContainer>
        <Text>{capitalize(selectedRover)} Date Range:</Text>
        <StyledDatePicker
          minDate={minDate}
          maxDate={maxDate}
          onChange={this.handleDateSelect}
          selected={new Date(selectedDate)}
          dateFormat="MMMM d, yyyy" />
      </DatePickerContainer>
    );
  }
}

export default connect(
  state => state.rover,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(DatePicker);
