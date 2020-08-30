import styled from 'styled-components'

const Title = styled.h3`
    color: ${({ color }) => color || 'white'};
    letter-spacing: 5px;
    margin: 0;
`

export { Title }
