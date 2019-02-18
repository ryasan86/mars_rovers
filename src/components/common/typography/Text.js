import styled from 'styled-components';

const Text = styled.p`
  font-size: ${({ fontSize }) => fontSize || '20px'};
  color: ${({ color }) => color || 'white'};
  margin: 0;
  @media screen and (max-width: 420px) {
    font-size: 0.9em;
  }
  @media screen and (max-width: 360px) {
    font-size: 0.7em;
  }
`;

export { Text };
