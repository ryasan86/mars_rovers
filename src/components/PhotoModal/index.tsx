import React, { useState, useContext, useEffect } from 'react'

import Icon from '../../components/Icons'
import { classList } from '../../utils'
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

const Modal: React.FC<Props> = ({ photos, idx, step, selectedPhotoIdx }) => {
    const src = photos[idx]?.img_src

    // useEffect(() => {
    //     console.log(idx + selectedPhotoIdx)
    // }, [idx])

    // prettier-ignore
    return (
        <div
            className='photo-modal-slide'
            style={{ transform: `translateX(${((idx - selectedPhotoIdx) + step) * 100}vw)` }}>
            <div className='photo-modal__photo-container'>
                <img
                    className='photo-modal__img'
                    src={src}
                    alt={'photo-' + idx}
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
    const selectedLayer = layers?.[2]

    const handleLeftClick = () => {
        setLayers(prev => {
            const add = prev[0] - 1
            return [add, ...prev.slice(0, prev.length - 1)]
        })
        setStep(prev => prev + 1)
    }

    const handleRightClick = () => {
        setLayers(prev => {
            const add = prev[prev.length - 1] + 1
            return [...prev.slice(1), add]
        })
        setStep(prev => prev - 1)
    }

    useEffect(() => {
        if (selectedPhotoIdx !== null) setLayers(initLayers(selectedPhotoIdx))
        else setLayers(initLayers(0))
    }, [modalOpen])

    return (
        <div className={`photo-modal${modalOpen ? ' active' : ''}`}>
            <Icon
                name='arrow-left'
                onClick={handleLeftClick}
                className={classList({
                    'photo-modal__btn': true,
                    'photo-modal__btn--left': true,
                    disabled: selectedLayer <= 0
                })}
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
                className={classList({
                    'photo-modal__btn': true,
                    'photo-modal__btn--right': true,
                    disabled: selectedLayer >= photos.length - 1
                })}
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
