import React from 'react';
import './App.css';
import styled from 'styled-components';
import Splitter from './components/Splitter';

//icons
import { Popup } from '@styled-icons/entypo/Popup';

function App() {
  return (
    <div className="App">
        <AppContainer>
           <h3>SPLI <br/> TTER</h3>
           <Splitter />
           <Author href='https://github.com/ansisarthurdev'><Popup className='icon'/><p>ansisarthurdev</p></Author>
        </AppContainer>
    </div>
  );
}

const Author = styled.a`
position: sticky;
bottom: 10px;
text-align: center;
font-size: 0.7rem;
z-index: 100;
background: white;
text-decoration: none;
color: black;
padding: 5px 15px;
display: flex;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
transition: .2s cubic-bezier(.42,.49,1,.08);

:hover {
  transform: scale(1.1);
  background: #0C686D;
  color: white;
}

.icon {
  width: 15px;
  height: 15px;
  margin: 0 5px 0 0;  
}
`

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
