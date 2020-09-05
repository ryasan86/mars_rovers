import React from 'react'

const Burger: React.StatelessComponent = props => (
    <svg {...props} focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
        <path
            fill='currentColor'
            d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'></path>
    </svg>
)

export default Burger
