import React from "react";
// components
import NavBar from "./components/NavBar";
// page "components"
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

// styling
import "./styles/App.css";

function App() {
  console.clear();

  return (
    <div className="App">
      <NavBar/>
      <About/>
      <Projects/>
      <Experience/>
    </div>
    
  );
}

export default App;
