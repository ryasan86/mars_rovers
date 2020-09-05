import React, { useEffect, useContext, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import PhotoCard from '../../components/PhotoCard'
import PhotoModal from '../../components/PhotoModal'
import { useCustomQuery } from '../../client'
import { formatEarthDate, parseParams } from '../../utils'
import { Context } from '../../App'
import { roverMap, baseUrl, apiKey } from '../../constants'
import './Photos.scss'

interface Props {
    date: Date | string
    roverName: string
    selectedPhotoIdx: number
    onSelectPhotoIdx: (any: (any: number) => number) => void
}

const PhotosPage: React.FC<Props> = ({
    date,
    roverName,
    selectedPhotoIdx,
    onSelectPhotoIdx
}) => {
    const isFirstRender = useRef(true)
    const [modalOpen, setModalOpen] = useState(false)

    const { data, loading, refetch } = useCustomQuery({
        query: `${baseUrl}/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${date}&api_key=${apiKey}`
    })

    const handleModalToggle = (bool: boolean) => setModalOpen(bool)

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
                            <PhotoCard
                                key={i}
                                idx={i}
                                photo={p}
                                onToggleModal={handleModalToggle}
                            />
                        ))}
                    </ul>
                ) : (
                    <span className='photos__empty'>No results</span>
                )}
            </div>
            {data.photos.length > 0 && (
                <PhotoModal
                    photos={data.photos}
                    modalOpen={modalOpen}
                    selectedPhotoIdx={selectedPhotoIdx}
                    onToggleModal={handleModalToggle}
                    onSelectPhotoIdx={onSelectPhotoIdx}
                />
            )}
        </Layout>
    )
}

const withContext = Component => props => {
    const {
        selectedRover,
        selectedDate,
        onSelectRover,
        onSelectDate,
        selectedPhotoIdx,
        onSelectPhotoIdx
    } = useContext(Context)

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
            selectedPhotoIdx={selectedPhotoIdx}
            onSelectPhotoIdx={onSelectPhotoIdx}
            date={formatEarthDate(selectedDate)}
        />
    )

    return selectedDate && selectedRover ? ComponentWithContext() : null
}

export default withContext(PhotosPage)
