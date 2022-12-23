import React, {useContext} from "react"
import { UserContext } from "../../contexts/UserContext";
import { Link, Navigate} from "react-router-dom";
import {logOut } from "../../firebase/utils";
//components
import StyledAppHeader from "../../styled-components/StyledAppHeader";
import AppHeading from "../../styled-components/AppHeading";
import AppLogo from "../AppLogo/AppLogo";
import CredentialsLink from "../CredentialsLink/CredentialsLink";

const AppHeader = () => {
    
    const user = useContext(UserContext);
    return (
        <StyledAppHeader>
            <AppHeading><Link to={user ? "/dashboard" : "/"}><AppLogo />Today</Link></AppHeading>
            <CredentialsLink user={user} />
        </StyledAppHeader>

    );
};

export default AppHeader;