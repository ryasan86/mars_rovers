import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Icon from '../Icons'
import { roverList, rootPath } from '../../constants'
import { Context } from '../../App'
import { capitalize } from '../../utils'
import './Sidebar.scss'

const LinkList: React.StatelessComponent<{
    onToggleSidebar: () => void
}> = ({ onToggleSidebar }) => (
    <ul className='sidebar__link-list'>
        {roverList.map(({ rover }, i) => (
            <Link
                key={i}
                className='sidebar__link-item'
                onClick={onToggleSidebar}
                to={{
                    pathname: rootPath + 'photos',
                    search: `?name=${rover.name}`
                }}>
                <span className='sidebar__rover-name'>
                    {capitalize(rover.name)}
                </span>
            </Link>
        ))}
    </ul>
)

const Sidebar: React.FC = () => {
    const { sidebarOpen, onToggleSidebar } = useContext(Context)

    return (
        <div className={`sidebar${sidebarOpen ? ' active' : ''}`}>
            <div
                className='sidebar__toggle-btn-container'
                onClick={onToggleSidebar}>
                <Icon
                    className='sidebar__toggle-btn-svg'
                    name={sidebarOpen ? 'close' : 'burger'}
                />
            </div>
            <div className='sidebar__header'>
                <div className='sidebar__header-gif'></div>
                <span className='sidebar__header-text'>Select rover</span>
            </div>
            <LinkList onToggleSidebar={onToggleSidebar} />
        </div>
    )
}

export default Sidebar
