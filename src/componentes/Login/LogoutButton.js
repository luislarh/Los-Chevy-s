import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css";

const LogoutButton = () => {
    const { logout } = useAuth0();
    return <button className="button-logout" onClick={() => logout()}>logout</button>;
};

export default LogoutButton;
