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
                <Typography
                    sx={{
                        opacity: 0.75,
                    }}
                >
                    Thank you for checking my Portfolio! 
                    
                    I built this site with <b>React</b>.
                    
                    The animations are done using <b>Framer Motion</b> with components
                    from the <b>Material UI</b> library.
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;