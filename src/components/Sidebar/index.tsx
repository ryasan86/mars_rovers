import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DatePicker from '../DatePicker'
import Icon from '../Icons'
import { actionCreators } from '../../actions'
import { RoverProps } from '../../interfaces'
import { roverList } from '../../store'
import './Sidebar.scss'

const LinkList: React.StatelessComponent<{
    selectedRover: RoverProps
    onRoverSelect: () => void
}> = ({ selectedRover }) => (
    <ul className='sidebar__link-list'>
        {roverList.map(({ rover }, i) => (
            <NavLink
                className='sidebar__nav-link'
                key={i}
                to={{
                    pathname: `/main`,
                    search: `?name=${rover.name}`
                }}
                selected={selectedRover}>
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
        <Icon onClick={toggleSidebar} name='close' />
        <LinkList onRoverSelect={() => ({})} selectedRover={selectedRover} />
        <DatePicker />
    </div>
)

export default connect(
    state => state,
    dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(Sidebar)
