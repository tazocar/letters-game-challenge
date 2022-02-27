import styled from 'styled-components';

const StyledGame = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-wrap: wrap;
    width: 760px;
    height: 360px;
    justify-content: space-between;
  }
`;

export default StyledGame;
