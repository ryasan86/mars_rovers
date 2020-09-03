import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Icon from '../Icons'
import DatePicker from '../DatePicker'
import { rootPath } from '../../constants'
import './Navbar.scss'

const Navbar: React.StatelessComponent = () => {
    const location = useLocation()

    return (
        <div className='navbar'>
            <Link to={rootPath}>
                <Icon
                    className='navbar__icon navbar__icon--left'
                    name='satellite'
                />
            </Link>
            {location.pathname !== rootPath && (
                <div className='navbar__date-picker-container'>
                    <DatePicker />
                </div>
            )}
            <Icon
                name='github'
                className='navbar__icon navbar__icon--right'
                onClick={() =>
                    window.open(
                        'https://github.com/ryasan86/mars_rovers',
                        '_blank'
                    )
                }
            />
        </div>
    )
}

export default Navbar
