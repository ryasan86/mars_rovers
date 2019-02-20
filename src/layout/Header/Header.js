import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { HeaderWrap } from './HeaderStyles';
import Icon from '../../components/common/icons';
import theme from '../../theme';
import { actionCreators } from '../../actions';
import { GITHUB_REPO_URL } from '../../constants';

class NavBar extends Component {
  toggleMenu = async () => {
    await this.props.actions.toggleSidebar();
  };

  render() {
    return (
      <HeaderWrap>
        <Icon
          name="burger"
          width={25}
          fill={theme.primary}
          iconClick={this.toggleMenu} />
        <Icon
          name="github"
          width={25}
          fill={theme.primary}
          iconClick={() => window.open(GITHUB_REPO_URL, '_blank')} />
      </HeaderWrap>
    );
  }
}

export default connect(
  state => state.ui,
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(NavBar);
