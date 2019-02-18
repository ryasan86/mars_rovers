import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { lighten } from 'polished';

const SidebarWrap = styled.div`
  z-index: 1;
  position: fixed;
  background: ${({ theme }) => theme.primary};
  width: 25vw;
  height: 100vh;
  flex-direction: column;
  flex-shrink: 0;
  box-shadow: 3px 0 5px rgba(0, 0, 0, 0.3);
  transform: ${({ isOpen }) => (isOpen ? 'none' : `translateX(-25vw)`)};
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  @media screen and (max-width: 900px) {
    width: 50vw;
    transform: ${({ isOpen }) => (isOpen ? 'none' : `translateX(-50vw)`)};
  }
`;

const SidebarHeader = styled.div`
  text-align: center;
  margin-top: 10%;
  @media screen and (max-width: 420px) {
    margin-top: 0;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled(NavLink)`
  background: ${({ theme, active }) =>
    active ? lighten(0.05, theme.primary) : theme.primary};
  color: ${({ theme }) => theme.light};
  text-decoration: none;
  padding: 15px;
  padding-left: 30px;
  @media screen and (max-width: 420px) {
    padding: 7.5px;
    padding-left: 15px;
  }
`;

export { SidebarWrap, SidebarHeader, LinkContainer, Link };
