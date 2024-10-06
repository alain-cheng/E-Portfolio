import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from "react-router-dom"
import { Box, Button, Container } from '@mui/material';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';


export default function NavBar() {
    const activeStyle = {
        color: 'var(--highlight-color)',
        fontWeight: 'bold',
    }

    const inactiveStyle = {
        color: 'var(--text-color)',
    }

    return(
        <Router>
            <Box
                sx={{
                    minWidth: '761px',
                    borderRadius: 100,
                    backgroundColor: 'var(--background-secondary-color)',
                    border: '1px solid var(--highlight-color-3)',
                    zIndex: 1000,
                    position: 'fixed',
                    top: '5vh',
                    boxShadow: '5px 5px 5px black',
                }}
            >
                <Container
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
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