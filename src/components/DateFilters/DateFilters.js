import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../actions/RoverActions';
import { DateFiltersWrap, DateFiltersTitle } from "./DateFiltersStyles";
import DateTabs from './DateTabs';
import DatePicker from './DatePicker';

class DateFilters extends Component {
  // set new date filter then fetch photos
  handleSetDateFilter = async date => {
    await this.props.actions.setDateFilter({ date });
    this.props.fetchPhotos();
  };

  render() {
    return (
      <DateFiltersWrap>
        <DateFiltersTitle>Filters</DateFiltersTitle>
        <DateTabs setDateFilter={this.handleSetDateFilter} />
        <DatePicker setDateFilter={this.handleSetDateFilter} />
      </DateFiltersWrap>
    );
  }
}

export default connect(
  state => state.rover,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(DateFilters);
