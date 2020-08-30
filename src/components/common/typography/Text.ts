import styled from 'styled-components'

const Text = styled.p`
    font-size: ${({ fontSize }) => fontSize || '20px'};
    color: ${({ color }) => color || 'white'};
    margin: 0;
`

export { Text }
