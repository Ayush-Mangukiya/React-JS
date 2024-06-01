import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";


//children : pass the values coming tp you as it is
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider