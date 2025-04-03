import React from "react";
import './index.css';
import BasicCalculator from "./Component/Calculator";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-600">
      <h1 className="text-3xl font-bold mb-4">Calculator</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-80">
        <BasicCalculator />
      </div>
    </div>
  )
}
export default App;

