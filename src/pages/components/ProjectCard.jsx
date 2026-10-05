import { Fragment, useState } from "react";
import * as motion from "framer-motion/client";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Chip, Card, CardContent, Typography } from '@mui/material';

import CircleIcon from '@mui/icons-material/Circle';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import { TAG_TYPES } from "../../constants/TAG_TYPES";

const ProjectCard = ({ title, img, body, tags, url, timeFrame, isMobile }) => {
    const [isHovered, setIsHovered] = useState(false);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#3D2C70',
                light: '#543895',
                contrastText: '#FB89FF',
            },
            secondary: {
                main: '#24446B',
                light: '#34649B',
                contrastText: '#7FFBFF',
            }
        },
    });

    const handleClick = () => {
        if (url) window.open(url, '_blank');
    };

    const cardContent = (
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
                    sx={{
                        color: 'var(--text-color)',
                        fontSize: '12px',
                        opacity: isHovered ? 1: 0,
                        transition: '1s',
                        transitionDelay: '300ms'
                    }}
                >
                    {timeFrame}
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
                            sx={{ margin: '0.3em 0.3em', paddingX: '5px' }}
                            label={tag.text} 
                            key={index} 
                            color={tag.type === TAG_TYPES.STATUS ? 'secondary' : 'primary'}
                            icon={
                                tag.type === TAG_TYPES.STATUS 
                                    ? <CircleIcon sx={{ fontSize: '10px' }} />
                                    : undefined
                            }
                        />
                    )}
                </Box>
            </CardContent>
        </ThemeProvider>
    )

    const cardContentMobile = (
        <ThemeProvider theme={theme}>
            <CardContent
                sx={{
                    paddingX: 0,
                }}
            >
                <Box sx={{padding: '5px 4px'}}>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'var(--text-color)',
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: '12px',
                            opacity: 0.75,
                            color: 'var(--text-color)',
                        }}
                    >
                        {timeFrame}
                    </Typography>
                </Box>

                <Box
                    component="img"
                    src={img}
                    alt={title}
                    sx={{
                        width: '100%',
                        aspectRatio: '16/9',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                />

                <Box sx={{ padding: '10px 4px' }}>
                    <Typography
                        sx={{
                            marginTop: '8px',
                            fontSize: '14px',
                            color: 'var(--text-color)',
                        }}
                    >
                        {body}
                    </Typography>

                    <Box sx={{ marginTop: '12px' }}>
                        {tags.map((tag, index) => (
                            <Chip
                                key={index}
                                sx={{
                                    margin: '0.3em 0.3em',
                                    paddingX: '5px',
                                }}
                                label={tag.text}
                                color={
                                    tag.type === TAG_TYPES.STATUS
                                        ? 'secondary'
                                        : 'primary'
                                }
                                icon={
                                    tag.type === TAG_TYPES.STATUS
                                        ? <CircleIcon sx={{ fontSize: '10px' }} />
                                        : undefined
                                }
                            />
                        ))}
                    </Box>
                </Box>
            </CardContent>
        </ThemeProvider>
    )

    return(
        <motion.div
            animate={{
                scale: isHovered ? 1.05 : 1,
                transition: '0.5s',
            }}
        >
            {isMobile ? (
                <Box
                    sx={{
                        display: 'none',

                        '@media (max-width: 768px)': {
                            display: 'block',
                            width: '100%',
                            marginY: '16px',
                        },
                    }}
                >
                    <Card
                        onClick={handleClick}
                        sx={{
                            width: '100%',
                            boxShadow: 'none',
                            background: 'transparent',
                        }}
                    >
                        {cardContentMobile}
                    </Card>
                </Box>
            ): (
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
                            maxWidth: '100%',
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

                                '@media (max-width: 768px)': {
                                    height: '220px'
                                },
                            }}
                        >
                            {cardContent}
                        </Card>
                    </Box>
                </Box>
            )}
        </motion.div>
    );
}

export default ProjectCard;