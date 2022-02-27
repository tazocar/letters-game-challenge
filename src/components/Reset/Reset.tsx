import { useContext } from 'react';
import { IContext } from '../../types';
import { BoardContext } from '../../services/context/BoardContext';
import { StyledReset, ResetIcon } from './StyledReset';

const Reset = () => {
  const { board, setBoard, setAllSelectedLettersID, setIsValidWord } = useContext(
    BoardContext as React.Context<IContext>
  );

  const resetBoard = () => {
    const resetLetterState = board.map(row => {
      return row.map(letter => {
        return { ...letter, disabled: false };
      });
    });
    setBoard(resetLetterState);
    setAllSelectedLettersID([]);
    setIsValidWord(false);
  };

  return (
    <StyledReset onClick={resetBoard}>
      Clear word <ResetIcon />
    </StyledReset>
  );
};

export default Reset;
