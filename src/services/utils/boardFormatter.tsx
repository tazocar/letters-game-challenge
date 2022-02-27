import { ILetter } from '../../types';

const boardFormatter = (array: string[], idGenerator: () => string) => {
  // Randomize board
  const randomBoardBeforeFormat = [...array].sort(() => 0.5 - Math.random());
  const boardRows = [];

  // Transform into 2d Array
  while (randomBoardBeforeFormat.length) boardRows.push(randomBoardBeforeFormat.splice(0, 4));

  // Set data to each letter as an object
  const formatedBoard: ILetter[][] = boardRows.map((row, indexRow) => {
    return row.map((letter, indexCol) => {
      const objectLetter: ILetter = {
        id: idGenerator(),
        letter,
        disabled: false,
        row: indexRow,
        col: indexCol,
      };
      return objectLetter;
    });
  });
  return formatedBoard;
};

export default boardFormatter;
