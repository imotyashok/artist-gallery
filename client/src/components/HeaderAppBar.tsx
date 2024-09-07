import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import UserContext from '../contexts/userContext';

export default function HeaderAppBar() {
    const {user, setUser} = useContext(UserContext)

    function logout() {
        setUser(undefined)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,

                        color: 'inherit',
                        textDecoration: 'none',
                        // flexGrow: 1
                    }}
                >
                    Artist Gallery
                </Typography>
                <Box sx={{ flexGrow: 1, display: {  md: 'flex' } }}>
                    <Button
                        href="/galleries"
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Galleries
                    </Button>
                    <Button
                        href="/users"
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Users
                    </Button>
                </Box>
                {user ?
                <>
                <Box sx={{ display: {  md: 'flex', marginRight: "2rem"} }}>
                    <Button
                        // onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {user?.username}
                    </Button>
                </Box>
                <Button onClick={logout} color="inherit" variant="contained">Logout</Button>
                </>
                : <>
                <Button href="/login" color="inherit" variant="outlined" sx={{marginRight: "2rem"}}>Login</Button>
                <Button href="/signup" color="inherit" variant="contained">Sign Up</Button>
                </>}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
