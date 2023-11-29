import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import "./login.css";


const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    const handleLogin = () => {
        loginWithRedirect();
    };

    if (isAuthenticated) {
        navigate('/ShowProductos');
    }

    return (
        <div>
            <button className="button-login" onClick={handleLogin}>
                login
            </button>
        </div>
    );
};

export default LoginButton;