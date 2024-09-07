import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { users } from '../../data'

export default function BrowseUsers() {
    return (
        <Box sx={{maxWidth: "100%", margin: "4rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Typography
                component="h3"
                variant="h3"
                sx={{ width: '100%', marginBottom: "2rem", textAlign: "center", flex: 1}}
                >
                Browse Users
            </Typography>
            <Box sx={{display: "flex", width: "75%", alignItems: "center", justifyContent: "center"}}>
                {users.map(user => {
                    return (
                        <Card sx={{margin: "2rem", maxWidth: 500}} key={user.user_id} variant='outlined'>
                            <CardActionArea
                                href={`users/${user.user_id}`}>
                                <CardMedia
                                    component="img"
                                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pregnant_meerkat_at_Working_with_Wildlife.jpg/800px-Pregnant_meerkat_at_Working_with_Wildlife.jpg"
                                    alt="Meerkat"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {user.username}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {user.user_id}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </Box>
        </Box>
    )
}
