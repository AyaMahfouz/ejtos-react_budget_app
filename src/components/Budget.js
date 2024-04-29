import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);

        if(newBudget > 20000){
            alert("You can not set the budget to more than 20000");
        }
        else if(newBudget < totalExpenses){
            alert("You can not reduce the budget value lower than spending");
        }
        else{
            setNewBudget(event.target.value);
        }
        
    }
    return (
        <div className='alert alert-secondary'>
        <span>Budget: {currency}     </span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;