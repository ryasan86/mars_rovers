import React, { useEffect, useContext, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import PhotoCard from '../../components/PhotoCard'
import PhotoModal from '../../components/PhotoModal'
import { useCustomQuery } from '../../client'
import { formatEarthDate, parseParams, capitalize } from '../../utils'
import { Context } from '../../App'
import { roverMap, baseUrl, apiKey } from '../../constants'
import './Photos.scss'

interface Props {
    date: Date | string
    roverName: string
}

const PhotosPage: React.FC<Props> = ({ date, roverName }) => {
    const isFirstRender = useRef(true)
    const [modalOpen, setModalOpen] = useState(false)

    const {
        data: { photos },
        loading,
        refetch
    } = useCustomQuery({
        query: `${baseUrl}/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${date}&api_key=${apiKey}`
    })

    const renderPhotos = () => {
        return photos?.length > 0 ? (
            <ul className='photos__list'>
                {photos.map((p, i) => (
                    <PhotoCard
                        key={i}
                        idx={i}
                        photo={p}
                        onModalToggle={setModalOpen}
                    />
                ))}
            </ul>
        ) : (
            <span className='photos__empty'>No results</span>
        )
    }

    useEffect(() => {
        if (!isFirstRender.current) refetch()
        if (isFirstRender.current) isFirstRender.current = false
    }, [refetch])

    return (
        <Layout>
            <div className='photos'>
                <h2 className='photos__title'>{capitalize(roverName)}</h2>
                {loading ? (
                    <Loader className='photos__loader' />
                ) : (
                    renderPhotos()
                )}
            </div>
            {photos && (
                <PhotoModal
                    photos={photos}
                    modalOpen={modalOpen}
                    onToggleModal={setModalOpen}
                />
            )}
        </Layout>
    )
}

const withContext = Component => props => {
    const {
        selectedRover: currentRover,
        selectedDate,
        onSelectRover,
        onSelectDate
    } = useContext(Context)
    const { search } = useLocation()
    const incomingName = parseParams(search)

    useEffect(() => {
        if (currentRover?.name !== incomingName) {
            const rover = roverMap[incomingName]
            onSelectRover(rover)
            onSelectDate(rover.maxPhotoDate)
        }
    }, [incomingName, currentRover, onSelectDate, onSelectRover])

    const ComponentWithContext = () => (
        <Component
            {...props}
            roverName={incomingName}
            date={formatEarthDate(selectedDate)}
        />
    )

    return selectedDate && currentRover ? ComponentWithContext() : null
}

export default withContext(PhotosPage)
