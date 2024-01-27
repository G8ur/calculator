
import "./App.css";
import BmiCalculator from "./components/bmiCalculator";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScientificCalculator from "./components/sciCalculator";
import CurrencyConverter from "./components/exchangeApi";




function App() {
  return (
    <>

    <Navbar/>
    {/* <h1 className="text-xl bg-slate-400"> hwllo</h1> */}
    {/* <ScientificCalculator/> */}

  
    </>
  );
}

export default App;
