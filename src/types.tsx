import React from 'react';

export interface ILetter {
  id: string;
  letter: string;
  disabled: boolean;
  row: number;
  col: number;
}

export interface IContext {
  board: ILetter[][];
  setBoard: React.Dispatch<React.SetStateAction<ILetter[][]>>;
  allSelectedLettersID: string[];
  setAllSelectedLettersID: React.Dispatch<React.SetStateAction<string[]>>;
  isValidWord: boolean;
  setIsValidWord: React.Dispatch<React.SetStateAction<boolean>>;
  adjacentLettersID: string[];
  setAdjacentLettersID: React.Dispatch<React.SetStateAction<string[]>>;
}
