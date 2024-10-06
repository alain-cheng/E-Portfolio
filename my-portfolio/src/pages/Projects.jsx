import * as React from 'react';
import * as motion from "framer-motion/client";
import ProjectCard from "./components/ProjectCard";
import { Box } from "@mui/material";
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
        <Box sx={{ marginTop: '25vh'}}>
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
                    />
                </motion.div>
            ))}
        </Box>
    )
}

export default Projects;
