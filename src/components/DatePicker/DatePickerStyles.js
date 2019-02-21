import ReactDatePicker from 'react-datepicker';
import styled from 'styled-components';

import theme from './../../theme';

const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  padding-left: ${theme.sidebarPadding};
`;

const StyledDatePicker = styled(ReactDatePicker)`
  color: ${({ theme }) => theme.primary};
  font-size: 1.2em;
  padding: 5px;
  border-radius: 5px;
  border: none;
  margin: 10px 0;
  @media screen and (max-width: 420px) {
    font-size: 0.9em;
  }
  @media screen and (max-width: 360px) {
    font-size: 0.7em;
  }
`;

export { DatePickerContainer, StyledDatePicker };
