import { BrowserRouter, NavLink, Route,  Routes} from 'react-router-dom';
import  React from 'react';
import '../css/nav.css';
import BmiCalculator from './bmiCalculator';
import GradeConverter from './percCalcluator';
import CurrencyConverter from './exchangeApi';
import ScientificCalculator from './sciCalculator';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="containerr">
        {/* <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div> */}
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/bmi-calculator">Bmi-calculator</NavLink>
            </li>
            <li>
              <NavLink to="/percentage-cgpa-calculator">Percentage</NavLink>
            </li>
            <li>
              <NavLink to="/currency-converter">CurrencyConverter</NavLink>
            </li>
            <li>
              <NavLink to="/calculator">Calculator</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
      {/* <Route exact path="/" element={Home} /> */}
       <Route path="/bmi-calculator" element={<BmiCalculator/>} />
        <Route path="/percentage-cgpa-calculator" element={<GradeConverter/>} />
        <Route path="/currency-converter" element={<CurrencyConverter />} />
       <Route path="/calculator" element={<ScientificCalculator/>} /> 
     </Routes>
    </nav>
     
     
  );
};








export default Navbar;