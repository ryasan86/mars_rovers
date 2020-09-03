import React, { useEffect, useContext, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import PhotoCard from '../../components/PhotoCard'
import { useCustomQuery } from '../../client'
import { formatEarthDate, parseParams } from '../../utils'
import { Context } from '../../App'
import { roverMap, baseUrl, apiKey } from '../../constants'
import './Photos.scss'

interface Props {
    date: Date | string
    roverName: string
}

const PhotosPage: React.FC<Props> = ({ date, roverName }) => {
    const isFirstRender = useRef(true)

    const { data, loading, refetch } = useCustomQuery({
        query: `${baseUrl}/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${date}&api_key=${apiKey}`
    })

    useEffect(() => {
        if (!isFirstRender.current) refetch()
        isFirstRender.current = false
    }, [refetch])

    return (
        <Layout>
            <div className='photos'>
                {loading ? (
                    <Loader className='photos__loader' />
                ) : data.photos.length > 0 ? (
                    <ul className='photos__list'>
                        {data.photos.map((p, i) => (
                            <PhotoCard key={i} photo={p} />
                        ))}
                    </ul>
                ) : (
                    <span className='photos__empty'>No results</span>
                )}
            </div>
        </Layout>
    )
}

const withContext = Component => props => {
    const { selectedRover, selectedDate, onSelectRover, onSelectDate } = useContext(Context) // prettier-ignore
    const { search } = useLocation()
    const roverName = parseParams(search)

    useEffect(() => {
        const rover = roverMap[roverName]
        onSelectRover(rover)
        onSelectDate(rover.maxPhotoDate)
    }, [roverName, onSelectRover, onSelectDate])

    const ComponentWithContext = () => (
        <Component
            {...props}
            roverName={roverName}
            date={formatEarthDate(selectedDate)}
        />
    )

    return selectedDate && selectedRover ? ComponentWithContext() : null
}

export default withContext(PhotosPage)
