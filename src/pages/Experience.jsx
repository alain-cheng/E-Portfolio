import * as motion from "framer-motion/client";
import { Box, Container, Typography } from "@mui/material";
import { experienceList } from "../lists/experienceList";
import ExperienceCard from "./components/ExperienceCard";

function Experience() {
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
            id='Experience'
            sx={{
                width: '100%', 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                margin: '5vh 0',
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
                <Typography variant="h4">
                    <b className="highlight1">Experience</b>
                </Typography>
                <Typography variant="subtitle1">
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    width: '600px',
                    padding: '0px 0px',
                }}
            >
                {experienceList.map((experience, index) => (
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={cardVariants}
                    >
                        <ExperienceCard
                            title={experience.title}
                            company={experience.company}
                            description={experience.description}
                            timeFrame={experience.timeFrame}
                            tags={experience.tags}
                            url={experience.url}
                        />
                    </motion.div>
                ))}
            </Box>
        </Box>
    )
}

export default Experience;