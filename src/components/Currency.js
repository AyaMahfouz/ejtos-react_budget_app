import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./Components.css";

const Currency = () =>{
    const { dispatch} = useContext(AppContext);
    
    const currArray = [
        {name: "Pound", symbol:"£"},
        {name: "Dollar", symbol:"$"},
        {name: "Euro", symbol:"€"},
        {name: "Ruppee", symbol:"₹"},
    ];
    

    const handleCurrencyChange = (event) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }

    return(
        <div className="alert alert-cur">
            <span>Currency (
                <select id="selectCurr" className="select" onChange={handleCurrencyChange}>
                    {currArray.map((curr) =>{
                        return <option value={curr.symbol} key={curr.name}>{curr.symbol}: {curr.name}</option>
                    })}
                </select>
            )</span>
        </div>
    )
}

export default Currency;