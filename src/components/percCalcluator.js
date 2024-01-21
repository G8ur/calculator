import React, { useState } from 'react';
import '../App.css'

const PercentageCGPACalculator = () => {
  const [percentage, setPercentage] = useState('');
  const [cgpa, setCGPA] = useState('');
  const [result, setResult] = useState('');

  const calculateCGPA = () => {
    const calculatedCGPA = parseFloat(percentage) / 9.5;
    setResult(`CGPA: ${calculatedCGPA.toFixed(2)}`);
  };

  const calculatePercentage = () => {
    const calculatedPercentage = parseFloat(cgpa) * 9.5;
    setResult(`Percentage: ${calculatedPercentage.toFixed(2)}%`);
  };

  return (
  <div className='container'> 
      <div className="input-container">
      <label htmlFor="height">Enter Percentage</label> 
        <input
          type="text"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
        />
      
      <button className="calculate-btn" onClick={calculateCGPA}>Convert to CGPA</button>
      </div>
      <div className='input-container'>
      <label htmlFor="height">Enter CGPA</label> 
        <input
          type="text"
          value={cgpa}
          onChange={(e) => setCGPA(e.target.value)}
        />
     
      <button onClick={calculatePercentage}>Convert to Percentage</button>

      <p>{result}</p>
    </div>
  </div>
  );
};

export default PercentageCGPACalculator;
