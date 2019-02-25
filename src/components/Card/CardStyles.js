import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

import Loader from './../Loader/Loader';

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const CardWrap = styled.div`
  position: relative;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  border: 1px solid ${({ theme }) => darken(0.1, theme.light)};
  /* animation: ${fadeIn} 0.3s linear; */
`;

const CardLoader = styled(Loader)`
  position: absolute;
`;

const CardImgContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CardImg = styled.img`
  max-width: 100%;
  height: 100%;
  border-radius: 4px 4px 0 0;
`;

const CardBodyContainer = styled.div`
  color: ${({ theme }) => theme.dark};
  visibility: ${({ imgIsLoading }) => (imgIsLoading ? 'hidden' : 'visible')};
  padding: 10px;
  border-radius: 0 0 4px 4px;
  position: relative;
`;

const CardText = styled.p`
  margin: 5px;
`;

const CardLink = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: block;
  text-decoration: none;
  padding: 8px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  transition: background 0.3s, color 0.3s;
  -webkit-transition: background 0.3s, color 0.3s;
  -moz-transition: background 0.3s, color 0.3s;
  -o-transition: background 0.3s, color 0.3s;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

export {
  CardWrap,
  CardLoader,
  CardImgContainer,
  CardImg,
  CardBodyContainer,
  CardText,
  CardLink
};