import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";


//children : pass the values coming to you as it is
// The children components are rendered inside the UserContext.Provider. This ensures that any components nested inside UserContextProvider have access to 
// the UserContext value. Here h1, login, profile
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider