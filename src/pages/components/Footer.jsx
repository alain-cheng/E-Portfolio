import * as React from 'react';
import { Box, Container, Typography } from "@mui/material";

function Footer() {
    return(
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '5vh 25vw',
            }}
        >
            <Container>
                <Typography>
                    Thank you for checking my Portfolio! 
                    
                    I built this site using <b>ReactJS</b>.
                    
                    The animations are done by <b>Framer Motion</b> with components
                    from the <b>Material UI</b> library.

                    This site is partially designed by yours truly via <b>Figma</b>.
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;