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
import { ROVERS } from '../../constants';
import { actionCreators } from '../../actions';
import { DATE_RANGES } from './../../constants';
import { capitalize } from './../../utils';

class Sidebar extends Component {
  state = {
    activeLink: 0
  };

  // set active sidebar item then fetch photos
  handleRoverSelect = async (rover, activeLink) => {
    const { setDateFilter, selectRover } = this.props.actions;
    const date = new Date(DATE_RANGES[rover].maxPhotoDate);
    this.setState(() => ({ activeLink }));
    setDateFilter({ date });
    await selectRover({ rover });
    this.props.fetchPhotos();
  };

  renderLinks = () =>
    ROVERS.map((rover, i) => (
      <Link
        key={i}
        to={rover}
        active={this.state.activeLink === i ? 1 : 0} // styled components work around
        onClick={() => this.handleRoverSelect(rover, i)}>
        <Text>{capitalize(rover)}</Text>
      </Link>
    ));

  render() {
    return (
      <SidebarWrap isOpen={this.props.sidebarIsOpen}>
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
  state => state.ui,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(Sidebar);
