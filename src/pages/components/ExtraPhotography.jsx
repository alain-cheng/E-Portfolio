import * as React from "react";
import * as motion from "framer-motion/client";
import { Button, Container, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { photosList } from "../../photosList";


const ExtraPhotography = ({ }) => {
    const variants = {
        offscreen: {
            clipPath: "inset(100% 0% 0% 0%)",
        },
        onscreen: {
            clipPath: "inset(0% 0% 0% 0%)",
            transition: {
                type: "spring",
                duration: 1,
            }
        },
    }

    return(
        <Container
            sx={{
                width: '70vw',
            }}
        >
            <Typography 
                variant="h2" 
                sx={{
                    margin: '0 0 25vh 0',
                    fontFamily: 'Roboto, sans-serif',
                }}
            >
                <b className="highlight1">Photography.</b>
            </Typography>

            <Masonry columns={{ sm: 1, md: 2}} spacing={5}>
                {photosList.map((photo, index) => (
                    <motion.img 
                        key={index}
                        src={photo.img}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={variants}
                    />
                ))}
            </Masonry>
            
            <Container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button 
                    variant="outlined"
                >
                    Check out my Instagram!
                </Button>
            </Container>
            
        </Container>
    )
}


export default ExtraPhotography;