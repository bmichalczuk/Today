import React, {useContext} from "react"
import { UserContext } from "../../contexts/UserContext";
import StyledAppHeader from "../../styled-components/StyledAppHeader";
const AppHeader = () => {
    const user = useContext(UserContext)
    return (
        <StyledAppHeader>
            <div>Today</div>
            <div>Login</div>
        </StyledAppHeader>

    );
};

export default AppHeader;