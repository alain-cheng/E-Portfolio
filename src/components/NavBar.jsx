import * as React from 'react';
import { Box, Button, Container } from '@mui/material';
import Pdf from '../assets/Resume.pdf';

export default function NavBar() {
    const [visible, setVisible] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);

    const handleScroll = () => {
        if (typeof window !== "undefined") {
            const scrollY = window.scrollY;
            if (scrollY > lastScrollY) setVisible(false);
            else setVisible(true);
            setLastScrollY(scrollY);
        }
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
        });
    }

    const showPDF = () => {
        window.open(Pdf, "_blank")
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return(
        <Box
            sx={{
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
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '50vw',
                    height: '7vh',
                }}
            >
                <Button variant='text' onClick={() => scrollToSection('About')}>About Me</Button>
                <Button variant='text' onClick={() => scrollToSection('Projects')}>My Projects</Button>
                <Button variant='text' onClick={() => scrollToSection('Extra')}>Extra</Button>
                <Button variant='outlined' onClick={() => showPDF()}>Resume</Button>
            </Container>
        </Box>
    );
}