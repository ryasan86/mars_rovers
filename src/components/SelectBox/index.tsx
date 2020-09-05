import React from 'react'

import './SelectBox.scss'

const cameras = [
    {
        abbrev: 'FHAZ',
        fullName: 'Front Hazard Avoidance Camera'
    },
    {
        abbrev: 'RHAZ',
        fullName: 'Rear Hazard Avoidance Camera'
    },
    {
        abbrev: 'MAST',
        fullName: 'Mast Camera'
    },
    {
        abbrev: 'CHEMCAM',
        fullName: 'Chemistry and Camera Complex'
    },
    {
        abbrev: 'MAHLI',
        fullName: 'Mars Hand Lens Imager'
    },
    {
        abbrev: 'MARDI',
        fullName: 'Mars Descent Imager'
    },
    {
        abbrev: 'NAVCAM',
        fullName: 'Navigation Camera'
    },
    {
        abbrev: 'PANCAM',
        fullName: 'Panoramic Camera'
    },
    {
        abbrev: 'MINITES',
        fullName: 'Miniature Thermal Emission Spectrometer'
    }
]

const SelectBox: React.FC = () => {
    const handleCamFilterSelect = e => {
        const camera = e.target.value
        console.log(camera)
    }

    return (
        <div className='select-box'>
            <div className='select-box__title'>Camera:</div>
                <select
                    className='select-box__select'
                    value={''}
                    onChange={handleCamFilterSelect}>
                    <option value='All'>All</option>
                    {cameras.map(({ abbrev, fullName }, i) => (
                        <option key={i} value={abbrev}>
                            {fullName} ({abbrev})
                        </option>
                    ))}
                </select>
        </div>
    )
}

export default SelectBox
