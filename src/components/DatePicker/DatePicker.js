import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'react-datepicker/dist/react-datepicker.css';

import { DatePickerContainer, StyledDatePicker } from './DatePickerStyles';
import { Text } from './../../components/common/typography';
import { actionCreators } from '../../actions';
import { capitalize } from './../../utils';

class DatePicker extends Component {
  handleDateSelect = async date => {
    const {
      toggleSidebar,
      setDateFilter,
      setCameraFilter
    } = this.props.actions;

    toggleSidebar();
    setCameraFilter({ camera: 'All' });
    await setDateFilter({ date });
    this.props.fetchPhotos();
  };

  render() {
    const { rovers, selectedDate } = this.props;
    const selectedRover = rovers.find(({ selected }) => selected);
    const minDate = new Date(selectedRover.minPhotoDate);
    const maxDate = new Date(selectedRover.maxPhotoDate);

    return (
      <DatePickerContainer>
        <Text>{capitalize(selectedRover.name)} Date Range:</Text>
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
