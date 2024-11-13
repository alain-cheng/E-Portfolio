import * as React from 'react';
import { Box, Button, Container } from '@mui/material';
import Pdf from '../assets/Resume.pdf';
import MenuIcon from '@mui/icons-material/Menu';

export default function SideBar() {
    const [open, setOpen] = React.useState(true)
    
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
        });
        handleOpen()
    }

    const handleOpen = () => {
        if (open) setOpen(false)
        else setOpen(true)
    }

    const showPDF = () => {
        window.open(Pdf, "_blank")
    }

    return(
        <>
            <Button 
                variant='text' 
                onClick={() => handleOpen()}
                sx={{
                    visibility: 'hidden',
                    '@media (max-width: 1000px)': {
                        visibility: 'visible',
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        width: '5vw',
                        transition: '0.5s',
                        visibility: open ? 'hidden' : 'visible',
                    }
                    
                }}
            >
                <MenuIcon sx={{scale: 1.5}} />
            </Button>
            
            <Box
                sx={{
                    position: 'fixed',
                    visibility: 'hidden',
                    '@media (max-width: 1000px)': {
                        visibility: 'visible',
                        minWidth: '50vw',
                        minHeight: '100vh',
                        backgroundColor: 'rgba(14, 12, 24, 0.7)', // var(--background-color)
                        backdropFilter: 'blur(5px)',
                        zIndex: 1000,
                        boxShadow: open ? '1px 0px 9px black': 'none',
                        top: '0',
                        transition: '0.5s',
                        right: open ? '0': '-1000px',
                    },
                }}
            >
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        minWidth: '50vw',
                        minHeight: '70vh',
                        marginTop: '10vh',
                    }}
                >
                    <Button variant='text' onClick={() => handleOpen()}><MenuIcon sx={{scale: 1.5}}/></Button>
                    <Button variant='text' onClick={() => scrollToSection('About')}>About Me</Button>
                    <Button variant='text' onClick={() => scrollToSection('Projects')}>My Projects</Button>
                    <Button variant='text' onClick={() => scrollToSection('Extra')}>Extra</Button>
                    <Button variant='outlined' onClick={() => showPDF()}>Resume</Button>
                </Container>
            </Box>
        </>
        
    );
}