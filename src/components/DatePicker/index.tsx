import React, { useContext } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import Loader from '../Loader'
import { Context } from '../../App'
import './DatePicker.scss'

const DatePicker: React.FC = () => {
    const { selectedRover, selectedDate, onSelectDate } = useContext(Context)

    if (selectedRover && selectedDate) {
        const minDate = new Date(selectedRover.minPhotoDate)
        const maxDate = new Date(selectedRover.maxPhotoDate)
        const selected = new Date(selectedDate)

        return (
            <div className='date-picker__container'>
                <span>Range: </span>
                <ReactDatePicker
                    className='date-picker__input'
                    dateFormat='yyyy/MM/dd'
                    onChange={date => onSelectDate(date)}
                    minDate={minDate}
                    maxDate={maxDate}
                    selected={selected}
                />
                {selectedRover.totalPhotos && (
                    <span style={{ marginLeft: '1rem' }}>
                        Total: {selectedRover.totalPhotos}
                    </span>
                )}
            </div>
        )
    }

    return <Loader className='date-picker__loader' />
}

export default DatePicker
