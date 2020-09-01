import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SelectBox from '../SelectBox/SelectBox'
import Icon from '../../common/icons'
import theme from '../../theme'
import { actionCreators } from '../../actions'
import { GITHUB_REPO_URL } from '../../constants'
import { ReduxProps } from '../../interfaces'
import './NavBar.scss'

const NavBar: React.FC<ReduxProps> = (props) => {
    const handleToggleSidebar = async () => {
        await props.actions.toggleSidebar()
    }

    return (
        <div className='navbar'>
            <Icon
                name='burger'
                width={25}
                fill={theme.primary}
                onClick={handleToggleSidebar}
            />
            <SelectBox />
            <Icon
                name='github'
                width={25}
                fill={theme.primary}
                onClick={() => window.open(GITHUB_REPO_URL, '_blank')}
            />
        </div>
    )
}

export default connect(
    state => state,
    dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(NavBar)
