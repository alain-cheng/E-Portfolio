import React from "react";
// components
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./pages/components/Footer";
// page "components"
import About from "./pages/About";
import Projects from "./pages/Projects";
import Extra from "./pages/Extra";


// styling
import "./styles/App.css";

function App() {
  console.clear();

  return (
    <div className="App">
      <NavBar/>
      <SideBar/>
      <About/>
      <Projects/>
      <Extra/>
      <Footer/>
    </div>
    
  );
}

export default App;
