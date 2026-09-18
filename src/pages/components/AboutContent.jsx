import * as React from "react";
import * as motion from "framer-motion/client";
import { Box, Container, Typography } from "@mui/material";

function AboutContent() {
    return(
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                margin: '50vh 25vw 0 25vw',

                '@media (max-width: 768px)': {
                    mt: '15vh',
                    mx: '5vw',
                },
            }}
        >
            <Container>
                <Typography
                    sx={{
                        fontSize: '14px',
                    }}
                >
                    Hello I am Alain, I enjoy exploring new concepts unfamiliar to me and giving my all to understand them. 
                    I am a highly curious person, passionate with learning concepts I find fascinating, and take pride in what I make.
                    Through creating, my main goal is to improve and continuously develop me and my skills.
                    <br></br><br></br>
                    Currently, I am working on a large personal project, taking on something I have never done before as a self-challenge.
                    I modularized a business process by designing them into a modular workflow, carefully designing UI components, 
                    and understanding how each data would flow to ensure its functions can properly meet user needs.
                    <br></br><br></br>
                    I see myself as an avid visual learner, I'd write and draw logic on a whiteboard as a way to better understand how things flow. I would iterate a bunch of times
                    to make sure I fully understand. I simply cannot stop myself to figure out the why's and how's of how things work.
                    <br></br><br></br>
                    At the moment, I am interested on improving my design decisions towards user interfaces and their aesthetics, developing scalable and maintainable software, 
                    optimizing performance, and ensuring satisfactory user experience.
                    <br></br><br></br>
                    Besides working, during my free time, I often enjoy the creative and calming process of illustrating,
                    or in the kitchen trying out a new recipe, or even taking in the breathtaking scenery at Khaer Morhen before setting off on another quest.
                </Typography>
            </Container>
        </Box>
    );
}

export default AboutContent;