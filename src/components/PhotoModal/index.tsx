import React, { useState, useContext, useEffect } from 'react'

import Icon from '../../components/Icons'
import { PhotoProps } from '../../interfaces'
import './PhotoModal.scss'
import { Context } from '../../App'

interface Props {
    photos: PhotoProps[]
    step?: number
    idx?: number
    modalOpen?: boolean
    selectedPhotoIdx?: number
    onToggleModal?: (bool: boolean) => void
    onSelectPhotoIdx?: (any: (any: number) => number) => void
}

const Modal: React.FC<Props> = ({ photos, idx, step }) => {
    const src = photos[idx]?.img_src
    return (
        <div
            className='photo-modal-slide'
            style={{
                transform: `translateX(${(idx - step) * 100}vw)`
            }}>
            <div className='photo-modal__photo-container'>
                <img
                    className='photo-modal__img'
                    alt={'photo-' + idx}
                    src={src}
                />
            </div>
        </div>
    )
}

const initLayers = (selectedIdx: number) => [
    selectedIdx - 2,
    selectedIdx - 1,
    selectedIdx,
    selectedIdx + 1,
    selectedIdx + 2
]

const PhotoModal: React.FC<Props> = props => {
    const { selectedPhotoIdx } = useContext(Context)
    const { photos, onToggleModal, modalOpen } = props
    const [layers, setLayers] = useState(null)
    const [step, setStep] = useState(0)

    const handleLeftClick = () => {
        setLayers(prev => {
            const add = (prev[0] - 1 + photos.length) % photos.length
            return [add, ...prev.slice(0, prev.length - 1)]
        })
        setStep(prev => (prev - 1 + photos.length) % photos.length)
    }

    const handleRightClick = () => {
        setLayers(prev => {
            const add = (prev[prev.length - 1] + 1) % photos.length
            return [...prev.slice(1), add]
        })
        setStep(prev => (prev + 1) % photos.length)
    }

    useEffect(() => {
        if (selectedPhotoIdx !== null) {
            setLayers(initLayers(selectedPhotoIdx))
            setStep(selectedPhotoIdx)
        } else {
            setLayers(initLayers(0))
            setStep(0)
        }
    }, [modalOpen])

    useEffect(() => {
        console.log(
            layers?.map(l => l - step),
            step,
            selectedPhotoIdx
        )
    }, [step])

    return (
        <div className={`photo-modal${modalOpen ? ' active' : ''}`}>
            <h3 className='photo-modal__count'>
                {Math.abs(step) + 1} / {photos.length}
            </h3>
            <Icon
                name='arrow-left'
                onClick={handleLeftClick}
                className='photo-modal__btn photo-modal__btn--left'
            />
            <div className='photo-modal__slide-container'>
                {layers?.map(layer => (
                    <Modal
                        key={layer}
                        idx={layer}
                        step={step}
                        photos={photos}
                        selectedPhotoIdx={selectedPhotoIdx}
                    />
                ))}
            </div>
            <Icon
                name='arrow-right'
                onClick={handleRightClick}
                className='photo-modal__btn photo-modal__btn--right'
            />
            <Icon
                onClick={() => {
                    setLayers(null)
                    setStep(0)
                    onToggleModal(false)
                }}
                className='photo-modal__btn photo-modal__btn--close'
                name='close'
            />
        </div>
    )
}

export default PhotoModal
