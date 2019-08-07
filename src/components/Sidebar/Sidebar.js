import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SidebarWrap from './SidebarStyles';
import DatePicker from '../DatePicker/DatePicker';
import Icon from '../common/icons';
import { Title, Text } from '../common/typography';
import { actionCreators } from '../../actions';
import { capitalize } from '../../utils';

class Sidebar extends Component {
  // set active rover then fetch photos
  handleRoverSelect = async (maxPhotoDate, idx) => {
    const { selectDateFilter, selectRover, toggleSidebar } = this.props.actions;
    toggleSidebar();
    // default date filter to active rover max photo date
    selectDateFilter({ date: new Date(maxPhotoDate) });
    await selectRover({ idx });
    this.props.fetchPhotos();
  };

  renderLinks = () =>
    this.props.rover.rovers.map((rover, i) => (
      <NavLink
        className="nav-link"
        key={i}
        to={{pathname: `/main`, search: `?name=${rover.name}`}}
        selected={rover.selected}
        onClick={() => this.handleRoverSelect(rover.maxPhotoDate, i)}>
        <Text>{capitalize(rover.name)}</Text>
      </NavLink>
    ));

  render() {
    return (
      <SidebarWrap isOpen={this.props.ui.sidebarIsOpen}>
        <Icon
          iconClick={this.props.actions.toggleSidebar}
          name="close"
          width={25}
          fill="white"
          visibility="visibile"
          style={{ margin: '4% 6%' }}
        />
        <div className="sidebar-header">
          <Title>Mars Rovers</Title>
          <Icon name="rover" width={100} fill="white" />
        </div>
        <div className="link-container">{this.renderLinks()}</div>
        <DatePicker fetchPhotos={this.props.fetchPhotos} />
      </SidebarWrap>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(Sidebar);
