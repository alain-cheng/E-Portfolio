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

import { MOBILE_BREAKPOINT } from "./constants/MOBILE_BREAKPOINT";

function App() {
  // disable animations on mobile
  useEffect(() => {
    const isMobile = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
    MotionGlobalConfig.skipAnimations = isMobile;
  }, [])

  // reload page on viewport size change between mobile and desktop
  useEffect(() => {
        let isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

        const handleResize = () => {
          const isCurrentMobile = window.innerWidth <= MOBILE_BREAKPOINT;

          if (isCurrentMobile !== isMobile) {
            isMobile = isCurrentMobile;
            window.location.reload();
          }
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
