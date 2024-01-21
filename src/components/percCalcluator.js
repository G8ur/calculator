
import React, { useState } from 'react';

const GradeConverter = () => {
  const [percentage, setPercentage] = useState(0);
  const [cgpa, setCGPA] = useState(0);
  const [gpa, setGPA] = useState(0);

  const convertToCGPA = () => {
    let convertedCGPA;
    if (percentage > 95) {
      convertedCGPA = 10;
    } else {
      convertedCGPA = (percentage / 9.5).toFixed(2);
    }
    setCGPA(isNaN(convertedCGPA) ? 0 : convertedCGPA);
  };

  const convertToGPA = () => {
    const convertedGPA = (percentage / 100) * 4.0;
    setGPA(isNaN(convertedGPA) ? 0 : convertedGPA.toFixed(2));
  };

  const convertToPercentage = () => {
    const convertedPercentage = cgpa * 9.5;
    setPercentage(isNaN(convertedPercentage) ? 0 : convertedPercentage.toFixed(2));
  };

  const convertCGPAToGPA = () => {
    const convertedGPA = cgpa * 0.1;
    setGPA(isNaN(convertedGPA) ? 0 : convertedGPA.toFixed(2));
  };

  const convertGPAtoCGPA = () => {
    const convertedCGPA = gpa * 10;
    setCGPA(isNaN(convertedCGPA) ? 0 : convertedCGPA.toFixed(2));
  };

  return (
    <div>
      <h1>Grade Converter</h1>
      <div>
        <label>Percentage:</label>
        <input
          type="number"
          value={percentage}
          onChange={(e) => setPercentage(parseFloat(e.target.value))}
        />
        <button onClick={convertToCGPA}>Convert to CGPA</button>
        <button onClick={convertToGPA}>Convert to GPA</button>
      </div>
      <div>
        <label>CGPA:</label>
        <input
          type="number"
          value={cgpa}
          onChange={(e) => setCGPA(parseFloat(e.target.value))}
        />
        <button onClick={convertToPercentage}>Convert to Percentage</button>
        <button onClick={convertCGPAToGPA}>Convert to GPA</button>
      </div>
      <div>
        <label>GPA:</label>
        <input
          type="number"
          value={gpa}
          onChange={(e) => setGPA(parseFloat(e.target.value))}
        />
        <button onClick={convertGPAtoCGPA}>Convert to CGPA</button>
        {/* GPA does not have a direct conversion to percentage */}
      </div>
    </div>
  );
};

export default GradeConverter;


