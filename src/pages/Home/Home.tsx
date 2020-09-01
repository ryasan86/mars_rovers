import React, { useState, useEffect } from 'react'

import { MilkyWay } from '../../videos'
import { ReduxProps, RoverProps } from '../../interfaces'
import { classList } from '../../utils'
import { roverList } from '../../store'
import './Home.scss'
import './HomeCards.scss'

interface Props {
    img: string
    activeDate: string
    description: string
}

// prettier-ignore
const detailsMap = {
    opportunity: {
        img: require('../../images/curiosity-1.png'),
        activeDate: 'Feb. 7, 2019 - Feb. 13 2019',
        description: 'No response has been received from Opportunity since Sol 5111 (June 10, 2018), amid a planet-encircling dust storm on Mars.'
    } as Props,
    curiosity: {
        img: require('../../images/opportunity-1.png'),
        activeDate: 'Feb. 7, 2019 - Feb. 13 2019',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ullam quisquam.'
    } as Props,
    spirit: {
        img: require('../../images/spirit-1.png'),
        activeDate: 'Feb. 7, 2019 - Feb. 13 2019',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ullam quisquam.'
    } as Props
}

const rovers = roverList.map(({ rover }) => ({
    ...rover,
    ...detailsMap[rover.name]
}))

const CardList: React.FC = () => {
    const [activeIdx, setActiveIdx] = useState(null)

    const handleToggleActive = (i: number) => () => {
        setActiveIdx(prevIdx => (prevIdx === null ? i : null))
    }

    return (
        <ul className='home__card-list'>
            {rovers.map((rover: RoverProps & Props, i: number) => (
                <li
                    key={i}
                    className={classList({
                        'home__card-item': true,
                        [`home__card-item--${i + 1}`]: true,
                        active: activeIdx === i
                    })}
                    onMouseEnter={handleToggleActive(i)}
                    onMouseLeave={handleToggleActive(i)}>
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
                        className={`home__card-panel home__card-panel--${i +
                            1}`}>
                        <p className='home__card-medium-text'>{rover.name}</p>
                        <small className='home__card-small-text'>
                            {rover.activeDate}
                        </small>
                    </div>
                    <div
                        className={`home__card-body home__card-body--${i + 1}`}>
                        <p className='home__card-medium-text'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi voluptatem labore repellendus possimus
                            ullam impedit porro rerum, sunt cumque molestiae
                            debitis beatae vero perspiciatis sint architecto
                            recusandae corporis cum reprehenderit.
                        </p>
                        <button className='home__card-btn'>See photos</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

const Home: React.FC<ReduxProps> = () => {
    const [pct, setPct] = useState(0)
    const [int, setInt] = useState(null)
    const [isDownScroll, setIsDownScroll] = useState(true)

    const handleScrollClick = () => {
        window.scrollTo(0, document.body.scrollHeight)
    }

    const handleScroll = () => {
        console.log('scrolling')
        setIsDownScroll(prev => !prev)
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return document.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const increase = () => setPct(prev => prev + 1)
        const interval = setInterval(increase, 20)
        setInt(interval)
        return () => clearInterval(int)
    }, [])

    useEffect(() => {
        if (pct >= 100) clearInterval(int)
    }, [pct, int])

    return (
        <div className='home'>
            <div className='home__header'>
                <div className='home__coordinates-text'>
                    current weather on mars: <br /> Sol 259<span> | </span>High:
                    -17° F <span> | </span>
                    Low: -150° F
                </div>
                <video
                    className='home__video'
                    preload='auto'
                    muted={true}
                    loop={true}
                    autoPlay={true}>
                    <source src={MilkyWay} />
                </video>
                <div className='home__overlay'></div>
                <div className='home__circle-container'>
                    <div className='home__circle-track home__circle-track--clockwise'></div>
                    <div className='home__circle-track home__circle-track--counterclockwise'></div>
                    <h1 className='home__title'>
                        Welc<span className='home__title-dot'></span>me to{' '}
                        <br /> Mars
                    </h1>
                    <q className='home__subtitle'>
                        Mars is the only planet inhabited solely by robots.
                    </q>
                    <footer>– Sarcastic Rover</footer>
                </div>
                <div className='home__pct-text'>
                    {pct}
                    <span>%</span>
                </div>
            </div>
            <div className='home__body'>
                <CardList />
            </div>
            <button
                className={classList({
                    'home__scroll-btn': true,
                    'down-scroll': isDownScroll,
                    'up-scroll': !isDownScroll
                })}
                onClick={handleScrollClick}>
                &#8595;
            </button>
        </div>
    )
}

export default Home
