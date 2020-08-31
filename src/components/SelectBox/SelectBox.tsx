import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators } from '../../actions'
import { ReduxProps } from '../../interfaces'
import { CAMERAS } from '../../constants'
import './SelectBox.scss'

const SelectBox: React.FC<ReduxProps> = ({ data, ui, actions }) => {
    const handleCamFilterSelect = async e => {
        const camera = e.target.value
        const { selectCameraFilter, toggleSidebar } = actions
        if (ui.sidebarIsOpen) toggleSidebar()
        await selectCameraFilter({ camera })
    }

    return (
        <div className='select-box'>
            <h3 className='select-box__title'>Camera:</h3>
            <div className='select-container'>
                <select
                    className='select-box__box'
                    value={data.selectedCamera}
                    onChange={handleCamFilterSelect}>
                    <option value='All'>All</option>
                    {CAMERAS.map(({ abbrev, fullName }, i) => (
                        <option key={i} value={abbrev}>
                            {fullName} ({abbrev})
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default connect(
    state => state,
    dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(SelectBox)
