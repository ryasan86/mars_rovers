import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { classList } from '../../utils'
import { RoverProps } from '../../interfaces'
import './HomeCard.scss'
import Icon from '../Icons'
import { capitalize } from '../../utils'
import { rootPath } from '../../constants'

interface Props {
    idx: number
    rover: { img: string; activeDate: string; description: string } & RoverProps
}

const HomeCard: React.StatelessComponent<Props> = ({ idx, rover }) => {
    const [isActive, setIsActive] = useState(false)
    const history = useHistory()
    const modifier = rover.name.toLowerCase()

    const navigate = (path: string) => () => {
        history.push(path)
    }

    return (
        <li
            key={idx}
            className={classList({
                'home__card-item': true,
                [`home__card-item--${modifier}`]: true,
                active: isActive
            })}>
            <Icon
                className={`home__card-toggle-btn  home__card-toggle-btn--${modifier}`}
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
                    [`home__card-wing--${modifier}`]: true
                })}></div>
            <div className={`home__card-panel home__card-panel--${modifier}`}>
                <p className='home__card-medium-text'>
                    {capitalize(rover.name)}
                </p>
                <p className='home__card-small-text'>{rover.activeDate}</p>
            </div>
            <div
                className={classList({
                    'home__card-wing': true,
                    'home__card-wing--right': true,
                    [`home__card-wing--${modifier}`]: true
                })}></div>
            <div className={`home__card-body home__card-body--${modifier}`}>
                <p className='home__card-medium-text'>{rover.description}</p>
                <button
                    className={`home__card-btn home__card-btn--${modifier}`}
                    onClick={navigate(`${rootPath}photos?name=${rover.name}`)}>
                    See photos
                </button>
            </div>
        </li>
    )
}

export default HomeCard
