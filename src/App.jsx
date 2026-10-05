import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { MotionGlobalConfig } from "framer-motion";
// components
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./pages/components/Footer";
import Home from "./Home";
import Extra from "./pages/Extra";
// styling
import "./styles/App.css";

function App() {
  // disable animations on mobile
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px").matches;
    MotionGlobalConfig.skipAnimations = isMobile;
  }, [])

  // reload page on viewport size change
  useEffect(() => {
        const handleResize = () => {
            window.location.reload();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
