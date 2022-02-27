import BoardProvider from '../../services/context/BoardContext';
import StyledGame from './StyledGame';
import Board from '../../components/Board/Board';
import Reset from '../../components/Reset/Reset';
import Output from '../../components/Output/Output';

const Game = () => {
  return (
    <BoardProvider>
      <StyledGame>
        <Reset />
        <Board />
        <Output />
      </StyledGame>
    </BoardProvider>
  );
};

export default Game;
