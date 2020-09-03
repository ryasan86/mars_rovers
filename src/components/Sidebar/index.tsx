import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import DatePicker from '../DatePicker'
import Icon from '../Icons'
import { RoverProps } from '../../interfaces'
import { roverList } from '../../store'
import { Context } from '../../App'
import { capitalize } from '../../utils'
import './Sidebar.scss'

const LinkList: React.StatelessComponent<{
    selectedRover: RoverProps
}> = () => (
    <ul className='sidebar__link-list'>
        {roverList.map(({ rover }, i) => (
            <NavLink
                key={i}
                className='sidebar__link-item'
                to={{
                    path: '/photos',
                    search: `?name=${rover.name}`
                }}>
                <span className='sidebar__rover-name'>
                    {capitalize(rover.name)}
                </span>
            </NavLink>
        ))}
    </ul>
)

const Sidebar: React.FC = () => {
    const {
        sidebarOpen,
        onToggleSidebar,
        selectedDate,
        onSelectDate,
        selectedRover
    } = useContext(Context)

    return (
        <div className={`sidebar${sidebarOpen ? ' active' : ''}`}>
            <div
                className='sidebar__toggle-btn-container'
                onClick={onToggleSidebar}>
                <Icon
                    className='sidebar__toggle-btn'
                    name={sidebarOpen ? 'close' : 'burger'}
                />
            </div>
            <div className='sidebar__header'></div>
            <LinkList selectedRover={selectedRover} />
            <DatePicker
                selectedRover={selectedRover}
                selectedDate={selectedDate}
                onSelectDate={onSelectDate}
            />
        </div>
    )
}

export default Sidebar
