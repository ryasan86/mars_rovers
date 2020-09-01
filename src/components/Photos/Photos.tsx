import React from 'react'
import { connect } from 'react-redux'

import Loader from '../Loader/Loader'
import Card from '../Card/Card'
import { ReduxProps, PhotoProps } from '../../interfaces'
import './Photos.scss'

const Photos: React.FC<ReduxProps & { photos: Array<PhotoProps> }> = props => {
    const { photos } = props
    const { loading } = props.ui

    return (
        <div className='photos'>
            {loading ? (
                <Loader className='photos__loader' />
            ) : (
                <ul className='photos__list'>
                    {photos?.length ? (
                        photos.map((photo, i) => {
                            return <Card key={i} photo={photo} />
                        })
                    ) : (
                        <div className='photos__title'>
                            No available photos{' '}
                            <span role='img' aria-label='img'>
                                😢
                            </span>
                        </div>
                    )}
                </ul>
            )}
        </div>
    )
}

export default connect(state => state, null)(Photos)
