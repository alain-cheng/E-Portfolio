import * as React from 'react';
import { Box, Container, Typography } from "@mui/material";

function Footer() {
    const LAST_UPDATED = "July 21, 2026"; //

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
                        fontSize: '12px',
                    }}
                >
                    Thank you for checking my Portfolio! 
                    
                    I built this site with <b>React</b>.
                    
                    The animations are done using <b>Framer Motion</b> with components
                    from the <b>Material UI</b> library.

                    Last updated on <b>{LAST_UPDATED}</b>.
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;