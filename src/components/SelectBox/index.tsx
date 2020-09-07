import React, { useContext } from 'react'

import { Context } from '../../App'
import './SelectBox.scss'

const cameras = [
    {
        abbreviation: 'FHAZ',
        fullName: 'Front Hazard Avoidance Camera'
    },
    {
        abbreviation: 'RHAZ',
        fullName: 'Rear Hazard Avoidance Camera'
    },
    {
        abbreviation: 'MAST',
        fullName: 'Mast Camera'
    },
    {
        abbreviation: 'CHEMCAM',
        fullName: 'Chemistry and Camera Complex'
    },
    {
        abbreviation: 'MAHLI',
        fullName: 'Mars Hand Lens Imager'
    },
    {
        abbreviation: 'MARDI',
        fullName: 'Mars Descent Imager'
    },
    {
        abbreviation: 'NAVCAM',
        fullName: 'Navigation Camera'
    },
    {
        abbreviation: 'PANCAM',
        fullName: 'Panoramic Camera'
    },
    {
        abbreviation: 'MINITES',
        fullName: 'Miniature Thermal Emission Spectrometer'
    }
]

const SelectBox: React.FC = () => {
    const { selectedCamera, onSelectCamera } = useContext(Context)

    const handleCamFilterSelect = e => {
        const camera = e.target.value
        onSelectCamera(camera === 'ALL' ? null : camera)
    }

    return (
        <div className='select-box'>
            <div className='select-box__title'>Camera:</div>
            <select
                className='select-box__select'
                value={selectedCamera || 'ALL'}
                onChange={handleCamFilterSelect}>
                <option value='ALL'>All</option>
                {cameras.map(({ abbreviation, fullName }, i) => (
                    <option key={i} value={abbreviation}>
                        {fullName} ({abbreviation})
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SelectBox
