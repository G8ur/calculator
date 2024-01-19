
import './App.css';
import BmiCalculator from './components/bmiCalculator';
import React, { useState } from 'react';

function App() {
  const [showBmiCalculator, setShowBmiCalculator] = useState(false);

  const handleButtonClick = () => {
    setShowBmiCalculator(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Open BMI Calculator</button>
      {showBmiCalculator && <BmiCalculator />}
    </div>
  );
}

export default App;
