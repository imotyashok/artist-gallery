import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import HeaderAppBar from "./components/HeaderAppBar";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { createContext, useEffect, useState } from "react";
import UserContext from "./contexts/userContext";
import { User } from "./models/User";
import Galleries from "./pages/Galleries/Galleries";
import Users from "./pages/Users/Users";

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

function getUserLocalStorage(): User | undefined {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user): undefined
}

export default function App() {
    const [user, setUser] = useState<User | undefined>(getUserLocalStorage)

    useEffect(() => {
        if(user)
            localStorage.setItem('user', JSON.stringify(user))
        else
            localStorage.removeItem('user')
    }, [user])

    return (
        <UserContext.Provider value={{
            user: user,
            setUser: setUser
        }}>
            <ThemeProvider theme={darkTheme}>
                <Box>
                    <HeaderAppBar />
                    <BrowserRouter>
                        <Routes>
                            {/* <Route path="/main/*" element={<Main />}/> */}
                            <Route path={`/galleries/*`} element={<Galleries />}/>
                            <Route path={`/users/*`} element={<Users />}/>
                            <Route path={`/login`} element={<Login />}/>
                            <Route path={`/signup`} element={<Signup />}/>
                            <Route path="/*" element={<Home />}/>
                        </Routes>
                    </BrowserRouter>
                </Box>
            </ThemeProvider>
        </UserContext.Provider>
    )
}
