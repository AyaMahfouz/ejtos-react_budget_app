import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { TiDelete } from 'react-icons/ti';
import "./Components.css"

const ExpenseItem = (props) =>{
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
 
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><img className="plusMinusBtn" src="https://cdn-icons-png.freepik.com/256/11450/11450142.png?semt=ais_hybrid" alt="Plus" onClick={event=> increaseAllocation(props.name)}></img></td>
        <td><img className="plusMinusBtn" src="https://cdn-icons-png.freepik.com/512/2569/2569198.png" alt="Minus" onClick={event=> decreaseAllocation(props.name)}></img></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
}

export default ExpenseItem;