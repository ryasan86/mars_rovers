import React from 'react'

import Navbar from '../Navbar/index'
import Sidebar from '../Sidebar'
import './Layout.scss'

const Layout: React.StatelessComponent<{ Addon?: JSX.Element }> = ({
    children,
    Addon
}) => (
    <div className='layout'>
        <Navbar Addon={Addon} />
        <Sidebar />
        <main className='layout__inner'>{children}</main>
    </div>
)

export default Layout
