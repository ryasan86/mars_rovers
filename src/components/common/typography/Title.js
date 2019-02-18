import styled from 'styled-components';

const Title = styled.h3`
  color: ${({ color }) => color || 'white'};
  letter-spacing: 5px;
  margin: 0;
  @media screen and (max-width: 420px) {
    font-size: 0.9em;
  }
  @media screen and (max-width: 360px) {
    font-size: 0.7em;
  }
`;

export { Title };
