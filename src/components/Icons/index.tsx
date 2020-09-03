import React, { CSSProperties } from 'react'

import Burger from './Burger'
import Close from './Close'
import Github from './Github'
import Rover from './Rover'
import Satellite from './Satellite'
import Spaceship from './Spaceship'

interface Props {
    style: CSSProperties
    name: Required<string>
    fill: string
    width: string | number
    viewBox: string
    visibility: string
    className: string
    onClick: () => void
}

const Icon: React.ComponentType<Partial<Props>> = props => {
    switch (props.name) {
        case 'burger':
            return <Burger {...props} />
        case 'close':
            return <Close {...props} />
        case 'github':
            return <Github {...props} />
        case 'rover':
            return <Rover {...props} />
        case 'satellite':
            return <Satellite {...props} />
        case 'spaceship':
            return <Spaceship {...props} />
        default:
            return
    }
}

export default Icon
