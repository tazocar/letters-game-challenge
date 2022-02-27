import React from 'react';
import GlobalStyle from './globalStyles';
import Main from './layout/Main';
import Game from './pages/Game/Game';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Game />
      </Main>
    </>
  );
};

export default App;
