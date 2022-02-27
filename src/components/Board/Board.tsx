import { useContext, useEffect } from 'react';
import { ILetter, IContext } from '../../types';
import { BoardContext } from '../../services/context/BoardContext';
import StyledBoard from './StyledBoard';
import Letter from '../Letter/Letter';

const Board: React.FC = () => {
  const { board, setBoard, allSelectedLettersID, setAllSelectedLettersID, adjacentLettersID, setAdjacentLettersID } =
    useContext(BoardContext as React.Context<IContext>);

  useEffect(() => {
    if (adjacentLettersID.length <= 0) return;
    disableSurroundingLetters();
  }, [adjacentLettersID]);

  const findAdjacentLettersID = (letter: ILetter) => {
    if (!letter) return;
    const { row, col, id } = letter;
    const adjacentLettersIdFound = [];

    for (let rowIndex = row - 1; rowIndex <= row + 1; rowIndex += 1) {
      if (board[rowIndex] !== undefined) {
        for (let columnIndex = col - 1; columnIndex <= col + 1; columnIndex += 1) {
          const adjacentetter = board[rowIndex][columnIndex];
          if (adjacentetter !== undefined && adjacentetter.id !== id) {
            adjacentLettersIdFound.push(board[rowIndex][columnIndex].id);
          }
        }
      }
    }
    setAdjacentLettersID(adjacentLettersIdFound);
  };

  const disableSurroundingLetters = () => {
    const handleDisabledLetters = board.map(row => {
      return row.map<ILetter>(letter => {
        if (!adjacentLettersID.includes(letter.id) || allSelectedLettersID.includes(letter.id)) {
          return { ...letter, disabled: true };
        }
        return { ...letter, disabled: false };
      });
    });
    setBoard(handleDisabledLetters);
  };

  const handleSelectedLetter = (letter: ILetter) => {
    findAdjacentLettersID(letter);
    setAllSelectedLettersID([...allSelectedLettersID, letter.id]);
  };

  return (
    <StyledBoard>
      {board !== undefined &&
        board.map(row =>
          row.map(letter => <Letter key={letter.id} letter={letter} handleSelectedLetter={handleSelectedLetter} />)
        )}
    </StyledBoard>
  );
};

export default Board;
