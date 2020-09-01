import React from 'react'

import SelectBox from '../SelectBox'
import Icon from '../Icons'
import './Navbar.scss'

const Navbar: React.StatelessComponent<{ toggleSidebar: () => void }> = ({
    toggleSidebar
}) => (
    <div className='navbar'>
        <Icon className='navbar__icon' name='burger' onClick={toggleSidebar} />
        <SelectBox />
        <Icon
            className='navbar__icon'
            name='github'
            onClick={() => window.open('https://github.com/ryasan86/mars_rovers', '_blank')}
        />
    </div>
)

export default Navbar
