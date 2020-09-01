import React, { useState } from 'react'
import Reveal from 'react-reveal/Reveal'

import Loader from '../Loader/Loader'
import { PhotoProps } from '../../interfaces'
import './Card.scss'

const Card: React.FC<{ photo: PhotoProps }> = props => {
    const { img_src, earth_date, sol, camera } = props.photo
    const [imgIsLoading, setLoading] = useState(true)

    const onPhotoLoad = () => setLoading(false)

    return (
        <Reveal>
            <div className='card'>
                <div className='card__img-container'>
                    <img
                        className='card__img'
                        alt='rover'
                        src={img_src}
                        onLoad={onPhotoLoad}
                    />
                </div>
                {imgIsLoading && <Loader />}
                {/* prettier-ignore */}
                <div className='card__body'>
                    <p className='card__text'>Date: {earth_date}</p>
                    <p className='card__text'>Martian Sol: {sol}</p>
                    <p className='card__text'>Camera: {camera.full_name} ({camera.name})</p>
                    <button className='card__btn' onClick={() => window.open(img_src, '_blank')}>
                        View Image
                    </button>
                </div>
            </div>
        </Reveal>
    )
}

export default Card
