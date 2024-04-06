import { CardActionArea, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CountryCards(props: { title: string; information: string; link: string; image_link: string; }) {
    const navigate = useNavigate();
    const { title, information, link, image_link } = props;

    return (
        <Card            
            sx={{ 
            maxWidth: 345,
            transition: 'transform 0.3s',
            '&:hover': {
                transform: 'scale(1.05)'
            }
            }}
        >
            <CardActionArea>
                <CardMedia
                sx={{ height: 140 }}
                image={image_link}
                title={title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align='left'>
                    {information}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{justifyContent: 'center'}}>
                <Button size="small" onClick={() => navigate(link)} disabled={
                        title === 'Turkey' || title === 'India' || title === 'Thailand' ? true : false
                    }
                    color='secondary'
                    variant={title === 'Turkey' || title === 'India' || title === 'Thailand' ? 'contained' : 'text'}
                >
                    {
                        title === 'Turkey' || title === 'India' || title === 'Thailand' ? 'Unavailable' : 'Learn More'
                    }
                </Button>
            </CardActions>
          </Card>
    );
}

export default CountryCards;