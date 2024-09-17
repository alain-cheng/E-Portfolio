import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";

import headerImg from "./assets/header_img.png";
import github from  "./assets/github-icon.png";
import linkedin from "./assets/linkedin-icon.png";
import instagram from "./assets/instagram-icon.png";
import mail from "./assets/mail-icon.png";

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-text">
          <div className="Ht-main">
            Hello Im Alain!
          </div>
          <div className="Ht-sub">
            an Undergraduate Student
          </div>
          <div className="Ht-desc">
            I major in Computer Science, specializing in <br/>
            Software Technology. I am also studying at <br/>
            De La Salle University, Manila, Philippines.
          </div>
        </div>
        <div className="Header-image">
          <img src={headerImg} alt="Image"/>
        </div>
      </header>
      <div className="Socials-group">
        <img src={github} alt="Github"/>
        <img src={linkedin} alt="LinkedIn"/>
        <img src={instagram} alt="Instagram"/>
        <img src={mail} alt="Mail"/>
      </div>
    </div>
  );
}

export default App;
