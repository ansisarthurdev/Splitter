import React from 'react'
import styled from 'styled-components';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PeopleIcon from '@material-ui/icons/People';

const Home = () => {
    return (
        <Wrapper>
            <h3>Bill</h3>

            <div className='input-container bill'>
                <AttachMoneyIcon className='icon'/>
                <input id='bill' type='number' value='0'/>
            </div>

            <h3 className='header'>Select Tip %</h3>
            <div className='percentage-tip'>
                <div className='percentage'>5%</div>
                <div className='percentage'>10%</div>
                <div className='percentage'>15%</div>
                <div className='percentage'>25%</div>
                <div className='percentage'>50%</div>
                <div className='percentage custom'>Custom</div>
            </div>

            <h3 className='header'>Number of People</h3>
            <div className='input-container people'>
                <PeopleIcon className='icon'/>
                <input id='people' type='number' value='0'/>
            </div>
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
width: 45%;

h3 {
    font-size: 1em;
    letter-spacing: 1px;
    margin: 0 0 10px 0;
    padding: 0;
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
    outline-color: var(--green);
    text-align: right;

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

.header {
    margin-top: 30px;
}

.percentage-tip {
    display: flex;
    flex-wrap: wrap;

    .percentage {
        background: var(--green);
        color: white;
        padding: 10px;
        width: 30%;
        margin: 5px 5px;
        text-align: center;
        border-radius: 10px;
        flex-grow: 1;
        transition: .3s linear;

        :hover {
            cursor: pointer;
            background: var(--darkgray);
            
        }
    }

    .custom {
        background: var(--lightgray);
        color: var(--green);

    }


}


`
