import * as React from 'react';
import * as motion from "framer-motion/client";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Chip, Card, CardActions, CardContent, Typography } from '@mui/material';
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
            </CardContent>
            <CardActions>
                {tags.map((tag, index) => 
                    <Chip 
                        label={tag} 
                        key={index} 
                        color='primary'
                    />
                )}
            </CardActions>
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
                    maxWidth: '240px',
                    borderRadius: '8px',
                }}
                alt="Placeholder"
                src={img}
            />
        </React.Fragment>
    )

    return(
        <motion.div>
            <Box 
                sx={{ 
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'space-between',
                    minWidth: '761px',
                    margin: '30px 0',
                }}
            >
                <Box sx={{ width: '494px', }} >
                    <Card 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handleClick}
                        sx={{
                            backgroundColor: 'var(--background-secondary-color)', 
                            border: '1px solid var(--highlight-color)', 
                            transition: '0.5s',
                            ":hover": {
                                border: '1px solid var(--highlight-color-2)',
                            },
                            cursor: 'pointer',
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