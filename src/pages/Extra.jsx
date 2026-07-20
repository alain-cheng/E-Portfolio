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
            }}
        >
            <ExtraPhotography/>

            <ExtraIllustration/>
        </Box>
    )
}

export default Extra;