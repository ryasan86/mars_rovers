import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Header from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Loader from '../../components/Loader'
import { useCustomQuery, baseUrl, apiKey } from '../../client'
import { formatEarthDate, parseParams } from '../../utils'
import { roverMap } from '../../store'
import PhotoCard from '../../components/PhotoCard'
import './Photos.scss'

const Main: React.FC = () => {
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
        <div className='photos'>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar
                sidebarOpen={sidebarOpen}
                selectedRover={selectedRover}
                toggleSidebar={toggleSidebar}
            />
            {loading ? (
                <Loader className='photos__loader' />
            ) : (
                <ul className='photos__list'>
                    {data.photos?.length ? (
                        data.photos?.map((photo, i) => {
                            return <PhotoCard key={i} photo={photo} />
                        })
                    ) : (
                        <div className='photos__title'>
                            No available photos{' '}
                            <span role='img' aria-label='img'>
                                😢
                            </span>
                        </div>
                    )}
                </ul>
            )}
        </div>
    )
}

export default Main
