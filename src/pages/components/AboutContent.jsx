import * as React from "react";
import * as motion from "framer-motion/client";
import { Box, Container, Typography } from "@mui/material";

function AboutContent() {
    return(
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '50vh 25vw 0 25vw',
            }}
        >
            <Container>
                <Typography>
                    Ever since I was little I would always be surrounded by technology, 
                    from old desktop computers to portable game consoles like the Game Boy. 
                    I also really got into the habit of sketching or doodling here and there 
                    from a really young age. 
                    Those childhood interests would not be realized until later on into my life 
                    of highschool before transitioning to college when I begin thinking about 
                    what I want to do as my career. 
                    I would have begun exploring deeper into my interests such as trying my hands
                    at scripting on a game engine and taking art a bit more 
                    seriously than I did before. <br/><br/>
                    Those two major interests I had would require different values and skill sets, 
                    for example, technology requires logic and reason while art pours importance 
                    to creative expression. However, both do align in the aspects of achievement 
                    and creation — I began to realize that I have a passion for creating. 
                    As such I believe my results from the APQ and PCK tests do somewhat encapsulate 
                    my relevant interests and potential skills.
                </Typography>
            </Container>
        </Box>
    );
}

export default AboutContent;