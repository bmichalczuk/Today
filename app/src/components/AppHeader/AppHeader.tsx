import React, {useContext} from "react"
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import {logOut } from "../../firebase/utils";
//components
import StyledAppHeader from "../../styled-components/StyledAppHeader";
import AppHeading from "../../styled-components/AppHeading";
import AppLogo from "../AppLogo/AppLogo";

const AppHeader = () => {
    const user = useContext(UserContext);

    return (
        <StyledAppHeader>
            <AppHeading><Link to={user ? "/dashboard" : "/"}><AppLogo />Today</Link></AppHeading>
            {user ? <button onClick={logOut}>logout</button> : <Link to="/login">Login</Link> }
        </StyledAppHeader>

    );
};

export default AppHeader;