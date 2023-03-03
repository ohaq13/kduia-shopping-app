
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {dispatch, budget} = useContext(AppContext);

    const setBudget = (budget_val) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: +budget_val,
        });
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
            
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        step="10"
                        onChange={(event) => setBudget(event.target.value)}>
                        
                        </input>
            
            </span>
        </div>
    );
};
export default Budget;