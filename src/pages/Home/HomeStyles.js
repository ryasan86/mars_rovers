import styled from 'styled-components';

const StyledHome = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  video {
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    filter: grayscale(1);
  }
  .header {
    position: relative;
    text-align: center;
    z-index: 2;
    color: ${props => props.theme.primary};
    .title {
      margin: 0;
      text-transform: uppercase;
    }
  }
  .rover-list {
    z-index: 2;
    list-style-type: none;
    margin: 0;
    padding: 0;
    .rover-list__item {
      cursor: pointer;
      text-align: center;
      border-radius: 3px;
      color: ${props => props.theme.primary};
      margin: 10px 0;
      font-size: 25px;
      min-width: 300px;
      border: 3px solid ${props => props.theme.primary};
      transition: all 0.3s ease;
      display: flex;
      .link {
        text-decoration: none;
        padding: 10px 20px;
        width: 100%;
        color: ${props => props.theme.primary};
        transition: all 0.3s ease;
        text-transform: uppercase;
        font-weight: 600;
      }
      &:hover {
        transform: scale(1.05);
        background: ${props => props.theme.primary};
        color: ${props => props.theme.light};
        .link {
          color: ${props => props.theme.light};
        }
      }
    }
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.7);
  }
`;

export default StyledHome;
