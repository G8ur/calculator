import { BrowserRouter, NavLink, Route,  Routes} from 'react-router-dom';
import  React from 'react';
import '../css/nav.css';
import BmiCalculator from './bmiCalculator';
import PercentageCGPACalculator from './percCalcluator';

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
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
      {/* <Route exact path="/" element={Home} /> */}
       <Route path="/bmi-calculator" element={<BmiCalculator/>} />
        <Route path="/percentage-cgpa-calculator" element={<PercentageCGPACalculator/>} />
        {/* <Route path="/about" component={About} /> */}
       {/* <Route path="/contact" component={Contact} /> */} 
     </Routes>
    </nav>
     
     
  );
};








export default Navbar;