import { Box, Button, Card, FormLabel, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { User } from '../../models/User'
import UserContext from '../../contexts/userContext'
import { Navigate } from 'react-router-dom'


const emptyUser: User = {
    user_id: "0000",
    username: "",
    password: ""
}

export default function Login() {
    const [loginUser, setLoginUser] = useState<User>(emptyUser)
    const {user, setUser} = useContext(UserContext)
    

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setUser(loginUser)
    }

    function handleChanges(field: string, value: any) {
        const newUser = {...loginUser, ...{[field]: value}}
        setLoginUser(newUser)
    }

    if(user) {
        return <Navigate to='/' replace/>
    }

    return (
        <Box sx={{width: "100%", margin: "4rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Card variant="outlined" sx={{width: "25%", padding: "2rem"}}>
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', marginBottom: "2rem"}}
                    >
                    Sign in
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: 2,
                    }}>
                    <FormLabel htmlFor="username">
                        Username
                    </FormLabel>
                    <TextField
                        id="email"
                        type="text"
                        name="username"
                        autoFocus
                        required
                        fullWidth
                        value={loginUser.username}
                        onChange={(e) => handleChanges("username", e.target.value)}
                        variant="outlined"
                        // color={emailError ? 'error' : 'primary'}
                        sx={{ ariaLabel: 'email' }}
                        />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                    </Box>
                    <TextField
                    // error={passwordError}
                    // helperText={passwordErrorMessage}
                    name="password"
                    placeholder="••••••"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={loginUser.password}
                    onChange={(e) => handleChanges("password", e.target.value)}
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    // color={passwordError ? 'error' : 'primary'}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        // onClick={validateInputs}
                    >
                        Sign in
                    </Button>
                </Box>
            </Card>
        </Box>
    )
}
