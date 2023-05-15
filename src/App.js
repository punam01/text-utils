
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<TextForm/>}>
        </Route>   
        <Route exact path="/about" element={<About/>}>
        </Route>
    </Routes>
    </Router>   
    </>
  );
}

export default App;
