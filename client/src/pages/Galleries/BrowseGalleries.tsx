import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material'
import { galleries } from '../../data'
import { Link as RouterLink } from 'react-router-dom'

export default function BrowseGalleries() {
    return (
        <Box sx={{maxWidth: "100%", margin: "4rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Typography
                component="h3"
                variant="h3"
                sx={{ width: '100%', marginBottom: "2rem", textAlign: "center", flex: 1}}
                >
                Browse Galleries
            </Typography>
            <Box sx={{display: "flex", width: "75%", alignItems: "center", justifyContent: "center"}}>
                {galleries.map(gallery => {
                    return (
                        <Card sx={{margin: "2rem", maxWidth: 500}} key={gallery.gallery_id} variant='outlined'>
                            <CardActionArea component={RouterLink} to={`${gallery.gallery_id}`}>
                                <CardMedia
                                    component="img"
                                    image="https://www.charliedoggett.net/wp-content/uploads/2023/02/IMG_5701-A-WEB.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {gallery.gallery_name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {gallery?.gallery_description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" component={RouterLink} to={`/users/${gallery.User.user_id}`}>
                                    {gallery.User.username}
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })}
            </Box>
        </Box>
    )
}
