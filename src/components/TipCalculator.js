import React from 'react'
import styled from 'styled-components';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PeopleIcon from '@material-ui/icons/People';

const TipCalculator = () => {
    return (
        <Wrapper>
            <h3 className='header'>Bill</h3>

            <div className='input-container bill'>
                <AttachMoneyIcon className='icon'/>
                <input id='bill' type='number' value='0'/>
            </div>

            <h3 className='header'>Select Tip %</h3>
            <div className='percentage-tip'>
                <label>
                    <input type='radio' name='percentage' value='5' />
                    <span>5%</span>
                </label>
            
                <label>
                    <input type='radio' name='percentage' value='5' />
                    <span>10%</span>
                </label>

                <label>
                    <input type='radio' name='percentage' value='5' />
                    <span>15%</span>
                </label>

                <label>
                    <input type='radio' name='percentage' value='5' />
                    <span>25%</span>
                </label>

                <label>
                    <input type='radio' name='percentage' value='5' />
                    <span>50%</span>
                </label>

                <label className='custom'>
                    <input type='radio' name='percentage' value='' />
                    <span>Custom</span>
                </label>
            </div>

            <h3 className='header'>Number of People</h3>
            <div className='input-container people'>
                <PeopleIcon className='icon'/>
                <input id='people' type='number' value='0'/>
            </div>
        </Wrapper>
    )
}

export default TipCalculator

const Wrapper = styled.div`
width: 45%;

.header {
    font-size: 1em;
    letter-spacing: 1px;
    padding: 0;
    color: gray;
    margin: 0 0 10px 0;
}

.input-container {
    position: relative;

    input {
    width: 100%;
    border: none;
    margin: 0;
    padding: 5px 10px;
    background: var(--lightgray);
    font-size: 1.2em;
    font-family: 'Space Mono', monospace;
    color: var(--darkgray);
    font-weight: 700;
    outline-color: var(--green);
    text-align: right;
    border-radius: 5px;

    ::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    [type=number] {
        -moz-appearance: textfield;
    }
    }

    .icon {
        position: absolute;
        top: 8px;
        left: 6px;
        color: var(--darkgray);
    }
}

.bill {
    margin-bottom: 30px;
}

.percentage-tip {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0 45px;

    label {
        width: 30%;
        display: flex;
        flex-grow: 1;
        flex-wrap: wrap;
        min-width: 100px;

        input { 
            display: none; 
        }

        span {
            width: 100%;
            background: var(--green);
            color: white;
            padding: 10px;
            margin: 5px 5px;
            text-align: center;
            border-radius: 10px;
            flex-grow: 1;
            transition: .2s linear;
            font-weight: 700;

            :hover {
                background: var(--hovergreen);
                color: var(--green);
                cursor: pointer;
            }
        }
    }

    input[type="radio"]:checked + span{
        background: var(--aquagreen);
    }

    .custom {
        background: var(--lightgray);
        color: var(--green);
    }
}


`
