import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DatePicker from '../DatePicker'
import Icon from '../Icons'
import { actionCreators } from '../../actions'
import { RoverProps } from '../../interfaces'
import { roverList } from '../../store'
import { Context } from '../../App'
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

const Sidebar: React.FC = ({}) => {
    const {
        sidebarOpen,
        onToggleSidebar,
        selectedDate,
        onSelectDate,
        selectedRover
    } = useContext(Context)

    return (
        <div className={`sidebar${sidebarOpen ? ' active' : ''}`}>
            <Icon className='sidebar__toggle-btn' onClick={onToggleSidebar} name='close' />
            <LinkList
                onRoverSelect={() => ({})}
                selectedRover={selectedRover}
            />
            <DatePicker
                selectedRover={selectedRover}
                selectedDate={selectedDate}
                onSelectDate={onSelectDate}
            />
        </div>
    )
}

export default connect(
    state => state,
    dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(Sidebar)
