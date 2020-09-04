import React, { useState } from 'react'

import Icon from '../../components/Icons'
import { classList } from '../../utils'
import { PhotoProps } from '../../interfaces'
import './PhotoModal.scss'

interface Props {
    photos: PhotoProps[]
    selectedPhotoIdx: number
    idx?: number
    modalOpen: boolean
    isTickingLeft?: boolean
    onToggleModal?: (bool: boolean) => void
    onSelectPhotoIdx?: (any: (any: number) => number) => void
}

const PhotoModal: React.FC<Props> = props => {
    const { selectedPhotoIdx, photos, onSelectPhotoIdx, onToggleModal } = props
    const [isTicking, setIsTicking] = useState(false)

    const rotateSlide = (num: number) => {
        setIsTicking(true)
        setTimeout(() => {
            onSelectPhotoIdx(prev => prev + num)
        }, 250)

        setTimeout(() => {
            setIsTicking(false)
        }, 500)
    }

    const handleLeftClick = () => rotateSlide(-1)
    const handleRightClick = () => rotateSlide(1)

    return (
        <div className='photo-modal'>
            <Icon
                name='arrow-left'
                onClick={handleLeftClick}
                className={classList({
                    'photo-modal__btn': true,
                    'photo-modal__btn--left': true,
                    disabled: selectedPhotoIdx <= 0
                })}
            />
            <div className={`photo-modal__slide-container`}>
                <div
                    className={classList({
                        'photo-modal-slide': true,
                        'fade-right': isTicking
                    })}>
                    <div className='photo-modal__photo-container'>
                        <img
                            className='photo-modal__img'
                            src={photos[selectedPhotoIdx].img_src}
                            alt={'photo-' + selectedPhotoIdx}
                        />
                    </div>
                </div>
            </div>
            <Icon
                name='arrow-right'
                onClick={handleRightClick}
                className={classList({
                    'photo-modal__btn': true,
                    'photo-modal__btn--right': true,
                    disabled: selectedPhotoIdx >= photos.length - 1
                })}
            />
            <Icon
                onClick={() => onToggleModal(false)}
                className='photo-modal__btn photo-modal__btn--close'
                name='close'
            />
        </div>
    )
}

export default PhotoModal
