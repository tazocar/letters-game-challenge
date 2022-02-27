import styled from 'styled-components';

export const StyledReset = styled.button`
  color: #b5b5b5;
  background-color: transparent;
  border: none;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  align-self: flex-end;
  order: 1;
  @media (min-width: 768px) {
    order: 2;
  }
`;

export const ResetIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #b5b5b5;
  border-radius: 50%;
  margin-left: 15px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 30px;
    height: 1px;
    background-color: #fff;
    top: 19px;
    left: 5px;
    transform: rotate(-45deg);
  }
  &:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 1px;
    background-color: #fff;
    top: 19px;
    left: 5px;
    transform: rotate(45deg);
  }
`;
