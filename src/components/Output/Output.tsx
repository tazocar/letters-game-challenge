import { useContext, useEffect, useState } from 'react';
import { IContext } from '../../types';
import dictionary from '../../services/data/dictionary.json';
import { BoardContext } from '../../services/context/BoardContext';
import StyledOutput from './StyledOutput';

const Output = () => {
  const { board, allSelectedLettersID, isValidWord, setIsValidWord } = useContext(
    BoardContext as React.Context<IContext>
  );
  const [selectedLetters, setSelectedLetters] = useState('');

  useEffect(() => {
    if (allSelectedLettersID.length === 0) setSelectedLetters('');
    getSelectedLetters();
  }, [allSelectedLettersID]);

  useEffect(() => {
    const existsOnDictionary = validate(dictionary.words, selectedLetters);
    setIsValidWord(existsOnDictionary);
  }, [selectedLetters]);

  const getSelectedLetters = () => {
    allSelectedLettersID.forEach(id =>
      board.map(row => row.forEach(letter => letter.id === id && setSelectedLetters(selectedLetters + letter.letter)))
    );
  };

  const validate = (listOfWords: string[], word: string) => {
    return listOfWords.includes(word.toLowerCase());
  };

  return (
    <StyledOutput valid={isValidWord} selectedLetters={selectedLetters.length}>
      <p>{selectedLetters}</p>
    </StyledOutput>
  );
};

export default Output;
