import styled from 'styled-components'

const Text = styled.p`
    color: ${({ color }) => color || 'white'};
    font-size: ${({ fontsize }) => fontsize || '2rem'};
    margin: 0;
`

export { Text }
