import React, { useEffect, useContext, Suspense } from 'react'
import { useLocation } from 'react-router-dom'

import Layout from '../../components/Layout'
import Header from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Loader from '../../components/Loader'
import PhotoCard from '../../components/PhotoCard'
import { useCustomQuery, baseUrl, apiKey } from '../../client'
import { formatEarthDate, parseParams } from '../../utils'
import { roverMap } from '../../store'
import { Context } from '../../App'
import './Photos.scss'

const PhotosPage: React.FC = () => {
    const location = useLocation()
    const ctx = useContext(Context)
    const [, name] = parseParams(location.search)
    const date = formatEarthDate(
        ctx.selectedDate || roverMap[name].maxPhotoDate
    )

    const { data } = useCustomQuery({
        query: `${baseUrl}/mars-photos/api/v1/rovers/${name}/photos?earth_date=${date}&api_key=${apiKey}`
    })

    useEffect(() => ctx.onSelectRover(roverMap[name]), [name])

    return (
        <Layout>
            <div className='photos'>
                <Header toggleSidebar={ctx.onToggleSidebar} />
                <Sidebar />
                <Suspense fallback={<Loader />}>
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
                </Suspense>
            </div>
        </Layout>
    )
}

export default PhotosPage
