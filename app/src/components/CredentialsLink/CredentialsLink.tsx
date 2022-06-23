import { Link } from "react-router-dom";
import {logOut } from "../../firebase/utils";
import LogOutButton from "../../styled-components/LogOutButton";
import LogInIcon from "./log-in.svg";
import LogOutIcon from "./log-out.svg";

const CredentialsLink = ({user}: any) => {
    return (
        user ? <LogOutButton onClick={logOut}><img src={LogOutIcon} alt="" />Log out</LogOutButton> : <LogOutButton as={Link} to="/login"><img src={LogInIcon} alt="" />Log in</LogOutButton>
    )
}

export default CredentialsLink;