import React from 'react'
import { connect } from 'react-redux'

import Loader from '../Loader/Loader'
import Card from '../Card/Card'
import { ReduxProps } from '../../interfaces'
import './Photos'

const Photos: React.FC<ReduxProps> = props => {
    const { filteredPhotos } = props.data
    const { loading } = props.ui

    return (
        <div className='photos'>
            <ul className='photos__list'>
                {loading && <Loader width='75px' height='75px' />}
                {filteredPhotos.length ? (
                    filteredPhotos.map((photo, i) => {
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
        </div>
    )
}

export default connect(state => state, null)(Photos)
