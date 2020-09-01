import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators } from '../../actions'
import Header from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Photos from '../../components/Photos/Photos'
import Loader from '../../components/Loader/Loader'
import { useCustomQuery, baseUrl, apiKey } from '../../client'
import { ReduxProps } from '../../interfaces'
import { formatEarthDate, parseParams } from '../../utils'
import { roverMap } from '../../store'
import './Main.scss'



const Main: React.FC<ReduxProps> = () => {
    const location = useLocation()
    const [, name] = parseParams(location.search)
    const [selectedRover, setSelectedRover] = useState(roverMap[name])
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const date = formatEarthDate(selectedRover.maxPhotoDate)

    const { data, loading } = useCustomQuery({
        query: `${baseUrl}/mars-photos/api/v1/rovers/${name}/photos?earth_date=${date}&api_key=${apiKey}`
    })

    const toggleSidebar = () => setSidebarOpen(prev => !prev)

    useEffect(() => setSelectedRover(roverMap[name]), [name])

    return (
        <div className='main'>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar
                sidebarOpen={sidebarOpen}
                selectedRover={selectedRover}
                toggleSidebar={toggleSidebar}
            />
            {loading ? <Loader /> : <Photos photos={data?.photos} />}
        </div>
    )
}

export default connect(
    state => state,
    dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(Main)
