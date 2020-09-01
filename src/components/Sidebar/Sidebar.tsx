import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DatePicker from '../DatePicker/DatePicker'
import Icon from '../../icons'
import { actionCreators } from '../../actions'
import { RoverProps } from '../../interfaces'
import { roverList } from '../../store'
import './Sidebar.scss'

const LinkList: React.StatelessComponent<{
    selectedRover: RoverProps
    onRoverSelect: () => void
}> = ({ onRoverSelect, selectedRover }) => (
    <ul className='sidebar__link-list'>
        {roverList.map(({ rover }, i) => (
            <NavLink
                className='sidebar__nav-link'
                key={i}
                to={{
                    pathname: `/main`,
                    search: `?name=${rover.name}`
                }}
                selected={selectedRover}
                onClick={() => onRoverSelect()}>
                <span className='sidebar__rover-name'>{rover.name}</span>
            </NavLink>
        ))}
    </ul>
)

const Sidebar: React.StatelessComponent<{
    selectedRover: RoverProps
    sidebarOpen: boolean
    toggleSidebar: () => void
}> = ({ sidebarOpen, selectedRover, toggleSidebar }) => (
    <div className={`sidebar${sidebarOpen ? ' active' : ''}`}>
        <Icon
            onClick={toggleSidebar}
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
        <LinkList onRoverSelect={() => ({})} selectedRover={selectedRover} />
        <DatePicker selectedRover={selectedRover} />
    </div>
)

export default connect(
    state => state,
    dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(Sidebar)
