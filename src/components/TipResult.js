import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import { selectBill, selectPercentage, selectPersons } from '../features/billSlice';

const TipResult = () => {
    const bill = useSelector(selectBill);
    const percentage = useSelector(selectPercentage);
    const persons = useSelector(selectPersons);

    const [tipAmount, changeTipAmount] = useState(`0.00`);
    const [totalAmount, changeTotalAmount] = useState(`0.00`);
    const [reset, setReset] = useState(true);

    const calcTipAmount = async () => {
        return new Promise(resolve => {
            const tip = bill / persons * percentage;
            const tipDec = `${(Math.round(tip * 100) / 100).toFixed(2)}`;
            resolve(tipDec)
            changeTipAmount(tipDec);
        })
    }

    const calcTotalAmount = async () => {
        await calcTipAmount().then(() => {
            const tipParse = parseFloat(tipAmount);

            const total = bill / persons + tipParse;

            const totalDec = `${(Math.round(total * 100) / 100).toFixed(2)}`;
            changeTotalAmount(totalDec);
            setReset(false);
        });

    }


    //checking user inputs
    useEffect(() => {
        //check if all inputs are written
        if(bill !== 0 && percentage !== '' && persons !== ''){
            calcTipAmount();
        }

        //eslint-disable-next-line
    }, [bill, percentage, persons]);

    //waiting for tip to be calculated
    useEffect(() => {
        if(tipAmount !== '0.00'){
            calcTotalAmount()
        }
    
        //eslint-disable-next-line
    }, [tipAmount])

    return (
        <Wrapper>
            <Top>
                <div className='result'>
                    <div className='description'>
                        <h2>Tip Amount</h2>
                        <p>/ person</p>
                    </div>

                    <div className='summ amount'>${tipAmount}</div>
                </div>

                <div className='result'>
                    <div className='description'>
                        <h2>Total</h2>
                        <p>/ person</p>
                    </div>

                    <div className='summ total'>${totalAmount}</div>
                </div>
            </Top>

            <Bottom>
                <button disabled={reset} onClick={() => window.location.reload()}>RESET</button>
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

@media (max-width: 660px) {
    width: 100%;
}
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

    @media (max-width: 660px) {
        margin-top: 30px;
    }
}
`
