import React, {createContext} from "react";
import useUser  from "../hooks/useUser";


export const UserContext = createContext(null);

const AuthUserContext: React.FC = ({children}) => {
    const user = useUser();

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthUserContext;