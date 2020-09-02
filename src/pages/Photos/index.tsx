import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'

import Layout from '../../components/Layout'
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

    const { data, loading } = useCustomQuery({
        query: `${baseUrl}/mars-photos/api/v1/rovers/${name}/photos?earth_date=${date}&api_key=${apiKey}`
    })

    useEffect(() => ctx.onSelectRover(roverMap[name]), [name])

    return (
        <Layout>
            <div className='photos'>
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
                                No results{' '}
                                <span role='img' aria-label='img'>
                                    😢
                                </span>
                            </div>
                        )}
                    </ul>
                )}
            </div>
        </Layout>
    )
}

export default PhotosPage
