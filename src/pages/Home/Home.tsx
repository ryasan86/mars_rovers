import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { actionCreators } from '../../actions'
import { MilkyWay } from '../../videos'
import { ReduxProps } from '../../interfaces'
import './Home.scss'

const Home: React.FC<ReduxProps> = ({ actions, data }) => {
    const [pct, setPct] = useState(0)
    const [int, setInt] = useState(null)

    const handleSelect = async (maxPhotoDate, idx) => {
        const { selectDateFilter, selectRover } = actions
        selectDateFilter({ date: new Date(maxPhotoDate) })
        await selectRover({ idx })
    }

    useEffect(() => {
        const increase = () => setPct(prev => prev + 1)
        const interval = setInterval(increase, 20)
        setInt(interval)
        return () => clearInterval(int)
    }, [int])

    useEffect(() => {
        if (pct >= 100) clearInterval(int) 
    }, [pct, int])

    return (
        <div className='home'>
            <div className='home__header'>
                <span className='home__coordinates-text'>
                    34.0522° N, 118.2437° W
                </span>
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
                        Welc<span className='home__title-dot'></span>me to Mars
                    </h1>
                </div>
                <div className='home__pct-text'>{pct}%</div>
            </div>
            <div className='home__body'>
                <ul className='home__card-list'>
                    <li className='home__card-item'>
                        <h2 className='home__card-title'>Opportunity</h2>
                        <div className='home__card-img-container'>
                            <img
                                className='home__card-img'
                                src={require('../../images/opportunity-1.png')}
                                alt='opportunity'
                            />
                        </div>
                        <div className='home__card-details'>
                            <h4 className='home__card-active-date'>
                                Feb. 7, 2019 - Feb. 13 2019
                            </h4>
                            <span className='home__card-description'>
                                No response has been received from Opportunity
                                since Sol 5111 (June 10, 2018), amid a
                                planet-encircling dust storm on Mars.
                            </span>
                            <Link
                                to={{
                                    pathname: '/main',
                                    search: `?name=opportunity`
                                }}
                                onClick={() =>
                                    handleSelect(data.rovers[0].maxPhotoDate, 0)
                                }
                                className='home__card-btn'>
                                View photos {'>'}
                            </Link>
                        </div>
                    </li>
                    <li className='home__card-item'>
                        <h2 className='home__card-title'>Curiosity</h2>
                        <div className='home__card-img-container'>
                            <img
                                className='home__card-img'
                                src={require('../../images/curiosity-1.png')}
                                alt='curiosity'
                            />
                        </div>
                        <div className='home__card-details'>
                            <h4 className='home__card-active-date'>
                                Feb. 7, 2019 - Feb. 13 2019
                            </h4>
                            <span className='home__card-description'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ab, ullam quisquam.
                            </span>
                            <Link
                                to={{
                                    pathname: '/main',
                                    search: `?name=curiosity`
                                }}
                                onClick={() =>
                                    handleSelect(data.rovers[1].maxPhotoDate, 1)
                                }
                                className='home__card-btn'>
                                View photos {'>'}
                            </Link>
                        </div>
                    </li>
                    <li className='home__card-item'>
                        <h2 className='home__card-title'>Spirit</h2>
                        <div className='home__card-img-container'>
                            <img
                                className='home__card-img'
                                src={require('../../images/spirit-1.png')}
                                alt='spirit'
                            />
                        </div>
                        <div className='home__card-details'>
                            <h4 className='home__card-active-date'>
                                Feb. 7, 2019 - Feb. 13 2019
                            </h4>
                            <span className='home__card-description'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ab, ullam quisquam.
                            </span>
                            <Link
                                to={{
                                    pathname: '/main',
                                    search: `?name=spirit`
                                }}
                                onClick={() =>
                                    handleSelect(data.rovers[2].maxPhotoDate, 2)
                                }
                                className='home__card-btn'>
                                View photos {'>'}
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default connect(
    state => state,
    dispatch => ({
        actions: bindActionCreators(actionCreators, dispatch)
    })
)(Home)
