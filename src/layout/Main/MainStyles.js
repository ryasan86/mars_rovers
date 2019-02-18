import styled from 'styled-components';

const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 10px;
  align-items: center;
  min-height: 70%;
`;

export { MainWrap, CardsContainer };
