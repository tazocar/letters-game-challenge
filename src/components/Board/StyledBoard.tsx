import styled from 'styled-components';

const StyledBoard = styled.div`
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 270px;
  margin: 78px 0;
  order: 2;
  transition: width ease 0.3s;
  @media (min-width: 768px) {
    width: 365px;
  }
  @media (min-width: 992px) {
    order: 1;
    margin: 0;
  }
`;
export default StyledBoard;
