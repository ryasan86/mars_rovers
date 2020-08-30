import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SelectBoxWrap from './SelectBoxStyles'
import { actionCreators } from '../../actions'
import { CAMERAS } from '../../constants'

interface Props {
    actions: any
    ui: any
    rover: any
}

class SelectBox extends Component<Props> {
    handleCamFilterSelect = async e => {
        const camera = e.target.value
        const { selectCameraFilter, toggleSidebar } = this.props.actions
        if (this.props.ui.sidebarIsOpen) toggleSidebar()
        this.setState({ camera })
        await selectCameraFilter({ camera })
    }

    render () {
        return (
            <SelectBoxWrap>
                <h3 className='title'>Camera:</h3>
                <div className='select-container'>
                    <select
                        value={this.props.rover.selectedCamera}
                        onChange={this.handleCamFilterSelect}>
                        <option value='All'>All</option>
                        {CAMERAS.map(({ abbrev, fullName }, i) => (
                            <option key={i} value={abbrev}>
                                {fullName} ({abbrev})
                            </option>
                        ))}
                    </select>
                </div>
            </SelectBoxWrap>
        )
    }
}

export default connect(
    state => state,
    dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(SelectBox)
