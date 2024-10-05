import React from "react";
import ProjectCard from "./components/ProjectCard";
import { Box } from "@mui/material";
import { projectList } from "../projectList";

function Projects() {
    return(
        <Box sx={{ marginTop: '25vh'}}>
            {projectList.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    img={project.img}
                    body={project.body}
                    tags={project.tags}
                />
            ))}
        </Box>
    )
}

export default Projects;
