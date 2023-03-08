import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Resume } from "./components/Resume";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";


function App() {
  return (
    <div className="App">
    <Router>
          <div>
            <NavBar />
            
            <Routes>
             
              <Route path="/" element={<Home/>} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Resume/" element={<Resume />} />
              <Route path="/Projects/" element={<Projects />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </div>
          {/* <Footer /> */}
        </Router>
        </div>



  );
}

export default App;
