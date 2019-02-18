import styled from 'styled-components';

const StyledSVG = styled.svg`
  cursor: pointer;
  visibility: ${({ visibility }) => visibility};
  &:hover {
    opacity: 0.7;
  }
`;

export { StyledSVG };
