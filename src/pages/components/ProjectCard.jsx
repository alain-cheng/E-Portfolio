import { Fragment, useState } from "react";
import * as motion from "framer-motion/client";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Chip, Card, CardContent, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const ProjectCard = ({ title, img, body, tags, url }) => {
    const [isHovered, setIsHovered] = useState(false);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#3D2C70',
                light: '#543895',
                contrastText: '#FB89FF',
            },
        },
    });

    const handleClick = () => {
        if (url) window.open(url, '_blank');
    };

    const card = (
        <ThemeProvider theme={theme}>
            <CardContent
                sx={{
                    opacity: isHovered ? 1: 0,
                    transition: "opacity 0.5s ease",
                }}
            >
                <Typography 
                    variant="h6" 
                    sx={{ 
                        color: 'var(--text-color)', 
                        transition: '1s',
                        opacity: isHovered ? 1: 0,
                        ".MuiCard-root:hover &": {
                            color: 'var(--highlight-color-2)',
                            transitionDelay: '150ms'
                        },
                        
                    }}
                >
                    {title} 
                    <motion.div
                        animate={{
                            x: isHovered ? 5 : 0,
                            y: isHovered ? -5 : 0,
                        }}
                        transition={{
                            delay: isHovered ? 0.5: 0,
                        }}
                        style={{
                            display: "inline-block",
                            marginLeft: '5px',
                        }}
                    >
                        <ArrowOutwardIcon sx={{ scale: 0.7 }}/>
                    </motion.div>
                </Typography>
                <Typography 
                    variant="body2" 
                    sx={{ 
                        color: 'var(--text-color)', 
                        marginTop: '8px', 
                        opacity: isHovered ? 1: 0,
                        transition: '1s',
                        transitionDelay: '400ms'
                    }}
                >
                    {body}
                </Typography>
                <Box
                    sx={{
                        margin: '1em 0 0 0',
                        opacity: isHovered ? 1: 0,
                        transition: '400ms',
                        transitionDelay: '900ms',
                    }}
                >
                    {tags.map((tag, index) => 
                        <Chip 
                            sx={{ margin: '0.3em 0.3em', }}
                            label={tag} 
                            key={index} 
                            color='primary'
                        />
                    )}
                </Box>
            </CardContent>

        </ThemeProvider>
    )
    
    const thumbnail = (
        <Fragment>
            <Box
                component="img"
                sx={{
                    width: '190px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    '@media (max-width: 1200px)': {
                        display: 'none',
                    },
                    zIndex: 1,
                }}
                alt="thumbnail"
                src={img}
            />
        </Fragment>
    )

    return(
        <motion.div
            animate={{
                scale: isHovered ? 1.05 : 1,
                transition: '0.5s',
            }}
        >
            <Box 
                sx={{ 
                    position: 'relative',
                    display: 'flex',
                    width: 'auto',
                    marginY: '10px',
                    paddingX: '1px',
                }}
            >
                <Box 
                    sx={{ 
                        width: '600px',
                    }} 
                >
                    <Card 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handleClick}
                        sx={{
                            height: '300px',
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',

                            "&::before": {
                                content: '""',
                                position: 'absolute',
                                inset: 0,
                                backgroundColor: 'rgba(26, 24, 36, 0)',
                                transition: 'background-color 0.5s ease',
                                zIndex: 1,
                            },
                            
                            "&:hover::before": {
                                backgroundColor: 'rgba(26, 24, 36, 0.7)',
                            },

                            "& > *": {
                                position: 'relative',
                                zIndex: 2,
                            },

                            cursor: 'pointer',
                        }}
                    >
                        {card}
                    </Card>
                </Box>
            </Box>
        </motion.div>
    );
}

export default ProjectCard;