import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Foot } from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Router>
       
          <NavBar />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects/" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>


        
      </Router>
      <Foot />
    </div>




  );
}

export default App;
