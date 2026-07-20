import * as React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container } from '@mui/material';

import Pdf from '../assets/Resume.pdf';

export default function NavBar() {

    const [visible, setVisible] = React.useState(true);

    const showPDF = () => {
        window.open(Pdf, "_blank")
    }

    return(
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                minWidth: '100vw',
                minHeight: '7vh',
                backgroundColor: 'rgba(14, 12, 24, 0.7)', // var(--background-color)
                backdropFilter: 'blur(5px)',
                zIndex: 1000,
                position: 'fixed',
                boxShadow: '1px 0px 9px black',
                transition: '0.5s',
                top: visible ? '0' : '-80px',
                '@media (max-width: 1000px)': {
                    visibility: 'hidden',
                },
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    width: '35vw',
                }}
            >
                <Button component={Link} to='/' variant='text'>Profile</Button>
                <Button component={Link} to='/extra' variant='text'>Extra</Button>
                <Button variant='outlined' onClick={() => showPDF()}>Resume</Button>
            </Container>
        </Box>
    );
}