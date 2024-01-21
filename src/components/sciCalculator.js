import React, { useState } from 'react';
import '../css/calc.css'

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(display).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'sqrt') {
      setResult(Math.sqrt(eval(display)).toString());
    } else {
      setDisplay(display + value);
    }
  };

  const clearDisplay = () => {
    setDisplay('');
    setResult('');
  };

  return (
    <div className="calculator-container">
      <div className="display">
        <div className="expression">{display}</div>
        <div className="result">{result}</div>
      </div>
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
        <button onClick={() => handleButtonClick('=')} className="equal">
          =
        </button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('sqrt')} className="sqrt">
          √
        </button>
        <button onClick={() => handleButtonClick('(')}>(</button>
        <button onClick={() => handleButtonClick(')')}>)</button>
        <button onClick={clearDisplay} className="clear">
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
