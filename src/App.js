import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router> 
      <div className="App">
      <NavBar />
      <Home />


    </div>
    </Router>
   


  );
}

export default App;
