import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from "react-router-dom"
import { Box, Button, Container } from '@mui/material';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';


export default function NavBar() {
    const [visible, setVisible] = React.useState(false);
    const [lastScrollY, setLastScrollY] = React.useState(0);

    const activeStyle = {
        color: 'var(--highlight-color)',
        fontWeight: 'bold',
    };

    const inactiveStyle = {
        color: 'var(--text-color)',
    };

    const handleScroll = () => {
        if (typeof window !== "undefined") {
            const scrollY = window.scrollY;
            if (scrollY > lastScrollY) setVisible(false);
            else setVisible(true);
            setLastScrollY(scrollY);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return(
        <Router>
                <Box
                    sx={{
                        minWidth: '100vw',
                        minHeight: '7vh',
                        backgroundColor: 'rgba(14, 12, 24, 0.7)', // hex #0E0C18
                        backdropFilter: 'blur(5px)',
                        zIndex: 1000,
                        position: 'fixed',
                        boxShadow: '1px 0px 9px black',
                        transition: '0.5s',
                        top: visible ? '0' : '-80px',
                    }}
                >
                    <Container
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '761px',
                            height: '7vh',
                        }}
                    >
                        <Button component={NavLink} to='/About' variant='text' style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>About Me</Button>
                        <Button component={NavLink} to='/Projects' variant='text' style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>My Projects</Button>
                        <Button component={NavLink} to='/Experience' variant='text' style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>Experience</Button>
                    </Container>
                </Box>
                <Routes>
                    <Route path="/" element={<Navigate to="/About"/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Projects" element={<Projects/>}/>
                    <Route path="/Experience" element={<Experience/>}/>
                </Routes>
        </Router>
    );
}