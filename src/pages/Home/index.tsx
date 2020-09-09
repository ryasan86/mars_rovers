import React from 'react'
import Particles from 'react-particles-js'

import Layout from '../../components/Layout'
import HomeCard from '../../components/HomeCard'
import BarChart from '../../components/LineGraph'
import { RoverProps } from '../../interfaces'
import { roverList } from '../../constants'
import { Perseverance } from '../../videos'
import './Home.scss'

interface Props {
    img: string
    activeDate: string
    description: string
}

const particlesA = {
    color: {
        value: '#00bfa5'
    },
    number: {
        value: 20,
        density: {
            enable: true,
            value_area: 1500
        }
    },
    line_linked: {
        enable: true,
        opacity: 0.3,
        color: '#00bfa5'
    },
    move: {
        speed: 0.7
    },
    size: {
        value: 2.5
    },
    opacity: {
        value: 100,
        anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.05
        }
    }
}

const particlesB = {
    ...particlesA,
    line_linked: {
        enable: false,
        color: '#00bfa5'
    },
    size: {
        value: 1.25
    }
}

// prettier-ignore
const detailsMap = {
    opportunity: {
        img: require('../../images/curiosity-1.png'),
        activeDate: 'Mission duration 2011 - Present',
        description: "Curiosity's mission is to determine whether the Red Planet ever was, or is, habitable to microbial life. The rover, which is about the size of a MINI Cooper, is equipped with 17 cameras and a robotic arm containing a suite of specialized laboratory-like tools and instruments."
    } as Props,
    curiosity: {
        img: require('../../images/opportunity-1.png'),
        activeDate: 'Mission duration 2003 - 2018',
        description: 'Opportunity was the second of the two rovers launched in 2003 to land on Mars and begin traversing the Red Planet in search of signs of past life. The rover is still actively exploring the Martian terrain, having far outlasted her planned 90-day mission.'
    } as Props,
    spirit: {
        img: require('../../images/spirit-1.png'),
        activeDate: 'Mission duration 2003 - 2011',
        description: 'One of two rovers launched in 2003 to explore Mars and search for signs of past life, Spirit far outlasted her planned 90-day mission. Among her myriad discoveries, Spirit found evidence that Mars was once much wetter than it is today and helped scientists better understand the Martian wind.'
    } as Props
}

const rovers = roverList.map(({ rover }) => ({
    ...rover,
    ...detailsMap[rover.name]
}))

const CardList: React.StatelessComponent = () => (
    <ul className='home__card-list'>
        {rovers.map((rover: RoverProps & Props, i: number) => (
            <HomeCard key={i} rover={rover} idx={i + 1} />
        ))}
    </ul>
)

const HomePage: React.StatelessComponent = () => (
    <Layout>
        <div className='home'>
            <header className='home__header'>
                <Particles
                    className='home__particles'
                    params={{ particles: particlesA, retina_detect: true }}
                />
                <Particles
                    className='home__particles'
                    params={{ particles: particlesB, retina_detect: true }}
                />
                <div className='home__video-container'>
                    <div className='video__weather-text'>
                        Sol 259<span> | </span> High: -17° F<span> | </span>
                        Low: -150° F
                    </div>
                    <video className='video' autoPlay loop muted>
                        <source src={Perseverance} type='video/webm' />
                    </video>
                    <div className='video__content-container'>
                        <h3 className='video__title'>
                            Perseverance is on it{"'"}s way to Mars
                        </h3>
                        <p className='video__subtext'>
                            Inside it{"'"}s protective spacecraft, NASA{"'"}{' '}
                            next Mars rover is cruising through space for a
                            touchdown on Mars on Feb. 18, 2021.
                        </p>
                        <a
                            className='video__content-link'
                            href='https://mars.nasa.gov/mars2020/timeline/cruise'
                            target='__blank'>
                            Follow the journey
                        </a>
                    </div>
                </div>
                <div className='home__circle-container'>
                    <div className='home__pct-text'>
                        <span>%</span>
                    </div>
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
            </header>
            <section className='home__stripe-block'>
                <h1 className='home__stripe-quote'>
                    It{"'"}s a fixer-upper of a planet but we could make it
                    work.
                </h1>
                <p className='home__stripe-source'>- Elon Musk</p>
            </section>
            <section className='home__body'>
                <img
                    className='home__spaceship-gif'
                    src={require('../../images/spaceship.gif')}
                    alt='spaceship'
                />
                <div className='home__bar-chart-container'>
                    <BarChart />
                    <span className='home__bar-chart-text'>
                        Number of photos taken each year by the cute robots
                    </span>
                </div>
                <CardList />
            </section>
        </div>
    </Layout>
)

export default HomePage
