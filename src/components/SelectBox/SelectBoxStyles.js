import styled from 'styled-components';

const SelectBoxWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .select-container {
    margin-left: 5px;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 5px;
    select {
      color: ${({ theme }) => theme.primary};
      font-size: 1.2em;
      padding: 5px;
      border-radius: 5px;
      border: none;
      @media screen and (max-width: 420px) {
        font-size: 0.9em;
      }
      @media screen and (max-width: 360px) {
        font-size: 0.7em;
      }
    }
  }
`;

export default SelectBoxWrap;
