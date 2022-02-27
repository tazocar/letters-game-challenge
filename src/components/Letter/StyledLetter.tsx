import styled from 'styled-components';

interface Props {
  valid?: boolean;
}
const BaseLetter = styled.button<Props>`
  width: 62px;
  height: 62px;
  border-radius: 10px;
  color: #fff;
  text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.5);
  font-size: 26px;
  font-weight: bolder;
  cursor: pointer;
  transition: all ease 0.3s;
  &:disabled {
    cursor: not-allowed;
  }
  @media (min-width: 768px) {
    width: 85px;
    height: 85px;
  }
`;
export const InitialLetter = styled(BaseLetter)`
  background: linear-gradient(#fbd760, #f3691e 80%) padding-box, linear-gradient(#f55160, #9f031b) border-box;
  border: 2px solid transparent;
  &:hover {
    background: linear-gradient(#fbd760 40%, #f3691e) padding-box, linear-gradient(#f55160, #9f031b) border-box;
  }
  &:disabled {
    &:hover {
      background: linear-gradient(#fbd760, #f3691e 80%) padding-box, linear-gradient(#f55160, #9f031b) border-box;
    }
  }
`;
export const StateLetter = styled(BaseLetter)`
  background: ${props =>
    props.valid
      ? 'linear-gradient(#b3eb50, #439422) padding-box, linear-gradient(#b3eb50, #439422) border-box'
      : 'linear-gradient(#f55160, #9f031b) padding-box, linear-gradient(#f55160, #9f031b) border-box'};
  border: 2px solid transparent;
`;
