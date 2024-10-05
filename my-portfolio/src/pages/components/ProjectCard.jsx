import * as React from 'react';
import { Box, Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import thumbnailImg from "../../assets/Thumbnail.svg"

const ProjectCard = ({ title, img, body, tags }) => {
    const card = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h6" sx={{ color: '#F1E0C5'}}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#F1E0C5', marginTop: '8px' }}>
                    {body}
                </Typography>
            </CardContent>
            <CardActions>
                {tags.map((tag, index) => 
                    <Button key={index}>{tag}</Button>
                )}
            </CardActions>
        </React.Fragment>
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
                }}
                alt="Placeholder"
                src={img}
            />
        </React.Fragment>
    )

    return(
        <Box 
            sx={{ 
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                minWidth: '761px',
                margin: '15px 0',
            }}
        >
            <Box sx={{ maxWidth: '494px' }} >
                <Card sx={{ backgroundColor: '#1A1824', border: '1px solid #7E50FD', }} >
                    {card}
                </Card>
            </Box>

            {thumbnail}
        </Box>
    );
}

export default ProjectCard;