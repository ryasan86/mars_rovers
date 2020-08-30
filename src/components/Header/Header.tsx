import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HeaderWrap from './HeaderStyles'
import SelectBox from '../SelectBox/SelectBox'
import Icon from '../common/icons'
import theme from '../../theme'
import { actionCreators } from '../../actions'
import { GITHUB_REPO_URL } from '../../constants'

interface Props {
    actions: any
}

class NavBar extends Component<Props> {
    handleToggleSidebar = async () => {
        await this.props.actions.toggleSidebar()
    }

    render () {
        return (
            <HeaderWrap>
                <Icon
                    name='burger'
                    width={25}
                    fill={theme.primary}
                    iconClick={this.handleToggleSidebar}
                />
                <SelectBox />
                <Icon
                    name='github'
                    width={25}
                    fill={theme.primary}
                    iconClick={() => window.open(GITHUB_REPO_URL, '_blank')}
                />
            </HeaderWrap>
        )
    }
}

export default connect(
    state => state.ui,
    dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(NavBar)
