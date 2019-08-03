import styled from 'styled-components';

const PhotosWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  ul {
    display: flex;
    justify-content: center;
    align-items: ${({ loading }) => (loading ? 'center' : 'flex-start')};
    flex-wrap: wrap;
    min-height: 100%;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`;

export default PhotosWrap;
