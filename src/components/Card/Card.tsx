import React, { useState } from 'react'
import Reveal from 'react-reveal/Reveal'

import Loader from '../Loader/Loader'
import { PhotoProps } from '../../interfaces'

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
                        src={img_src}
                        alt='rover'
                        onLoad={onPhotoLoad}
                    />
                </div>
                {imgIsLoading && <Loader style={{ position: 'absolute' }} />}
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
