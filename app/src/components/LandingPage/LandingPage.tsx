import React, {ReactNode, useContext} from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import styled from "styled-components";

const LandingPage = ({className}: {className?: string}) => {
    const user = useContext(UserContext)

    
    if(user) {
        return <Navigate to="/dashboard" />
    }
    return (
        <div className={className}>
            
            <h1>Welcome to apppp!!!</h1>
        </div>
    )
};

const StyledLandingPage = styled(LandingPage)`
    background: ${({theme: {colors}}) => colors.fourth};
    padding: ${(props) => props.theme.space.l}
    
`;

export default StyledLandingPage;