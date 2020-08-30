import React from 'react'

import Burger from './Burger'
import Close from './Close'
import Github from './Github'
import Rover from './Rover'

const Icon = props => {
    switch (props.name) {
        case 'burger':
            return <Burger {...props} />
        case 'close':
            return <Close {...props} />
        case 'github':
            return <Github {...props} />
        case 'rover':
            return <Rover {...props} />
        default:
            return
    }
}

export default Icon
