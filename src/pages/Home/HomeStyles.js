import styled, { css } from 'styled-components';

// css for item-1, item-2, and item-3
const itemsCSS = () => {
  let styles = '';
  for (let i = 1, pct = 85; i <= 3; i++, pct -= 2) {
    styles += `
      &.item-${i} {
        width: ${pct}%;
      }
    `;
  }

  return css`
    ${styles}
  `;
};

const StyledHome = styled.div`
  height: 100%;
  position: fixed;
  overflow: hidden;

  video {
    height: 100%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    filter: grayscale(1);
  }
  .init-menu {
    width: 30%;
    height: 100%;
    min-width: 400px;
    position: absolute;
    background: transparent;
    left: 0;
    top: 0;
    text-align: right;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    &:before {
      content: '';
      position: absolute;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      transform: skewX(-10deg);
      background: rgba(242, 242, 242, 0.7);
      width: 120%;
      height: 120%;
      left: -25%;
      top: -10%;
      transform: rotate(10deg);
    }
  }
  .header {
    position: relative;
    text-align: center;
    z-index: 1;
    color: ${props => props.theme.primary};
  }
  .rover-list {
    position: relative;
    list-style-type: none;
    padding: 0;
    margin: 40px 0 0 0;
    .rover-list__item {
      position: relative;
      left: -10%;
      background: rgba(140, 140, 140, 0.9);
      margin: 10px 0;
      text-transform: uppercase;
      padding: 5px 10px;
      font-size: 25px;
      cursor: pointer;
      color: ${props => props.theme.primary};
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      transform: skewX(-10deg);
      transition: all 0.3s;
      ${itemsCSS()};
      &:hover {
        background: ${props => props.theme.primary};
        color: ${props => props.theme.light};
        left: -8%;
      }
    }
  }
`;

export default StyledHome;
