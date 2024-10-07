import * as React from "react";
import * as motion from "framer-motion/client";

const iconVariants = {
    hover: {scale: 1.2, y: -5},
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
            <IconComponent 
                sx={{
                    minHeight: "45px", 
                    minWidth: "45px", 
                    margin: "0 5px", 
                    color: "var(--text-color)",
                    transition: "0.5s",
                    ":hover": {
                        color: "var(--highlight-color)",
                    },
                }}
            />
        </motion.a>
    );
}

export default SocialIcon;