import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";


function App() {
  return (
    <div className="App">
    <Router>
          <div>
            <NavBar />
            
            <Routes>
             
              <Route path="/" element={<Home/>} />
              <Route path="/Skills" element={<Skills />} />
              {/* <Route path="/projects/*" element={<Projects />} />
              <Route path="contact/*" element={<Contact />} /> */}
            </Routes>
          </div>
          {/* <Footer /> */}
        </Router>
        </div>



  );
}

export default App;
