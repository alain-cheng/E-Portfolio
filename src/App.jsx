import React from "react";
import { Route, Routes } from "react-router-dom";
// components
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./pages/components/Footer";
import Home from "./Home";
import Extra from "./pages/Extra";
// styling
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SideBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extra" element={<Extra />} />
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
