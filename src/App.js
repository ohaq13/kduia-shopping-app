import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList  from './components/ExpenseList';
import ExpenseItem  from './components/ExpenseItem';
import Currency  from './components/Currency';

import AllocationForm  from './components/AllocationForm';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-4'>Company's Budget Allocation</h1>
                    <div className='row mt-4'>
                    {/* Add Budget component here under */
                    //Budget component
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    }
                

                {/* Add Remaining component here under */
                   //Remaining component
                   <div className='col-sm'>
                       <Remaining />
                   </div>                  
                }        

                {/* Add ExpenseTotal component here under */
                 //ExpenseTotal component
                 <div className='col-sm'>
                    <ExpenseTotal />
                 </div>
                }        

 {/* Add Currency component here under */
                 //ExpenseTotal component
                 <div className='col-sm'>
                    <Currency />
                 </div>
                } 

                <h3 className='mt-4'>Allocation</h3>
                {/* Add ExpenseList component here under */

                    <ExpenseList  />
                
                    }         

                {/* Add ExpenseItem component here under */
                    
                  //  <ExpenseItem  />

               
                 }        
                 <h3 className='mt-4'>Change allocation</h3>
                 {/* Add AllocationForm component here under */
                                   

                    <AllocationForm  />
                
                 }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
