import React from 'react';
import { useId } from 'react';
 
    function InputBox({label, 
                        amount, 
                        onAmountChange, 
                        onCurrencyChange, 
                        currencyOption = [], 
                        selectCurrency="usd",
                        amountDisable = false,
                        currencyDisable = false,
                        className = ""} /* to take css from user */) {

    // Do not use useID to generate keys in a list
    const amountInputId = useId()  // It returns a unique random string
    

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label} 
                </label>
                <input
                    id = {amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled= {amountDisable}
                    value={amount}
                    onChange = {(e) => onAmountChange && onAmountChange(Number(e.target.value))} // returned value bu event handlers are string so do necessary casting
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}        
                        disabled = {currencyDisable} >

                        {/* while using loops in react, always remember to provide keys to improve performance */}

                        {currencyOption.map((Currency) => (
                            <option key={Currency} value={Currency}>
                                {Currency}
                            </option>
                
                        ))}
                    
  
                </select>
            </div>
        </div>
    );
}

export default InputBox;
