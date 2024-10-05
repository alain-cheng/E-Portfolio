import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom"
import { Box, Button, Container } from '@mui/material';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';


export default function NavBar() {
    return(
        <Router>
            <Box
                sx={{
                    minWidth: '761px',
                    borderRadius: 100,
                    backgroundColor: '#1A1824',
                    zIndex: 1000,
                    position: 'fixed',
                    top: '5vh',
                    boxShadow: '5px 5px 5px black',
                }}
            >
                <Container
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Button component={Link} to='/About' variant='text'>About Me</Button>
                    <Button component={Link} to='/Projects' variant='text'>Projects</Button>
                    <Button component={Link} to='/Experience' variant='text'>Experience</Button>
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