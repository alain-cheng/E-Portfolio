import * as React from 'react';
import * as motion from "framer-motion/client";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Chip, Card, CardContent, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const ProjectCard = ({ title, img, body, tags, url }) => {
    const [isHovered, setIsHovered] = React.useState(false);

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
            <CardContent>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        color: 'var(--text-color)', 
                        transition: '0.5s',
                        ".MuiCard-root:hover &": {
                            color: 'var(--highlight-color-2)',
                        },
                    }}
                >
                    {title} 
                    <motion.div
                        animate={{
                            x: isHovered ? 5 : 0,
                            y: isHovered ? -5 : 0,
                        }}
                        style={{
                            display: "inline-block",
                            marginLeft: '5px',
                        }}
                    >
                        <ArrowOutwardIcon sx={{ scale: 0.7 }}/>
                    </motion.div>
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--text-color)', marginTop: '8px' }}>
                    {body}
                </Typography>
                <Box
                    sx={{
                        margin: '1em 0 0 0',
                    }}
                >
                    {tags.map((tag, index) => 
                        <Chip 
                            sx={{ margin: '0.3em 0.3em' }}
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
        <React.Fragment>
            <Box
                component="img"
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '16vw',
                    borderRadius: '8px',
                    '@media (max-width: 1200px)': {
                        display: 'none',
                    },
                    zIndex: 1,
                }}
                alt="thumbnail"
                src={img}
            />
        </React.Fragment>
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
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: '30px 0',
                    width: '50vw',
                }}
            >
                <Box 
                    sx={{ 
                        width: '494px',
                    }} 
                >
                    <Card 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handleClick}
                        sx={{
                            position: 'relative',
                            backgroundColor: 'var(--background-secondary-color)',
                            '@media (max-width: 1200px)': {
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundBlendMode: 'soft-light',
                                backgroundColor: 'rgba(26, 24, 36, 1.0)',
                            },
                            border: '1px solid var(--highlight-color)', 
                            transition: '0.5s',
                            ":hover": {
                                border: '1px solid var(--highlight-color-2)',
                            },
                            cursor: 'pointer',
                            zIndex: 500,
                        }}
                    >
                        {card}
                    </Card>
                </Box>

                {thumbnail}
            </Box>
        </motion.div>
    );
}

export default ProjectCard;