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
height: 100vh;
justify-content: center;
align-items: center;
background: var(--lightgreen);
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

h3 {
  letter-spacing: 7px;
  color: var(--green);
  margin-bottom: 40px;
}
`

export default App;
