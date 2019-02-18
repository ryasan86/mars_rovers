import styled from 'styled-components';

const NavBarWrap = styled.nav`
  width: 100%;
  height: ${({ theme }) => theme.navbarHeight};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 0 5px rgba(0, 0, 0, 0.3);
`;

export { NavBarWrap };
