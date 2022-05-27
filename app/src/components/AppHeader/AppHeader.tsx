import React, {useContext} from "react"
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import {logOut } from "../../firebase/utils";
import AppIcon from "./checklist-checked-box.png";
//components
import StyledAppHeader from "../../styled-components/StyledAppHeader";
import AppHeading from "../../styled-components/AppHeading";
import Logo from "../../styled-components/Logo";

const AppHeader = () => {
    const user = useContext(UserContext);

    return (
        <StyledAppHeader>
            <AppHeading><Link to={user ? "/dashboard" : "/"}><Logo src={AppIcon}/>Today</Link></AppHeading>
            {user ? <button onClick={logOut}>logout</button> : <Link to="/login">Login</Link> }
        </StyledAppHeader>

    );
};

export default AppHeader;