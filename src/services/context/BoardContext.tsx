import React, { createContext, useEffect, useMemo, useState } from 'react';
import { ILetter, IContext } from '../../types';
// Data
import dataBoardLetters from '../data/test-board-2.json';
// Utils
import boardFormatter from '../utils/boardFormatter';
import idGenerator from '../utils/idGenerator';

export const BoardContext = createContext<IContext | undefined>(undefined);

const BoardProvider: React.FC = ({ children }) => {
  const [board, setBoard] = useState<ILetter[][]>([]);
  const [allSelectedLettersID, setAllSelectedLettersID] = useState<string[]>([]);
  const [isValidWord, setIsValidWord] = useState<boolean>(false);
  const [adjacentLettersID, setAdjacentLettersID] = useState<string[]>([]);

  const value = useMemo(
    () => ({
      board,
      setBoard,
      setAllSelectedLettersID,
      allSelectedLettersID,
      isValidWord,
      setIsValidWord,
      adjacentLettersID,
      setAdjacentLettersID,
    }),
    [board, allSelectedLettersID, isValidWord, adjacentLettersID]
  );

  useEffect(() => {
    const formatedBoard: ILetter[][] = boardFormatter(dataBoardLetters.board, idGenerator);
    setBoard(formatedBoard);
  }, []);

  return <BoardContext.Provider value={value}>{children}</BoardContext.Provider>;
};

export default BoardProvider;
