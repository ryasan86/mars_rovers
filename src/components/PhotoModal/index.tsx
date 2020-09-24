import React, { useState, useContext, useEffect } from 'react'

import Icon from '../../components/Icons'
import { PhotoProps } from '../../interfaces'
import './PhotoModal.scss'
import { Context } from '../../App'

interface Props {
    photos?: PhotoProps[]
    layersCount?: number
    step?: number
    idx?: number
    modalOpen?: boolean
    img?: string | undefined
    onToggleModal?: (bool: boolean) => void
    onSelectPhotoIdx?: (any: (any: number) => number) => void
}

const Modal: React.FC<Props> = ({ img, idx, step, layersCount }) => (
    <div
        className='photo-modal-slide'
        style={{
            transform: `translateX(${((idx - step) % layersCount) * 100}vw)`,
            opacity: step === idx ? 1 : 0
        }}>
        <div className='photo-modal__photo-container'>
            <img className='photo-modal__img' alt={'photo-' + idx} src={img} />
        </div>
    </div>
)

const uniq = (a: number[]) => [...new Set(a)]

const initLayers = (selectedIdx: number, pCount: number) =>
    uniq([
        (selectedIdx - 1 + pCount) % pCount,
        selectedIdx,
        (selectedIdx + 1) % pCount
    ])

const PhotoModal: React.FC<Props> = props => {
    const { initialPhotoIdx } = useContext(Context)
    const { photos, onToggleModal, modalOpen } = props
    const [layers, setLayers] = useState(null)
    const [step, setStep] = useState(0)

    const handleLeftClick = () => {
        setLayers(prev => {
            const tail = (prev[0] - 1 + photos.length) % photos.length
            return [tail, ...prev.slice(0, prev.length - 1)]
        })
        setStep(prev => (prev - 1 + photos.length) % photos.length)
    }

    const handleRightClick = () => {
        setLayers(prev => {
            const head = (prev[prev.length - 1] + 1) % photos.length
            return [...prev.slice(1), head]
        })
        setStep(prev => (prev + 1) % photos.length)
    }

    useEffect(() => {
        if (initialPhotoIdx !== null) {
            setLayers(initLayers(initialPhotoIdx, photos.length))
            setStep(initialPhotoIdx)
        }
    }, [modalOpen, photos.length, initialPhotoIdx])

    return (
        <div className={`photo-modal ${modalOpen ? ' active' : ''}`}>
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
                        layersCount={layers.length}
                        step={step}
                        img={photos[layer]?.img_src}
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
