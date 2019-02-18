import styled from 'styled-components';
import { Title } from './../../components/common/typography';

const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${({ loading }) => (loading ? 'center' : 'flex-start')};
  flex-wrap: wrap;
  min-height: 100%;
`;

const MainTitle = styled(Title)`
  color: ${({ theme }) => theme.dark};
  position: absolute;
  height: ${({ theme }) => `calc(100% - ${theme.navbarHeight})`};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { MainWrap, CardsContainer, MainTitle };
