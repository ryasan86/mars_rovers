import React, { useState, useContext } from 'react'
import Reveal from 'react-reveal/Reveal'

import Loader from '../Loader'
import { PhotoProps } from '../../interfaces'
import './PhotoCard.scss'
import { Context } from '../../App'

const PhotoCard: React.FC<{
    photo: PhotoProps
    idx: number
    onModalToggle?: (bool: boolean) => void
}> = ({ photo, idx, onModalToggle }) => {
    const { img_src, earth_date, sol, camera } = photo
    const [imgIsLoading, setLoading] = useState(true)
    const { onSelectPhotoIdx } = useContext(Context)

    const onPhotoLoad = () => setLoading(false)

    const handleBtnClick = () => {
        onSelectPhotoIdx(() => idx)
        onModalToggle(true)
    }

    return (
        <Reveal>
            <div className='photo-card'>
                <div className='photo-card__img-container'>
                    <img
                        className='photo-card__img'
                        alt='rover'
                        src={img_src}
                        onLoad={onPhotoLoad}
                    />
                    {imgIsLoading && <Loader className='photo-card__loader' />}
                </div>
                {/* prettier-ignore */}
                <div className='photo-card__body'>
                    <p className='photo-card__text'>Date: {earth_date}</p>
                    <p className='photo-card__text'>Martian Sol: {sol}</p>
                    <p className='photo-card__text'>Camera: {camera.full_name} ({camera.name})</p>
                    <button className='photo-card__btn' onClick={handleBtnClick}>
                        View Image
                    </button>
                </div>
            </div>
        </Reveal>
    )
}

export default PhotoCard
