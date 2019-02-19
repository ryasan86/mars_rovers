import ReactDatePicker from 'react-datepicker';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import { Title } from './../../components/common/typography';

const DateFiltersWrap = styled.div`
  padding: 20px;
`;

const DateFiltersTitle = styled(Title)`
  text-align: center;
  margin-bottom: 20px;
  @media screen and (max-width: 420px) {
    margin-bottom: 10px;
  }
`;

const DateTabsContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const DateTabActiveCSS = css`
  color: white;
  background: ${({ theme }) => theme.primary};
  border-color: white;
`;

const DateTab = styled.li`
  border-width: 1px;
  border-style: solid;
  color: ${({ theme }) => theme.primary};
  background: white;
  border-color: ${({ theme }) => theme.primary};
  ${({ active }) => (active ? DateTabActiveCSS : '')};
  text-align: center;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  transition: background 0.3s, color 0.3s;
  -webkit-transition: background 0.3s, color 0.3s;
  -moz-transition: background 0.3s, color 0.3s;
  -o-transition: background 0.3s, color 0.3s;
  cursor: pointer;
  &:hover {
    background: ${({ theme, active }) => active ? '' : lighten(0.1, theme.primary)};
    color: white;
  }
  @media screen and (max-width: 360px) {
    min-width: 75px;
  }
`;

const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const StyledDatePicker = styled(ReactDatePicker)`
  color: ${({ theme }) => theme.primary};
  font-size: 20px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  margin: 5px 0;
  width: 100%;
  @media screen and (max-width: 420px) {
    font-size: 0.9em;
  }
  @media screen and (max-width: 360px) {
    font-size: 0.7em;
  }
  /* ::placeholder {
    color: ${({ theme }) => theme.primary};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.primary};
  }

  ::-ms-input-placeholder {
    color: ${({ theme }) => theme.primary};
  } */
`;

export {
  DateFiltersWrap,
  DateFiltersTitle,
  DateTabsContainer,
  DateTab,
  DatePickerContainer,
  StyledDatePicker
};
