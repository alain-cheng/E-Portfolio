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
                    Thank you for checking my Portfolio! I built this site using <b>ReactJS</b> and <b>Framer Motion</b> with <b>Material UI</b> components.
                    Designed using <b>Figma</b>. Deployed to <b>Github Pages</b>.
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;