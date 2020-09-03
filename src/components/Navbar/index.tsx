import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '../Icons'
import './Navbar.scss'

const Navbar: React.StatelessComponent<{ Addon?: JSX.Element | undefined }> = ({
    Addon
}) => (
    <div className='navbar'>
        <Link to='/'>
            <Icon
                className='navbar__icon navbar__icon--left'
                name='satellite'
            />
        </Link>
        {Addon && <div className='navbar__add-on-container'>{Addon}</div>}
        <Icon
            name='github'
            className='navbar__icon navbar__icon--right'
            onClick={() =>
                window.open('https://github.com/ryasan86/mars_rovers', '_blank')
            }
        />
    </div>
)

export default Navbar
