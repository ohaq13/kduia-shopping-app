
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch, currency} = useContext(AppContext);

    const setBudget2 = (budget_val) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: +budget_val,
        });
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
            <input
                        required='required'
                        type='number'
                        id='budgetw'
                        value="8"
                        step="10"
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setBudget2(event.target.value)}>
                        
                        </input>
            
            </span>
        </div>
    );
};
export default Currency;