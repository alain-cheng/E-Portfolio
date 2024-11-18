import { Container, Typography } from "@mui/material";
import * as React from "react";

const ExtraHeading = ({ }) => {
    return(
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
    )
}


export default ExtraHeading;