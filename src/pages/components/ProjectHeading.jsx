import { Container, Typography } from "@mui/material";
import * as React from "react";

const ProjectHeading = ({ }) => {
    return(
        <Container
            sx={{
                minHeight: '30vh',
                minWidth: '50vw',
                textAlign: 'left',
            }}
        >
            <Typography variant="h2">
                <b className="highlight1">My Projects.</b>
            </Typography>
        </Container>
    )
}


export default ProjectHeading;