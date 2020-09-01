import React from 'react'

import SelectBox from '../SelectBox/SelectBox'
import Icon from '../../common/icons'
import { GITHUB_REPO_URL } from '../../constants'
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
            onClick={() => window.open(GITHUB_REPO_URL, '_blank')}
        />
    </div>
)

export default Navbar
