import React from 'react'
import styled from 'styled-components';


const TipResult = () => {
    return (
        <Wrapper>
            <Top>
                <div className='result'>
                    <div className='description'>
                        <h2>Tip Amount</h2>
                        <p>/ person</p>
                    </div>

                    <div className='summ amount'>$0.00</div>
                </div>

                <div className='result'>
                    <div className='description'>
                        <h2>Total</h2>
                        <p>/ person</p>
                    </div>

                    <div className='summ total'>$0.00</div>
                </div>
            </Top>

            <Bottom>
                <button>RESET</button>
            </Bottom>
        </Wrapper>
    )
}

export default TipResult

const Wrapper = styled.div`
width: 45%;
background: var(--green);
border-radius: 20px;
padding: 40px 35px 25px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const Top = styled.div`
.result {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .description {

        h2 {
            font-size: .8em;
            color: white;
        }

        p {
            font-size: .7em;
            color: var(--darkgray);
        }
    }

    .summ {
        color: var(--aquagreen);
        font-weight: 700;
        font-size: 1.9em;
    }

    :nth-child(1) {
        margin-bottom: 30px;
    }
}
`

const Bottom = styled.div`
button {
    width: 100%;
    outline: none;
    border: none;
    padding: 8px;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 700;
    font-family: 'Space Mono', monospace;
    background: var(--aquagreen);
    transition: .2s linear;

    :hover {
        background: var(--hovergreen);
    }

    :disabled {
        background: var(--greeninvalid);
        cursor: default;
    }
}
`
