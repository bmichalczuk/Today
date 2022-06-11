import React from "react";

import { loginWithGoogle } from "../firebase/utils";


const LoginPage = () => {
    return (
        <div>
            <h1>login page</h1>
            <button onClick={loginWithGoogle}>login with google</button>
        </div>
    )
};

export default LoginPage;