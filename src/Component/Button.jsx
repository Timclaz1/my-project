import React from "react";






function Button({ calculateResult, clearDisplay, deleteLast, appendToDisplay }) {
  const buttons = ["C", "*", "/", "Del", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "0","=",];

  return (
    <div className="grid grid-cols-4 gap-2 h-80">
      {buttons.map((btn, index) => (
        <button 
          key={index} 
          className={`bg-gray-700 hover:bg-blue-500 ${btn === "=" ? "col-span-4 bg-blue-500 text-white" : "not okay"}`} 
          onClick={() => {
            if (btn === "=") {
              calculateResult(); 
            } else if (btn === "C") {
              clearDisplay(); 
            } else if (btn === "Del") {
              deleteLast(); // NEW: Handle "Del"
            } else {
              appendToDisplay(btn);
            }
          }}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

// Function to delete last character (for plain JavaScript)
// function deleteLast() {
//   let display = document.getElementById("display");
//   display.innerText = display.innerText.slice(0, -1); 
// }

// function Button(
//   { appendToDisplay, // Function to add numbers/operators to the display
//     clearDisplay, // Function to clear the display
//     deleteLast, // Function to delete the last character
//     calculateResult } // Function to evaluate and display the result
// ) {


//   //  const buttonArray = [{} , {} ]


//   return (
//     <div className="grid grid-cols-4 gap-2 h-80 ">

//       <CalcButton value={'C'} buttonFunction={clearDisplay} />
//       <CalcButton value={'*'} buttonFunction={() => appendToDisplay('*')} />
//       <CalcButton value={7} buttonFunction={() => appendToDisplay(7)} />
//       <CalcButton value={1} buttonFunction={() => appendToDisplay(1)} />
//       <CalcButton value={'*'} buttonFunction={() => appendToDisplay('*')} />
//       <CalcButton value={7} buttonFunction={() => appendToDisplay(7)} />
//       <CalcButton value={1} buttonFunction={() => appendToDisplay(1)} />
//       <CalcButton value={'*'} buttonFunction={() => appendToDisplay('*')} />
//       <CalcButton value={7} buttonFunction={() => appendToDisplay(7)} />
//       <CalcButton value={1} buttonFunction={() => appendToDisplay(1)} />
//       <CalcButton value={'*'} buttonFunction={() => appendToDisplay('*')} />
//       <CalcButton value={7} buttonFunction={() => appendToDisplay(7)} />
//       <CalcButton value={1} buttonFunction={() => appendToDisplay(1)} />

      // {/* <button className="btn bg-gray-200 hover:bg-blue-500" onClick={clearDisplay()}>C</button>
      // <button className="btn bg-gray-200 hover:bg-blue-500" onClick={appendToDisplay('*')}>*</button>
      // <button className="btn bg-gray-200 hover:bg-blue-500" onClick={appendToDisplay('7')}>/</button>
      // <button className="btn bg-gray-200 hover:bg-blue-500" onClick={appendToDisplay('7')}>Del</button>

      // <button className="btn bg-gray-200 hover:bg-blue-500" onClick={appendToDisplay('7')}>7</button>
      // <button className="btn bg-gray-200 hover:bg-blue-500" onClick={appendToDisplay('8')}>8</button>
      // <button className="btn bg-gray-200 hover:bg-blue-500" onClick={appendToDisplay('9')}>9</button>
      // <button className="btn bg-gray-300 hover:bg-blue-500" onClick={appendToDisplay('-')}>-</button>

      // <button className="btn bg-gray-200 hover:bg-blue-500" onClick={appendToDisplay('4')}>4</button>
      // <button className="btn bg-gray-200 hover:bg-blue-500" onClick={appendToDisplay('5')}>5</button>
      // <button className="btn bg-gray-200 hover:bg-blue-500" onClick={appendToDisplay('6')}>6</button>
      // <button className="btn bg-gray-300 hover:bg-blue-500" onClick={appendToDisplay('+')}>+</button>

      // <button className="btn bg-gray-200 hover:bg-blue-500" onClick={appendToDisplay('1')}>1</button>
      // <button className="btn bg-gray-200 hover:bg-blue-500" onClick={appendToDisplay('2')}>2</button>
      // <button className="btn bg-gray-200 hover:bg-blue-500" onClick={appendToDisplay('3')}>3</button>
      // <button className="btn row-span-2 bg-blue-500 text-white" onClick={calculateResult()}>=</button> */}

      // {/* <button className="btn col-span-2 bg-gray-200 hover:bg-blue-500" onClick="appendToDisplay('0')">0</button>
      // <button className="btn bg-gray-200" onClick="appendToDisplay('.')">.</button> */}
//     </div>
//   );
// }
Button.defaultProps = {
  calculateResult: () => alert("Result calculated!"),
  clearDisplay: () => alert("Display cleared!"),
  deleteLast: () => alert("Last character deleted!"),
  appendToDisplay: (value) => alert(`Appended: ${value}`),
};

export default Button;


// export function CalcButton({ value, buttonFunction }) {
//   return <button className="btn col-span-2 bg-gray-200 hover:bg-blue-500" onClick={buttonFunction} >{value}</button>
// }