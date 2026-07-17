import * as React from "react";
import * as motion from "framer-motion/client";
import { Button, Container, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { photosList } from "../../lists/photosList";


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
                    margin: '0 0 0 0',
                    fontFamily: 'Roboto, sans-serif',
                }}
            >
                <b className="highlight1">Photography.</b>
            </Typography>
            <Typography 
                variant="subtitle1" 
                sx={{
                    maxWidth: '40vw',
                    margin: '0 0 25vh 0',
                    fontFamily: 'Merriweather, serif',
                    textAlign: 'left',
                }}
            >
                Every time I travel to new places, I like snapping photographs of memorable and interesting scenery and objects I've seen to preserve this moment in time. 
                It is one of my ways of self-expression to convey different emotions and feeling that emanate through these pictures I share with others.
            </Typography>

            <Masonry columns={{ sm: 1, md: 2}} spacing={5}>
                {photosList.map((photo, index) => (
                    <motion.img 
                        key={index}
                        src={photo.img}
                        initial="offscreen"
                        whileInView="onscreen"
                        // viewport={{ once: false, amount: 0.3 }}
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