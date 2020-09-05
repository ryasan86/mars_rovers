import React, { useState } from 'react'

import Icon from '../../components/Icons'
import { classList } from '../../utils'
import { PhotoProps } from '../../interfaces'
import './PhotoModal.scss'

interface Props {
    photos: PhotoProps[]
    selectedPhotoIdx?: number
    step?: number
    idx?: number
    modalOpen?: boolean
    onToggleModal?: (bool: boolean) => void
    onSelectPhotoIdx?: (any: (any: number) => number) => void
}

const Modal: React.FC<Props> = ({ photos, idx, step }) => (
    <div
        className='photo-modal-slide'
        style={{ transform: `translateX(${(idx + step) * 100}vw)` }}>
        <div className='photo-modal__photo-container'>
            <img
                className='photo-modal__img'
                src={photos[idx]?.img_src}
                alt={'photo-' + idx}
            />
        </div>
    </div>
)

const initialState = (selectedIdx: number) => [
    selectedIdx - 2,
    selectedIdx - 1,
    selectedIdx,
    selectedIdx + 1,
    selectedIdx + 2
]

const PhotoModal: React.FC<Props> = props => {
    const {
        selectedPhotoIdx: selectedPhotoIdx,
        photos,
        onToggleModal,
        modalOpen
    } = props
    const [photoIndices, setPhotoIndices] = useState(initialState(selectedPhotoIdx)) // prettier-ignore
    const [step, setStep] = useState(0)

    const handleLeftClick = () => {
        setPhotoIndices(prev => {
            const add = prev[0] - 1
            return [add, ...prev.slice(0, prev.length - 1)]
        })
        setStep(prev => prev + 1)
    }

    const handleRightClick = () => {
        setPhotoIndices(prev => {
            const add = prev[prev.length - 1] + 1
            return [...prev.slice(1), add]
        })
        setStep(prev => prev - 1)
    }

    return (
        <div className={`photo-modal${modalOpen ? ' active' : ''}`}>
            <Icon
                name='arrow-left'
                onClick={handleLeftClick}
                className={classList({
                    'photo-modal__btn': true,
                    'photo-modal__btn--left': true,
                    disabled: photoIndices[2] <= 0
                })}
            />
            <div className='photo-modal__slide-container'>
                {photoIndices.map(idx => (
                    <Modal
                        key={idx}
                        idx={idx}
                        step={step}
                        photos={photos}
                        selectedPhotoIdx={selectedPhotoIdx}
                    />
                ))}
            </div>
            <Icon
                name='arrow-right'
                onClick={handleRightClick}
                className={classList({
                    'photo-modal__btn': true,
                    'photo-modal__btn--right': true,
                    disabled: photoIndices[2] >= photoIndices.length - 1
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
