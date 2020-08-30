import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators } from '../../actions'
import StyledMain from './MainStyles'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Photos from '../../components/Photos/Photos'
import client from '../../client'

interface Props {
    rovers: any
    selectedDate: string
    actions: any
}

class Main extends Component<Props> {
    componentDidMount = () => {
        this.handleFetchPhotos()
    }

    // fetch photo data
    handleFetchPhotos = () => {
        const { startLoading, stopLoading, storePhotos } = this.props.actions
        startLoading()
        const { rovers, selectedDate: date } = this.props
        const { name } = rovers.find(({ selected }) => selected) // selected rover
        client.getRoverPhotos({ name, date }, async ({ photos }) => {
            await storePhotos({ photos })
            stopLoading()
        })
    }

    render () {
        return (
            <StyledMain>
                <Header />
                <Sidebar fetchPhotos={this.handleFetchPhotos} />
                <Photos />
            </StyledMain>
        )
    }
}

export default connect(
    state => state.rover,
    dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(Main)
