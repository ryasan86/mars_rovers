import React, { useState } from 'react'
import Reveal from 'react-reveal/Reveal'

import Loader from '../Loader'
import { PhotoProps } from '../../interfaces'
import './PhotoCard.scss'

const Card: React.FC<{ photo: PhotoProps }> = props => {
    const { img_src, earth_date, sol, camera } = props.photo
    const [imgIsLoading, setLoading] = useState(true)

    const onPhotoLoad = () => setLoading(false)

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
                    <button className='photo-card__btn' onClick={() => window.open(img_src, '_blank')}>
                        View Image
                    </button>
                </div>
            </div>
        </Reveal>
    )
}

export default Card
