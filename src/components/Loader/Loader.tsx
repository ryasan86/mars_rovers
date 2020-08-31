import React, { CSSProperties } from 'react'
import './Loader.scss'

interface Props {
    width?: string | number
    height?: string | number
    className?: string
    style?: CSSProperties
}

const Loader: React.FC<Props> = ({ width, height, className, style }) => (
    <div className={`${className} loader`} style={style}>
        <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 24 30'
            className='loader__inner'
            width={width}
            height={height}>
            <rect x='0' y='13' width='4' height='5'>
                <animate
                    attributeName='height'
                    attributeType='XML'
                    values='5;21;5'
                    begin='0s'
                    dur='0.6s'
                    repeatCount='indefinite'
                />
                <animate
                    attributeName='y'
                    attributeType='XML'
                    values='13; 5; 13'
                    begin='0s'
                    dur='0.6s'
                    repeatCount='indefinite'
                />
            </rect>
            <rect x='10' y='13' width='4' height='5'>
                <animate
                    attributeName='height'
                    attributeType='XML'
                    values='5;21;5'
                    begin='0.15s'
                    dur='0.6s'
                    repeatCount='indefinite'
                />
                <animate
                    attributeName='y'
                    attributeType='XML'
                    values='13; 5; 13'
                    begin='0.15s'
                    dur='0.6s'
                    repeatCount='indefinite'
                />
            </rect>
            <rect x='20' y='13' width='4' height='5'>
                <animate
                    attributeName='height'
                    attributeType='XML'
                    values='5;21;5'
                    begin='0.3s'
                    dur='0.6s'
                    repeatCount='indefinite'
                />
                <animate
                    attributeName='y'
                    attributeType='XML'
                    values='13; 5; 13'
                    begin='0.3s'
                    dur='0.6s'
                    repeatCount='indefinite'
                />
            </rect>
        </svg>
    </div>
)

export default Loader
