import { Box } from "@mui/material";
import React from "react";
import ExtraHeading from "./components/ExtraHeading";
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
            <ExtraHeading/>

            <ExtraPhotography/>

            <ExtraIllustration/>
        </Box>
    )
}

export default Extra;