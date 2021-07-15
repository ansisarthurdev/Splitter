import React, { useState } from 'react'
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { updatePercentage } from '../features/billSlice';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const PercentageTipLabel = ({percent}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    const getPercentage = () => {
        if(percent !== 'Custom'){
            dispatch(updatePercentage(percent / 100)) 
        } else {
            const customPercent = parseInt(prompt('Enter custom Tip percentage'));
            validateCustomPercentage(customPercent);
        }
    }

    const validateCustomPercentage = (percent) => {
        if(isNaN(percent)){
            setOpen(true);
        } else if (percent < 1){
            setOpen(true);
        } else {
            dispatch(updatePercentage(percent / 100)) 
        }
    }

    return (
        <Wrapper>
            <label>
                <input type='radio' name='percentage' value={percent} 
                    onClick={getPercentage}
                />
                <span className={percent === 'Custom' && 'custom'}>{percent !== 'Custom' ? percent + '%' : percent}</span>
            </label>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    You should write numeric percentage and NOT lower that 1!
                </Alert>
            </Snackbar>

        </Wrapper>
    )
}

export default PercentageTipLabel

const Wrapper = styled.div`
    flex-grow: 1;

    label {
        width: 100%;
        display: flex;
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
`
