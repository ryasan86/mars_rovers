import React, { useContext } from 'react'

import Icon from '../Icons'
import './Navbar.scss'
import { Context } from '../../App'

const Navbar: React.StatelessComponent = () => {
    const { onToggleSidebar } = useContext(Context)

    return (
        <div className='navbar'>
            <Icon
                className='navbar__icon'
                name='burger'
                onClick={onToggleSidebar}
            />
            {/* <SelectBox /> */}
            <Icon
                className='navbar__icon'
                name='github'
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
