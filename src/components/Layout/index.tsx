import React from 'react'

import Navbar from '../Navbar/index'
import Sidebar from '../Sidebar'

const Layout: React.StatelessComponent = ({ children }) => (
    <div className='layout'>
        <Navbar />
        {/* <Sidebar /> */}
        <main className='layout__inner'>{children}</main>
    </div>
)

export default Layout
