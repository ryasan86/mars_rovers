import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../actions/RoverActions';
import { DateTabsContainer, DateTab } from './DateFiltersStyles';
import { Text } from './../../components/common/typography';

class DateTabs extends Component {
  // set active tab
  handleDateTabSelect = (date, id) => {
    this.props.actions.setActiveDateTab({ id });
    this.props.setDateFilter(date);
  };

  render() {
    return (
      <DateTabsContainer>
        <Text>Quick:</Text>
        {this.props.dateTabs.map(({ title, date, active }, i) => {
          return (
            <DateTab
              key={i}
              active={active}
              onClick={() => this.handleDateTabSelect(new Date(date), i)}>
              <Text color="inherit">{title}</Text>
            </DateTab>
          );
        })}
      </DateTabsContainer>
    );
  }
}

export default connect(
  state => ({ dateTabs: state.dateTabs }),
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(DateTabs);
