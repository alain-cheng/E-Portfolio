import * as React from 'react';
import * as motion from "framer-motion/client";
import { Box } from '@mui/material';
// assets
import headerImg from "../assets/header_img.png";
// components
import Header from "./components/Header";
import SocialIcon from "./components/SocialIcon";
import AboutContent from './components/AboutContent';
import ScrollPopup from './components/ScrollPopup';
//
import { socials } from "../socials";


function About() {
  const [showPopup, setShowPopup] = React.useState(false);
  const ref = React.useRef(null)

  // Handle the popup
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) {
          setShowPopup(true);
        } else {
          setShowPopup(false);
        }
      }, 
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  const groupVariants = {
    hover: {scale: 1.1},
  }

  return(
    <Box 
      id='About'
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '25vh 0',
      }}
    >
      <motion.div
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
      >
        <Header  headerImg={headerImg} />
        <motion.div
          className="Socials-group"
          whileHover="hover"
          variants={groupVariants}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '41px',
            minHeight: '45px',
            minWidth: '200px',
          }}
        >
          {socials.map((social, index) => (
            <SocialIcon 
              key={index}
              IconComponent={social.icon}
              url={social.url}
            />
          ))}
        </motion.div>
      </motion.div>

      <AboutContent/>

      <ScrollPopup show={showPopup}/>
    </Box>
  );
}

export default About;