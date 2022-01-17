import React, {useContext} from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const LandingPage: React.FC = ({children}) => {
    const user = useContext(UserContext)

    
    if(user) {
        return <Navigate to="/dashboard" />
    }
    return (
        <div>
            <h1>Welcome to apppp!!!</h1>
        </div>
    )
};

export default LandingPage;