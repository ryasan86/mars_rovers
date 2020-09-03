import React from 'react'

import Icon from '../Icons'
import './Navbar.scss'

const Navbar: React.StatelessComponent = () => (
    <div className='navbar'>
        <Icon
            className='navbar__icon'
            name='github'
            onClick={() =>
                window.open('https://github.com/ryasan86/mars_rovers', '_blank')
            }
        />
    </div>
)

export default Navbar
