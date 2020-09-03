import React, { useContext } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import Loader from '../Loader'
import { Context } from '../../App'
import { capitalize } from '../../utils'
import './DatePicker.scss'

const DatePicker: React.FC = () => {
    const { selectedRover, selectedDate, onSelectDate } = useContext(Context)

    const handleDateSelect = date => {
        onSelectDate(date)
    }

    if (selectedRover && selectedDate) {
        const minDate = new Date(selectedRover.minPhotoDate)
        const maxDate = new Date(selectedRover.maxPhotoDate)
        const selected = new Date(selectedDate)

        return (
            <div className='date-picker'>
                <div className='date-picker__text'>
                    {capitalize(selectedRover.name)} Date Range:
                </div>
                <ReactDatePicker
                    className='date-picker__input'
                    minDate={minDate}
                    maxDate={maxDate}
                    onChange={handleDateSelect}
                    selected={selected}
                    dateFormat='yyyy/MM/dd'
                />
            </div>
        )
    }

    return <Loader className='date-picker__loader' />
}

export default DatePicker
