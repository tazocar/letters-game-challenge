import React, { useContext } from 'react';
import { ILetter, IContext } from '../../types';
import { BoardContext } from '../../services/context/BoardContext';
import { InitialLetter, StateLetter } from './StyledLetter';

interface Props {
  letter: ILetter;
  handleSelectedLetter: (letter: ILetter) => void;
}

const Letter: React.FC<Props> = ({ letter, handleSelectedLetter }) => {
  const { allSelectedLettersID, isValidWord } = useContext(BoardContext as React.Context<IContext>);

  return allSelectedLettersID.includes(letter.id) ? (
    <StateLetter disabled={letter.disabled} valid={isValidWord}>
      {letter.letter}
    </StateLetter>
  ) : (
    <InitialLetter disabled={letter.disabled} onClick={() => handleSelectedLetter(letter)}>
      {letter.letter}
    </InitialLetter>
  );
};

export default Letter;
