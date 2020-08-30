import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import DatePickerWrap from './DatePickerStyles'
import { Text } from './../../components/common/typography'
import { actionCreators } from '../../actions'
import { capitalize } from './../../utils'

interface Props {
    actions: any
    fetchPhotos: () => void
    rovers: any[]
    selectedDate: string
}

class DatePicker extends React.Component<Props> {
    handleDateSelect = async date => {
        const {
            toggleSidebar,
            selectDateFilter,
            selectCameraFilter
        } = this.props.actions

        toggleSidebar()
        selectCameraFilter({ camera: 'All' })
        await selectDateFilter({ date })
        this.props.fetchPhotos()
    }

    render () {
        const { rovers, selectedDate } = this.props
        const selectedRover = rovers.find(({ selected }) => selected)
        const minDate = new Date(selectedRover.minPhotoDate)
        const maxDate = new Date(selectedRover.maxPhotoDate)

        return (
            <DatePickerWrap>
                <Text>{capitalize(selectedRover.name)} Date Range:</Text>
                <ReactDatePicker
                    className='date-picker'
                    minDate={minDate}
                    maxDate={maxDate}
                    onChange={this.handleDateSelect}
                    selected={new Date(selectedDate)}
                    dateFormat='MMMM d, yyyy'
                />
            </DatePickerWrap>
        )
    }
}

export default connect(
    state => state.rover,
    dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(DatePicker)
