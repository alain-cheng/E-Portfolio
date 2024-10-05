import * as React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const iconVariants = {
    hover: {scale: 1.2},
    tap: {scale: 1},
}

const SocialIcon = ({ IconComponent, url }) => {
    return(
        <motion.a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
        >
            <IconComponent sx={{minHeight: "45px", minWidth: "45px", margin: "0 5px", color: "#F1E0C5"}}/>
        </motion.a>
    );
}

SocialIcon.propTypes = {
    IconComponent: PropTypes.elementType.isRequired,
    url: PropTypes.string.isRequired,
    variants: PropTypes.object
};

export default SocialIcon;