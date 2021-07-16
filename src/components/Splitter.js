import React from 'react'
import styled from 'styled-components';
import TipCalculator from './TipCalculator';
import TipResult from './TipResult';


const Splitter = () => {
    return (
        <Wrapper>
            <TipCalculator />
            <TipResult />
        </Wrapper>
    )
}

export default Splitter

const Wrapper = styled.div`
background: white;
width: 80%;
max-width: 800px;
border-radius: 20px;
padding: 30px;
display: flex;
justify-content: space-between;


@media (max-width: 850px) {
    width: 100%;
    max-width: 100%;
    height: 100vh;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

@media (max-width: 660px) {
    flex-direction: column;
    justify-content: space-evenly;
}
`
