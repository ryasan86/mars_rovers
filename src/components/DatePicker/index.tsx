import React from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { RoverProps } from '../../interfaces'
import './DatePicker.scss'

const DatePicker: React.FC<{
    onSelectDate: (date: string) => string
    selectedDate: string
    selectedRover: RoverProps
}> = ({ selectedRover, selectedDate, onSelectDate }) => {
    const handleDateSelect = async date => {

        // toggleSidebar()
        // selectCameraFilter({ camera: 'All' })
        // await selectDateFilter({ date })
    }

    const minDate = new Date(selectedRover?.minPhotoDate)
    const maxDate = new Date(selectedRover?.maxPhotoDate)

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

export default DatePicker
