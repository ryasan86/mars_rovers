import React from 'react'

const Arrow: React.StatelessComponent<{ name?: string }> = props => {
    switch (props.name) {
        case 'arrow-left':
            return (
                <svg
                    {...props}
                    focusable='false'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path fill='currentColor' d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'></path>
                </svg>
            )

        case 'arrow-right':
            return (
                <svg
                    {...props}
                    focusable='false'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path fill='currentColor' d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z'></path>
                </svg>
            )
    }
}

export default Arrow
