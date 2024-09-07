import { createContext } from "react";
import { User } from "../models/User";

type UserContextType = {
    user: User | undefined
    setUser: Function
}

const UserContext = createContext<UserContextType>({user: undefined, setUser: () => void(0)})

export default UserContext
