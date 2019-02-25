import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  SidebarWrap,
  SidebarIcon,
  SidebarHeader,
  LinkContainer,
  Link
} from './SidebarStyles';
import DatePicker from './../../components/DatePicker/DatePicker';
import Icon from './../../components/common/icons';
import { Title, Text } from './../../components/common/typography';
import { actionCreators } from '../../actions';
import { capitalize } from './../../utils';

class Sidebar extends Component {
  // set active sidebar item then fetch photos
  handleRoverSelect = async (rover = {}) => {
    const { setDateFilter, selectRover } = this.props.actions;
    setDateFilter({ date: new Date(rover.maxPhotoDate) });
    await selectRover({ name: rover.name });
    this.props.fetchPhotos();
  };

  renderLinks = () =>
    this.props.rover.rovers.map((rover, i) => (
      <Link
        key={i}
        to={rover.name}
        selected={rover.selected}
        onClick={() => this.handleRoverSelect(rover)}>
        <Text>{capitalize(rover.name)}</Text>
      </Link>
    ));

  render() {
    return (
      <SidebarWrap isOpen={this.props.ui.sidebarIsOpen}>
        <SidebarIcon
          iconClick={this.props.actions.toggleSidebar}
          name="close"
          width={25}
          fill="white"
          visibility="visibile" />
        <SidebarHeader>
          <Title>Mars Rovers</Title>
          <Icon name="rover" width={100} fill="white" />
        </SidebarHeader>
        <LinkContainer>{this.renderLinks()}</LinkContainer>
        <DatePicker fetchPhotos={this.props.fetchPhotos} />
      </SidebarWrap>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(Sidebar);
