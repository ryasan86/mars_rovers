import React from 'react'

import './SelectBox.scss'

const CAMERAS = [
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
    // const handleCamFilterSelect = async e => {
    //     const camera = e.target.value
    //     const { selectCameraFilter, toggleSidebar } = actions
    //     if (ui.sidebarIsOpen) toggleSidebar()
    //     await selectCameraFilter({ camera })
    // }

    return (
        <div className='select-box'>
            {/* <div className='select-box__title'>Camera</div>
            <div className='select-box__container'>
                <select
                    className='select-box__box'
                    value={data.selectedCamera}
                    onChange={handleCamFilterSelect}>
                    <option value='All'>All</option>
                    {CAMERAS.map(({ abbrev, fullName }, i) => (
                        <option key={i} value={abbrev}>
                            {fullName} ({abbrev})
                        </option>
                    ))}
                </select>
            </div> */}
        </div>
    )
}

export default SelectBox