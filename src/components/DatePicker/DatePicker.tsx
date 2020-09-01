import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { actionCreators } from '../../actions'
import { ReduxProps, RoverProps } from '../../interfaces'
import './DatePicker'

const DatePicker: React.FC<ReduxProps & {
    fetchPhotos: () => void
    selectedRover: RoverProps
}> = ({ data, actions, selectedRover }) => {
    const handleDateSelect = async date => {
        const { toggleSidebar, selectDateFilter, selectCameraFilter } = actions

        toggleSidebar()
        selectCameraFilter({ camera: 'All' })
        await selectDateFilter({ date })
    }

    const { selectedDate } = data
    const minDate = new Date(selectedRover.minPhotoDate)
    const maxDate = new Date(selectedRover.maxPhotoDate)

    return (
        <div className='date-picker'>
            <div className='date-picker__text'>
                {/* {capitalize(selectedRover.minPhotoDate)} Date Range: */}
            </div>
            <ReactDatePicker
                className='date-picker__inner'
                minDate={minDate}
                maxDate={maxDate}
                onChange={handleDateSelect}
                selected={new Date(selectedDate)}
                dateFormat='MMMM d, yyyy'
            />
        </div>
    )
}

export default connect(
    state => state,
    dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(DatePicker)
