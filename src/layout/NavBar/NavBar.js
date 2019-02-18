import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { NavBarWrap } from './NavBarStyles';
import Icon from './../../components/common/icons/';
import theme from './../../theme';
import { actionCreators } from '../../actions/RoverActions';

class NavBar extends Component {
  toggleMenu = async () => {
    await this.props.actions.toggleSidebar();
  };

  render() {
    return (
      <NavBarWrap>
        <Icon
          name="burger"
          width={25}
          fill={theme.primary}
          iconClick={this.toggleMenu} />
        <Icon name="github" width={25} fill={theme.primary} />
      </NavBarWrap>
    );
  }
}

export default connect(
  state => state.ui,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(NavBar);
