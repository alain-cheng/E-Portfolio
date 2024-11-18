import * as React from "react";
import * as motion from "framer-motion/client";
import { Container, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { artList } from "../../artList";


const ExtraIllustration = ({ }) => {
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
                    margin: '50vh 0 25vh 0',
                    fontFamily: 'Roboto, sans-serif',
                    textAlign: 'right',
                }}
            >
                <b className="highlight1">Illustration.</b>
            </Typography>
            {/* <Typography 
                variant="subtitle1" 
                sx={{
                    margin: '0 0 25vh 0',
                    fontFamily: 'Merriweather, serif',
                    textAlign: 'right',
                }}
            >
                When...
            </Typography> */}

            <Masonry columns={{ sm: 1, md: 2}} spacing={5}>
                {artList.map((art, index) => (
                    <motion.img 
                        key={index}
                        src={art.img}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={variants}
                    />
                ))}
                
            </Masonry>

        </Container>
    )
}


export default ExtraIllustration;