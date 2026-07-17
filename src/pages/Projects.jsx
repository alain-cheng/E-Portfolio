import * as React from 'react';
import * as motion from "framer-motion/client";
import ProjectCard from "./components/ProjectCard";
import { Box, Typography } from "@mui/material";
import { projectList } from "../projectList";

function Projects() {
    const cardVariants = {
        offscreen: {
            scale: 0,
        },
        onscreen: {
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.6,
            },
        },
    }

    return(
        <Box 
            id='Projects' 
            sx={{
                width: '100%', 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            {/* Heading */}
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
            
            {projectList.map((project, index) => (
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={cardVariants}
                >
                    <ProjectCard
                        key={index}
                        title={project.title}
                        img={project.img}
                        body={project.body}
                        tags={project.tags}
                        url={project.url}
                    />
                </motion.div>
            ))}
        </Box>
    )
}

export default Projects;
