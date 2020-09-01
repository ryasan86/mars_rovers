import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DatePicker from '../DatePicker/DatePicker'
import Icon from '../../common/icons'
import { actionCreators } from '../../actions'
import { ReduxProps, DataProps, RoverProps } from '../../interfaces'
import { roverList } from '../../store'

const LinkList: React.StatelessComponent<{
    data: DataProps
    selectedRover: RoverProps
    onRoverSelect: (maxPhotoDate, idx) => void
}> = ({ onRoverSelect, selectedRover }) => {
    return (
        <div className='sidebar__link-list'>
            {roverList.map(({ rover }, i) => (
                <NavLink
                    className='sidebar__nav-link'
                    key={i}
                    to={{
                        pathname: `/main`,
                        search: `?name=${rover.name}`
                    }}
                    selected={selectedRover}
                    onClick={() => onRoverSelect(rover.maxPhotoDate, i)}>
                    <span className='sidebar__rover-name'>{rover.name}</span>
                </NavLink>
            ))}
        </div>
    )
}

const Sidebar: React.FC<ReduxProps & {
    fetchPhotos: () => void
    selectedRover: RoverProps
}> = ({ data, ui, actions, fetchPhotos, selectedRover }) => {
    const handleRoverSelect = async (maxPhotoDate, idx) => {
        const { selectDateFilter, selectRover, toggleSidebar } = actions
        toggleSidebar()
        selectDateFilter({ date: new Date(maxPhotoDate) })
        await selectRover({ idx })
        fetchPhotos()
    }

    return (
        <div className={`sidebar${ui.sidebarIsOpen ? ' active' : ''}`}>
            <Icon
                onClick={actions.toggleSidebar}
                name='close'
                width={25}
                fill='white'
                visibility='visible'
                style={{ margin: '4% 6%' }}
            />
            <div className='sidebar__header'>
                <h2 className='sidebar__title'>Mars Rovers</h2>
                <Icon name='rover' width={100} fill='white' />
            </div>
            <LinkList
                onRoverSelect={handleRoverSelect}
                data={data}
                selectedRover={selectedRover}
            />
            <DatePicker
                fetchPhotos={fetchPhotos}
                selectedRover={selectedRover}
            />
        </div>
    )
}

export default connect(
    state => state,
    dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(Sidebar)
