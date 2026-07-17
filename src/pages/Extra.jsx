import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ExtraPhotography from "./components/ExtraPhotography";
import ExtraIllustration from "./components/ExtraIllustration";

function Extra() {
    return(
        <Box 
            id='Extra'
            sx={{
                margin: '25vh 0',
                border: 1,
            }}
        >
            <Container
                sx={{
                    height: '100vh',
                    width: '70vw',
                    textAlign: 'left',
                }}
            >
                <Typography variant="h1">
                    <b className="highlight1">Extra</b>
                </Typography>
                <Typography variant="subtitle1" sx={{fontFamily: 'Merriweather, serif'}}>
                    stuff about me.
                </Typography>
            </Container>

            <ExtraPhotography/>

            <ExtraIllustration/>
        </Box>
    )
}

export default Extra;