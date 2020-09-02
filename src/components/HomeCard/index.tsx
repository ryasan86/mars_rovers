import React, { useState } from 'react'

import { classList } from '../../utils'
import { RoverProps } from '../../interfaces'
import './HomeCard.scss'
import Icon from '../Icons'

interface Props {
    idx: number
    rover: { img: string; activeDate: string } & RoverProps
}

const HomeCard: React.StatelessComponent<Props> = ({ idx, rover }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <li
            key={idx}
            className={classList({
                'home__card-item': true,
                [`home__card-item--${idx}`]: true,
                active: isActive
            })}>
            <Icon
                className={`home__card-toggle-btn  home__card-toggle-btn--${idx}`}
                name='burger'
                onClick={() => setIsActive(prev => !prev)}
            />
            <div className='home__card-header'>
                <div className='home__card-img-container'>
                    <img
                        className='home__card-img'
                        src={rover.img}
                        alt={rover.name}
                    />
                </div>
            </div>
            <div
                className={classList({
                    'home__card-wing': true,
                    'home__card-wing--left': true,
                    [`home__card-wing--${idx}`]: true
                })}></div>
            <div className={`home__card-panel home__card-panel--${idx}`}>
                <p className='home__card-medium-text'>{rover.name}</p>
                <p className='home__card-small-text'>{rover.activeDate}</p>
            </div>
            <div
                className={classList({
                    'home__card-wing': true,
                    'home__card-wing--right': true,
                    [`home__card-wing--${idx}`]: true
                })}></div>
            <div className={`home__card-body home__card-body--${idx}`}>
                <p className='home__card-medium-text'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi voluptatem labore repellendus possimus ullam impedit
                    porro rerum, sunt cumque molestiae debitis beatae vero
                    perspiciatis sint architecto recusandae corporis cum
                    reprehenderit.
                </p>
                <button className={`home__card-btn home__card-btn--${idx}`}>
                    See photos
                </button>
            </div>
        </li>
    )
}

export default HomeCard
