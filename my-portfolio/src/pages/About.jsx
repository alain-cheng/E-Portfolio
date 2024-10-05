import React from "react";
import * as motion from "framer-motion/client"
// assets
import headerImg from "../assets/header_img.png";
// components
import Header from "./components/Header";
import SocialIcon from "./components/SocialIcon";
//
import { socials } from "../socials";

function About() {
    const groupVariants = {
        hover: {scale: 1.1},
    }

    return(
        <motion.div
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1}}
        >
        <Header headerImg={headerImg} />
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
    )
}

export default About;