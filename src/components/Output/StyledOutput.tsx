import styled from 'styled-components';

interface Props {
  valid: boolean;
  selectedLetters: number;
}

const StyledOutput = styled.div<Props>`
  height: 62px;
  width: 270px;
  border: 2px solid #979797;
  display: flex;
  align-items: center;
  padding: 0 70px 0 20px;
  order: 3;
  position: relative;
  align-self: flex-end;
  @media (min-width: 768px) {
    width: 365px;
  }

  &:after {
    content: ${props => (props.valid ? '"valid"' : "'invalid'")};
    color: ${props => (props.valid ? '#7ed321' : '#d0021b')};
    opacity: ${props => (props.selectedLetters > 0 ? 0.5 : 0)};
    font-size: 15px;
    position: absolute;
    right: 20px;
  }
  p {
    font-size: 20px;
    font-weight: bolder;
    color: ${props => (props.valid ? '#7ed321' : '#d0021b')};
    letter-spacing: 10px;
    overflow: scroll;
  }
`;

export default StyledOutput;
