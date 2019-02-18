import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  SidebarWrap,
  SidebarHeader,
  LinkContainer,
  Link
} from './SidebarStyles';
import DateFilters from './../../components/DateFilters/DateFilters';
import Icon from './../../components/common/icons';
import { Title, Text } from './../../components/common/typography';
import { ROVERS } from '../../constants';
import { actionCreators } from '../../actions/RoverActions';

class Sidebar extends Component {
  state = {
    activeLink: 0
  };

  // set active sidebar item then fetch photos
  handleRoverSelect = async (rover, i) => {
    this.setState({ activeLink: i });
    await this.props.actions.selectRover({ rover });
    this.props.fetchPhotos();
  };

  render() {
    return (
      <SidebarWrap isOpen={this.props.sidebarIsOpen}>
        <Icon
          iconClick={this.props.actions.toggleSidebar}
          name="close"
          width={25}
          fill="white"
          style={{ margin: '4% 6%' }}
          visibility="visibile"/>
        <SidebarHeader>
          <Title>Mars Rovers</Title>
          <Icon name="rover" width={100} fill="white" />
        </SidebarHeader>
        <LinkContainer>
          {ROVERS.map((rover, i) => (
            <Link
              key={i}
              to={rover}
              active={this.state.activeLink === i ? 1 : 0} // styled components work around
              onClick={() => this.handleRoverSelect(rover, i)}>
              <Text>{rover[0].toUpperCase() + rover.slice(1)}</Text>
            </Link>
          ))}
        </LinkContainer>
        <DateFilters fetchPhotos={this.props.fetchPhotos} />
      </SidebarWrap>
    );
  }
}

export default connect(
  state => state.ui,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(Sidebar);
