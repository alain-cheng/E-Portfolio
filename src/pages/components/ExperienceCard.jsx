import { useState } from "react";
import * as motion from "framer-motion/client";
import { ThemeProvider } from "@emotion/react";
import { Box, CardContent, Chip, Container, createTheme, Typography } from "@mui/material"
import CircleIcon from '@mui/icons-material/Circle';
import { TAG_TYPES } from "../../constants/TAG_TYPES";


const ExperienceCard = ({title, company, description, timeFrame, tags, url}) => {
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

    return (
        <motion.div
            animate={{
                scale: isHovered ? 1.05 : 1,
                transition: '0.5s',
            }}
        >
            <ThemeProvider theme={theme}>
                <CardContent
                    onClick={handleClick}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 5,
                        border: 1,
                        borderRadius: '8px',
                        borderColor: isHovered ? 'var(--highlight-color-2)' : '',
                        cursor: 'pointer',
                        transition: '0.5s',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '12px',
                            minWidth: '125px',
                            opacity: 0.75,
                        }}
                    >
                        {timeFrame}
                    </Typography>
                    
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >   
                        <Typography
                            variant="h6" 
                            sx={{ 
                                color: isHovered ? 'var(--highlight-color-2)': 'var(--text-color)', 
                                transition: '0.5s',
                            }}
                        >
                            {title} @ {company}
                        </Typography>
                        <Typography
                            sx={{
                                color: 'var(--text-color)', 
                                fontSize: '14px',
                            }}
                        >
                            {description}
                        </Typography>
                        
                        <Box
                            sx={{
                                margin: '1em 0 0 0',
                            }}
                        >   
                            {tags.map((tag, index) => 
                                <Chip
                                    sx={{ margin: '0.3em 0.3em', paddingX: '5px' }}
                                    label={tag.text} 
                                    key={index} 
                                    color={ tag.type === TAG_TYPES.STATUS ? 'secondary' : 'primary'}
                                    icon={
                                        tag.type === TAG_TYPES.STATUS 
                                            ? <CircleIcon sx={{ fontSize: '10px' }} />
                                            : undefined
                                    }
                                />
                            )}
                        </Box>
                    </Box>
                </CardContent>
            </ThemeProvider>
        </motion.div>
    );
}

export default ExperienceCard;