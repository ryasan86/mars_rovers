import React, { CSSProperties } from 'react'
import { StyledSVG } from './IconStyles'

interface Props {
    style: CSSProperties
    name: string
    fill: string
    width: string | number
    viewBox: string
    visibility: string
    className: string
    onClick: () => void
}

const Burger: React.StatelessComponent<Partial<Props>> = ({
    style = {},
    fill = '#fff',
    width = '100%',
    viewBox = '0 0 32 32',
    visibility = 'visibile',
    className,
    onClick = () => ({})
}) => (
    <StyledSVG
        width={width}
        height={width}
        style={style}
        viewBox={viewBox}
        fill={fill}
        onClick={onClick}
        visibility={visibility}
        className={className}
        xmlSpace='preserve'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'>
        <path d='M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z' />
    </StyledSVG>
)

export default Burger
