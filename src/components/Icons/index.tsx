import React from 'react'

import Burger from './Burger'
import Close from './Close'
import Github from './Github'
import Rover from './Rover'
import Satellite from './Satellite'
import Spaceship from './Spaceship'
import Arrow from './Arrow'

interface Props {
    name?: string
    className?: string
    onClick?: () => void
}

const Icon: React.StatelessComponent<Partial<Props>> = props => {
    switch (props.name) {
        case 'arrow-left':
        case 'arrow-right':
            return <Arrow {...props} />
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
