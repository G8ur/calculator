import React, { useState } from 'react';

const ScientificCalculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [memory, setMemory] = useState('');

  const handleButtonClick = (value) => {
    setDisplayValue((prevDisplayValue) => prevDisplayValue + value);
  };

  const handleClear = () => {
    setDisplayValue('');
  };

  const handleCalculate = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handleSquareRoot = () => {
    try {
      setDisplayValue(Math.sqrt(eval(displayValue)).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handlePower = () => {
    setMemory(displayValue);
    setDisplayValue('');
  };

  const handleEquals = () => {
    try {
      setDisplayValue(Math.pow(parseFloat(memory), parseFloat(displayValue)).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
    setMemory('');
  };

  return (
    <div className="calculator">
      <input type="text" value={displayValue} readOnly />

      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>

        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>

        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>

        <button onClick={handleClear}>C</button>
        <button onClick={handleSquareRoot}>√</button>
        <button onClick={handlePower}>x^y</button>
        <button onClick={handleEquals}>=</button>
      </div>
    </div>
  );
};

export default ScientificCalculator;
