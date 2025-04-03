import React, { useState } from "react";
import { evaluate } from "mathjs";
import Button from "./Button";

const BasicCalculator = () => {
    const [display, setDisplay] = useState(''); // Step 2: Using state to store display value

    // Function to add numbers/operators to the display
    const appendToDisplay = (value) => {
        setDisplay((prev) => prev + value);
    };

    // Function to clear the display
    const clearDisplay = () => {
        setDisplay("");
    };

    // Function to delete the last character
    const deleteLast = () => {
        if (display === "Error"){
            setDisplay(" ");
            return;
        }
        setDisplay((prev) => prev.slice(0, -1));
    };

    // Function to evaluate and display the result
    const calculateResult = () => {
        try {
            setDisplay(evaluate(display).toString());
        } catch (error) {
            setDisplay("Error"); // Handle invalid expressions
        }
    };


    return (
        <div className="calculator">

            {/* <input type="text" value={display} readOnly /> Display screen */}

            <input type="text" id="display" value={display} className="w-full h-12 text-right text-xl border border-gray-300 rounded px-2 mb-4" disabled />


            <div className="buttons">

                <Button appendToDisplay={appendToDisplay} clearDisplay={clearDisplay}
                    deleteLast={deleteLast} calculateResult={calculateResult} />
            </div>

            {/* <div className="grid grid-cols-4 gap-2 h-80 ">
                <button className="btn bg-gray-200 hover:bg-blue-500" onClick={clearDisplay}>C</button>
                <button className="btn bg-gray-200 hover:bg-blue-500" onClick={() => appendToDisplay('*')}>*</button>
                <button className="btn bg-gray-200 hover:bg-blue-500" onClick={() => appendToDisplay('7')}>/</button>
                <button className="btn bg-gray-200 hover:bg-blue-500" onClick={deleteLast}>Del</button>

                <button className="btn bg-gray-200 hover:bg-blue-500" onClick={() => appendToDisplay('7')}>7</button>
                <button className="btn bg-gray-200 hover:bg-blue-500" onClick={() => appendToDisplay('8')}>8</button>
                <button className="btn bg-gray-200 hover:bg-blue-500" onClick={() => appendToDisplay('9')}>9</button>
                <button className="btn bg-gray-300 hover:bg-blue-500" onClick={() => appendToDisplay('-')}>-</button>

                <button className="btn bg-gray-200 hover:bg-blue-500" onClick={() => appendToDisplay('4')}>4</button>
                <button className="btn bg-gray-200 hover:bg-blue-500" onClick={() => appendToDisplay('5')}>5</button>
                <button className="btn bg-gray-200 hover:bg-blue-500" onClick={() => appendToDisplay('6')}>6</button>
                <button className="btn bg-gray-300 hover:bg-blue-500" onClick={() => appendToDisplay('+')}>+</button>

                <button className="btn bg-gray-200 hover:bg-blue-500" onClick={() => appendToDisplay('1')}>1</button>
                <button className="btn bg-gray-200 hover:bg-blue-500" onClick={() => appendToDisplay('2')}>2</button>
                <button className="btn bg-gray-200 hover:bg-blue-500" onClick={() => appendToDisplay('3')}>3</button>
                <button className="btn row-span-2 bg-blue-500 text-white" onClick={calculateResult}>=</button>

                <button className="btn col-span-2 bg-gray-200 hover:bg-blue-500" onClick={() => appendToDisplay('0')}>0</button>
                <button className="btn bg-gray-200" onClick={() => appendToDisplay('.')}>.</button>
            </div> */}
        </div>
    );
};

export default BasicCalculator