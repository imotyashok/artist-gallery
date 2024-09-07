import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { User as UserModel } from '../../models/User'
import { galleries, users } from '../../data'
import { Gallery } from '../../models/Gallery'

export default function User() {
    const {id} = useParams()
    const [pageUser, setUser] = useState<UserModel>()
    const [userGalleries, setGalleries] = useState<Gallery[]>([])

    useEffect(() => {
        if(id) {
            const usr = users.find((u) => u.user_id == id)
            const usrGalleries = galleries.filter((g) => g.user_id == id)
            setUser(usr)
            setGalleries(usrGalleries)
        }
    }, [])

    return (
        <Box sx={{maxWidth: "100%", margin: "4rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Typography
                component="h3"
                variant="h3"
                sx={{ width: '100%', marginBottom: "2rem", textAlign: "center", flex: 1}}
                >
                {pageUser?.username} Galleries
            </Typography>
            <Box sx={{display: "flex", width: "75%", alignItems: "center", justifyContent: "center"}}>
                {userGalleries.map(gallery => {
                    return (
                        <Card sx={{margin: "2rem", maxWidth: 500}} key={gallery.gallery_id} variant='outlined'>
                            <CardActionArea
                                href={`/galleries/${gallery.gallery_id}`}>
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
                                <Button size="small" color="primary">
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
