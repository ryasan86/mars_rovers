import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators } from '../../actions'
import { MilkyWayA } from '../../videos'
import './Home.scss'

interface Props {
    actions: any
    rover: any
}

class Home extends Component<Props> {
    // set active rover then fetch photos
    handleRoverSelect = async (maxPhotoDate, idx) => {
        const { selectDateFilter, selectRover } = this.props.actions
        // default date filter to active rover max photo date
        selectDateFilter({ date: new Date(maxPhotoDate) })
        await selectRover({ idx })
    }

    render () {
        return (
            <div className='home'>
                <video
                    className='home__video'
                    preload='auto'
                    muted={true}
                    loop={true}
                    autoPlay={true}>
                    <source src={MilkyWayA} />
                </video>
                <div className='home__content'>
                    <div className='home__circle-track home__circle-track--clockwise'></div>
                    <div className='home__circle-track counterclockwise'></div>
                    <div className='home__satellite'></div>
                    <h4 className='home__title'>Welcome to Mars</h4>
                </div>
            </div>
        )
    }
}

export default connect(
    (state: any) => state,
    (dispatch: any) => ({
        actions: bindActionCreators(actionCreators, dispatch)
    })
)(Home)
