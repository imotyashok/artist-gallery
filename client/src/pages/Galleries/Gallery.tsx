import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { galleries, images, frames } from "../../data";
import { Gallery as GalleryModel } from "../../models/Gallery";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Image } from "../../models/Image";
import { Link as RouterLink } from "react-router-dom";


export default function Gallery() {
    const {id} = useParams()
    const [gallery, setGallery] = useState<GalleryModel>()
    const [galleryImages, setImages] = useState<Image[]>([])

    useEffect(() => {
        if(id) {
            const glry = galleries.find((g) => g.gallery_id === id)
            setGallery(glry)

            console.log(images)
            const imgs = images.filter((i) => i.gallery_id === id)
            setImages(imgs)
        }
    }, [])
    
    return (
        <Box sx={{maxWidth: "100%", margin: "4rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Typography
                component="h3"
                variant="h3"
                sx={{ width: '100%', marginBottom: "2rem", textAlign: "center"}}
                >
                {gallery?.gallery_name} by {gallery?.User.username}
            </Typography>
            <Typography
                component="h4"
                variant="h4"
                sx={{ width: '100%', marginBottom: "2rem", textAlign: "center"}}
                >
                {gallery?.gallery_description}
            </Typography>
            <Box sx={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                {galleryImages.map(image => {
                    return (
                        <Card sx={{margin: "2rem", maxWidth: 500}} key={image.image_id} variant='outlined'>
                            <CardActionArea
                                href={`images/${image.image_id}`}>
                                <CardMedia
                                    component="img"
                                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Schabrackentapir_Tapirus_indicus_Tiergarten-Nuernberg-1.jpg/640px-Schabrackentapir_Tapirus_indicus_Tiergarten-Nuernberg-1.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {image.image_name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {image?.image_description}
                                    </Typography>
                                    {image?.Frame &&
                                    <>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Frame Size: {image?.Frame?.default_width}w x {image?.Frame?.default_height}h
                                    </Typography>
                                    </>}
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" component={RouterLink} to={`/users/${image.Gallery.User.user_id}`}>
                                    {image.Gallery.User.username}
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })}
            </Box>
        </Box>
    )

}
