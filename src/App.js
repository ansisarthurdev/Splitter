import React from 'react';
import './App.css';
import styled from 'styled-components';
import Splitter from './components/Splitter';

function App() {
  return (
    <div className="App">
        <AppContainer>
           <h3>SPLI <br/> TTER</h3>
           <Splitter />
        </AppContainer>
    </div>
  );
}

const AppContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h3 {
  letter-spacing: 7px;
  color: var(--green);
  margin: 80px 0 40px;

  @media (max-width: 850px) {
    margin-top: 40px;
  }

}
`

export default App;
