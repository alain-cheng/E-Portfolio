import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ExtraPhotography from "./components/ExtraPhotography";

function Extra() {
    return(
        <Box 
            id='Extra'
            sx={{
                margin: '25vh 0',
            }}
        >
            <ExtraPhotography/>
        </Box>
    )
}

export default Extra;