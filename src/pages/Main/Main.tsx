import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators } from '../../actions'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Photos from '../../components/Photos/Photos'
import client from '../../client'
import { ReduxProps } from '../../interfaces'

const Main: React.FC<ReduxProps> = ({ actions, data }) => {
    const fetchPhotos = () => {
        const { startLoading, stopLoading, storePhotos } = actions
        const { rovers, selectedDate: date } = data
        startLoading()

        client.getRoverPhotos(
            { name: rovers[0].name, date },
            async ({ photos }) => {
                await storePhotos({ photos })
                stopLoading()
            }
        )
    }

    useEffect(() => fetchPhotos(), [])

    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
            <Header />
            <Sidebar fetchPhotos={fetchPhotos} />
            <Photos />
        </div>
    )
}

export default connect(
    state => state,
    dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(Main)
