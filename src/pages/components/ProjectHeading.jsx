import { Box, Typography } from "@mui/material";
import * as React from "react";

const ProjectHeading = ({ }) => {
    return(
        <Box
            sx={{
                height: '20vh',
                width: '50vw',
                textAlign: 'left',
            }}
        >
            <Typography variant="h3">
                <b className="highlight1">My Projects</b>
            </Typography>
            <Typography variant="subtitle1">
                A sneakpeak on what I am currently doing and stuff I did previously.
            </Typography>
        </Box>
    )
}


export default ProjectHeading;