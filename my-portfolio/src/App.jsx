import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";


import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<About/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
          </div>
        </Router>
      </header>

      
    </div>
  );
}

export default App;
