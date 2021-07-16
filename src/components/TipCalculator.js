import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PeopleIcon from '@material-ui/icons/People';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import { useDispatch } from 'react-redux';
import { updateBill, updatePersons } from '../features/billSlice';

import PercentageTipLabel from './PercentageTipLabel';


const TipCalculator = () => {

    const percents = [5, 10, 15, 25, 50, 'Custom'];

    const dispatch = useDispatch();

    const [bill, setBill] = useState(0);
    const [persons, setPersons] = useState(0);
    const [alert, setAlert] = useState('');

    //snackbar
    const [open, setOpen] = useState(false); 
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const [personAlertFix, openPersonAlertFix] = useState(1);

    const handleCheckBill = (e) => {
        setBill(e.target.value);      
    }

    const handleCheckPersons = (e) => {
        setPersons(e.target.value);      
    }

    const billInputCheck = () => {
        const billInput = document.querySelector('#bill');

        if(bill === '0' || bill === 0){
            billInput.style.color='#B7C9C9';
            billInput.style.borderColor = 'transparent';
            //UPDATE REDUX ...
            dispatch(updateBill(0));
        } else if(bill < '0' || bill < 0) {
            billInput.style.color='#E9BBAC';
            billInput.style.borderColor = '#E9BBAC';
            //UPDATE REDUX ...
            dispatch(updateBill(0));
        } else {
            billInput.style.color='#00474B';
            billInput.style.borderColor = '#00474B';
            //UPDATE REDUX ...
            dispatch(updateBill(bill));
        }
    }

    const PersonsInputCheck = () => {
        const personsInput = document.querySelector('#people');

        if(persons === '0' || persons === 0){
            personsInput.style.color='#B7C9C9';
            personsInput.style.borderColor = 'transparent';

            openPersonAlertFix(2);
            if(personAlertFix === 2){
                setOpen(true);
            }
            
            //UPDATE REDUX ...
            dispatch(updatePersons(''));
        } else if(persons < '0' || persons < 0) {
            personsInput.style.color='#E9BBAC';
            personsInput.style.borderColor = '#E9BBAC';
            setAlert(`Can't be zero!`)
            setOpen(true);
            //UPDATE REDUX ...
            dispatch(updatePersons(''));
        } else if (persons % 1 !== 0) {
            setAlert(`Can't be decimal!`)
            setOpen(true);
            //UPDATE REDUX ...
            dispatch(updatePersons(''));
        } else {
            personsInput.style.color='#00474B';
            personsInput.style.borderColor = '#00474B';
            //UPDATE REDUX ...
            dispatch(updatePersons(parseInt(persons)));
        }
    }

    useEffect(() => {
        billInputCheck();
        //eslint-disable-next-line
    }, [bill])

    useEffect(() => {
        PersonsInputCheck();
        //eslint-disable-next-line
    }, [persons])


    return (
        <Wrapper>
            <h3 className='header'>Bill</h3>

            <div className='input-container bill'>
                <AttachMoneyIcon className='icon'/>
                <input id='bill' type='number' value={bill} onChange={e => handleCheckBill(e)} min='1' required/>
            </div>

            <h3 className='header'>Select Tip %</h3>
            <div className='percentage-tip'>
                {percents.map( item => (
                    <PercentageTipLabel 
                        percent={item}
                    /> 
                ))}
            </div>

            <h3 className='header'>Number of People</h3>
            <div className='input-container people'>
                <PeopleIcon className='icon'/>
                <input id='people' type='number' value={persons} onChange={e => handleCheckPersons(e)} min='1' step='1' required/>
            </div>

            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {alert}
                </Alert>
            </Snackbar>
        </Wrapper>
    )
}

export default TipCalculator

const Wrapper = styled.div`
width: 45%;

@media (max-width: 660px) {
    width: 100%;
}

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
    border: 2px solid transparent;

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

    #people {
        @media (max-width: 660px) {
        margin-bottom: 40px;
        }
    }
}

.bill {
    margin-bottom: 30px;
}

.percentage-tip {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0 45px;
}


`
