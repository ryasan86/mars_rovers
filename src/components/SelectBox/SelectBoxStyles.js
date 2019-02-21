import styled from 'styled-components';
import theme from './../../theme';

const SelectBoxContainer = styled.div`
  margin-top: 2%;
  padding-left: ${theme.sidebarPadding};
`;


const StyledSelect = styled.select`
  color: ${({ theme }) => theme.primary};
  font-size: 1em;
  padding: 5px;
  border-radius: 5px;
  border: none;
  margin: 5px 0;
  width: 90%;
  @media screen and (max-width: 420px) {
    font-size: 0.9em;
  }
  @media screen and (max-width: 360px) {
    font-size: 0.7em;
  }
`;

export { SelectBoxContainer, StyledSelect };
