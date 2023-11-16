import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css"

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div>
            <button className="button-login" onClick={() => loginWithRedirect()}>login</button>
        </div>
    );
};

export default LoginButton;

