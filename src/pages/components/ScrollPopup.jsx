import * as React from 'react';
import * as motion from "framer-motion/client";
import { Box } from '@mui/material';
import SocialIcon from './SocialIcon';
import { socials } from '../../socials';

const ScrollPopup = ({ show }) => {
    const visible = {
        opacity: 1,
    }

    const hidden = {
        opacity: 0,
    }

    return(
        <motion.div
            animate={show ? visible : hidden}
        >
            <Box
                sx={{
                    position: 'fixed',
                    display: 'flex',
                    flexDirection: 'column',
                    bottom: '5%',
                    left: '5%',
                }}
            >
                {socials.map((social, index) => (
                    <SocialIcon 
                        key={index}
                        IconComponent={social.icon}
                        url={social.url}
                    />
                ))}
            </Box>
        </motion.div>
        
    );
}

export default ScrollPopup;